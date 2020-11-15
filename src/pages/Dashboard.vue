<template>
    <div class="bg-grey-4 q-pa-md">
        <div class="q-pa-md">
            <span class="text-h5">Welcome Chima,</span> <br>
            <p>THIS IS A DEMO - THIS IS A DEMO. <br>
                Please read instructions first before taking tests. <br>
                Click on any course of choice to attempt test.
            </p>
            
        </div>
        <div class="row q-pa-md">
            <div class="row col-md-9 col-sm-9 col-xs-12 items-start q-gutter-md">
                <q-card class="my-card bg-secondary text-white q-ma-sm">
                    <q-card-section>
                        <div class="text-h6">Mathematics</div>
                        <div class="text-subtitle2 text-warning">Eastern Palm University</div>
                    </q-card-section>

                    <q-card-section>
                        Test: Mathematics <br>
                        Status: Available <br>
                    </q-card-section>

                    <q-separator dark />

                    <q-card-actions>
                        <q-space/>
                        <q-btn flat @click="instruction=true">Instructions</q-btn>            
                        <q-btn flat to="/testsheet">Take Test</q-btn>            
                    </q-card-actions>
                </q-card>  

                <q-card class="my-card bg-warning text-white q-ma-sm">
                    <q-card-section>
                        <div class="text-h6">English Language</div>
                        <div class="text-subtitle2 text-secondary">Eastern Palm University</div>
                    </q-card-section>

                    <q-card-section>
                        Test: English Language <br>
                        Status: Available <br>
                    </q-card-section>

                    <q-separator dark />

                    <q-card-actions>
                        <q-space/>
                        <q-btn flat @click="instruction=true">Instructions</q-btn>            
                        <q-btn flat>Take Test</q-btn>            
                    </q-card-actions>
                </q-card>               

                <q-card class="my-card bg-purple text-white q-ma-sm">
                    <q-card-section>
                        <div class="text-h6">General Papers</div>
                        <div class="text-subtitle2 text-grey">Eastern Palm University</div>
                    </q-card-section>

                    <q-card-section>
                        Test: General Papers <br>
                        Status: Available <br>
                    </q-card-section>

                    <q-separator dark />

                    <q-card-actions>
                        <q-space/>
                        <q-btn flat @click="instruction=true">Instructions</q-btn>            
                        <q-btn flat>Take Test</q-btn>            
                    </q-card-actions>
                </q-card>
            </div>
        

            <div class="col-xs-12 col-sm-3 col-md-3">
                <q-card class="my-card bg-grey-8 text-white q-ma-sm">
                    <q-card-section>
                        <div class="text-h6">Updates!</div>                    
                    </q-card-section>

                    <q-card-section>
                        Test Results are available one week after tests are written.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Odio voluptas iste optio cum maxime consequuntur repellat 
                        tempora sapiente officia esse pariatur possimus cumque, 
                        recusandae impedit sunt. Sed vero quam temporibus!
                    </q-card-section>

                    <q-separator dark />

                    <q-card-actions>
                        <q-space/>
                        <q-btn flat>Okay, Got it</q-btn>            
                    </q-card-actions>
                </q-card>            
            </div>
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
                instruction: false,

            }
        }
    }
</script>

<style lang="scss" scoped>
.my-card{
  width: 100%;
  max-width: 300px;   
}

</style>