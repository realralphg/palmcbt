<template>
    <div class="bg-grey-4 q-pa-md">

        <div class="q-pa-md">
            <span class="text-h5">Welcome {{ 'Chima' }},</span> <br>
                <p>THIS IS A DEMO - THIS IS A DEMO. <br>
            </p>
        </div>


        <div v-if="terms">

            <q-card class="bg-primary text-white q-pb-md">
              <q-card-section class="row items-center q-pb-none">
                  <div class="text-h6"> INSTRUCTION </div>
                  <q-space />
                  <q-btn icon="close" flat round dense v-close-popup />
              </q-card-section>

              <q-separator inset />
              <q-card-section class="text-weight-light">
                  <span class="text-h6">Chima,</span> <br>
                  We take matters of examination malpractice very seriously. <br>
                  Read the following carefully before you begin your test.
              </q-card-section>

              <q-separator inset />
              <q-card-section >
                  <span class="text-h6 text-white text-weight-light">Exam Conduct <br> </span>
                  <span class="text-h7 text-white text-weight-light">
                      <ol>
                          <li>The duration of each examination is one hour only.</li>
                          <li>During the period of this examination, your eyes should be focused your screen at all times.</li>
                          <li>Once you have started, you cannot go back to previous questions or exit your screen.</li>
                          <li>You are being watched by a remote invigilator throughout the entire period of the examination.</li>
                          <li>Any form of malpractice will lead to disqualification.</li>
                          <li>Answer all questions as quickly as you can before you proceed to the next</li>
                          <li>BEST OF LUCK!</li>
                      </ol>
                  </span>
              </q-card-section>

              <q-separator inset />
              <q-card-section >
                  <span class="text-h6 text-white text-weight-light">Results <br> </span>
                  <span class="text-h7 text-white text-weight-light">
                      The results are available one week after examination. do well to check your Dashboard regularly.
                  </span>
              </q-card-section>

               <q-separator inset />
              <q-card-section >
                  <q-btn
                      color="success"
                      @click="toggle"
                      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                      :label="$q.fullscreen.isActive ? 'Exit Test' : 'Agree Start Test'"
                    />
              </q-card-section>

          </q-card>
        </div>

        <!-- E X A M -->
        <div class="row justify-center" v-if="cbt">

          <q-card class="my-cardd bg-teal q-pa-md" flat bordered >


                  <q-card class="flat row">


                    <div class="col-8">
                      <q-card-section v-if="finished">
                          <div >
                              Thank for for taking this test
                          </div>
                      </q-card-section>

                      <q-card-section class="q-pt-xs col-8" v-else>
                          <!-- <div class="text-overline">Overline</div> -->
                          <div class="row">
                              <div class="text-h4 q-mt-sm q-mb-xs"> Mathematics Test </div>
                              <q-space></q-space>
                              <div class="text-bold">Time Left: 60 mins</div>
                          </div>

                          <div class="q-mt-lg text-h5 text-bold">Question: </div>
                          <div class="text-h6">{{question.question}}</div>

                          <div class="q-mt-lg text-h5 text-bold">Answer: </div>
                          <q-item tag="label" v-ripple  v-for="answer in question.answers" :key="answer.id">
                              <q-radio v-model="answer.id" color="primary">{{answer.answer}}</q-radio>
                          </q-item>
                      </q-card-section>
                    </div>

                    <q-card-section class="col-4">
                        <!-- <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg"/>
                        <div class="q-my-md">
                            Please DO NOT leave this screen. It would mean the end of your test.
                        </div> -->
                        <VideoJs></VideoJs>

                    </q-card-section>

                <q-separator />

                <q-card-actions class="col-12">
                     <q-btn flat :label="button_text" icon="arrow_right" @click="selectQuestion"/>
                      <q-space />
                      <q-btn flat @click="quit()">Quit!</q-btn>
                </q-card-actions>

              </q-card>

            </q-card>
        </div>
    </div>
</template>

<script>
    import Instruction from '../components/Dialogs/Instruction'
import VideoJs from './../components/VideoJsRecord'

    export default {
      data(){
        return{
            answer_selected: '',
            shape:'',
            questions: [],
            question: null,
            questions_total: null,
            questions_index: null,
            button_text: 'NEXT >>',
            cbt: false,
            finished: false,
            terms: true,
        }
      },

      components:{
        Instruction, VideoJs
      },

      async mounted(){
        await this.getQuestion();
        this.selectQuestion();
      },

      methods: {
        async getQuestion(){
          const res = await this.$axios.get(process.env.Api + '/api/question')
          this.questions = res.data.data
        },
        quit(){
          this.toggle();
          this.$router.push('/dashboard')
        },

        selectQuestion(){
            this.questions_total = this.questions.length

            if (this.questions_index == null) {
                this.questions_index = 0
            }else{
                ++this.questions_index
            }

            if (this.questions_total == this.questions_index) {
               this.button_text = "FINISH >>"
               this.finished = true
            }else{
                this.question = this.questions[this.questions_index];
            }

           if ((--this.questions_total) == this.questions_index) {
               this.button_text = "FINISH >>"
           }
        },

        toggle () {

            // const target = e.target.parentNode.parentNode.parentNode

            this.$q.fullscreen.toggle()

            .then(() => {
              this.terms = false;
              this.cbt = true;
            })
            .catch((err) => {
              alert(err)
              // uh, oh, error!!
              // console.error(err)
            })
        }


      },


    }
</script>

<style lang="scss" scoped>
.my-card{
  width: 100%;
  max-width: 300px;
}

.my-cardd{
  width: 100%;
  max-width: 1000px;
}

</style>
