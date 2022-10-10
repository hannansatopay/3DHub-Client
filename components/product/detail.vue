<template>
  <v-container>
    <v-row>
      <!-- image section -->
      <v-col cols="12" sm="5">
        <v-img
          v-if="product.product_type === 'Filaments'"
          :src="product.image.url"
          contain
        />
        <v-img v-else height="400" :src="product.image.url" contain />
        <div
          v-if="product.colors != ''"
          class="d-flex flex-wrap align-center justify-center my-5 mx-5"
        >
          <span class="teal--text font-weight-bold">Available in: &nbsp;</span>
          <v-tooltip v-for="color in product.colors" :key="color.id" bottom>
            <template
              v-if="color !== ' ' && color !== ''"
              v-slot:activator="{ on, attrs }"
            >
              <v-btn
                class="colors ma-1"
                x-small
                fab
                :color="color"
                dark
                v-bind="attrs"
                v-on="on"
                @click="selectedColor(color)"
              ></v-btn>
            </template>
            <span>{{ getColorName(color) }}</span>
          </v-tooltip>
        </div>
      </v-col>
      <!-- detail, summary, add to cart, enquiry section -->
      <v-snackbar v-model="snackbar" timeout="2000" color="teal accent-4" elevation="24">
        Product added to cart successfully
      </v-snackbar>
      <v-col cols="12" sm="6" class="px-5 pt-10">
        <p class="caption mb-0">{{ product.brand }}</p>
        <p class="title font-weight-bold">{{ product.name }}</p>
        <p
          v-if="product.product_type === 'Parts & Accessories'"
          class="caption mb-0"
        >
          Part Type:
          <span class="font-weight-bold">{{ product.part_type }}</span>
        </p>
        <p v-else class="caption mb-0">
          Product Type:
          <span class="font-weight-bold">{{ product.product_type }}</span>
        </p>
        <p class="caption mb-0" v-if="product.material_type != ''">
          Material Type:
          <span
            class="font-weight-bold px-1"
            v-for="material in product.material_type"
            :key="material.id"
            >{{ material }}</span
          >
        </p>
        <p class="caption mb-0" v-if="product.dimension.width != ''">
          Width:
          <span class="font-weight-bold">{{ product.dimension.width }}</span>
        </p>
        <p class="caption mb-0" v-if="product.dimension.height != ''">
          Height:
          <span class="font-weight-bold">{{ product.dimension.height }}</span>
        </p>
        <p class="caption mb-0" v-if="product.dimension.length != ''">
          Length:
          <span class="font-weight-bold">{{ product.dimension.length }}</span>
        </p>
        <p class="caption mb-0" v-if="product.dimension.weight != ''">
          Weight:
          <span
            class="font-weight-bold"
            v-for="weight in product.dimension.weight"
            :key="weight.id"
            >{{ weight }}</span
          >
        </p>
        <p
          class="caption mb-0"
          v-if="
            product.product_type === 'Filaments' &&
            product.dimension.diameter != ''
          "
        >
          Diameter:
          <span
            class="font-weight-bold mx-1"
            v-for="diameter in product.dimension.diameter"
            :key="diameter.id"
            >{{ diameter }}</span
          >
        </p>
        <p class="caption mb-0" v-if="product.colors != ''">
          Color:
          <span class="font-weight-bold">{{ getSelectedColorName }}</span>
        </p>

        <p class="caption mt-5">{{ product.short_description }}</p>
        <h3 v-if="product.price != ''">
          <span class="teal--text">Price: {{ get_price }}</span>
        </h3>
        <v-row>
          <v-col v-if="isProductEnabled">
            <v-text-field
              min="1"
              type="number"
              v-model="quantity"
              label="Quantity"
              :value="1"
              :rules="genericRule"
            ></v-text-field>
          </v-col>

         
          <v-col v-if="isProductEnabled && IsProductPriceNotExceedTheLimit">
            <v-btn
              v-on:click="updateCart(product, quantity)"
              color="teal mt-5 mb-2 darken-1 mr-5"
              depressed
              dark
              small
              >Add to cart</v-btn
            >
          </v-col>
          <v-col v-else-if="isProductEnabled === false">
            <v-text-field
              class=""
              value="Out Of Stock"
              x-large
              readonly
              flat
              solo
            ></v-text-field>
          </v-col>
        </v-row>
        <div>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" color="teal mb-10 darken-1" small depressed dark
                >Enquiry</v-btn
              >
            </template>
            <v-card class="py-3">
              <v-card-title class="body-1">Product Enquiry</v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-row v-if="isSent">
                    <v-col cols="12">
                      <v-alert
                        dismissible
                        class="caption"
                        type="success"
                        icon="mdi-email"
                      >
                        Thank you for your interest. <br />
                        We will get back to you as soon as possible.
                      </v-alert>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" class="pt-2 pb-0">
                      <v-row>
                        <v-col cols="12" sm="4">
                          <v-img
                            height="100"
                            :src="product.image.url"
                            contain
                          />
                        </v-col>
                        <v-col cols="12" sm="8" class="align-self-center">
                          <p class="title black--text font-weight-bold mb-0">
                            {{ product.name }}
                          </p>
                          <v-row class="mb-0 pb-0">
                            <v-col class="py-0">
                              <span class="caption mb-0 text-left">{{
                                product.brand
                              }}</span>
                            </v-col>
                            <v-col cols="4" class="py-0">
                              <span class="subtitle-2 mb-0 text-right"
                                >Price: {{ get_price }}</span
                              >
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-row>
                    </v-col>
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
                    <v-col cols="12" class="py-2"
                      ><v-text-field
                        v-model="form.phone"
                        outlined
                        hide-details
                        label="Phone Number*"
                        :rules="required"
                    /></v-col>
                    <v-col cols="12" class="py-2"
                      ><v-text-field
                        v-model="form.company"
                        outlined
                        hide-details
                        label="Company"
                    /></v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn
                        @click.prevent="sendForm"
                        color="teal"
                        class="white--text"
                        depressed
                        >Send Request</v-btn
                      >
                      <v-btn @click="dialog = false" class="caption" text
                        >cancel</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-row class="pb-0">
                    <v-col cols="12" class="pb-0">
                      <p class="caption blue-grey--text">
                        <sup>*</sup>All fields are required
                      </p>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <!-- product video section -->
      <v-col cols="12" sm="12">
        <div
          class="my-3 mt-sm-10 pt-sm-10 pr-sm-5 py-lg-0 my-lg-0"
          v-if="productVideo"
        >
          <iframe
            width="100%"
            height="400"
            :src="productVideo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </v-col>
      <!-- specification & feature section -->
      <v-col
        v-if="product.product_type != 'Parts & Accessories'"
        cols="12"
        sm="12"
      >
        <v-card class="mt-5" flat>
          <v-tabs background-color="white">
            <v-tab>Specification</v-tab>
            <v-tab>Features</v-tab>

            <v-tab-item class="caption">
              <v-row>
                <v-col
                  cols="12"
                  sm="4"
                  v-for="i in getProductInfo_specs"
                  :key="i"
                  class="pa-0 my-0"
                >
                  <v-list-item class="my-n1">
                    <v-list-item-icon>
                      <v-icon color="teal">mdi-circle-medium</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="pa-0">
                      <p class="caption text-wrap my-0">{{ i }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-tab-item>
            <v-tab-item class="py-7 caption">
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  v-for="i in getProductInfo_features"
                  :key="i"
                  class="pa-0 my-0"
                >
                  <v-list-item class="my-n1">
                    <v-list-item-icon>
                      <v-icon color="teal">mdi-circle-medium</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content class="pa-0">
                      <p class="caption text-wrap">{{ i }}</p>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
export default {
  props: ["product"],
  mounted() {
    this.setInitalPrice();
    this.GetSettings();
  },
  data() {
    return {
      snackbar: false,
      timeout: 2000,
      dialog: false,
      isSent: false,
      quantity: 1,
      colorCode: "",
      form: {
        full_name: "",
        email: "",
        phone: "",
        subjectMsg: "3DHUB - Request a Pricing Quote",
        to: "info@3dhub.ae",
        comapny: "",
        eMessage: "",
      },
      required: [(v) => !!v || "This field is required"],
      genericRule: [(v) => !!v || "Enter quantity"],
      numberCheck: [(v) => v > 0 || "Enter value greater than 0"],
      itemPrice: 0,
      gatway_limit: 0,
    };
  },
  methods: {
    setInitalPrice() {
      console.log(this.product);
      this.itemPrice = this.product.price;
      if (this.product.colors != "") {
        for (var color of this.product.colors) {
          this.selectedColor(color);
          break;
        }
      }
    },
    GetSettings() {
      this.gatway_limit = this.$store.state.settings[0].settings.payment_gatway_limit;
    },
    selectedColor(color) {
      this.colorCode = color;
      let selectedColorPrice = this.itemPrice;
      if (this.product.color_price != "") {
        for (var colorPrice of this.product.color_price) {
          if (colorPrice.color === color) {
            if (
              colorPrice.price != undefined &&
              colorPrice.price != "" &&
              colorPrice.price != "-" &&
              this.product.price > 0
            ) {
              selectedColorPrice = colorPrice.price;
            }
            break;
          }
        }
      }
      this.product.price = selectedColorPrice;
    },
    updateCart(product, quantity) {
      let new_quantity = parseInt(quantity);
      this.snackbar = true;
      if (this.product.colors != "") {
        if (this.colorCode === "") {
          alert("Please select a color");
          return;
        } else {
          product["color_code"] = this.colorCode;
          if (
            Number.isInteger(new_quantity) &&
            new_quantity > 0 &&
            this.product.price != undefined &&
            this.product.price != "" &&
            this.product.price != "-" &&
            this.product.price > 0
          ) {
            product["quantity"] = new_quantity;
            this.$store.dispatch("addToCart", product);
          }
        }
      } else {
        if (
          Number.isInteger(new_quantity) &&
          new_quantity > 0 &&
          this.product.price != undefined &&
          this.product.price != "" &&
          this.product.price != "-" &&
          this.product.price > 0
        ) {
          product["quantity"] = new_quantity;
          this.$store.dispatch("addToCart", product);
        }
      }
    },
    getColorName(color) {
      let colorData = this.$store.getters.getColors.filter(
        (a) => a.hex == color
      );

      if (colorData.length > 0) {
        return colorData[0].color_name;
      } else {
        return "";
      }
    },
    sendForm() {
      this.form.eMessage = `
                Name: ${this.form.full_name} <br/>
                Email: ${this.form.email} <br/>
                Phone: ${this.form.phone} <br/>
                Company: ${this.form.company} <br/>
                Product: ${this.product.name} <br/>
            `;
      this.$axios
        .$post("/email/send-email/", this.form)
        .then((res) => {
          this.$refs.form.reset();
          this.isSent = true;
        })
        .catch((e) => console.log(e));
    },
  },
  computed: {
    get_price() {
      if (
        this.product.price === undefined ||
        this.product.price == "" ||
        this.product.price == "-" ||
        this.product.price < 1
      ) {
        return "NA";
      } else {
        let amountFormatter = function (value) {
          return parseFloat(value)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        };
        return "AED " + amountFormatter(this.product.price);
      }
    },
    getColorCode() {
      return this.colorCode;
    },
    getSelectedColorName() {
      if (this.colorCode === "") {
        return "";
      }
      let colorData = this.$store.getters.getColors.filter(
        (a) => a.hex == this.colorCode
      );
      return colorData[0].color_name;
    },
    isProductEnabled() {
      if (
        this.product.sold_out ||
        this.product.price === undefined ||
        this.product.price === "" ||
        this.product.price === "-" ||
        this.product.price < 1
      ) {
        return false;
      } else {
        return true;
      }
    },
    getProductInfo_specs() {
      let str_specs = JSON.stringify(this.product.specs);
      let str_specs_withoutBreak = str_specs.replace(/(?:\n\n|\\n|\n|")/g, ";");
      str_specs_withoutBreak = str_specs_withoutBreak.replace(/\\t/g, " ");
      let arr = str_specs_withoutBreak.split(";");
      arr = arr.filter(function (el) {
        return el;
      }); // To remove empty elements from array since we have multiple \n in the string
      arr = arr.filter(function (el) {
        return /\S/.test(el);
      }); // To remove white space elements from array since we have multiple \n in the string
      return arr;
    },
    getProductInfo_features() {
      let str_specs_features = JSON.stringify(this.product.features);
      let str_specs_withoutBreak_features = str_specs_features.replace(
        /(?:\n|\\n|\n\n|")/g,
        ";"
      );
      str_specs_withoutBreak_features = str_specs_withoutBreak_features.replace(
        /\\t/g,
        " "
      );
      let arr = str_specs_withoutBreak_features.split(";");
      arr = arr.filter(function (el) {
        return el;
      }); // To remove empty elements from array since we have multiple \n in the string
      arr = arr.filter(function (el) {
        return /\S/.test(el);
      }); // To remove white space elements from array since we have multiple \n in the string
      return arr;
    },
    productVideo() {
      if (this.product.video == null) {
        return false;
      }
      return this.product.video[0];
    },

    IsProductPriceNotExceedTheLimit() {
      if (+this.product.price <= +this.gatway_limit) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>