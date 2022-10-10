<template>
  <div>
    <v-container>
      <!-- visible for small screen -->
      <v-row class="">
       <!-- <v-col class="pb-0 pt-4" lg="2" cols="2">
          <div class="sidebar">
            <h1>Filters</h1>
          </div>
        </v-col>
        <br />-->

        <v-col class="pb-0 pt-4" lg="12" cols="12">
          <div class="result-bar">
            <v-row class="px-0 mt-2">
              <v-col>
                <p>Search Results for > {{ getSerachedKeywors }}</p></v-col
              >
            </v-row>
          </div>
          <div class="result-container">
            <v-row class="px-0 mt-2">
              <v-col
                cols="6"
                sm="3"
                lg="3"
                xl="2"
                v-for="(product, index) in GetAllProducts"
                :key="index"
                class="px-0 py-2"
              >
                <ProductTile :product="product" />
              </v-col>
            </v-row>
            <v-row v-if="GetAllProducts == ''">
              <v-col>
                <p class="body-1 text-center">
                  Sorry! No results found! Please try a different search result!
                </p>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ProductTile from "~/components/product/tile";

export default {
  data() {
    return {
      productSelect: "",
      productTypeSelect: "",
      brandSelect: "",
      industrySelect: "",
      searchList: "",
      searchKey: "",
      max_price: "",
      min_price: "",
      weight: "",
      diameter: "",
      color: "",
      counter: 0,
      product: "",
      
    };
  },
  components: { ProductTile },
  props: ["title", "keyword"],
  computed: {
    randomProducts() {
      let products = _.shuffle(this.$store.getters.getProducts);
      return products;
    },

    getSerachedKeywors() {
      return this.$store.state.searchKeyword;
    },

    GetAllProducts() {
     
       // this.$store.dispatch("SearchProducts",this.getSerachedKeywors);
        return this.$store.getters.getSearchResults;
    },
  },
  async created(){
      //this.$store.dispatch("SearchProducts",this.getSerachedKeywors);

  }
};
</script>

<style  scoped>
.sidebar {
  border: 1px solid #ddd;
}

.result-bar {
  border: 1px solid #ddd;

  padding:10px;
}

.result-container {
  border: 1px solid #ddd;

  padding:10px;
}
</style>

