<template>
  <v-layout column justify-center align-center>
    <v-container>
      <v-dialog v-model="loginDialog" v-if="!isAuth" width="500">
          <v-card class="pt-2 pb-2" flat>
              <v-tabs v-model="tabs" centered>
              <v-tab>Sign In</v-tab>
              <v-tab>Sign Up</v-tab>
              </v-tabs>
              <v-tabs-items v-model="tabs">
                  <v-tab-item><Login v-on:close-dialog="closeDialog" v-bind:signIn="true" v-bind:redirect="false" /></v-tab-item>
                  <v-tab-item><Login v-on:close-dialog="closeDialog" v-bind:signIn="false" v-bind:redirect="false"/></v-tab-item>
              </v-tabs-items>
          </v-card>
      </v-dialog>
      <v-row no-gutters class="mb-5 mt-4">
          <v-col cols="12" sm="6" md="10" xl="10">
              <h3 class="headline ml-2 text-center text-sm-left text-md-left text-lg-left text-xl-left">My Orders</h3>
              <p v-if="order_detail.length < 1" class=" mt-4 ml-2 text-center text-sm-left text-md-left text-lg-left text-xl-left"> You have no orders to show</p>
          </v-col>
      </v-row>
      <v-row v-if="order_detail.length > 0">
        <v-col cols="12" sm="12" md="12" lg="12"  >
          <v-card class="px-4">
            <v-card-title>
                <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="unique_orders"
                :search="search"
                :sort-by="['ordered_date']"
                :sort-desc="[true]"
                :hide-default-footer="true"
            >
            
            <template v-slot:[`item.ordered_date`]="{ item }">
                {{ item.ordered_date | formatDateBell }}
            </template>

            <template v-slot:[`item.name`]="{ item }">
                {{ getNamesforTheRefId(item.reference_id) }}
            </template>

            <template v-slot:[`item.payment_info.total_price`]="{ item }">
               {{get_price_formated(item.payment_info.total_price)}}
            </template>

            <template v-slot:[`item.action`]="{ item }">
              <div class="p-2">
                <v-btn label="view" depressed dark small color="cyan" @click.prevent="viewOrder(item.reference_id)">View Details</v-btn>
              </div>
            </template>

            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>


import Login from '~/components/login'

export default {
    mounted() {
      
        this.getUser1(),
        this.checkUserSession(),
        this.getOrderDetails()
        // this.getUniqueOrders()
    },

  components: {Login},

  data () {
      return {
        search: '',
        session_user:{},
        order_detail:[],
        selected: [],
        headers: [
          {text: 'Order ID', value: 'reference_id'},
          {text: 'Product', value: 'name'},
          {text: 'Date', value: 'ordered_date'},
          {text: 'Price', value: 'payment_info.total_price'},
          {text: 'Action',  value:'action'},
        ],
        isAuth: true,
        tabs: null,
        loginDialog: false,
        }
  },
  methods:{
    getNamesforTheRefId(ref_id){
      let name = '' 
      for( var order of this.order_detail){
        if(order.reference_id === ref_id){
          if(name === ''){
            name = order.name
          }
          else{
            name = name + ", " + order.name
          }
        }
      }
      console.log(" final name ", name)
      return name
    },
    getUser1(){
      console.log('it works dude');
          this.session_user = JSON.parse(localStorage.getItem("usr"));
    },
    async getOrderDetails(){
      if(this.session_user !== undefined && this.session_user !== null){
        let data = await this.$axios.$get("/orders/" + this.session_user._id, this.$store.getters.getHeaders)
        .then(res => {
          this.order_detail = res
          this.unique_orders = _.uniqBy(this.order_detail,'reference_id')
          })
        .catch()
      }
    },
    checkUserSession(){
          if (!this.$store.getters.isAuthenticated) {
              this.isAuth = false
              this.loginDialog = true
          }
    },
    async closeDialog(){
          this.loginDialog = false
          if(this.$store.getters.isAuthenticated){
              let user = JSON.parse(localStorage.getItem("usr"));
              this.order_detail = await app.$axios.$get("/orders/" + user._id, this.$store.getters.getHeaders)
          }
    },
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
    viewOrder(id) {
        this.$router.push("/orders/view/" + id)
    },
    findLastUpdatedStatus(status_info){
      let text
      for (var data of status_info) {
          text = data.status
      }
      return text
    
    },
    findLastUpdatedDate(status_info){
      let text
      for (var data of status_info) {
          text = data.date
      }
      return text
    },

  }
}

</script>

 

<style scoped>

.v-messages {

    color: red !important;

}

</style>