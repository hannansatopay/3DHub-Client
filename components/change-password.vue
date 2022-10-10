<template>
  <v-form ref="form" id="check-login-form" >
          <v-card-text>
            <v-alert
              :value="passwordMismatch"
              color="red"
              dense
              type="error"
              transition="scale-transition"
            >
              Password mismatch. Please enter correct old password.
            </v-alert>
            <v-alert
              :value="isPasswordUpdated"
              color="green"
              dense
              type="success"
            >
              <strong>Password updated successfully</strong>
            </v-alert>
            <v-text-field
              id="oldPassword"
              name="password"
              label="Old Password"
              type="password"
              v-model="old_password"
              outlined :rules="oldPasswordRules"
            ></v-text-field>
            <v-text-field
              id="password"
              name="password"
              label="New Password"
              type="password"
              v-model="password"
              outlined :rules="passwordRules"
            ></v-text-field>
            <v-text-field
              id="confirmPassword"
              name="password"
              label="Confirm Password"
              type="password"
              v-model="confirmPassword"
              outlined :rules="confirmPasswordRules"
              v-if="!signIn"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              type="submit"
              color="primary"
              form="check-login-form"
              class="px-4"
              @click.prevent="save"
              ><v-icon class="mx-2">mdi-content-save</v-icon>Save Changes</v-btn
            >
          </v-card-actions>
        </v-form>
</template>


<script>

import Login from '~/components/login'
export default {
  props: ["signIn"],
  components: {
        Login
  },
  data() {
    return {
      passwordMismatch: false,
      isPasswordUpdated: false,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      old_password: null,
      password: null,
      confirmPassword: null,
      oldPasswordRules: [
        (value) => !!value || 'Please type your old password.'
      ],
      passwordRules: [
        (value) => !!value || 'Please type new password.',
        (value) => (value && value.length >= 6) || 'minimum 6 characters',
      ],
      confirmPasswordRules: [
        (value) => !!value || 'Confirm new password',
        (value) =>
          value === this.password || 'Password do not match.',
      ],
      isAuth: true,
      tabs: null,
      loginDialog: false,
    };
  },


  methods: {
      closeDialog: function(){
            this.loginDialog = false
      },
      save(){
        if (this.$store.getters.isAuthenticated) {
            this.isAuth = true
        }
        else{
            this.isAuth = false
            this.loginDialog = true
            return
        }
        if(this.$refs.form.validate()){
            let user = JSON.parse(localStorage.getItem("usr"));
            let user_info = {};
            user_info["old_password"] = this.old_password;
            user_info["password"] = this.password;
            this.$axios
              .$put("/users/update/"+user._id, user_info, this.$store.getters.getHeaders)
              .then((res) => {
                this.isPasswordUpdated = true;
                setTimeout(()=> {
                    this.isPasswordUpdated = false;
                }, 2000)
                this.$refs.form.reset()
              })
              .catch((e) => {
                this.passwordMismatch = true;
                  setTimeout(()=> {
                    this.passwordMismatch = false;
                  }, 2000)
                  this.$refs.form.reset()
              });
      }
    }

  },
};
</script>