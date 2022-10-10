<template>
  <div class="mb-10">
    <v-img
      height="290"
      position="center center"
      class="d-none d-sm-block"
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-07_Ka1-4qY74.jpg"
    />
    <v-img
      class="d-block d-sm-none"
      src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-08_PvVEruTZ2.jpg"
    />
    <v-container>
      <!-- FAQ section -->
      <v-container class="my-5">
        <h1 class="mt-5 pa-5 heading-b text-center font-bold">FAQ</h1>
        <p class="body-1 text-center mb-10">
          We follow a simple 4 step process which delivers the product at your
          doorstep
        </p>

        <v-row>
          <v-col>
            <v-expansion-panels accordion>
              <v-expansion-panel v-for="(item, i) in faq" :key="i">
                <v-expansion-panel-header>{{item.question}}</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  {{item.answer}}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>


<script>
import SearchToolBar from "~/components/searchtoolbar";
export default {
  async asyncData({ app }) {
    let faq = await app.$axios.$get("/faq/all");

    return {
      faq,
    };
  },

  data: {
    faq: [],
  },

  methods: {
    goBack() {
      window.history.back();
    },
  },
  computed: {
    materialTypeSort() {
      return _.sortBy(this.$store.getters.getMaterialType, ["material_name"]);
    },
  },
  components: {
    SearchToolBar,
  },
};
</script>


