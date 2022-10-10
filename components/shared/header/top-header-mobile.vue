<template>
  <div>
    <v-row class="px-1 py-1 align-center mx-0 white d-sm-none">
      <v-col
        cols="8"
        sm="7"
        class="justify-start d-flex flex-wrap align-center text-left px-1"
      >
        <v-app-bar-nav-icon
          class="d-inline d-sm-none"
          color="black"
          @click.stop="drawer = !drawer"
        />
        <a @click.prevent="$router.push('/')"
          ><img
            src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png"
            width="180"
        /></a>
      </v-col>
      <v-col
        cols="4"
        sm="5"
        class="justify-end d-flex flex-wrap align-center text-right align-start"
      >
        <v-badge right class="mr-5">
          <span slot="badge">{{ getWishListCount }}</span>
          <v-icon color="primary" @click.prevent="$router.push('/wish-list')"
            >mdi-heart</v-icon
          >
        </v-badge>

        <v-badge class="mr-5">
          <span slot="badge" class="">{{ getcartCount }}</span>
          <v-icon color="primary" @click.prevent="$router.push('/view-cart')"
            >mdi-cart</v-icon
          >
        </v-badge>
      </v-col>
    </v-row>
    <v-navigation-drawer
      disable-resize-watcher
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list class="py-0">
        <v-list-item class="primary">
          <v-list-item-content style="padding: 10px 0" class="black--text logo"
            ><img
              src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png"
              width="50%"
          /></v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-if="sessionActive" class="py-0">
        <v-list-group :value="false">
          <template v-slot:activator>
            <v-list-item-content class="ml-2">
              <v-list-item-title class="caption"
                ><v-icon class="mx-2">mdi-account</v-icon
                >{{ username }}</v-list-item-title
              >
            </v-list-item-content>
          </template>
          <v-list-item :to="'/my-account'" router exact class="pl-11">
            <v-list-item-content>
              <v-list-item-title class="caption">My Account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="'/orders'" router exact class="pl-11">
            <v-list-item-content>
              <v-list-item-title class="caption">Orders</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="'/personal-information'" router exact class="pl-11">
            <v-list-item-content>
              <v-list-item-title class="caption">Address</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item :to="'/wish-list'" router exact class="pl-11">
            <v-list-item-content>
              <v-list-item-title class="caption">Wish List</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-divider></v-divider>
      </v-list>

      <v-divider></v-divider>

      <v-list class="py-0">
        <v-list-item class="" to="/"><v-list-item-content class="caption">Home</v-list-item-content></v-list-item>
        <v-list-item class="" to="/about-us"><v-list-item-content class="caption">About Us</v-list-item-content></v-list-item>
        <v-list-item class="" to="/industries"><v-list-item-content class="caption">Industries</v-list-item-content></v-list-item>
        <v-list-item class="" to="/services"><v-list-item-content class="caption">Services</v-list-item-content></v-list-item>
        <v-list-item class="" to="/products"><v-list-item-content class="caption">Products</v-list-item-content></v-list-item>
        <v-list-item class="" to="/contact-us"><v-list-item-content class="caption">Contact Us</v-list-item-content></v-list-item>
      </v-list>
      <v-list class="py-0">
        <v-dialog v-model="loginDialog" v-if="!sessionActive" width="500">
          <template v-slot:activator="{ on }">
            <v-list-item v-if="!sessionActive" v-on="on"
              ><v-list-item-content class="caption"
                >Sign In</v-list-item-content
              ></v-list-item
            >
            <!-- <v-btn v-on="on" class="ml-1 caption ml-10" color="black" outlined depressed >Sign In</v-btn> -->
          </template>
          <v-card class="pt-2 pb-2" flat>
            <v-tabs v-model="tabs" centered>
              <v-tab>Sign In</v-tab>
              <v-tab>Sign Up</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tabs">
              <v-tab-item
                ><Login
                  v-on:close-dialog="closeDialog"
                  v-bind:signIn="true"
                  v-bind:redirect="false"
              /></v-tab-item>
              <v-tab-item
                ><Login
                  v-on:close-dialog="closeDialog"
                  v-bind:signIn="false"
                  v-bind:redirect="false"
              /></v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-dialog>
        <v-list-item v-if="sessionActive" @click.prevent="logout"
          ><v-list-item-content class="caption"
            >Sign Out</v-list-item-content
          ></v-list-item
        >
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Login from "~/components/login";

export default {
  components: {
    Login,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      miniVariant: false,
      menus: [
        { title: "Filaments", link: "education" },
        { title: "Printers", link: "technology" },
        { title: "Industries", link: "media" },
        { title: "Brands", link: "consulting" },
      ],
      tabs: null,
      loginDialog: false,
    };
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push("/"))
        .catch((e) => console.log(e));
    },
    closeDialog: function () {
      this.loginDialog = false;
    },
  },
  computed: {
    getcartCount() {
      return this.$store.getters.getCartCount;
    },
    sessionActive() {
      return this.$store.getters.isAuthenticated;
    },
    username() {
      return "Hello, " + this.$store.getters.getUserInfo.first_name;
    },
    brandsSort() {
      return _.sortBy(this.$store.getters.getBrands, ["brand_name"]);
    },
    printerTypeSort() {
      return _.sortBy(this.$store.getters.getPrinterType, ["printer_type"]);
    },
    materialTypeSort() {
      return _.sortBy(this.$store.getters.getMaterialType, ["material_name"]);
    },
    industriesTypeSort() {
      return _.sortBy(this.$store.getters.getIndustries, ["industry_name"]);
    },
    getWishListCount() {
      return this.$store.state.wishListCount;
    },
  },
};
</script>