<template>
  <div id="search-box">
    <form action="/search" id="search-form" method="get" target="_top">
      <input
        id="search-text"
        name="q"
        placeholder="Search"
        v-model="keyword"
        @change="HandleSearch"
        type="text"
      />
      <input
        type="submit"
        @click.prevent="SearchProducts"
        class="search-button"
        value="Search"
      />
      <span></span>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  computed: {},
  components: {},
  props: [],
  methods: {
    HandleSearch() {
      console.log(this.keyword);

      this.$store.commit("SetKeyword", this.keyword);
      // this.$store.dispatch("SearchProducts",this.keyword);
    },
    SearchProducts() {
      console.log(this.keyword);
      let res = this.$store.dispatch("SearchProducts", this.keyword);
      if (res) {
        this.$router.push("/search-new/");
      }
    },
  },
};
</script>

<style  scoped>
@media only screen and (max-width: 64em) {
  #search-box {
    display: none;
  }
}

@media only screen and (min-width: 160em) {
  #search-box {
    display: block;
    min-width: 500px !important;
  }
}

@media only screen and (min-width: 120em) {
  /* CSS rules here */
  #search-box {
    min-width: 600px !important;
  }
}

#search-box {
  position: relative;
  width: auto;
  overflow: hidden;
  height: 40px;
  padding: 0px;
  background: #fff !important;
  border-radius: 0px !important;
  border-right: 0;
  border-radius: 3px 0 0 3px;
  min-width: 250px;
}

#search-text {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  padding: 11px 10px 11px 0;
  line-height: 18px;
  font-size: 13px;
  border: 0;
  font-family: arial;
}
.search-button {
  position: absolute;
  z-index: 5;
  right: 0;
  top: 0;
  width: 70px;
  height: 40px;
  background: #d6d6d6  !important;
  border-radius: 0 3px 3px 0;
  color: #000;
  padding: 6px;
  
}
</style>