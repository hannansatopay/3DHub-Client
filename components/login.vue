<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <v-card class="elevation-0 py-0 px-0" width="450" flat>
        <v-form ref="form" id="check-login-form" v-if="!isForgotPassword">
          <v-card-text class="pa-0">
            <v-layout column align-center>
              <h1 class="flex my-4 primary--text" v-if="signIn">Sign In</h1>
              <h1 class="flex my-4 primary--text" v-if="!signIn">Sign Up</h1>
            </v-layout>
            <v-text-field
              name="firstName"
              label="First Name"
              type="text"
              v-model="firstName"
              outlined
              single-line
              v-if="!signIn"
              :rules="required"
            ></v-text-field>
            <v-text-field
              name="lastName"
              label="Last Name"
              type="text"
              v-model="lastName"
              outlined
              single-line
              v-if="!signIn"
              :rules="required"
            ></v-text-field>
            <v-text-field
              name="email"
              label="Email"
              type="text"
              v-model="email"
              outlined
              single-line
              :rules="checkEmail"
            ></v-text-field>
            <v-text-field
              id="password"
              name="password"
              label="Password"
              type="password"
              v-model="password"
              outlined
              single-line
              :rules="passwordRules"
            ></v-text-field>
            <v-text-field
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              v-model="confirmPassword"
              outlined
              :rules="confirmPasswordRules"
              v-if="!signIn"
            ></v-text-field>
            <v-alert
              :value="isAuth"
              color="red"
              dense
              type="error"
              transition="scale-transition"
            >
              {{ authErrMsg }}
            </v-alert>

            <v-alert
              :value="isVerifyEmailSent"
              color="green"
              dense
              type="success"
              transition="scale-transition"
            >
              <strong>Email Sent!</strong> Please check your email and click the
              verify email link.
            </v-alert>

            <v-alert
              :value="isUserExists"
              color="red"
              dense
              type="error"
              transition="scale-transition"
            >
              {{ userExistMsg }}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-btn
              type="submit"
              color="primary"
              form="check-login-form"
              class="px-4"
              style="width: 100%;"
              v-if="signIn"
              @click.prevent="login"
              >Sign In</v-btn
            >
            <v-btn
              type="submit"
              color="primary"
              form="check-login-form"
              class="px-4"
              style="width: 100%;"
              v-if="!signIn"
              @click.prevent="login"
              >Sign Up</v-btn
            >
          </v-card-actions>
          <div class="text-center mt-2" v-if="signIn">Don't have an account? <a @click.prevent="signIn=!signIn">Sign up</a></div>
          <div class="text-center mt-2" v-if="signIn"><a href="#" class="text--secondary text-decoration-none" @click.prevent="clickForgotPassword">Forgot Password?</a></div>
          <div class="text-center mt-2" v-if="!signIn">Already have an account? <a @click.prevent="signIn=!signIn">Login</a></div>
        </v-form>
        <v-form
          ref="form"
          @submit.prevent="forgotPassword"
          id="check-login-form"
          v-else
        >
          <v-card-text class="pa-0">
            <v-layout column align-center>
              <h1 class="flex my-4 primary--text">Reset Password</h1>
            </v-layout>
            <v-text-field
              name="Email Address"
              label="Email Address"
              type="text"
              v-model="forgot.email"
              outlined
              :rules="checkEmail"
            ></v-text-field>
            <v-alert
              :value="isEmailSent"
              color="green"
              dense
              type="success"
              transition="scale-transition"
            >
              <strong>Email Sent!</strong> Please check your email and click the
              reset password link.
            </v-alert>
            <v-alert
              :value="emailNotFound"
              color="red"
              dense
              type="error"
              transition="scale-transition"
            >
              <strong>Email Not Found!</strong> Please enter correct email
              address.
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-btn
              type="submit"
              color="primary"
              class="px-4"
              style="width: 100%;"
              form="check-login-form"
              >Send</v-btn
            >
          </v-card-actions>
          <div class="text-center mt-2">Already have an account? <a @click.prevent="isForgotPassword=!isForgotPassword">Login</a></div>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["signIn", "redirect", "prevUrl"],
  data() {
    return {
      firstName: null,
      lastName: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      email: null,
      password: null,
      confirmPassword: null,
      isAuth: false,
      authErrMsg: "",
      isEmailSent: false,
      isVerifyEmailSent: false,
      isUserExists: false,
      userExistMsg: "",
      isForgotPassword: false,
      emailNotFound: false,
      forgot: {
        email: "",
        unique_token: "",
      },
      checkEmail: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(
            v
          ) || "E-mail must be valid",
      ],
      required: [(v) => !!v || "This field is required"],
      passwordRules: [
        (value) => !!value || "Please type password.",
        (value) => (value && value.length >= 6) || "minimum 6 characters",
      ],
      confirmPasswordRules: [
        (value) => !!value || "type confirm password",
        (value) => value === this.password || "Password do not match.",
      ],
    };
  },

  methods: {
    async updateCartToDb() {
      let user = JSON.parse(localStorage.getItem("usr"));
      if (this.$store.getters.getCart != null) {
        for (var cart of this.$store.getters.getCart) {
          cart["task"] = "add";
          cart["user_id"] = user._id;
          await this.$axios
            .$post("/carts/new", cart, this.$store.getters.getHeaders)
            .then((res) => {})
            .catch((e) => console.log(e));
        }
      }
      this.$axios
        .$get("/carts/" + user._id, this.$store.getters.getHeaders)
        .then((res) => {
          this.$store.commit("setCart", res);
        })
        .catch((e) => console.log(e));
    },

    async UpdateWishlisttoDB() {
      //Update Guest users Wish list to API
      // const AuthStr = "Bearer ".concat(context.state.token);
       this.$store.dispatch("getWishListData");

      let wishlisttemp = JSON.parse(localStorage.getItem("wishlist-temp"));
      let dataPayload = [];
      if (wishlisttemp) {
        console.log("need to push new data to wishlist");

        wishlisttemp.forEach((element) => {
          this.SendWishlistToDb(element);
        });

        console.log("data payload");
      } else {
        console.log("Guest Wishlist is Empty");
      }
    },

    async SendWishlistToDb(element) {
      let user = JSON.parse(localStorage.getItem("usr"));
      let wishlisttemp = JSON.parse(localStorage.getItem("wishlist-temp"));

      let dataPayload = {
        product: element,
        user_id: user._id,
      };
      await this.$axios
        .$post("/wishlist/new", dataPayload, this.$store.getters.getHeaders)
        .then((res) => {
          console.log(res);
          this.$store.dispatch("getWishListData");         
          localStorage.removeItem('wishlist-temp');

        })
        .catch((e) => console.log(e));
    },

    async login() {
      if (this.signIn) {
        if (this.$refs.form.validate()) {
          this.$axios
            .$post("/users/login", {
              email: this.email.toLowerCase(),
              password: this.password,
            })
            .then((res) => {
              this.$store.dispatch("saveUserInfo", res);
              if (!this.$store.getters.isAuthenticated) {
                this.isAuth = true;
              } else {
                this.isAuth = false;
                this.updateCartToDb();
                this.UpdateWishlisttoDB();
                if (this.redirect) {
                  window.history.back();
                }
                this.$emit("close-dialog");
              }
            })
            .catch((e) => {
              this.isAuth = true;
              if (
                e.hasOwnProperty("response") &&
                e.response.hasOwnProperty("data")
              ) {
                this.authErrMsg = e.response.data;
              } else {
                this.authErrMsg = "Incorrect email and password";
              }
              setTimeout(() => {
                this.isAuth = false;
              }, 5000);
            });
        }
      } else {
        if (this.$refs.form.validate()) {
          this.isVerifyEmailSent = false;
          this.isUserExists = false;
          const token = this.$store.getters.getToken;
          const AuthStr = "Bearer ".concat(token);
          let user = {
            email: this.email.toLowerCase(),
            password: this.password,
            first_name: this.firstName,
            last_name: this.lastName,
            unique_token: Math.random().toString(36).substr(2, 7),
          };

          if (this.prevUrl != null) {
            localStorage.setItem("prev-url", this.prevUrl);
          }

          this.$axios
            .$post("/users/add", user)
            .then((res) => {
              this.isVerifyEmailSent = true;
              setTimeout(() => {
                this.$emit("close-dialog");
              }, 5000);
            })
            .catch((error) => {
              if (error.response) {
                this.userExistMsg = error.response.data.message;
              } else {
                this.userExistMsg = error.message;
              }
              this.isUserExists = true;
            });
        }
      }
    },
    clickForgotPassword() {
      this.isForgotPassword = true;
      this.emailNotFound = false;
      this.forgot.email = "";
    },
    backToLogin() {
      this.isForgotPassword = false;
    },
    forgotPassword() {
      this.isEmailSent = false;
      this.emailNotFound = false;

      if (this.$refs.form.validate()) {
        this.forgot.unique_token = Math.random().toString(36).substr(2, 7);

        this.$axios
          .$post("/users/forgot-password", this.forgot)
          .then((res) => {
            this.isEmailSent = true;
            this.emailNotFound = false;

            this.$axios
              .$put("/users/add-unique-token", this.forgot)
              .then((res) => {
                this.$refs.form.reset();
              })
              .catch((e) => console.log(e));
          })
          .catch((e) => {
            this.emailNotFound = true;
          });
      }
    },
  },
};
</script>