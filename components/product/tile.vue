<template>
  <v-card class="slider-card mx-2" flat @click.prevent="$router.push(`/product/${product.name.split('/').join('%2F')}`)">
  <div class="card-image">
    <v-img :src="product.image.url" height="130" class="pa-0 my-1" contain />
    <v-btn
    class="wishlist"
          v-if="isProductEnabled"
          @click.prevent.stop="addToWishlist(product)"
          text
          fab
          ><v-icon color="primary">mdi-heart-outline</v-icon></v-btn>
    </div>
    <v-card-title class="body-2 font-weight-bold text-truncate">{{
      product.name
    }}</v-card-title>
    <v-card-subtitle
      ><p class="mb-0 caption text-truncate">
        <span class="font-weight-medium">{{ product.brand }}</span>
      </p></v-card-subtitle
    >
    <v-card-text class="mt-0">
    <p class="body-2 teal--text font-weight-bold mb-0 product-title text-truncate">
        {{ get_price }}
    </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["product"],
  mounted() {
    this.setInitalPriceBasedOnColor();
    this.GetSettings();
  },
  data() {
    return {
      gatway_limit: 0,
    };
  },
  methods: {
    setInitalPriceBasedOnColor() {
      if (this.product.colors != "") {
        for (var color of this.product.colors) {
          this.product.color_code = color;
          if (this.product.color_price != "") {
            for (var colorPrice of this.product.color_price) {
              if (colorPrice.color === color) {
                if (
                  colorPrice.price != undefined &&
                  colorPrice.price != "" &&
                  colorPrice.price != "-" &&
                  this.product.price > 0
                ) {
                  this.product.price = colorPrice.price;
                }
                break;
              }
            }
          }
          break;
        }
      }
    },
    addToCart(product) {
      product["quantity"] = 1;
      this.$store.dispatch("addToCart", product);
    },
    addToWishlist(product) {
      this.$store.dispatch("addToWishList", product);
    },
    product_name_id() {
      if (this.product.product_type == "Scanners") {
        return `/product/${this.product.brand
          .split("/")
          .join("%2F")}/scanners/${this.product.name.split("/").join("%2F")}`;
      } else if (this.product.product_type == "Printer") {
        return `/product/${this.product.brand
          .split("/")
          .join("%2F")}/printer/${this.product.name.split("/").join("%2F")}`;
      } else if (this.product.product_type == "Post Processing") {
        return `/product/${this.product.brand
          .split("/")
          .join("%2F")}/post-processing/${this.product.name
          .split("/")
          .join("%2F")}`;
      } else if (this.product.product_type == "Filaments") {
        return `/product/${this.product.brand
          .split("/")
          .join("%2F")}/filaments/${this.product.name.split("/").join("%2F")}`;
      } else if (this.product.product_type == "Parts & Accessories") {
        return `/product/${this.product.brand
          .split("/")
          .join("%2F")}/parts-accessories/${this.product.name
          .split("/")
          .join("%2F")}`;
      }
    },
    GetSettings() {
      this.gatway_limit = this.$store.state.settings[0].settings.payment_gatway_limit;
    },
  },
  computed: {
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
    IsProductPriceNotExceedTheLimit() {
      if (+this.product.price <= +this.gatway_limit) {
        return true;
      } else {
        return false;
      }
    },
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
  },
};
</script>
<style scoped>
.height-fix{
  min-height: 72px  !important; 

}

.card-image {
  border: 0.2px solid #C4C4C4;
  border-radius: 10px;
  margin: 10px;
  position: relative;
}

.wishlist {
    position: absolute!important;
    right: 0;
    bottom: 0;
        border: 0.5px solid #C4C4C4;
    width: 30px;
    height: 30px;
    right: -10px;
    bottom: -10px;
    background: white;
  }

  .slider-card {
    box-shadow: 0px 4px 10px rgb(0 0 0 / 10%)!important;
    border-radius: 10px;
  }
</style>