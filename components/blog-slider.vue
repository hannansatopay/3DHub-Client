<template>
<div>

  <H1 text="3D Insights" />

  <v-container>
    <client-only>
      <VueSlickCarousel
        class="mt-3"
        ref="slick"
        v-bind="settings"
      >
              <v-container>
            <v-row class="mb-3">
                <v-col cols="12">
                    <v-divider/>
                </v-col>
            </v-row>
            <v-row class="news-block">
                <v-col cols="12" sm="4">
                    <div class="position-relative">
                      <img width="100%" height="200" position="center center" class="rounded-lg" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/dubai_3d_startegy__Hapn-2ZIBX.jpg" />
                      <span class="caption mt-3 mb-1">12 June 2020</span>
                    </div>
                    <h3 class="mb-4"><a href="https://www.dubaifuture.gov.ae/our-initiatives/dubai-3d-printing-strategy/" target="_blank">Dubai is set to become the world’s leading 3D printing Hub with the newly launched 3D printing strategic Alliance</a></h3>
                </v-col>
                <v-col cols="12" sm="4">
                    <div class="position-relative">
                      <img width="100%" height="200" position="center center" class="rounded-lg" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/2_storey_3d__r3p65m12L.jpg" />
                      <span class="caption mt-3 mb-1">12 June 2020</span>
                    </div>
                    <h3 class="mb-4"><a href="https://www.3dprintingmedia.network/dubai-largest-3d-printed-two-storey-building/" target="_blank">Dubai unveils world’s largest 3D printed two-storey building</a></h3>
                </v-col>
                <v-col cols="12" sm="4">
                    <div class="position-relative">
                      <img width="100%" height="200" position="center center" class="rounded-lg" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3d-printed-observation-tower_8XBiPM64Fj.jpg" />
                      <span class="caption mt-3 mb-1">12 June 2020</span>
                    </div>
                    <h3 class="mb-4"><a href="https://www.3dnatives.com/en/3d-printed-tower-in-dubai-220620205/" target="_blank">3D Printed Observation Tower in Dubai’s Desert</a></h3>
                </v-col>
            </v-row>
        </v-container> 
      </VueSlickCarousel>
    </client-only>
  </v-container>

  <v-container class="text-center">
      <v-btn @click.prevent="$router.push('/blog')" v-on="on" large depressed color="primary">View More</v-btn>
  </v-container>
</div>
</template>


<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import H1 from '~/components/heading-style-a';
import ProductTile from "~/components/product/tile";

export default {
  data() {
    return {
      settings: {
        dots: false,
        focusOnSelect: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 5,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },

  components: { VueSlickCarousel, ProductTile, H1 },
  props: ["title", "items"],
  methods:{
     truncateString(str, num) {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + "...";
    }
  },
};
</script>

<style lang="scss" scoped>
.slider-card {
  width: 650px;
  margin: 12px;
}
.read-more {
  color: #009688 !important;
}
.product-title {
  line-height: 1.2;
  word-break: break-word;
}

.v-card__subtitle{
      display: block;
  }
  

@media (max-width: 480px) {
  .slider-card {
    width: 190px;
  }
  .product-title {
    height: 70px;
  }
  .v-card__title{
      line-height: 18px;
      font-size: 15px;
      margin-top:18px;
  }
  .v-card__subtitle{
      display: none;
  }
 
}

a {
  font-family: 'Nunito';
  text-decoration: none;
  color: black;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
}

.caption {
  background: #EBFFEE;
    border-radius: 20px;
    padding: 5px 10px;
    color: #747474;
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
}
</style>