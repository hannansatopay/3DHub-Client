<template>
  <div>
    <div class="black">
      <v-container>
        <v-row>
          <br />
        </v-row>
      </v-container>
    </div>
    <div class="black">
      <v-container>
        <v-row>
          <!--FOOTER START COLOUMS-->
          <v-col
            cols="6"
            sm="6"
            lg="2"
            md="4"
            v-for="(items, idx) in GetContents.footer_coloums"
            :key="idx"
          >
            <h3 class="caption link_heading">{{ items.title }}</h3>

            <ul class="footer-menu__list">
              <li class="footer-menu__title u-text-white">&nbsp;</li>
              <li v-for="(link_items, idx) in items.links" :key="idx">
                <a
                  class="footer-menu__link"
                  v-if="link_items.is_external == false"
                  @click.prevent="$router.push(link_items.link)"
                  data-show-difflang="true"
                  >{{ link_items.name }}</a
                >
                <a
                  class="footer-menu__link"
                  v-else
                  :href="link_items.link"
                  data-show-difflang="true"
                  >{{ link_items.name }}</a
                >
              </li>
            </ul>
          </v-col>
          <!--FOOTER END COLOUMNS-->

          <v-col cols="6" sm="6" lg="2" md="4">
            <h3 class="caption link_heading">
              {{ GetContents.footer_reach_us.title }}
            </h3>

            <ul class="footer-menu__list social_icon_list">
              <li class="footer-menu__title u-text-white">&nbsp;</li>
              <li>
                <v-row class="social-icon-list">
                  <a
                    v-for="(items, index) in GetContents.footer_reach_us
                      .social_icons"
                    :key="index"
                    :href="items.link"
                    target="__SELF"
                    class="social_link"
                    ><v-icon normal color="white darken-2" class="social_icon">
                      {{ items.icon_class }}
                    </v-icon></a
                  >
                </v-row>
              </li>
              <!--<li class="footer-menu__title u-text-white">&nbsp;</li>

              <li class="footer-menu__title u-text-white social_icon_list" v-if="GetContents.footer_reach_us.call_now">
                <a
                  class="footer-menu__link"
                  :href="GetContents.footer_reach_us.call_now.number"
                  data-show-difflang="true"
                >
                  <span class="mobile_text">
                    {{ GetContents.footer_reach_us.call_now.text }}</span
                  ></a
                >
              </li>-->
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="black">
      <v-container>
        <v-row>
          <br />
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    GetContents() {
      return this.$store.state.contents[0].labels.en;
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 48em) {
  /* CSS rules here */
  .social_icon {
    margin: 12px !important;
  }
}

@media only screen and (max-width: 26.5625em) {
  /* CSS rules here */

  .mobile_text {
    color: #fff;
    font-size: 10px !important;
    background: #3a9689;
    padding: 5px !important;
  }
}

.footer-menu__list li {
  margin-top: 0.6rem;
  font-size: 13px;
}
.footer-menu__list li a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.62);
}

.link_heading {
  color: #fff;
  margin-left: 25px;
}
.footer-menu__list li a:hover {
  color: #fff;
  border-bottom: 1px solid #fff;
}
.social_icon {
  margin-left: 12px;
  margin-right: 12px;
}
.mobile_text {
  color: #fff;
  font-size: 15px;
  background: #3a9689;
  padding: 12px;
}
.social_link :hover {
  text-decoration: none;
}
.social_icon_list li a:hover {
  text-decoration: none !important;
}
</style>