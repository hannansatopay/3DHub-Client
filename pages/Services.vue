<template>
    <div>

        <div class="background-header pa-10 text-center">
            <v-container class="pa-10">
                <h2 class="text-white">Your 3D Printing Manufacturer</h2>
                <p class="text-white mt-4">On-demand manufacturing and rapid prototyping. Get your designs created by the best 3D printers avaiable in the market and delivered at your doorstep.</p>
                <v-btn class="px-4">Get a quote</v-btn>
            </v-container>
        </div>

        <H1 text="Services" />

        <v-container>
            <v-row class="industries">
                <v-col md="4" sm="12" class="pa-2" v-for="service in getServices">
                    <div class="card text-center" @click.prevent="view(service.name)">
                        <img :src="service.image" />
                        <h3 class="mt-4">{{service.name}}</h3>
                        <p class="mt-4 text-center" v-html="truncateString(service.description, 150)"></p>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <H1 text="How it works" />

        <v-container>
            <v-row>
                <v-col md="3" sm="12">
                    <div class="text-center circle">
                        <div>
                            <h4 class="mb-2">Submit your designs</h4>
                            <p class="mb-0">Submit your STL file and fill in our quick quote page.</p>
                        </div>
                        <img class="green" src="https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Group_2Jg2ocv6Q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659091425200" width="60">
                    </div>
                </v-col>
                <v-col md="3" sm="12">
                    <div class="text-center circle">
                        <div>
                            <h4 class="mb-2">Get the Quote</h4>
                            <p class="mb-0">Once your file is submitted, we guarantee a quick quote and feedback from one of our representatives.</p>
                        </div>
                        <img class="orange" src="https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Group_2Jg2ocv6Q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659091425200" width="60">
                    </div>
                </v-col>
                <v-col md="3" sm="12">
                    <div class="text-center circle">
                        <div>
                            <h4 class="mb-2">Initiate Manufacturing Process</h4>
                            <p class="mb-0">The best manufacturer in our quality-vetted network will start producing your design straight away.</p>
                        </div>
                        <img class="green" src="https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Group_2Jg2ocv6Q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659091425200" width="60">
                    </div>
                </v-col>
                <v-col md="3" sm="12">
                    <div class="text-center circle">
                        <div>
                            <h4 class="mb-2">At your Door Delivery</h4>
                            <p class="mb-0">We handle all logistics and communications, guaranteeing your part arrives on time.</p>
                        </div>
                        <img class="orange" src="https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Group_2Jg2ocv6Q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659091425200" width="60">
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <Faq />
    </div>
</template>
<script>
import Faq from '~/components/faq.vue';
import H1 from '~/components/heading-style-a';
export default {
components: { Faq, H1 },
  computed: {
    getServices(){
        return this.$store.getters.getServices.sort((a,b) => a['order'] - b['order']);
    },
  },
  methods: {
    async view(title) {
      this.$router.push({path: '/services/'+title})
    },
    truncateString(str, num) {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + "...";
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 991.98px) {
  .row {
    flex-direction: column;
  }
}

.background-header {
    background: url(https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Group_8271_tAsgsU_RF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661493143636);
    background-size: cover;
}

.card {
  padding: 18px;
  transition: 0.3s;
  cursor: pointer;
}

.card:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 44px;
  transform: scale(1.02);
}

.row {
    justify-content: center;
}

h2 {
    font-weight: 600;
    font-size: 50px;
    line-height: 58px;
}

h3 {
    font-size: 22px;
    line-height: 58px;
}

img {
    filter: drop-shadow(0px 6px 31px rgba(0, 0, 0, 0.12));
    border-radius: 44px;
}

.card img {
    width: 100%;
}

.circle {
    background: url('https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Group_8196_TC3g4pg0I.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659090604019');
    height: 0;
    padding-top: 100%;
    background-position: center;
    position: relative;
    background-size: 99%;
    background-repeat: no-repeat;

    div {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    img {
        position: absolute;
        left: 60px;
        bottom: 0;
        z-index: 9;
        border-radius: 50%;
        padding: 10px;
    }

    img.green {
        background: #009688;
    }

    img.orange {
        background: #FF7A00;
    }
}
</style>