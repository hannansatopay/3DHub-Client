<template>
  <div style="z-index: 9;">
    <TopHeaderMobile />
    <div class="teal">
      <v-app-bar class="white py-2 d-none d-sm-block v-app-bar" :clipped-left="clipped" light>
        <v-container class="d-flex justify-center justify-sm-space-between align-baseline align-sm-center flex-wrap text-center text-sm-left">
          <v-toolbar-title @click.prevent="home" class="font-weight-medium black--text logo mt-5 mt-sm-0">
          <img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png" width="230" contain/>
          </v-toolbar-title>
          
          <div style="flex: 1;display: flex;justify-content: space-evenly;">
            <router-link active-class="active" to="/services">Services</router-link>
            <router-link active-class="active" to="/art-store">Art Store</router-link>
            <router-link active-class="active" to="/products">Products</router-link>
            <router-link active-class="active" to="/industries">Industries</router-link>
            <router-link active-class="active" to="/contact-us">Contact Us</router-link>
          </div>

          <v-app-bar-nav-icon class="d-inline d-sm-none" color="black" @click.stop="drawer = !drawer"/>

          <div>
          <v-dialog v-model="loginDialog" v-if="!sessionActive" width="500">           
            <v-card class="pa-4" flat>
              <Login v-on:close-dialog="closeDialog" v-bind:signIn="true" v-bind:redirect="false"/>
            </v-card>
          </v-dialog>

          <v-badge right class="">
              <span slot="badge">{{ getWishListCount }}</span>
              <v-icon color="primary" @click.prevent="$router.push('/wish-list')">mdi-heart</v-icon>
            </v-badge>

            <v-badge right class="pl-5">
              <span slot="badge">{{ getcartCount }}</span>
              <v-icon color="primary" @click.prevent="$router.push('/view-cart')">mdi-cart</v-icon>
            </v-badge>

          <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" depressed color="primary" class="ml-8">Get Quote</v-btn>
                    </template>
                    <v-card class="py-3">
                        <v-card-title class="body-1">
                            Let us know your requirements
                        </v-card-title>
                        <v-card-text>
                            <v-form ref="form">
                                <v-row v-if="isSent">
                                    <v-col cols="12">
                                        <v-alert dismissible class="caption" type="success" icon="mdi-email">
                                            Thank your for your inquiry <br/> We will get back to you as soon as possible.
                                        </v-alert>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" class="py-2"><v-text-field  v-model="form.full_name" outlined hide-details label="Full Name*" :rules="required"/></v-col>
                                    <v-col cols="12" class="py-2"><v-text-field  v-model="form.email" outlined hide-details label="Email*" :rules="required"/></v-col>
                                    <v-col cols="12" class="py-2"><v-text-field  v-model="form.phone" outlined hide-details label="Phone Number*" :rules="required"/></v-col>
                                    <v-col cols="12" class="py-2"><v-text-field  v-model="form.company" outlined hide-details label="Company"/></v-col>
                                    <v-col cols="12" class="py-2"><v-textarea  v-model="form.message" outlined hide-details label="Message"/></v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-btn @click.prevent="sendForm" color="black" class="white--text" depressed>Send Request</v-btn>
                                        <v-btn @click="dialog = false" class="caption" text>cancel</v-btn>
                                    </v-col>
                                </v-row>
                                <v-row class="pb-0">
                                    <v-col cols="12" class="pb-0">
                                        <p class="caption blue-grey--text"><sup>*</sup>All fields are required</p>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-dialog>

          <v-menu open-on-hover bottom offset-y v-if="!sessionActive">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ml-1 caption" color="primary" outlined depressed v-bind="attrs" v-on="on" @click.prevent="login">
                SIGN IN
              </v-btn>
            </template>

            <v-list v-if="sessionActive">
              <v-list-item class="caption" @click.prevent="$router.push('/orders')">
                <v-list-item-title>Orders</v-list-item-title>
              </v-list-item>
              <v-list-item class="caption" @click.prevent="$router.push('/my-account')">
                <v-list-item-title>My Account</v-list-item-title>
              </v-list-item>
              <v-list-item @click.prevent="logout">
                <v-list-item-title>Sign Out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-menu v-else open-on-hover offset-y class="pl-16">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-if="sessionActive"
                class="ml-1 caption"
                color="black"
                v-bind="attrs"
                v-on="on"
                outlined
                depressed
                @click.prevent="$router.push('/my-account')"
                >{{ username }}</v-btn
              >
            </template>
            <v-list v-if="sessionActive">
            <v-list-item
                v-if="sessionActive"
                class="caption"
                @click.prevent="$router.push('/orders')"
              >
                <v-list-item-title>Orders</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-if="sessionActive"
                class="caption"
                @click.prevent="$router.push('/my-account')"
              >
                <v-list-item-title>My Account</v-list-item-title>
              </v-list-item>
              <v-list-item v-if="sessionActive" @click.prevent="logout">
                <v-list-item-title>Sign Out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          </div>
        </v-container>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
import TopHeader from "~/components/shared/header/header";
import TopHeaderMobile from "~/components/shared/header/top-header-mobile";
import Login from "~/components/login";
import SearchBar from "~/components/shared/header/search-bar";

export default {
  props: ["activitiesList"],
  components: {
    TopHeader,
    TopHeaderMobile,
    Login,
    SearchBar,
  },
  data() {
    return {
      dialog: false,
            isSent: false,
            form: {
                full_name: '',
                email: '',
                phone: '',
                to: 'info@3dhub.ae',
                company: '',
                message: '',
                subjectMsg: '3DHUB - Request a quote',
                eMessage: ''
            },
            required: [
                v => !!v || 'This field is required'
            ],
      tabs: null,
      cartCount: "",
      dialog: false,
      loginDialog: false,
      isSent: false,
      preview: null,
      file: "",
      image: null,
      preview_list: [],
      image_list: [],
      country_code: "+971",
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      form: {
        full_name: "",
        email: "",
        country: "",
        phone: "",
        to: "info@3dhub.ae",
        company: "",
        message: "",
        stl: "",
        stlfile: "",
        subjectMsg: "3DHUB - Request a quote",
        eMessage: "",
      },
      required: [(v) => !!v || "This field is required"],
      date: Date.now(),
      clipped: false,
      drawer: false,
      open_mega_menu: true,
      open_nav: true,
      miniVariant: false,
      activitiesLists: {},
      activityTitle: "",
      selectedFile: "",

      countries: [
        {
          code: "+7 840",
          name: "Abkhazia",
        },
        {
          code: "+93",
          name: "Afghanistan",
        },
        {
          code: "+355",
          name: "Albania",
        },
        {
          code: "+213",
          name: "Algeria",
        },
        {
          code: "+1 684",
          name: "American Samoa",
        },
        {
          code: "+376",
          name: "Andorra",
        },
        {
          code: "+244",
          name: "Angola",
        },
        {
          code: "+1 264",
          name: "Anguilla",
        },
        {
          code: "+1 268",
          name: "Antigua and Barbuda",
        },
        {
          code: "+54",
          name: "Argentina",
        },
        {
          code: "+374",
          name: "Armenia",
        },
        {
          code: "+297",
          name: "Aruba",
        },
        {
          code: "+247",
          name: "Ascension",
        },
        {
          code: "+61",
          name: "Australia",
        },
        {
          code: "+672",
          name: "Australian External Territories",
        },
        {
          code: "+43",
          name: "Austria",
        },
        {
          code: "+994",
          name: "Azerbaijan",
        },
        {
          code: "+1 242",
          name: "Bahamas",
        },
        {
          code: "+973",
          name: "Bahrain",
        },
        {
          code: "+880",
          name: "Bangladesh",
        },
        {
          code: "+1 246",
          name: "Barbados",
        },
        {
          code: "+1 268",
          name: "Barbuda",
        },
        {
          code: "+375",
          name: "Belarus",
        },
        {
          code: "+32",
          name: "Belgium",
        },
        {
          code: "+501",
          name: "Belize",
        },
        {
          code: "+229",
          name: "Benin",
        },
        {
          code: "+1 441",
          name: "Bermuda",
        },
        {
          code: "+975",
          name: "Bhutan",
        },
        {
          code: "+591",
          name: "Bolivia",
        },
        {
          code: "+387",
          name: "Bosnia and Herzegovina",
        },
        {
          code: "+267",
          name: "Botswana",
        },
        {
          code: "+55",
          name: "Brazil",
        },
        {
          code: "+246",
          name: "British Indian Ocean Territory",
        },
        {
          code: "+1 284",
          name: "British Virgin Islands",
        },
        {
          code: "+673",
          name: "Brunei",
        },
        {
          code: "+359",
          name: "Bulgaria",
        },
        {
          code: "+226",
          name: "Burkina Faso",
        },
        {
          code: "+257",
          name: "Burundi",
        },
        {
          code: "+855",
          name: "Cambodia",
        },
        {
          code: "+237",
          name: "Cameroon",
        },
        {
          code: "+1",
          name: "Canada",
        },
        {
          code: "+238",
          name: "Cape Verde",
        },
        {
          code: "+ 345",
          name: "Cayman Islands",
        },
        {
          code: "+236",
          name: "Central African Republic",
        },
        {
          code: "+235",
          name: "Chad",
        },
        {
          code: "+56",
          name: "Chile",
        },
        {
          code: "+86",
          name: "China",
        },
        {
          code: "+61",
          name: "Christmas Island",
        },
        {
          code: "+61",
          name: "Cocos-Keeling Islands",
        },
        {
          code: "+57",
          name: "Colombia",
        },
        {
          code: "+269",
          name: "Comoros",
        },
        {
          code: "+242",
          name: "Congo",
        },
        {
          code: "+243",
          name: "Congo, Dem. Rep. of (Zaire)",
        },
        {
          code: "+682",
          name: "Cook Islands",
        },
        {
          code: "+506",
          name: "Costa Rica",
        },
        {
          code: "+385",
          name: "Croatia",
        },
        {
          code: "+53",
          name: "Cuba",
        },
        {
          code: "+599",
          name: "Curacao",
        },
        {
          code: "+537",
          name: "Cyprus",
        },
        {
          code: "+420",
          name: "Czech Republic",
        },
        {
          code: "+45",
          name: "Denmark",
        },
        {
          code: "+246",
          name: "Diego Garcia",
        },
        {
          code: "+253",
          name: "Djibouti",
        },
        {
          code: "+1 767",
          name: "Dominica",
        },
        {
          code: "+1 809",
          name: "Dominican Republic",
        },
        {
          code: "+670",
          name: "East Timor",
        },
        {
          code: "+56",
          name: "Easter Island",
        },
        {
          code: "+593",
          name: "Ecuador",
        },
        {
          code: "+20",
          name: "Egypt",
        },
        {
          code: "+503",
          name: "El Salvador",
        },
        {
          code: "+240",
          name: "Equatorial Guinea",
        },
        {
          code: "+291",
          name: "Eritrea",
        },
        {
          code: "+372",
          name: "Estonia",
        },
        {
          code: "+251",
          name: "Ethiopia",
        },
        {
          code: "+500",
          name: "Falkland Islands",
        },
        {
          code: "+298",
          name: "Faroe Islands",
        },
        {
          code: "+679",
          name: "Fiji",
        },
        {
          code: "+358",
          name: "Finland",
        },
        {
          code: "+33",
          name: "France",
        },
        {
          code: "+596",
          name: "French Antilles",
        },
        {
          code: "+594",
          name: "French Guiana",
        },
        {
          code: "+689",
          name: "French Polynesia",
        },
        {
          code: "+241",
          name: "Gabon",
        },
        {
          code: "+220",
          name: "Gambia",
        },
        {
          code: "+995",
          name: "Georgia",
        },
        {
          code: "+49",
          name: "Germany",
        },
        {
          code: "+233",
          name: "Ghana",
        },
        {
          code: "+350",
          name: "Gibraltar",
        },
        {
          code: "+30",
          name: "Greece",
        },
        {
          code: "+299",
          name: "Greenland",
        },
        {
          code: "+1 473",
          name: "Grenada",
        },
        {
          code: "+590",
          name: "Guadeloupe",
        },
        {
          code: "+1 671",
          name: "Guam",
        },
        {
          code: "+502",
          name: "Guatemala",
        },
        {
          code: "+224",
          name: "Guinea",
        },
        {
          code: "+245",
          name: "Guinea-Bissau",
        },
        {
          code: "+595",
          name: "Guyana",
        },
        {
          code: "+509",
          name: "Haiti",
        },
        {
          code: "+504",
          name: "Honduras",
        },
        {
          code: "+852",
          name: "Hong Kong SAR China",
        },
        {
          code: "+36",
          name: "Hungary",
        },
        {
          code: "+354",
          name: "Iceland",
        },
        {
          code: "+91",
          name: "India",
        },
        {
          code: "+62",
          name: "Indonesia",
        },
        {
          code: "+98",
          name: "Iran",
        },
        {
          code: "+964",
          name: "Iraq",
        },
        {
          code: "+353",
          name: "Ireland",
        },
        {
          code: "+972",
          name: "Israel",
        },
        {
          code: "+39",
          name: "Italy",
        },
        {
          code: "+225",
          name: "Ivory Coast",
        },
        {
          code: "+1 876",
          name: "Jamaica",
        },
        {
          code: "+81",
          name: "Japan",
        },
        {
          code: "+962",
          name: "Jordan",
        },
        {
          code: "+7 7",
          name: "Kazakhstan",
        },
        {
          code: "+254",
          name: "Kenya",
        },
        {
          code: "+686",
          name: "Kiribati",
        },
        {
          code: "+965",
          name: "Kuwait",
        },
        {
          code: "+996",
          name: "Kyrgyzstan",
        },
        {
          code: "+856",
          name: "Laos",
        },
        {
          code: "+371",
          name: "Latvia",
        },
        {
          code: "+961",
          name: "Lebanon",
        },
        {
          code: "+266",
          name: "Lesotho",
        },
        {
          code: "+231",
          name: "Liberia",
        },
        {
          code: "+218",
          name: "Libya",
        },
        {
          code: "+423",
          name: "Liechtenstein",
        },
        {
          code: "+370",
          name: "Lithuania",
        },
        {
          code: "+352",
          name: "Luxembourg",
        },
        {
          code: "+853",
          name: "Macau SAR China",
        },
        {
          code: "+389",
          name: "Macedonia",
        },
        {
          code: "+261",
          name: "Madagascar",
        },
        {
          code: "+265",
          name: "Malawi",
        },
        {
          code: "+60",
          name: "Malaysia",
        },
        {
          code: "+960",
          name: "Maldives",
        },
        {
          code: "+223",
          name: "Mali",
        },
        {
          code: "+356",
          name: "Malta",
        },
        {
          code: "+692",
          name: "Marshall Islands",
        },
        {
          code: "+596",
          name: "Martinique",
        },
        {
          code: "+222",
          name: "Mauritania",
        },
        {
          code: "+230",
          name: "Mauritius",
        },
        {
          code: "+262",
          name: "Mayotte",
        },
        {
          code: "+52",
          name: "Mexico",
        },
        {
          code: "+691",
          name: "Micronesia",
        },
        {
          code: "+1 808",
          name: "Midway Island",
        },
        {
          code: "+373",
          name: "Moldova",
        },
        {
          code: "+377",
          name: "Monaco",
        },
        {
          code: "+976",
          name: "Mongolia",
        },
        {
          code: "+382",
          name: "Montenegro",
        },
        {
          code: "+1664",
          name: "Montserrat",
        },
        {
          code: "+212",
          name: "Morocco",
        },
        {
          code: "+95",
          name: "Myanmar",
        },
        {
          code: "+264",
          name: "Namibia",
        },
        {
          code: "+674",
          name: "Nauru",
        },
        {
          code: "+977",
          name: "Nepal",
        },
        {
          code: "+31",
          name: "Netherlands",
        },
        {
          code: "+599",
          name: "Netherlands Antilles",
        },
        {
          code: "+1 869",
          name: "Nevis",
        },
        {
          code: "+687",
          name: "New Caledonia",
        },
        {
          code: "+64",
          name: "New Zealand",
        },
        {
          code: "+505",
          name: "Nicaragua",
        },
        {
          code: "+227",
          name: "Niger",
        },
        {
          code: "+234",
          name: "Nigeria",
        },
        {
          code: "+683",
          name: "Niue",
        },
        {
          code: "+672",
          name: "Norfolk Island",
        },
        {
          code: "+850",
          name: "North Korea",
        },
        {
          code: "+1 670",
          name: "Northern Mariana Islands",
        },
        {
          code: "+47",
          name: "Norway",
        },
        {
          code: "+968",
          name: "Oman",
        },
        {
          code: "+92",
          name: "Pakistan",
        },
        {
          code: "+680",
          name: "Palau",
        },
        {
          code: "+970",
          name: "Palestinian Territory",
        },
        {
          code: "+507",
          name: "Panama",
        },
        {
          code: "+675",
          name: "Papua New Guinea",
        },
        {
          code: "+595",
          name: "Paraguay",
        },
        {
          code: "+51",
          name: "Peru",
        },
        {
          code: "+63",
          name: "Philippines",
        },
        {
          code: "+48",
          name: "Poland",
        },
        {
          code: "+351",
          name: "Portugal",
        },
        {
          code: "+1 787",
          name: "Puerto Rico",
        },
        {
          code: "+974",
          name: "Qatar",
        },
        {
          code: "+262",
          name: "Reunion",
        },
        {
          code: "+40",
          name: "Romania",
        },
        {
          code: "+7",
          name: "Russia",
        },
        {
          code: "+250",
          name: "Rwanda",
        },
        {
          code: "+685",
          name: "Samoa",
        },
        {
          code: "+378",
          name: "San Marino",
        },
        {
          code: "+966",
          name: "Saudi Arabia",
        },
        {
          code: "+221",
          name: "Senegal",
        },
        {
          code: "+381",
          name: "Serbia",
        },
        {
          code: "+248",
          name: "Seychelles",
        },
        {
          code: "+232",
          name: "Sierra Leone",
        },
        {
          code: "+65",
          name: "Singapore",
        },
        {
          code: "+421",
          name: "Slovakia",
        },
        {
          code: "+386",
          name: "Slovenia",
        },
        {
          code: "+677",
          name: "Solomon Islands",
        },
        {
          code: "+27",
          name: "South Africa",
        },
        {
          code: "+500",
          name: "South Georgia and the South Sandwich Islands",
        },
        {
          code: "+82",
          name: "South Korea",
        },
        {
          code: "+34",
          name: "Spain",
        },
        {
          code: "+94",
          name: "Sri Lanka",
        },
        {
          code: "+249",
          name: "Sudan",
        },
        {
          code: "+597",
          name: "Suriname",
        },
        {
          code: "+268",
          name: "Swaziland",
        },
        {
          code: "+46",
          name: "Sweden",
        },
        {
          code: "+41",
          name: "Switzerland",
        },
        {
          code: "+963",
          name: "Syria",
        },
        {
          code: "+886",
          name: "Taiwan",
        },
        {
          code: "+992",
          name: "Tajikistan",
        },
        {
          code: "+255",
          name: "Tanzania",
        },
        {
          code: "+66",
          name: "Thailand",
        },
        {
          code: "+670",
          name: "Timor Leste",
        },
        {
          code: "+228",
          name: "Togo",
        },
        {
          code: "+690",
          name: "Tokelau",
        },
        {
          code: "+676",
          name: "Tonga",
        },
        {
          code: "+1 868",
          name: "Trinidad and Tobago",
        },
        {
          code: "+216",
          name: "Tunisia",
        },
        {
          code: "+90",
          name: "Turkey",
        },
        {
          code: "+993",
          name: "Turkmenistan",
        },
        {
          code: "+1 649",
          name: "Turks and Caicos Islands",
        },
        {
          code: "+688",
          name: "Tuvalu",
        },
        {
          code: "+1 340",
          name: "U.S. Virgin Islands",
        },
        {
          code: "+256",
          name: "Uganda",
        },
        {
          code: "+380",
          name: "Ukraine",
        },
        {
          code: "+971",
          name: "United Arab Emirates",
        },
        {
          code: "+44",
          name: "United Kingdom",
        },
        {
          code: "+1",
          name: "United States",
        },
        {
          code: "+598",
          name: "Uruguay",
        },
        {
          code: "+998",
          name: "Uzbekistan",
        },
        {
          code: "+678",
          name: "Vanuatu",
        },
        {
          code: "+58",
          name: "Venezuela",
        },
        {
          code: "+84",
          name: "Vietnam",
        },
        {
          code: "+1 808",
          name: "Wake Island",
        },
        {
          code: "+681",
          name: "Wallis and Futuna",
        },
        {
          code: "+967",
          name: "Yemen",
        },
        {
          code: "+260",
          name: "Zambia",
        },
        {
          code: "+255",
          name: "Zanzibar",
        },
        {
          code: "+263",
          name: "Zimbabwe",
        },
      ],
      

      menus: [
        { title: "Industries", link: "industries", url: "/Industries" },
        { title: "Brands", link: "consulting", url: "/Brands" },
        // { title: 'Products',link: 'products'},
        // { title: 'Industries',link: 'industries'},

        // removed Brand as we now have a specific link for Brands
        { title: "Products", link: "products", url: "/Products" },
      ],
      selectedCategory: [{ activities: [{}] }],

      filename_attach: "",
      link_url: "",
      link_filename: "",
      selectedItem: [],
      dragging: false,
      uploadFiles: "",
    };
  },
  mounted() {
    this.setCart();
    this.refreshUserInfo();
    this.SetGuestWishlist();
  },

  beforeCreate() {},

  methods: {
    sendForm(){
                this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.form.phone} <br/>
                        Company: ${this.form.company} <br/>
                        Message: ${this.form.message} <br/>
                `

                this.$axios.$post('/email/send-email/', this.form)
                .then(res=> {
                    this.$refs.form.reset()
                    this.isSent = true 
                })
                .catch(e => console.log(e)); 
        },
    async getActivities() {
      if (this.$store.getters.getActivities != "") {
        this.activitiesLists = await this.$axios.$get("/activities/categories");
        this.$store.commit("SET_ACTIVITIES", this.activitiesLists);
      }
    },
    onVerify: function (response) {
      if (response) this.form.robot = true;
    },
    login() {
      this.$auth.login();
    },
    OnchangeCountry(event) {
      console.log(event);
      this.country_code = event;
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => this.$router.push("/"))
        .catch((e) => console.log(e));
    },
    login(){
    this.ShowLogin();  
    },
    home() {
      this.$router.push("/");
    },
    openMegaMenu(title) {
      this.open_mega_menu = true;
      this.activityTitle = title;
      /* this.selectedCategory = _.filter(this.$store.getters.getActivities, { 'title': title}); */
    },
    closeMegaMenu() {
      this.open_mega_menu = false;
    },
    openNav(title) {
      this.open_nav = true;
      this.activityTitle = title;
    },
    closeNav() {
      this.open_nav = false;
    },
    /* openCategoryPage(link) {
            this.$router.push('/category/'+link)
        },
        openCategoryPageWithActivity(link, activity_link) {
            this.$router.push('/category/'+link+'/'+activity_link)
        },
        viewCart(){
            this.$router.push('/cart')
        }, 
        closeMegaMenu() {
            this.open_mega_menu = false
        }, */
    setCart() {
      this.$store.commit(
        "setCart",
        JSON.parse(localStorage.getItem("cart-info"))
      );
    },

    async refreshUserInfo() {
      if (!this.$store.getters.isAuthenticated) {
        let token = localStorage.getItem("nathanhr-token");
        let user = JSON.parse(localStorage.getItem("usr"));
        if (token != null) {
          this.$store.commit("setToken", token);
          this.$store.commit("setUser", user);
          await this.$axios
            .$get("/carts/" + user._id, this.$store.getters.getHeaders)
            .then((res) => {
              this.$store.commit("setCart", res);
            })
            .catch((e) => console.log(e));
        }
      }
    },

    SetGuestWishlist() {
      let wishlist = JSON.parse(localStorage.getItem("wishlist-info"));

      if (wishlist) {
        this.$store.commit("setWishList", wishlist);
      }
    },

    //STL FILE UPLOAD START

    onFileChange(event) {
      try {
        if (event) {
          const selectedFile = event;
          this.selectedFile = selectedFile;
          console.log(selectedFile);
        } else {
          console.log("stl file is empty");
          this.selectedFile = "";
        }
      } catch (err) {
        console.log(err.message);
      }
    },

    ShowLogin(){

      this.loginDialog=true;

    },

    /* async submitFile() {
      console.log(this.selectedFile.name);

      const token = this.$store.getters.getToken;
      const AuthStr = "Bearer ".concat(token);

      const formData = new FormData();
    
      formData.append("folder", "users/test");
      formData.append("a", this.selectedFile, this.selectedFile.name);
      formData.append("form", this.form.eMessage);

     

      /*
          Make the request to the POST /single-file URL
        */
    /* await this.$axios
        .$post("/email/upload-files", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.link_url = res.url;
          this.link_filename = res.name;
          //sendForm();
        })
        .catch((e) => console.log(e));
    },*/

    async HandleEnquiryForm() {
      //console.log(this.selectedFile.name);

      const token = this.$store.getters.getToken;
      const AuthStr = "Bearer ".concat(token);

      try {
        if (this.$refs.form.validate()) {
          if (this.selectedFile) {
            const formData = new FormData();
            formData.append("folder", "Enquiries/STLfiles/" + this.form.email);
            formData.append("a", this.selectedFile, this.selectedFile.name);
            formData.append("form", this.form.eMessage);

            /*
          Make the request to the POST /for upload file in  AWS
        */
            let awsres = await this.$axios
              .$post("/email/upload-files", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              })
              .catch((e) => console.log(e));

            this.link_url = awsres.url;
            this.link_filename = awsres.name;
            console.log(awsres);

            /*
          Make the request to the POST /for send form file in  AWS
        */

            this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.country_code}${this.form.phone} <br/>
                        Company: ${this.form.company} <br/>
                        Message: ${this.form.message} <br/>
                        STL File: <a href="${this.link_url}">${this.link_filename}</a> <br/>

                              
                `;

            await this.$axios
              .$post("/email/send-email/", this.form)
              .then((res) => {
                this.$refs.form.reset();
                this.isSent = true;
              })
              .catch((e) => console.log(e));
          } else {
            this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.country_code}${this.form.phone} <br/>
                        Company: ${this.form.company} <br/>
                        Message: ${this.form.message} <br/>
                     

                              
                `;

            await this.$axios
              .$post("/email/send-email/", this.form)
              .then((res) => {
                this.$refs.form.reset();
                this.isSent = true;
              })
              .catch((e) => console.log(e));
          }
        }
      } catch (err) {
        console.log(err.message);
      }
    },

    //STL FILE UPLOAD END

    /*

    sendForm() {
      this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.form.phone} <br/>
                        Company: ${this.form.company} <br/>
                        Message: ${this.form.message} <br/>
                `;
      this.$axios
        .$post("/email/send-email/", this.form)
        .then((res) => {
          this.$refs.form.reset();
          this.isSent = true;
        })
        .catch((e) => console.log(e));
    },

    closeDialog: function () {
      this.loginDialog = false;
    },
  },
  */

    closeDialog: function () {
      this.loginDialog = false;
    },
  },
  computed: {
    getcartCount() {
      return this.$store.getters.getCartCount;
    },
    getWishListCount() {
      return this.$store.state.wishListCount;
    },

    getWishlist() {
      return this.$store.state.wishlist;
    },
    username() {
      return "Hello, " + this.$store.getters.getUserInfo.first_name;
    },
    sessionActive() {
      return this.$store.getters.isAuthenticated;
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
    /* getCategories(title) {
            const data = _.filter(this.TopHeader, { 'title': title});
            return data
        } */

    GetContents() {
      return this.$store.state.contents[0].labels.en;
    },
         
  },
};
</script>

<style lang="scss">
header {
  height: auto!important;
  padding: 0px;
}
</style>
<style lang="scss" scoped>
.v-application a {
  color: #4A4A4A;
  font-weight: bold;
  text-decoration: none;
}

.v-application a:hover {
  color: #009688;
}

.v-application a.active {
  color: #009688;
}

.mega-menu {
  position: relative;

  a {
    font-size: 13px !important;
  }

  .open-nav {
    position: absolute;
    top: 53px;
    left: 0;
    width: auto;
    z-index: 9;
  }

  .caption2 {
    width: 15% !important;
    margin-bottom: 80px;
  }

  .mega-menu-box {
    position: absolute;
    top: 53px;
    left: 0;
    width: 100%;
    z-index: 9;

    ul {
      li {
        cursor: pointer;
      }

      &.industries-list {
        li {
          border: 1px solid #eee;
          width: 100%;

          span {
            line-height: 1;
          }
        }
      }

      &.top-services {
        li {
          cursor: unset;
        }
      }
    }
  }
}

.product-icons {
  cursor: pointer;
  border: 1px solid #eee;
}

ul {
  list-style: none !important;
}
ul li a {
  text-decoration: none;
}
.all-activty {
  border-right: 0px solid #2b2b2b;
}
.nav-divider {
  min-height: 10px;
}
.nav-lists {
  min-height: 40px;
}
.v-toolbar__title {
  cursor: pointer;
}

.activity-lists {
  width: 500px;

  .v-list-item {
    flex: unset !important;
  }
}

@media screen and (max-width: 480px) {
  .logo {
    width: 100%;
  }
}

.icon_color {
  color: #3a9689;
}
.icon_color:hover {
  // border: 1px solid #25675f;
  color: #9a9a9a;
}
</style>

