<template>
  <div class="q-pa-sm row justify-center">
    <div class="q-gutter-md" style="max-width: 500px">
        <div class="q-pt-lg text-weight-light text-h4 text-primary" >
            Sign In Form
        </div>
      <form @submit.prevent="onSignIn">
          <q-input v-model="form.email" name="email" label="Email"/>
          <q-input v-model="form.password" type="password" name="password" label="Password" />
        <q-space/>
        <div class="q-mt-sm row justify-right">
            <q-btn type="submit" no-caps color="primary" :disabled="!formIsValid"  >Sign In</q-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignIn',

  data () {
    return {
      form:{
        email: '',
        password: ''
      }
    }
  },

  computed: {
    formIsValid () {
      return this.email !== '' &&
            this.password !== ''
    }
  },

  methods: {
    async onSignIn () {
      const res = await this.$axios.post(process.env.Api + '/api/login', this.form)
      this.$q.localStorage.set('palmcbt_user', res.data.data)
      this.$router.push('/dashboard')
      // this.$router.go('/')
    }
  }

}
</script>

<style scoped>

</style>
