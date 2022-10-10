<template>
 <v-container class="why">

 <H1 text="Why Choose3D Hub"/>
      
        <v-tabs vertical>
          <v-card>
            <h4>Our Core Strengths</h4>
            <v-tab>
              1. Technology Driven
            </v-tab>
            <v-tab>
              2. Customized Solutions
            </v-tab>
          </v-card>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <h4 class="ma-0 mb-2">Technology Driven</h4>
                <p>
                  3D Hub is a technologically driven company that offers the best in Additive Manufacturing. We always stay updated with the current market trends.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <h4 class="ma-0 mb-2">Customized Solutions</h4>
                <p>
                  We provide turnkey solutions, from "Identifying the need" to "Delivering the end product" seamlessly to the utmost satisfaction of the customer.
                </p>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      
    </v-container>
</template>
<script>
import H1 from '~/components/heading-style-a';
export default {
  components: {
    H1
  },
};
</script>

    <style lang="scss">

    .why {

      .v-slide-group {
  width: 50%;
  padding: 10px;
}

      @media (max-width: 991.98px) {
        .v-tabs {
          flex-direction: column;
        }

        .v-slide-group {
          width: 100%;  
        }
        
        .v-slide-group__content {
          padding: 0px!important;
        }

        .v-item-group {
          padding: 0px;
          margin-bottom: 20px;
        }

        h4 {
          font-size: 24px!important;
        }

        .v-tab {
          font-size: 18px!important;
        }

        .v-card {
          padding: 20px 0px!important;
        }
      }



.v-tab:before {
  content: none!important;
}

.v-tab {
width: 100%;
    max-width: 100%;
    padding: 30px;
        font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 38px;
justify-content: flex-start;
}

.v-tab--active {
  background: #009688;
    border-radius: 20px;
    color: white!important;
}

.v-card {
  background: #FFFFFF;
border: 1px solid #C4C4C4;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1)!important;
border-radius: 20px!important;
padding: 40px 0px;
}

.v-slide-group__content {
  padding: 10px;
}

.v-tabs-slider-wrapper {
  display: none;
}

h4 {
  margin: 20px;
    font-weight: 600;
  font-size: 30px;
  line-height: 48px;
  color: black;
}

.v-card.v-card--flat {
  box-shadow: none!important;
  border: 0px;
}

    }
</style>