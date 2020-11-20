<template>
    <div class="bg-grey-4 q-pa-md">

        <div class="q-pa-md">
            <span class="text-h5">Welcome Chima,</span> <br>
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
                      color="secondary"
                      @click="toggle"
                      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                      :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
                    />
              </q-card-section>

          </q-card>
        </div>

        <!-- E X A M -->
        <div class="row justify-center" v-if="finished">
            <q-card class="my-cardd bg-teal q-pa-lg" flat bordered>
                <q-card-section horizontal>
                    <q-card-section class="q-pt-xs col-8">
                    <!-- <div class="text-overline">Overline</div> -->
                    <div class="row">
                        <div class="text-h4 q-mt-sm q-mb-xs"> Mathematics Test </div>
                        <q-space></q-space>
                        <div class="text-bold">Time Left: 32 mins</div>
                    </div>

                    <div class="q-mt-lg text-h5 text-bold">Question: </div>
                    <div class="text-h6">{{question.question}}</div>

                    <div class="q-mt-lg text-h5 text-bold">Answer: </div>
                    <q-item tag="label" v-ripple  v-for="answer in question.answers" :key="answer.id">
                        <q-radio v-model="answer_selected" color="primary">{{answer.answer}}</q-radio>
                    </q-item>

                    <div style="float: right">
                        <q-btn flat :label="button_text" icon="arrow_right" @click="selectQuestion"/>
                    </div>

                    </q-card-section>

                    <q-card-section class="col-4">
                        <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg"/>
                        <div class="q-my-md">
                            Please DO NOT leave this screen. It would mean the end of your test.
                        </div>
                        <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/parallax2.jpg"/>
                    </q-card-section>
                </q-card-section>

                <q-separator />

                <q-card-actions>
                    <q-btn flat>Quit!</q-btn>
                </q-card-actions>
            </q-card>
        </div>

        <!-- Dialogs -->
        <!-- <q-dialog v-model="instruction">
            <instruction/>
        </q-dialog> -->
    </div>
</template>

<script>
    import { AppFullscreen } from 'quasar'
    import Instruction from '../components/Dialogs/Instruction'

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
            finished: true,
            terms: true,
        }
      },

      components:{
        Instruction
      },

      async mounted(){
        await this.getQuestion();
        this.selectQuestion();

        // Requesting fullscreen mode:
        AppFullscreen.request()
          .then(() => { // v1.5.0+
            // success!
          })
          .catch(err => { // v1.5.0+
            // oh, no!!!
          })
      },

      methods: {
        async getQuestion(){
          const res = await this.$axios.get(process.env.Api + '/api/question')
          this.questions = res.data.data
        //   console.log(res.data.data)
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

        toggle (e) {
            const target = e.target.parentNode.parentNode.parentNode
            this.$q.fullscreen.toggle()
            .then(() => {
              this.terms = false;
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
