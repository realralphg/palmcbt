<template>
    <div class=" row q-pa-md justify-center">
      <q-card class="my-card">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
        <!-- L O G I N  -->
          <q-tab-panel name="login">
            <div class="text-h6">Login</div>
            <div class="q-pa-sm q-gutter-sm">
                <q-input type="email" outlined v-model="login.email" label="Email" />
                <q-input type="password" outlined v-model="login.password" label="Password" />
            </div>

            <div class="row">
                <q-space/>
                <q-btn color="primary" label="Login" @click="onLogin" />
            </div>            
          </q-tab-panel>

        <!-- R E G I S T E R  -->
          <q-tab-panel name="register">
            <div class="text-h6">Register</div>  
            <div class="q-pa-sm q-gutter-sm">
                <q-input outlined v-model="register.fname" label="First Name" />
                <q-input outlined v-model="register.lname" label="Last Name" />
                <q-input type="email" outlined v-model="register.email" label="Email" />
                <q-input type="password" outlined v-model="register.password" label="Password" />
                <q-input type="password" outlined v-model="register.cpassword" label="Confirm Password" />
            </div> 

            <div class="row">
                <q-space/>
                <q-btn color="primary" label="Register" @click="onRegister" />
            </div>                              
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                tab: 'login',
                login:{
                    email: '',
                    password: ''
                },
                register:{
                    fname: '',
                    lname: '',
                    email: '',
                    password: '',
                    cpassword: ''
                }
            }
        },

        methods:{
            onLogin(){
                
            },

            onRegister(){

            }
        }
    }
</script>

<style scoped>
.my-card{
    width: 100%;
    max-width: 500px;
}
</style>