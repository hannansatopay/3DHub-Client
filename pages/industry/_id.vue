P<template>
  <div>

    <div class="background-header pa-10 text-center">
        <v-container class="pa-10">
            <h2 class="text-white">{{ $route.params.id }}</h2>
            <div class="text-white mt-4" v-html="industry.description"></div>
        </v-container>
    </div>

    <Advantages :data="industry.features"/>

    <div class="spacer"></div>

    <Technology />

    <div class="spacer"></div>

<Why />

<div class="spacer"></div>
   

    <Faq />
  </div>
</template>

<script>
import Technology from '../../components/technology.vue';
import Faq from '~/components/faq.vue';
import Why from '../../components/why.vue';
import H1 from '~/components/heading-style-a';
import Advantages from '~/components/advantages.vue';

export default {
  components: { Advantages, Technology, Faq, Why, H1 },
  data() {
    return {
      industry: {}
    }
  },
  mounted() {
    let industries = this.$store.getters.getIndustries.filter((a) =>
      a.name.includes(this.$route.params.id)
    )[0];
    this.industry = industries;
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>

</style>

<style>
.background-header {
    background: url(https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8271_tAsgsU_RF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661493143636);
    background-size: cover;
}

.bg-green {
  background: #E0F3F2;
}

</style>
