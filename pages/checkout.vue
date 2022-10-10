<template>
  <v-container>
    <v-dialog v-model="loginDialog" v-if="!isAuth" width="500">
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
              prevUrl="checkout"
          /></v-tab-item>
          <v-tab-item
            ><Login
              v-on:close-dialog="closeDialog"
              v-bind:signIn="false"
              v-bind:redirect="false"
              prevUrl="checkout"
          /></v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="9">
        <v-card v-if="getMyEmailId !== ''" class="mt-2">
          <h3 class="teal--text px-4 py-3">
            Login<v-icon color="primary">mdi-check</v-icon>
          </h3>
          <h4 class="px-4 py-2">{{ getMyEmailId }}</h4>
        </v-card>

        <v-card class="mt-5 px-4">
          <v-card-title class="teal--text pl-0"
            >Delivery Address<v-icon
              v-if="this.userSelectedAddresss !== ''"
              color="primary"
              >mdi-check</v-icon
            ></v-card-title
          >
          <v-divider></v-divider>
          <v-row>
            <v-col
              class="px-0 py-0 mx-0 my-0"
              cols="12"
              v-for="data in getMyAddresses"
              :key="data._id"
            >
              <v-card
                @click.prevent="selectTech(data._id)"
                v-model="selectAddress"
                flat
              >
                <v-card-title>{{ getAdrressTitle(data) }}</v-card-title>
                <p class="pl-3">{{ getAddressLine1(data) }}</p>
                <p class="pl-3">{{ getAddressLine2(data) }}</p>
                <v-divider></v-divider>
                <div class="v-card__actions">
                  <button
                    type="button"
                    @click.prevent="EditAddress(data._id)"
                    class="v-btn v-btn--depressed v-btn--fab v-btn--round theme--dark v-size--x-small cyan"
                  >
                    <span class="v-btn__content"
                      ><i
                        aria-hidden="true"
                        class="v-icon notranslate mdi mdi-pencil theme--dark"
                        style="font-size: 16px"
                      ></i
                    ></span>
                  </button>
                  <!--<button type="button" class="v-btn v-btn--depressed v-btn--fab v-btn--round theme--dark v-size--x-small grey lighten-1"><span class="v-btn__content"><i aria-hidden="true" class="v-icon notranslate mdi mdi-delete theme--dark" style="font-size: 16px;"></i></span></button>-->
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-dialog v-model="newAddressDailog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                class="px-0 py-3 mx-0 my-3 pr-3"
                color=""
                @click.prevent="addItem()"
                ><v-icon class="mx-2" small>mdi-plus</v-icon>
                Add a new address
              </v-btn>
            </template>
            <v-form ref="form" id="form1">
              <v-card>
                <v-card-title>
                  <span class="headline">Add a new Address</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col>
                        <v-text-field
                          ref="name"
                          label="Name*"
                          v-model="new_address_detail.name"
                          required
                          outlined
                          :rules="required"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          label="10-digit mobile number*"
                          v-model="new_address_detail.contact_num"
                          required
                          outlined
                          :rules="required"
                          placeholder="+971xxxxxxxxxx"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-combobox
                          :items="countryList()"
                          label="Country/Region*"
                          item-text="country_name"
                          item-value="country_name"
                          v-model="new_address_detail.nationality"
                          required
                          outlined
                          :rules="required"
                        ></v-combobox>
                      </v-col>
                      <v-col>
                        <v-text-field
                          label="State*"
                          v-model="new_address_detail.state"
                          outlined
                          :rules="required"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Street Name*"
                          v-model="new_address_detail.address_line_1"
                          required
                          outlined
                          :rules="required"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Building name/no., floor, apartment, or villa no.*"
                          v-model="new_address_detail.address_line_2"
                          outlined
                          :rules="required"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="City*"
                          v-model="new_address_detail.city"
                          required
                          outlined
                          :rules="required"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          label="Area/District"
                          v-model="new_address_detail.area"
                          required
                          outlined
                          :rules="required"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Pincode"
                          v-model="new_address_detail.pincode"
                          outlined
                          :rules="required"
                        ></v-text-field>
                      </v-col>
                      <v-col>
                        <v-text-field
                          label="Nearest Landmark"
                          v-model="new_address_detail.landmark"
                          outlined
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-text-field
                          label="Alternate Phone (optional)"
                          v-model="new_address_detail.contact_num_alternate"
                          outlined
                          placeholder="+971xxxxxxxxxx"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col>
                        <v-radio-group
                          v-model="new_address_detail.address_type"
                          row
                        >
                          <v-radio
                            v-for="n in address_type_options"
                            :key="n"
                            :label="n"
                            :value="n"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    type="submit"
                    color="primary"
                    class="px-4"
                    @click.prevent="save"
                    ><v-icon class="mx-2">mdi-content-save</v-icon>Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-dialog>
        </v-card>

        <v-card class="mt-5 pa-0">
          <v-card-title class="teal--text pb-0 mb-0"
            >Order Summary</v-card-title
          >
          <v-row>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-card
                v-for="(item, item_index) in cartDetails"
                :key="item_index"
                class="pa-5 mt-1"
                flat
              >
                <v-row>
                  <v-col
                    cols="12"
                    sm="2"
                    align-self="center"
                    class="text-sm-center d-flex justify-center"
                  >
                    <a
                      :href="product_name_id(item)"
                      class="d-sm-block text-sm-center"
                    >
                      <img
                        :src="item.image.url"
                        height="100"
                        width="103"
                        class="pa-0 my-0"
                        contain
                      />
                    </a>
                  </v-col>
                  <v-col cols="12" sm="10" align-self="center" class="">
                    <v-row class="pr-0 pt-0 pb-0">
                      <v-col cols="12" sm="12" md="8" class="pl-0">
                        <p class="teal--text mb-0">
                          {{ item.name + " | " + item.brand }}
                        </p>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="4"
                        class="pt-2 pb-0 mb-0 pl-0 text-lg-right"
                      >
                        <p class="font-weight-bold">
                          {{
                            "Price: " +
                            get_price_formated(item.price * item.quantity)
                          }}
                        </p>
                      </v-col>
                    </v-row>
                    <v-row class="">
                      <div class="">
                        <p class="mb-1">{{ "Quantity: " + item.quantity }}</p>
                        <p
                          class="mb-1"
                          v-if="item.hasOwnProperty('color_code')"
                        >
                          {{ "Color: "
                          }}<v-btn
                            class="colors ma-1"
                            x-small
                            fab
                            :color="item.color_code"
                            dark
                            max-width="10"
                            max-height="10"
                          ></v-btn>
                        </p>
                        <p class="mb-1 grey--text">
                          Estimated Delivery before
                          {{ getDeliveryDay(item) | formatDateWithoutTime }}
                        </p>
                      </div>
                    </v-row>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-right">
              <p class="title font-weight-bold mr-2">
                {{
                  "subtotal(" +
                  cartCount +
                  " items) : " +
                  get_price_formated(totalPrice)
                }}
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card outlined class="px-4 py-4">
          <v-card-title class="teal--text">Price Details</v-card-title>

          <v-card-text>
            

            <v-row>
              <v-col class="title font-weight-bold">
                {{ "Price (" + cartCount + " items)" }}
              </v-col>
              <v-col class="title font-weight-bold">
                {{ get_price_formated(totalPrice) }}
              </v-col>
            </v-row>
            <v-row v-if="isCouponSucess">
              <v-col class="title font-weight-bold">
                {{ "Discount" }}
              </v-col>
              <v-col class="title font-weight-bold">
                {{ "-" + get_price_formated(GetAppliedCouponAmount) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col class="title font-weight-bold">
                {{ "Shipping charges" }}
              </v-col>
              <v-col class="title font-weight-bold">
                {{ get_price_formated(parseInt(shippingCharges)) }}
              </v-col>
            </v-row>
            <v-row>
              <v-col class="title font-weight-bold"> Total Payable </v-col>
              <v-col class="title font-weight-bold">
                {{ get_price_formated(totalPriceWithShipping) }}
              </v-col>
            </v-row>

            <v-row>
              
              <v-col class="title font-weight-bold">
                <div class="ajfcp3-2 xJlIR">
                  <form class="ajfcp3-3 VUCBK">
                    <input
                      type="text"
                      v-model="coupon_code"
                      placeholder="Coupon Code"
                      aria-label="Coupon Code or Gift Card"
                      class="coupon_text"
                      value=""
                    />
                  </form>
                  <button
                    color="#404553"
                    class="ajfcp3-5 eHkLAw"
                    @click="coupon_apply"
                  >
                    <span style="color: rgb(64, 69, 83)">Apply</span>
                  </button>
                </div>
                <p
                  v-bind:class="{
                    coupon_response_warning: isCouponError,
                    coupon_response_sucess: isCouponSucess,
                  }"
                >
                  {{ coupon_response }}
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="px-4 py-4 mt-5">
          <v-row>
            <v-col>
              <v-card-title class="teal--text">Payment</v-card-title>
              <v-card-text class="pb-0 subtitle-1"
                >Credit or debit card</v-card-text
              >
              <v-card-text class="subtitle-1"
                >3DHUB accepts major credit and debit cards.</v-card-text
              >
            </v-col>
          </v-row>
          <v-row class="px-4">
            <v-col class="" cols="3">
              <v-img
                src="/Visa-MasterCard.jpg"
                height="50"
                width="100"
                contain
              ></v-img>
            </v-col>
            <v-col class="text-right" cols="9">
              <v-btn
                class=""
                color="primary"
                v-if="totalPrice > 0"
                @click.prevent="pay()"
                >{{
                  "Pay " + get_price_formated(totalPriceWithShipping)
                }}</v-btn
              >
            </v-col>
            <v-col class="text-left" cols="9">
              <span class="payment_response">{{Payment_Response}}</span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Login from "~/components/login";
import countries from "countries-list";

export default {
  mounted() {
    this.checkUserSession();
    this.getPaymentGatwayLimit();
  },
  components: {
    countries,
    Login,
  },
  data() {
    return {
      addresses: [],
      headers: [
        { text: "Product", value: "image" },
        { text: "Details", value: "name" },
      ],
      Payment_Response:"",
      Coupondata: "",
      coupon_code: "",
      coupon_response: "",
      isCouponValid: false,
      totalPayable: 0,
      selectAddress: "",
      shipping_charges: 0,
      discount_amount: 0,
      isAuth: true,
      tabs: null,
      loginDialog: false,
      userEmail: "",
      newAddressDailog: false,
      editAddressDailog: false,
      new_address_detail: {
        name: null,
        contact_num: null,
        pincode: null,
        locality: null,
        address: null,
        address_line_1: null,
        address_line_2: null,
        city: null,
        state: null,
        landmark: null,
        contact_num_alternate: null,
        address_type: "Home",
        user_id: null,
        nationality: null,
      },
      required: [(v) => !!v || "This field is required"],
      address_type_options: ["Home", "Work"],
      isCouponError: true,
      isCouponSucess: false,
      payment_gatway_limit:0,
    };
  },
  methods: {
    addItem() {
      if (this.$store.getters.isAuthenticated) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
        this.loginDialog = true;
        return;
      }
      this.new_address_detail = {};
    },
    async save() {
      if (this.$store.getters.isAuthenticated) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
        this.loginDialog = true;
        return;
      }
      if (this.$refs.form.validate()) {
        if (!this.countryList().includes(this.new_address_detail.nationality)) {
          alert("Please select Country");
          return;
        }
        let user = JSON.parse(localStorage.getItem("usr"));
        this.new_address_detail.user_id = user._id;

        //check for insert or update the address
        if (this.editAddressDailog == true) {
          console.log("Address edit route");
          console.log(this.selectAddress);
          console.log(this.new_address_detail);

          //Update Address API Call
          await this.$axios
            .$put(
              "/address/update/" + this.selectAddress,
              this.new_address_detail,
              this.$store.getters.getHeaders
            )
            .then((res) => {
              this.newAddressDailog = false;
              this.getaddresses();
              this.new_address_detail = {};
            })
            .catch((e) => console.log(e));
        } else {
          //Add Address API Call

          await this.$axios
            .$post(
              "/address/new/",
              this.new_address_detail,
              this.$store.getters.getHeaders
            )
            .then((res) => {
              this.newAddressDailog = false;
              this.getaddresses();
              this.new_address_detail = {};
            })
            .catch((e) => console.log(e));
        }
      }
    },
    countryList() {
      const countryCodes = Object.keys(countries.countries);
      const countryNames = countryCodes.map(
        (code) => countries.countries[code].name
      );
      return countryNames;
    },

    async coupon_apply() {
      if (!this.coupon_code) {
        this.coupon_response = "Please Enter Coupon Code";
      } else if (this.$store.getters.isAuthenticated) {
        let user = JSON.parse(localStorage.getItem("usr"));
        let code = this.coupon_code;
        if (code) {
          this.Coupondata = {
            coupon_code: this.coupon_code,
            user_id: user._id,
          };
        } else {
          this.Coupondata = {
            coupon_code: null,
            user_id: user._id,
          };
        }

        this.discount_amount = 0;

        await this.$axios
          .$post(
            "/coupon/apply/",
            this.Coupondata,
            this.$store.getters.getHeaders
          )
          .then((res) => {
            console.log(res.Discount);

            if (res.status == "success") {
              this.isCouponSucess = true;
              this.isCouponValid = true;
              this.$store.commit("SetDiscount", res.Discount);
              this.discount_amount = res.Discount.discount_amount;
              console.log(this.$store.state.discount);
              this.coupon_response = "Coupon Applied Successfully";
            } else {
              this.coupon_response = res.message;
              this.isCouponError = true;
              this.isCouponSucess = false;
              this.isCouponValid = false;
              this.$store.commit("SetDiscount", "");
              this.discount_amount = 0;
            }

            /* {
    "total_before_discount": 1235529,
    "discount_type": "Percentage",
    "total_after_discount": "1111976.10"
            }*/

            // this.newAddressDailog = false;
            // this.getaddresses();
            // this.new_address_detail = {};
          })
          .catch((e) => console.log(e));

        console.log(this.coupon_code);
      }
    },
    getDeliveryDay(product) {
      let days = product.estimated_days || 20;
      let myDate = new Date(new Date().getTime() + days * 24 * 60 * 60 * 1000);
      return myDate;
    },
    product_name_id(product) {
      if (product.product_type == "Scanners") {
        return `/product/${product.brand
          .split("/")
          .join("%2F")}/scanners/${product.name.split("/").join("%2F")}`;
      } else if (product.product_type == "Printer") {
        return `/product/${product.brand
          .split("/")
          .join("%2F")}/printer/${product.name.split("/").join("%2F")}`;
      } else if (product.product_type == "Post Processing") {
        return `/product/${product.brand
          .split("/")
          .join("%2F")}/post-processing/${product.name.split("/").join("%2F")}`;
      } else if (product.product_type == "Filaments") {
        return `/product/${product.brand
          .split("/")
          .join("%2F")}/filaments/${product.name.split("/").join("%2F")}`;
      } else if (product.product_type == "Parts & Accessories") {
        return `/product/${product.brand
          .split("/")
          .join("%2F")}/parts-accessories/${product.name
          .split("/")
          .join("%2F")}`;
      }
    },
    checkUserSession() {
      if (!this.$store.getters.isAuthenticated) {
        this.isAuth = false;
        this.loginDialog = true;
      } else {
        this.getaddresses();
        this.setEmailId();
      }
    },
    closeDialog: function () {
      this.loginDialog = false;
      if (this.$store.getters.isAuthenticated) {
        this.getaddresses();
        this.setEmailId();
      }
    },
    get_price_formated(price) {
      if (price === undefined || price == "" || price == "-") {
        return "";
      } else {
        let amountFormatter = function (value) {
          return parseFloat(value)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, "$&,");
        };
        return "AED " + amountFormatter(price);
      }
    },
    selectTech(id) {
      this.selectAddress = id;
      for (var address of this.addresses) {
        if (address._id === id) {
          if (address.nationality === "United Arab Emirates") {
            this.shipping_charges = 50;
          } else {
            this.shipping_charges = 350;
          }
          break;
        }
      }
    },
    EditAddress(id) {
      console.log(id);
      // console.log(this.editAddressDailog);
      this.editAddressDailog = true;
      this.newAddressDailog = true;
      //console.log(this.editAddressDailog);
      // this.getaddressById(id)
      this.getAddressById(id);
    },
    getPaymentGatwayLimit(){

      this.payment_gatway_limit=this.gatway_limit = this.$store.state.settings[0].settings.payment_gatway_limit;
      console.log(this.payment_gatway_limit);

    },
    getaddresses() {
      let user = JSON.parse(localStorage.getItem("usr"));
      this.$axios
        .$get("/address/" + user._id, this.$store.getters.getHeaders)
        .then((res) => {
          this.addresses = res;
        })
        .catch((e) => console.log(e));
    },

    getAddressById(id) {
      let EditingAddress = this.addresses.find((item) => item._id === id);
      console.log(EditingAddress.contact_num);
      this.new_address_detail = {
        name: EditingAddress.name,
        contact_num: EditingAddress.contact_num,
        contact_num: EditingAddress.contact_num,
        pincode: EditingAddress.pincode,
        locality: EditingAddress.locality,
        address: EditingAddress.address,
        address_line_1: EditingAddress.address_line_1,
        address_line_2: EditingAddress.address_line_2,
        city: EditingAddress.city,
        state: EditingAddress.state,
        area: EditingAddress.area,
        landmark: EditingAddress.landmark,
        contact_num_alternate: EditingAddress.contact_num_alternate,
        address_type: EditingAddress.address_type,
        user_id: EditingAddress.user_id,
        nationality: EditingAddress.nationality,
      };
    },

    setEmailId() {
      let user = JSON.parse(localStorage.getItem("usr"));
      if (user !== undefined) {
        this.userEmail = user.email;
      }
    },
    getAdrressTitle(data) {
      let display = data.name + ", " + data.contact_num;
      return display;
    },
    getAddressLine1(data) {
      let display = "";
      if (data.address_line_1 !== undefined && data.address_line_1 !== "") {
        display = data.address_line_1;
      }
      if (data.address_line_2 !== undefined && data.address_line_2 !== "") {
        if (display == "") {
          display = data.address_line_2;
        } else {
          display = display + ", " + data.address_line_2;
        }
      }
      if (data.landmark !== undefined && data.landmark !== "") {
        if (display == "") {
          display = data.landmark;
        } else {
          display = display + ", " + data.landmark;
        }
      }
      return display;
    },
    getAddressLine2(data) {
      let display = "";
      if (data.city !== undefined && data.city !== "") {
        display = data.city;
      }
      if (data.area !== undefined && data.area !== "") {
        if (display == "") {
          display = data.area;
        } else {
          display = display + ", " + data.area;
        }
      }
      if (data.state !== undefined && data.state !== "") {
        if (display == "") {
          display = data.state;
        } else {
          display = display + ", " + data.state;
        }
      }
      if (data.nationality !== undefined && data.nationality !== "") {
        if (display == "") {
          display = data.nationality;
        } else {
          display = display + ", " + data.nationality;
        }
      }
      if (data.pincode !== undefined && data.pincode !== "") {
        if (display == "") {
          display = data.pincode;
        } else {
          display = display + ", " + data.pincode;
        }
      }
      return display;
    },
    async pay() {
      let user = JSON.parse(localStorage.getItem("usr"));
      if (this.$store.getters.isAuthenticated) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
        this.loginDialog = true;
        return;
      }

      if (this.selectAddress === "") {
        alert("Please select delivery address");
        return;
      }

      let deliveryAddressObj = {};

      for (var address of this.addresses) {
        if (address._id === this.selectAddress) {
          deliveryAddressObj = address;
          if (!this.countryList().includes(address.nationality)) {
            alert("Please select Country");
            return;
          }
          break;
        }
      }

      if (this.totalPrice < 1 || isNaN(this.totalPrice)) {
        alert("Price invalid");
        return;
      }

      let data = { cart_id_list: [] };
      data.address_id = this.selectAddress;
      data.cart = {
        action: "SALE",
        amount: {
          currencyCode: "AED",
          value: this.totalPriceWithShipping * 100,
        },
        emailAddress: this.userEmail,
        merchantAttributes: {
          redirectUrl: process.env.redirectUrl,
          skipConfirmationPage: true,
        },
        billingAddress: {
          firstName: deliveryAddressObj.name,
          lastName: deliveryAddressObj.name,
          address1:
            deliveryAddressObj.address_line_1 +
            " " +
            deliveryAddressObj.address_line_2,
          city: deliveryAddressObj.city,
          countryCode: deliveryAddressObj.nationality,
        },
      };

      this.Coupondata = {
        coupon_code: this.coupon_code,
        user_id: user,
      };

      data.coupon = this.Coupondata;
      data.user = user;
      data.payment_info = {};
      data.payment_info["shipping_charges"] = this.shippingCharges;
      data.payment_info["item_price"] = this.totalPrice;
      data.payment_info["total_price"] = this.totalPriceWithShipping;

      for (var cart of this.cartDetails) {
        data.cart_id_list.push(cart._id);
      }

      await this.$axios

        .$post("/checkout/cart", data)
        .then(async (res) => {      
          console.log(res.status);  
          if(res.status)
          {
            this.Payment_Response=res.message;
          }  else if(res.message == 'Request failed with status code 422')
          {
             this.Payment_Response="Sorry The Total Price Exceed the Maximum Amount of AED "+this.payment_gatway_limit+" Please Contact Us For Easy Purchase :) Thankyou";
          }         
          else if (res._links.payment.href && res.outletId && res.reference) {
            window.open(res._links.payment.href, "_self");
          }else{
             console.log("coupon Staus");
             console.log(res.status);
          }
        })
        .catch((err) => function(){
          console.log("Something Went Wrong"+err.message);          
        
        }

         
        );
    },
  },
  computed: {
    userSelectedAddresss() {
      return this.selectAddress;
    },
    cartCount() {
      return this.$store.getters.getCartCount;
    },
    cartDetails() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.$store.getters.getTotalPriceOnCart;
    },
    totalPriceWithShipping() {
      return (
        this.$store.getters.getTotalPriceOnCart +
        this.shipping_charges -
        this.discount_amount
      );
    },
    getMyAddresses() {
      return this.addresses;
    },
    shippingCharges() {
      return this.shipping_charges;
    },
    getMyEmailId() {
      if (this.userEmail !== "") {
        return this.userEmail;
      } else {
        return "";
      }
    },
    GetAppliedCouponAmount() {
      return this.$store.state.discount.discount_amount;
    },
  },
  watch: {
    coupon_code: function () {
      return (this.coupon_response = "");
    },
  },
};
</script>
<style  scoped>
.xJlIR {
  display: flex;
}

.eHkLAw {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px;
  min-width: 64px;
  color: #fff;
  background-color: rgb(58 150 137);
}
.VUCBK {
  flex: 1 1 0%;
  border: 1px solid #8a8a8a78;
}

.coupon_text {
  font-size: 1.16667rem;
  border: unset;
  height: 40px;
  padding: 0px 12px;
  width: 100%;
}
.coupon_response_warning {
  color: red;
  font-size: 12px;
}
.coupon_response_sucess {
  color: #3a9689;
  font-size: 12px;
}
.payment_response{
  text-align: left !important;
  color: red  !important;
}
</style>