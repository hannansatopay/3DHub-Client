<template>
    <div>

      <v-container class="mt-5">
      <v-row class="inverse mt-2">
        <v-col cols="12" sm="8">
          <h2 class="mb-3">{{service.name}}</h2>
          <div v-html="service.description"></div>
          <v-btn v-on="on" large depressed class="mt-4" @click.prevent="$router.push('/service')">Get a quote</v-btn>
        </v-col>
        <v-col cols="12" sm="4" class="">
          <img :src="service.image" width="100%" class="rounded-lg" :class="`elevation-${hover ? 24 : 6}`" />
        </v-col>
      </v-row>
    </v-container>

    <div class="spacer"></div>

    <v-container>
      <div v-html="service.details"></div>
    </v-container>

    <div class="spacer"></div>

    <Technology :service="service"/>

    <H1 text="Industries" />
    <Industry :service="service"/>

   <Why/>

    <Faq/>
    </div>
</template>

<script>
import H1 from '~/components/heading-style-a';
import Technology from "~/components/technology.vue";
import Industry from "~/components/industry.vue";
import Faq from '~/components/faq.vue';
import Why from '~/components/why.vue';

export default {
    components: { Technology, Industry, H1, Faq, Why },
    data() {
      return {
        service: {}
      }
    },
     mounted() {
        let services = this.$store.getters.getServices.filter((a) =>
          a.name.includes(this.$route.params.id)
        )[0];
        this.service = services;
        console.log("Service", this.service);
      },
}
</script>

<style lang="scss" scoped>
.background-header {
    background: url(https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Group_8271_tAsgsU_RF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661493143636);
    background-size: cover;
}
</style>