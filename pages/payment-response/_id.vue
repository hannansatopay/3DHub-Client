<template>
  <v-container>
    <v-card>
      <v-alert :value="isPaymentSuccess" color="green" dense type="success">
        <strong>Thank you, your payment has been accepted.</strong>
      </v-alert>
      
      <v-alert
        :value="paymentFailed"
        color="red"
        dense
        type="error"
        transition="scale-transition"
      >
        {{ "Sorry, " + paymentFailMessage + ", Please try again." }}
      </v-alert>
      <v-row v-if="paymentFailed">
        <v-col class="text-right">
          <v-btn
            class="mr-4"
            color="primary"
            @click.prevent="redirectToCheckout"
            >Try again</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
    layout: 'login',
    mounted() {
        this.getStatus() 
    },
    data() {
        return {
          isPaymentSuccess: false,
          paymentFailed:false,
          paymentFailMessage:''
        };
    },
    methods:{

      redirectToCheckout(){
     //$router.push('/checkout')
      window.location.href="/checkout";
     
      },


     
    /*  async getStatus(){
        let ref = this.$route.query.ref
         let user_id;

            await this.$axios.$get("/orders/order/" + ref, this.$store.getters.getHeaders)
                .then((res2) => {
                       user_id=res2.user_id;        
                     })
                .catch((e) => console.log(e));
                
                
        let abc = await this.$axios.$get("/checkout/status/"+ref)
          .then(res1 => {
            this.isPaymentSuccess = true
           let user = JSON.parse(localStorage.getItem("usr"));
          

                    this.$axios.$get("/carts/" + user._id, this.$store.getters.getHeaders)
                .then((res2) => {
                        this.$store.commit("setCart", res2);
                        setTimeout(()=> {
                            this.$router.push('/orders')
                        }, 4000)
                     })
                .catch((e) => console.log(e));
          
          }).catch((error) => {
            if (error.response) {
                this.paymentFailMessage = error.response.data.message
            }
            else{
                this.paymentFailMessage = error.message
            }
            this.paymentFailed = true
            // this.$router.push('/checkout');
        });
      }
    }*/

     async getStatus(){
        let ref = this.$route.query.ref
        let abc = await this.$axios.$get("/checkout/status/"+ref)
          .then(res1 => {
            this.isPaymentSuccess = true
            let user = JSON.parse(localStorage.getItem("usr"));
            this.$axios.$get("/carts/" + user._id, this.$store.getters.getHeaders)
                .then((res2) => {
                        this.$store.commit("setCart", res2)
                        setTimeout(()=> {
                            //this.$router.push('/orders')
                             window.location.href="/orders";
                        }, 4000)
                     })
                .catch((e) => console.log(e));
          }).catch((error) => {
            if (error.response) {
                this.paymentFailMessage = error.response.data.message
            }
            else{
                this.paymentFailMessage = error.message
            }
            this.paymentFailed = true
            // this.$router.push('/checkout');
        });
      }
    }
}
</script>