<template>
  <v-form ref="form" id="check-login-form" >
          <v-card-text>
            <v-alert
              :value="isUserInfoUpdated"
              color="green"
              dense
              type="success"
            >
              <strong>Username updated successfully</strong>
            </v-alert>
            <v-text-field class="mt-2"
              name="firstName"
              label="First Name"
              type="text"
              v-model="firstName"
              outlined  :rules="required"
            ></v-text-field>
            <v-text-field
              name="lastName"
              label="Last Name"
              type="text"
              v-model="lastName"
              outlined  :rules="required"
            ></v-text-field>
            <v-text-field
              :value=email
              label="Email"
              type="text"
              readonly
              outlined
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

  components: {
        Login
  },
  mounted() {
        this.checkUserSession()
    },
  props: ["signIn"],
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      isUserInfoUpdated: false,
      required: [
            v => !!v || 'This field is required'
      ],
      isAuth: true,
      tabs: null,
      loginDialog: false,
    };
  },

  methods: {
    setUserInfo(){
        let user = JSON.parse(localStorage.getItem("usr"));
        this.firstName = this.$store.getters.getUserInfo.first_name || ''
        this.lastName = this.$store.getters.getUserInfo.last_name || ''
        this.email = this.$store.getters.getUserInfo.email || ''
    },
    checkUserSession(){
        if (!this.$store.getters.isAuthenticated) {
            this.isAuth = false
            this.loginDialog = true
        }
        else{
            this.setUserInfo()
        }
      },
    closeDialog: function(){
          this.loginDialog = false
          if(this.$store.getters.isAuthenticated){
              this.setUserInfo()
          }
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
        user_info["first_name"] = this.firstName;
        user_info["last_name"] = this.lastName;
        this.$axios
          .$put("/users/update/"+user._id, user_info, this.$store.getters.getHeaders)
          .then((res) => {
            this.isUserInfoUpdated = true;
            user["first_name"] = this.firstName;
            user["last_name"] = this.lastName;
            this.$store.commit('setUser', user)
            setTimeout(()=> {
                this.isUserInfoUpdated = false;
            }, 2000)

          })
          .catch((e) => {
            this.isUserInfoUpdated = false; 
        }); 
      }
    }
  },
};
</script>