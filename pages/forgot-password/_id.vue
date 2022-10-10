<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12 style="padding-top: 50px; padding-bottom: 50px;">
    <v-dialog v-model="loginDialog" v-if="!isAuth" width="500">
        <v-card class="pt-2 pb-2" flat>
            <v-tabs v-model="tabs" centered>
            <v-tab>Sign In</v-tab>
            <v-tab>Sign Up</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabs">
                <v-tab-item><Login v-on:close-dialog="closeDialog" v-bind:signIn="true" v-bind:redirect="false" /></v-tab-item>
                <v-tab-item><Login v-on:close-dialog="closeDialog" v-bind:signIn="false" v-bind:redirect="false"/></v-tab-item>
            </v-tabs-items>
        </v-card>
    </v-dialog>
        <v-card class="elevation-12 py-4 px-2" width="450">
          <v-form ref="form" @submit.prevent="setNewPassword" id="check-login-form">
            <v-card-text>
              <v-layout column align-center>
                <img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png" alt="" style="width:300px">
                <h1 class="flex my-4 primary--text font-weight-light black--text"></h1>
              </v-layout>
                <p class="body-1" v-if="!isNewPasswordSaved">Please enter your new password:</p>
                <v-text-field  name="New Password" label="New Password" type="password" v-model="user.password" outlined :rules="checkPassword" v-if="!isNewPasswordSaved"></v-text-field>
                <v-alert :value="isNewPasswordSaved" color="green" dense type="success" transition="scale-transition">
                    <strong>Successful Password Reset!</strong> <br/>You can now use your new password to login into your account.
                </v-alert>
                <v-alert :value="isNotSaved" color="red" dense type="error" transition="scale-transition">
                    Cannot save new password. Request ID is expired. <a href="" class="white--text" @click.prevent="backToLogin">Click here</a> to request a new one.
                </v-alert>
                <p></p>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn type="submit" color="primary" form="check-login-form" class="px-4" x-large v-if="!isNewPasswordSaved"> Update Password</v-btn>
              <v-btn @click.prevent="backToLogin" color="primary" form="check-login-form" class="px-5" depressed block v-else>Login</v-btn>
            </v-card-actions>
          </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

import Login from '~/components/login'

export default {
  layout: 'login',
  components: {Login},
  data() {
    return {
        isNewPasswordSaved: false,
        isNotSaved: false,
        user: {
            id: "",
            password: '',
            unique_token: '',
        },
        checkPassword: [
          (value) => !!value || 'Please type new password.',
          (value) => (value && value.length >= 6) || 'minimum 6 characters',
        ],
        isAuth: true,
        tabs: null,
        loginDialog: false,
    }
  },
  methods: {
    backToLogin(){
      if (this.$store.getters.isAuthenticated) {
            this.isAuth = true
      }
      else{
            this.isAuth = false
            this.loginDialog = true
      }

    },
    setNewPassword() {
        if (this.$refs.form.validate()) {
            this.user.id = this.$route.params.id
            this.user.unique_token = this.$route.query.q

            this.$axios.$put('/users/new-password', this.user)
            .then(res => {
                if(res == 'Cannot Update'){
                    this.isNotSaved = true;
                    this.$refs.form.reset()
                }else{
                    this.isNewPasswordSaved = true
                    this.isNotSaved = false
                    this.$refs.form.reset()
                }
            })
            .catch(e => console.log(e))
        }
    },
    closeDialog: function(){
            this.loginDialog = false
            if(this.$store.getters.isAuthenticated){
                this.$router.push('/')
            }
    },
  }
};
</script>