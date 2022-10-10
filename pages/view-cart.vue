<template>
  <v-layout column justify-center align-center>
    <v-container>
        <v-row no-gutters class="mx-1 my-0 mt-2">
            <v-col cols="12" sm="6" md="10" xl="10">
                <h3 v-if="cartCount > 0" class="headline text-center text-sm-left text-md-left text-lg-left text-xl-left"> {{"My Cart ("+cartCount+")" }}</h3>
                <h3 v-else class="headline  text-center text-sm-left text-md-left text-lg-left text-xl-left"> {{"Your cart is empty!" }}</h3>
            </v-col>
        </v-row>
        <v-row v-if="cartCount > 0">
            <v-col cols="12" sm="12" md="12" lg="9" >
                <v-card  v-for="(item, item_index) in cartDetails" :key="item_index" class="pa-5 mt-5">
                    <v-row >
                        <v-col cols="12" sm="2" align-self="center" class="text-sm-center d-flex justify-center">
                            <a :href="product_name_id(item)" class="d-sm-block text-sm-center">
                                <img :src="item.image.url" height="100" width="103" class="pa-0 my-1" contain/>
                            </a>
                        </v-col>
                        <v-col cols="12" sm="10" align-self="center" class="">
                            <v-row class="pr-0 pt-0 pb-0 " >
                                <v-col cols="12" sm="12" md="8" class="pl-0" >
                                    <p class="teal--text mb-0">{{item.name + ' | ' + item.brand }}</p>
                                </v-col>
                                <v-col cols="12" sm="12" md="4" class="pt-2 pb-0 mb-0 pl-0 text-lg-right" >
                                    <p class="font-weight-bold">{{"Price: " + get_price_formated(item.price * item.quantity) }}</p>
                                </v-col>
                            </v-row>
                            <v-row class="">
                                <div class="">
                                    <!-- <p class="mb-1">{{"Quantity: "+ item.quantity}}</p> -->
                                    <p class="mb-1" v-if="item.hasOwnProperty('color_code')" >{{"Color: "}}<v-btn 
                                            class="colors ma-1"
                                            x-small
                                            fab
                                            :color="item.color_code"
                                            dark
                                            max-width="10"
                                            max-height="10"
                                            ></v-btn></p>
                                    <p class="mb-1 grey--text">Estimated Delivery before {{ getDeliveryDay(item) | formatDateWithoutTime}}</p>
                                    <v-row class="align-left">
                                        <v-col cols="2" sm="2" md="2" lg="2" class="ma-0 pa-0 mt-2 pl-2">
                                            <span><v-btn @click.prevent="decrementByOne(item)" fab x-small outlined color="grey" ><v-icon small dark>mdi-minus</v-icon></v-btn></span>
                                        </v-col>
                                        <v-col cols="3" sm="3" md="3" lg="3" class="ma-0 pa-0 mt-1">
                                            <span><v-text-field outlined dense hide-details min="1" type="number" v-model="index[item._id]" v-on:input="onQuantityChanged(item._id)"></v-text-field></span>
                                        </v-col>
                                        <v-col cols="2" sm="2" md="2" lg="2" class="border-right ma-0 pa-0 mt-2 pl-2">
                                            <span><v-btn @click.prevent="incrementByOne(item)" fab x-small outlined color="green" ><v-icon small dark>mdi-plus</v-icon></v-btn></span>
                                        </v-col>
                                        <v-col cols="2" sm="2" md="2" lg="2" class="ma-0 pa-0 mt-2 pl-2">
                                            <v-btn @click.prevent="deleteItemFromcart(item._id, item.user_id, item.name)" fab outlined x-small color="red" ><v-icon small dark>mdi-delete</v-icon></v-btn> 
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col>
                <v-card outlined class="px-2 py-2 mt-4">
                <v-card-title class="teal--text">Price Details</v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="6" class="title font-weight-bold px-0 py-0">
                            {{"Subtotal ("+cartCount+" items)"}}
                        </v-col>
                        <v-col cols="6" class="title font-weight-bold px-0 py-0">
                            {{get_price_formated(totalPrice)}}
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="text-right">
                            <v-btn class="mr-4" color="primary" @click.prevent="$router.push('/checkout')">Check Out</v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
                </v-card>
            </v-col>
        </v-row>    
    </v-container>
  </v-layout>
</template>



<script>

export default {

  components: {},

  data () {
      return {
        cart:{},
        index:[],
        selected: [],
        toggled:false,
        numbers:['1','2','3','4','5'],
        test:'',
        headers: [
            { text: 'Product', value: 'image'},
            { text: 'Details', value: 'name'},
            {text: 'Delivery Info',   value:'delivery'},
            {text: 'Action', value:'action'}
        ],
      }
  },
  computed:{
    cartCount() {
        return this.$store.getters.getCartCount
    },
    cartDetails(){
        if(this.$store.getters.getCart != null){
            for (var cart of this.$store.getters.getCart) {
                this.index[cart._id] = cart.quantity
            }
        }
        return this.$store.getters.getCart
    },
    totalPrice(){
        return this.$store.getters.getTotalPriceOnCart
    }
  },
  methods:{
    get_price_formated(price){
        if(price === undefined || price == '' || price == '-'){
            return ""
        }
        else {
            let amountFormatter = function(value) {
            return parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            }
            return "AED " + amountFormatter(price)
        }
    },
    checkExist(event){
        let value = event.target.value
    },
    getDeliveryDay(product){
        let days = product.estimated_days || 20
        let myDate = new Date(new Date().getTime()+(days*24*60*60*1000));
        return myDate
    },
    decrementByOne(product){
        if(product.quantity > 1){
            product["quantity"] = product.quantity - 1
            if(product["quantity"] > 0){
                product["update"] = true
                this.$store.dispatch("addToCart", product)
            }
        }
    },
    incrementByOne(product){
        product["quantity"] = parseInt(product.quantity) + 1
        if(product["quantity"] > 0){
            product["update"] = true
            this.$store.dispatch("addToCart", product)
        }
    },
    onQuantityChanged(id){
        let product
        if(this.$store.getters.getCart != null){
            for (var cart of this.$store.getters.getCart) {
                if(cart._id === id){
                    product = cart
                    break
                }
            }
        }
        let new_quantity = parseInt(this.index[id])
        if(Number.isInteger(new_quantity) && new_quantity > 0){
            product["quantity"] = new_quantity
        }

        product["update"] = true
        if(product["quantity"] > 0){
            this.$store.dispatch("addToCart", product)
        }
    },
    product_name_id(product) {
        if(product.product_type == "Scanners"){
            return `/product/${product.brand.split('/').join('%2F')}/scanners/${product.name.split('/').join('%2F')}`
        }
        else if(product.product_type == "Printer"){
            return `/product/${product.brand.split('/').join('%2F')}/printer/${product.name.split('/').join('%2F')}`
        }
        else if(product.product_type == "Post Processing"){
            return `/product/${product.brand.split('/').join('%2F')}/post-processing/${product.name.split('/').join('%2F')}`
        }
        else if(product.product_type == "Filaments"){
            return `/product/${product.brand.split('/').join('%2F')}/filaments/${product.name.split('/').join('%2F')}`
        }
        else if(product.product_type == "Parts & Accessories"){
            return `/product/${product.brand.split('/').join('%2F')}/parts-accessories/${product.name.split('/').join('%2F')}`
        }
    },
    async deleteItemFromcart(id, user_id, product_name){
        if(confirm("Are you sure you want to delete this item from your cart?")){

        if (this.$store.getters.isAuthenticated) {
            await this.$axios.$delete('/carts/delete/'+id, this.$store.getters.getHeaders)
            .then(res => {
                this.$axios.$get("/carts/" + user_id, this.$store.getters.getHeaders)
                .then((res) => {
                this.$store.commit("setCart", res);
                })
                .catch((e) => console.log(e));
            })
            .catch((err) => {
                console.log("err here " + err);
            })
        }
        else{
            let cartFromLocalStoarge = JSON.parse(localStorage.getItem("cart-info")) || []
            for (var i = cartFromLocalStoarge.length - 1; i >= 0; i--) {
                if(product_name === cartFromLocalStoarge[i].name){
                    cartFromLocalStoarge.splice(i, 1);
                    localStorage.setItem('cart-info', JSON.stringify(cartFromLocalStoarge));
                    this.$store.commit("setCart", JSON.parse(localStorage.getItem("cart-info")))
                    break;
                }
            }

        }
        }
    },
    }
}

</script>

 

<style scoped>
.border-right {
    border-right: 1px solid #ddd;
}

.v-messages {
    color: red !important;
}

.v-text-field{
      min-width: 50px;
}
</style>








