<template>
  <v-layout column justify-center align-center>
    <v-container>
      <H1 text="Wishlist" />
      <v-row v-if="wishListCount > 0">
        <v-col cols="12" sm="12" md="3" v-for="item ,idx in wishListDetails" :key="idx">
        <v-card outlined class="slider-card mx-2" flat @click.prevent="$router.push(product_name_id(item))">
  <div class="card-image">
    <v-img :src="item.image.url" height="130" class="pa-0 my-1" contain />
    <v-btn @click.prevent.stop="deleteItemFromcart(item._id,item.name)" fab outlined x-small style=" position: absolute; top: -10px; right: -10px; background: white;"><v-icon small dark>mdi-close</v-icon></v-btn>
    </div>
    <div class="pa-3">
      <p class="body-2 teal--text font-weight-bold mb-0 product-title">{{get_price_formated(item.price * 1)}}</p>
      <p class="mb-0 font-weight-bold">{{ item.name }}</p>
      <p class="mb-0 caption font-weight-medium">{{ item.brand }}</p>
    </div>
  </v-card>
        </v-col>
      </v-row>
      <div v-else>
        <div class="spacer"></div>
        <h3 class="headline text-center">Your Wish List is empty!</h3>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
import H1 from '~/components/heading-style-a';
import ProductTile from '~/components/product/tile'

export default {
  components: { H1, ProductTile},
   data(){
        return {
        }
    },
  computed: {
    wishListCount() {
      return this.$store.getters.getWishListCount;
    },
    wishListDetails() {
      let wishlist = this.$store.getters.getWishList;
      return wishlist;
    },
  },
  methods: {
    async deleteItemFromcart(id,product_name) {
      let user = JSON.parse(localStorage.getItem("usr"));
      if (
        true
      ) {
        if (this.$store.getters.isAuthenticated) {
          await this.$axios
            .$delete(
              "/wishlist/delete/" + id + "/" + user._id,
              this.$store.getters.getHeaders
            )
            .then((res) => {
              this.$store.dispatch("getWishListData");
            })
            .catch((err) => {
              console.log("err here " + err);
            });
        } else {
          let cartFromLocalStoarge =
            JSON.parse(localStorage.getItem("wishlist-info")) || [];
          for (var i = cartFromLocalStoarge.length - 1; i >= 0; i--) {
            if (product_name === cartFromLocalStoarge[i].name) {
              cartFromLocalStoarge.splice(i, 1);
              localStorage.setItem(
                "wishlist-info",
                JSON.stringify(cartFromLocalStoarge)
              );

               this.$store.commit("setWishList",JSON.parse(localStorage.getItem("wishlist-info")));
            
              break;
            }
          }

          //REMOVE WISH LIST FROM TEMP LOCAL STORAGE


           let tempWishlistFromLocalStoarge =
            JSON.parse(localStorage.getItem("wishlist-temp")) || [];
          for (var i = tempWishlistFromLocalStoarge.length - 1; i >= 0; i--) {
            if (product_name === tempWishlistFromLocalStoarge[i].name) {
              tempWishlistFromLocalStoarge.splice(i, 1);
              localStorage.setItem(
                "wishlist-temp",
                JSON.stringify(tempWishlistFromLocalStoarge)
              );
             this.$store.commit("setWishList",JSON.parse(localStorage.getItem("wishlist-info")));
              break;
            }
          }
        }
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
    product_name_id(product) {
       return `/product/${product.name.split("/").join("%2F")}`;
    }
  },
};
</script>

 

<style scoped>
.border-right {
  border-right: 1px solid #ddd;
}

.v-messages {
  color: red !important;
}

.v-text-field {
  min-width: 50px;
}

.slider-card {
  border: 0.3px solid #979797;
    box-shadow: 0px 4px 10px rgb(0 0 0 / 10%)!important;
    border-radius: 10px;
}
</style>








