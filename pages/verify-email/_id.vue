<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
        <v-card class="elevation-12 py-4 px-2" width="450">
          <v-form ref="form" @submit.prevent="verifyEmail" id="check-login-form">
            <v-card-text class="pb-0">
              <v-layout column align-center>
                <img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png" alt="" style="width:300px">
                <h1 class="flex my-4 primary--text font-weight-light black--text"></h1>
              </v-layout>
                <v-alert :value="emailVerified" color="green" dense type="success" transition="scale-transition">
                    <strong>Email Verified!</strong>
                </v-alert>
                <v-alert :value="emailNotFound" color="red" dense type="error" transition="scale-transition">
                    <strong>Email Not Found!</strong> Please enter correct email address.
                </v-alert>
            </v-card-text>
            <v-card-actions class="justify-center pt-0">
              <!-- <v-spacer></v-spacer> -->
              <v-btn type="submit" color="primary" form="check-login-form" class="px-4" x-large>Verify email</v-btn>
            </v-card-actions>
          </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  layout: 'login',
  data() {
    return {
        user: {
            id: "",
            password: '',
            unique_token: '',
        },
        emailVerified : false,
        emailNotFound : false,
        checkPassword: [
            v => !!v || 'Password is required'
        ],
    }
  },
  methods: {
    async updateCartToDb() {
        let user = JSON.parse(localStorage.getItem("usr"));
        let cartFromLocalStoarge = JSON.parse(localStorage.getItem("cart-info")) || []
        for (var cartinfo of cartFromLocalStoarge) {
            cartinfo["task"] = "add";
            cartinfo["user_id"] = user._id;
            await this.$axios
              .$post("/carts/new", cartinfo, this.$store.getters.getHeaders)
              .then((res) => {
              })
              .catch((e) => console.log(e));
        }
        this.$axios
          .$get("/carts/" + user._id, this.$store.getters.getHeaders)
          .then((res) => {
            this.$store.commit("setCart", res);
          })
          .catch((e) => console.log(e));
    },
    async verifyEmail() {
        if (this.$refs.form.validate()) {
            this.user.id = this.$route.params.id
            this.user.unique_token = this.$route.query.q
            await this.$axios.$put('/users/verify-email', this.user)
            .then(res => {
                    this.emailVerified = true
                    this.$refs.form.reset()
                    this.$store.dispatch("saveUserInfo", res)
                    this.updateCartToDb()
                    setTimeout(()=> {
                      let prevUrl = localStorage.getItem("prev-url");
                      if(prevUrl != null){
                          this.$router.push('/'+prevUrl);
                      }
                      else{
                          this.$router.push('/');
                      }
                    }, 2000)
            })
            .catch(e => console.log(e))
        }
    }
  }
};
</script>