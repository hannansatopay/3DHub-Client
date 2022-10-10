<template>
  <v-container>
    <v-row >
      <v-col cols="12" sm="12" md="12" lg="12" >    
        <v-card  v-for="(order_detail, item_index) in order_details" :key="item_index" class="pa-5 mt-5">
          <v-row>
            <v-col cols="12" sm="4">
              <v-img height="250" :src="order_detail.image.url" contain/>
            </v-col>
            <v-col cols="12" sm="4" class="px-10 pt-5">
              <h4 class="pb-3">{{order_detail.brand}} - {{order_detail.name}}</h4>
              <p v-if="order_detail.product_type === 'Parts & Accessories'" class="caption mb-0">Part Type: <span class="font-weight-bold">{{order_detail.part_type}}</span></p>
              <p v-else class="caption mb-0">Product Type: <span class="font-weight-bold">{{order_detail.product_type}}</span></p>
              <p class="caption mb-0" >Quantity: <span class="font-weight-bold">{{order_detail.quantity}}</span></p>
              <p class="caption mb-0" v-if="order_detail.material_type != ''">Material Type: <span class="font-weight-bold px-1" v-for="material in order_detail.material_type" :key="material.id">{{material}}</span></p>
              <p class="caption mb-0" v-if="order_detail.dimension.width != ''">Width: <span class="font-weight-bold">{{order_detail.dimension.width}}</span></p>
              <p class="caption mb-0" v-if="order_detail.dimension.height != ''">Height: <span class="font-weight-bold">{{order_detail.dimension.height}}</span></p>
              <p class="caption mb-0" v-if="order_detail.dimension.length != ''">Length: <span class="font-weight-bold">{{order_detail.dimension.length}}</span></p>
              <p class="caption mb-0" v-if="order_detail.dimension.weight != ''">
                  Weight: <span class="font-weight-bold" v-for="weight in order_detail.dimension.weight" :key="weight.id">{{weight}}</span>
              </p>
              <p class="caption mb-0" v-if="order_detail.product_type === 'Filaments' && order_detail.dimension.diameter != ''">
                  Diameter: <span class="font-weight-bold mx-1" v-for="diameter in order_detail.dimension.diameter" :key="diameter.id">{{diameter}}</span>
              </p>
              <p class="caption mb-0" v-if="order_detail.hasOwnProperty('color_code')" >{{"Color: "}}<v-btn 
                      class="colors ma-1 ma-0 pa-0"
                      x-small
                      fab
                      :color="order_detail.color_code"
                      dark
                      max-width="10"
                      max-height="10"
                      ></v-btn>
              </p>
              <h4 class="pt-2 teal--text">Price: {{get_price_formated(order_detail.price*order_detail.quantity)}}</h4>
            </v-col>
            <v-col cols="12" sm="4" class="pa-0 pt-5">
              <v-container class="my-0 mx-0 pa-0">
                <v-timeline horizontal align-top dense class="my-0">
                  <v-timeline-item v-for="(n,index) in order_detail.status_info" :key="index" :color="color(n.status, order_detail.status)" large>
                    <v-card width="200">
                      <v-card-title>{{n.status}}</v-card-title>
                      <v-card-text>{{n.date | formatDateWithoutTime}}</v-card-text>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-container>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="12">
        <v-card outlined class="px-4 py-4">
              <v-card-title class="teal--text">Price Details</v-card-title>
              <v-card-text>
                  <v-row>
                      <v-col class="title font-weight-bold">
                          {{"Product Price "}}
                      </v-col>
                      <v-col class="title font-weight-bold">
                          {{get_price_formated(order_details[0].payment_info.item_price)}}
                      </v-col>
                  </v-row>

                   <v-row v-if='order_details[0].payment_info.discount_value != null '>
                      <v-col class="title font-weight-bold" v-if="order_details[0].payment_info.discount_type == 'Percentage'" >
                          {{"Discount"}}
                      </v-col>
                      <v-col class="title font-weight-bold">
                          {{"-"+get_price_formated(order_details[0].payment_info.discount_amount) }}
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col class="title font-weight-bold">
                          {{"Shipping charges"}}
                      </v-col>
                      <v-col class="title font-weight-bold">
                          {{get_price_formated(order_details[0].payment_info.shipping_charges)}}
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col class="title font-weight-bold">
                          Total Price Paid
                      </v-col>
                      <v-col class="title font-weight-bold">
                          {{get_price_formated(order_details[0].payment_info.total_price)}}
                      </v-col>
                  </v-row>
              </v-card-text>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
   async asyncData({app, store}) {
        let data = await app.$axios.$get("/orders/order/" + app.context.params.id)
        return {
            order_details: data,
        }
    }, 
  data() {
    return {
      tabs: null,
      status_info:[
        {status: "Ordered", date:'01-01-2020',summary:'ordered successfully.'},
        {status: "Packed",date:'04-01-2020',summary:'packed at...'},
        {status: "Shipped",date:'05-01-2020',summary:'shipping info'},
        {status: "Delivered",date:'30-01-2020',summary:'delivery info'}
      ],
    };
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
      color(status, current_status){
        return 'cyan'
      },
    },
};
</script>

<style lang="scss" scoped>

.vertical-timeline.vertical-timeline-custom-line::before {
  background: #e21d1d;
}

</style>