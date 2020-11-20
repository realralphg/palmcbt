<template>
  <div>
    <div class="row q-pt-md">
      <!-- <div>
        <span class="shade text-white text-center text-h4 q-pa-md">PROJECT One</span>
      </div> -->

      <!-- <VideoJs></VideoJs> -->


      <div class="col-xs-12 col-sm-5 col-md-5">
        <div class="q-pa-lg">
          <div class="text-primary text-h4 text-bold"> Eastern Palm University CBT</div>
          <section>
            <p>Online assessment for admission of African Students into the
              Eastern Palm University of Africa. <br><br> </p>

              <div class="shader">
                <span class="text-bold text-primary text-h6"> Basic Requirements</span>
                  <ul>
                    <li>English language fluency</li>
                    <li>Age 16+</li>
                    <li>WAEC O'Level Certification</li>
                  </ul>
              </div>
          </section>

          <div class="text-center q-py-md">
            <q-btn no-caps to="/sign-up" class="q-mr-sm" color="primary" label="Get Started"/>
            <q-btn no-caps outline to="#" class="q-mr-sm" color="primary" label="Learn More"/>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-7 col-md-7 q-pa-sm">
        <q-img
          src="images/cbt20.jpg"
          :ratio="16/9"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
    </div>

    <div class="bg-warning">
      <div class="q-px-lg q-pt-md text-center">
        <span class="text-h5 text-grey-8 text-bold">Our courses include:</span>
      </div>

      <!-- T H R E E  Cards -->
      <div class="q-pa-lg row items-start justify-center q-gutter-md">
        <q-card class="my-card">
          <img src="images/maths.jpg" style="height: 200px; width: 100%">

          <q-card-section>
            <div class="text-h6">Basic Mathematics</div>
            <div class="text-subtitle2 text-grey-7">Eastern Palm University</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            odit quidem, dicta totam voluptatibus dolorum debitis laboriosam
            quibusdam sequi, enim aperiam accusantium labore? Id ratione,
            veritatis dolor obcaecati exercitationem odit?
          </q-card-section>
        </q-card>

        <q-card class="my-card">
          <img src="images/english.jpg" style="height: 200px; width: 100%">

          <q-card-section>
            <div class="text-h6">English Language</div>
            <div class="text-subtitle2 text-grey-7">Eastern Palm University</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            odit quidem, dicta totam voluptatibus dolorum debitis laboriosam
            quibusdam sequi, enim aperiam accusantium labore? Id ratione,
            veritatis dolor obcaecati exercitationem odit?
          </q-card-section>
        </q-card>

        <q-card class="my-card">
          <img src="images/general.jpg" style="height: 200px; width: 100%">

          <q-card-section>
            <div class="text-h6">General Papers</div>
            <div class="text-subtitle2 text-grey-7">Eastern Palm University</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            odit quidem, dicta totam voluptatibus dolorum debitis laboriosam
            quibusdam sequi, enim aperiam accusantium labore? Id ratione,
            veritatis dolor obcaecati exercitationem odit?
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import VideoJs from './../components/VideoJsRecord'
export default {
  name: 'PageIndex',
  components:{
    VideoJs
  }
}


</script>

<style scoped>
  .shade{
    text-align: center;
    padding: 10px;
    background-color: rgba(18, 19, 18, 0.562);
    border-radius: 15px 15px 15px 15px;
    margin-bottom: 5px;
    margin-right: 5px;
    transition: 0.4s;
    margin: 15px;
  }
  .shader{
    color: white;
    padding: 10px;
    background-color: rgba(3, 109, 91, 0.562);
    border-radius: 0px 15px 0px 15px;
    margin-bottom: 5px;
    margin-right: 5px;
    transition: 0.4s;
  }

  .my-card{
    width: 100%;
    max-width: 350px;
  }
</style>
