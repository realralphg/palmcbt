<template>
    <div class="bg-grey-4 q-pa-md">
        <div class="q-pa-md">
            <span class="text-h5">Welcome Chima,</span> <br>
                <p>THIS IS A DEMO - THIS IS A DEMO. <br>
            </p>   
        </div>

        <!-- E X A M -->
        <div class="row justify-center">
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
                    <div class="text-h6">(1) What is the Square Root of 25?</div>

                    <br>
                    <br>
                    <br>
                    <br>
                    <q-space />  
                    <div class="q-mt-lg text-h5 text-bold">Answer: </div>
                    
                    <q-item tag="label" v-ripple>
                        <q-item-section avatar>
                        <q-radio v-model="color" val="a" color="primary" />
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>(A) 25</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item tag="label" v-ripple>
                        <q-item-section avatar>
                        <q-radio v-model="color" val="b" color="primary" />
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>(B) 5</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item tag="label" v-ripple>
                        <q-item-section avatar>
                        <q-radio v-model="color" val="c" color="primary" />
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>(C) 15</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item tag="label" v-ripple>
                        <q-item-section avatar>
                        <q-radio v-model="color" val="d" color="primary" />
                        </q-item-section>
                        <q-item-section>
                        <q-item-label>(D) 255</q-item-label>
                        </q-item-section>
                    </q-item>                                                    

                    <div style="float: right">            
                        <q-btn flat label="Next >>" icon="arrow_right" />
                    </div>
                    </q-card-section>

                    <q-card-section class="col-4">
                    <q-img
                        class="rounded-borders"
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                    />

                    <div class="q-my-md">
                        Please DO NOT leave this screen. It would mean the end of your test.
                    </div>
                
                    <q-img
                        class="rounded-borders"
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                    />
                    </q-card-section>

                </q-card-section>

                <q-separator />

                <q-card-actions>
                    <q-btn flat>Quit!</q-btn>
                </q-card-actions>
            </q-card>
        </div>

        <!-- Dialogs -->
        <q-dialog v-model="instruction">
        <instruction/>
        </q-dialog>  
    </div>
</template>

<script>
    import Instruction from '../components/Dialogs/Instruction'
    export default {
        components:{
            Instruction
        },          
        data(){
            return{
                color: 'red',

            }
        }
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