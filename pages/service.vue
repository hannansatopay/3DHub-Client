<template>
<div class="container">
 <v-stepper
    v-model="e6"
    vertical
  >
    <v-stepper-step
      :complete="e6 > 1"
      step="1"
    >
      Service Details
      <small>We will check your CAD file as per the requirements. Based on that we will suggest best 3D Printing Process.</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <div>
      <v-form ref="form" enctype="multipart/form-data">
                    <v-row v-if="isSent">
                      <v-col cols="12">
                        <v-alert
                          dismissible
                          class="caption"
                          type="success"
                          icon="mdi-email"
                        >
                          Thank you for your inquiry. <br />
                          We will get back to you as soon as possible.
                        </v-alert>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" class="py-2"
                        ><v-text-field
                          v-model="form.full_name"
                          outlined
                          hide-details
                          label="Full Name*"
                          :rules="required"
                      /></v-col>
                      <v-col cols="12" class="py-2"
                        ><v-text-field
                          v-model="form.email"
                          outlined
                          hide-details
                          label="Email*"
                          :rules="required"
                      /></v-col>

                      <v-col cols="12" class="py-2">
                        <v-select
                          v-model="form.country"
                          :items="countries"
                          item-text="name"
                          item-value="code"
                          label="Country"
                          persistent-hint
                          :rules="required"
                          outlined
                          hide-details
                          single-line
                          @change="OnchangeCountry($event)"
                        ></v-select
                      ></v-col>

                      <v-col cols="12" class="py-2"
                        ><v-text-field
                          v-model="form.phone"
                          outlined
                          hide-details
                          label="Phone Number*"
                          :rules="required"
                          :prefix="country_code"
                      /></v-col>

                      <v-col cols="12" class="py-2"
                        ><v-text-field
                          v-model="form.company"
                          outlined
                          hide-details
                          label="Company"
                      /></v-col>
                      <v-col cols="12" class="py-2"
                        ><v-textarea
                          v-model="form.message"
                          outlined
                          hide-details
                          label="Message"
                      /></v-col>
                      <v-col cols="12" class="py-2">
                        <v-file-input
                          type="file"
                          v-model="form.file"
                          id="file"
                          name="file"
                          accept=".stl"
                          label="STL File"
                          @change="onFileChange"
                        ></v-file-input>
                      </v-col>
                      <!--   <v-col cols="12" class="py-2">  <input type="file" @change="onFileChange" /></v-col>-->
                    </v-row>
                    <v-row class="pb-0">
                      <v-col cols="12" class="pb-0">
                        <p class="caption blue-grey--text">
                          <sup>*</sup>All fields are required
                        </p>
                      </v-col>
                    </v-row>
                  </v-form>
      </div>
      <v-btn
        color="primary"
        @click="e6 = 2"
      >
        Send Request
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 2"
      step="2"
    >
      Quotation Sharing
      <small>After finalization of process of making, we will share you a quotation. Based on the confirmation we will start the work.</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 3"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="e6 > 3"
      step="3"
    >
      3D Printing
      <small>As the printing process starts, we will share the pictures here.</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 4"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">
      Shipping & Delivery
      <small>We will take upmost care to deliver your products with safety and on-time.</small>
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e6 = 1"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>
  </v-stepper>
</div>
</template>

<script>
export default {

    
    
  data() {
    return {
    es6: 1,
      tabs: null,
      back:'',
      dialog: false,
      isSent: false,
      preview: null,
      file: "",
      image: null,
      preview_list: [],
      image_list: [],
      country_code: "+971",
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
      isRed:true,

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
      link_url: "",
      link_filename: "",
    };
  },
  mounted() {},

  beforeCreate() {},

  methods: {
    OnchangeCountry(event) {
      this.country_code = event;
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
  },
  */
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
</style>