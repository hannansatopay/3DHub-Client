<template>
  <v-app>
    <Header />
    <v-container class="pa-0" fluid>
      <nuxt />
    </v-container>
    <FooterTop />
    <FooterLink v-if="GetContents.is_footer_links_active === true" />
    <Footer />
    
  </v-app>
</template>

<script>
import Header from "~/components/shared/header/header";
import Footer from "~/components/shared/footer/footer";
import FooterTop from "~/components/shared/footer/footer-top";
import FooterLink from "~/components/shared/footer/footer-links";


export default {
  components: {
    Header,
    FooterTop,
    Footer,
    FooterLink
  },

  computed: {
   GetContents() {
      return this.$store.state.contents[0].labels.en;
    },
  },
};
</script>