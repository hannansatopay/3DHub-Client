<!--<template>
    <div class="home-slider">
        <img height="290" class="desktop" position="bottom center" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Banner_ydGwCVEwi.gif"  />
        <img class="mobile"  position="center center" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Mobile_aqS0PBDSW.gif" />
    </div>
</template>-->

<template>
  <v-carousel cycle  id="home-carousel" height="auto" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(item, i) in items" :key="i">
      
      <div class="home-slider">
        <img  class="desktop" position="bottom center" :src="item.web_src" />
        <img class="mobile"  position="center center" :src="item.mobile_src" />
    </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
    props: ["items"],
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
     
    };
  },
};
</script>



<style scoped>
.home-slider {
  background: white;
  overflow: hidden;
}

.home-slider .mobile {
  display: none;
}
.desktop{
    max-width: 100%  !important;
}
.mobile{
 max-width: 100%  !important;
}

@media (max-width: 480px) {
  .home-slider .desktop {
    display: none;
  }

  .home-slider .mobile {
    display: block;
  }
}



</style>