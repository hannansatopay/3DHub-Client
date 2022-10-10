<template>
  <div>
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-01_tAEk3CQyAl.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Aerospace & Aviation'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-02_v7Ck51KVze.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Architecture & Construction'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-03_iZNulF1te.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Automotive'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-04_3yGCblgs0g.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Food'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-05_uAlRlKVSQ0.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Consumer goods'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-06_Ld9-QXwwO.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Education'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-07_tTYUicEbi.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Jewelry'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-08_KLkZON6rW.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Manufacturing'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-09_YtqXPcvFb.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Medical & Dental'"
    />
    <v-img
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Industry_Banners-10_VimUXrXUF.jpg"
      height="290"
      position="center center"
      v-if="$route.params.id == 'Oil & Gas'"
    />
    <v-container>
      <SearchToolBar class="ml-sm-2" />

      <div class="my-5 my-sm-12">
        <v-row>
          <v-col>
            <a class="text-decoration-underline" v-on:click="goBack()"
              >Previous Page</a
            >
          </v-col>
        </v-row>
       <!-- <p class="caption mb-0">Industry Application</p>-->
       <p class="caption mb-0">&nbsp;</p>
       
        <h2 class="title font-weight-bold mb-2">{{ $route.params.id }}</h2>
        <div v-html="getIndustries"></div>
        <br>
        <v-divider />
        <v-row class="px-0 mt-5" v-if="getPrinterProducts != ''">
          <v-col
            cols="6"
            sm="2"
            v-for="product in getPrinterProducts"
            :key="product._id"
            class="px-0 my-5"
          >
            <ProductTile :product="product" />
          </v-col>
        </v-row>
        <v-row class="mt-5" v-else>
          <v-col cols="12"> Sorry, No Product Found. </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import SearchToolBar from "~/components/searchtoolbar";
import ProductTile from "~/components/product/tile";


export default {
  components: { SearchToolBar, ProductTile },
  methods: {
    goBack() {
      window.history.back();
    },
  },
  computed: {
    getPrinterProducts() {
     // let products2 = this.$store.getters.getProducts;
     // console.log(products2);
      let products = this.$store.getters.getProducts.filter((a) =>
        a.industry.includes(this.$route.params.id)  && a.price
      );
      return products;
    },
    getIndustries() {
      let Industries = this.$store.getters.getIndustries.filter((a) =>
        a.industry_name.includes(this.$route.params.id)
      );
      //return products
      console.log("industry");
      console.log(Industries[0].discription);      
     return Industries[0].discription;
    }, //
  },
 
};
</script>