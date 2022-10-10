<template>
  <form
    ref="form"
    action="send_form.php - change this with your action"
    method="post"
    @submit.prevent="onSubmit"
  >
    <fieldset>
      <input
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        type="email"
        name="emil"
        placeholder="Email"
      />
    </fieldset>
    <!-- <recaptcha @error="onError" @success="onSuccess" @expired="onExpired" /> -->
    <button
      type="submit"
    >
      Submit Form
    </button>
  </form>
</template>

<script>
export default {
  methods: {
    onError(error) {
      console.log('Error happened:', error)
    },
    async onSubmit() {
      try {
        /* const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset() */
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Login error:', error)
      }
    },
    onSuccess(token) {
      console.log('Succeeded:', token)
      // here you submit the form
      this.$refs.form.submit()
    },
    onExpired() {
      console.log('Expired')
    }
  }
}
</script>