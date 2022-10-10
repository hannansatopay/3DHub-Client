<template>
  <v-container v-if="$vuetify.breakpoint.width >= 992">
    <div class="masonry-blog">
      <div class="masonry-container01">
        <div class="masonry-container02">
          <div class="masonry-blog-post-card1">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1301_zXktAXw3W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658516252917" class="masonry-image1" />
          </div>
        </div>
        <div class="masonry-container03">
          <div class="masonry-blog-post-card1">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1326_hQ7wpubG-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518752615" class="masonry-image1" />
          </div>
        </div>
      </div>
      <div class="masonry-container04">
        <div class="masonry-container05">
          <div class="masonry-blog-post-card2">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1321_HZKTLDf6e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518501840" class="masonry-image2" />
          </div>
        </div>
        <div class="masonry-container06">
          <div class="masonry-blog-post-card3">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1325_O1o0icy6X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518776718" class="masonry-image3" />
          </div>
        </div>
      </div>
      <div class="masonry-container07">
        <div class="masonry-container08">
          <div class="masonry-blog-post-card4">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1322_ammMsrfcT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518882283" class="masonry-image4" />
          </div>
        </div>
        <div class="masonry-container09">
          <div class="masonry-blog-post-card5">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1324_DzOuO9kxt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518839251" class="masonry-image5" />
          </div>
        </div>
      </div>
      <div class="masonry-container10">
        <div class="masonry-container11">
          <div class="masonry-blog-post-card6">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1323_TPJJ9HFyX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518857428" class="masonry-image6" />
          </div>
        </div>
        <div class="masonry-container12">
          <div class="masonry-blog-post-card7">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1327_dL85v-7sk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518869148" class="masonry-image7" />
          </div>
        </div>
        <div class="masonry-container13">
          <div class="masonry-blog-post-card8">
            <img src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1328_pODFK0Qyz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518897364" class="masonry-image8"/>
          </div>
        </div>
      </div>
    </div>
  </v-container>
  <v-container v-else>
  <client-only>
      <VueSlickCarousel class="mt-3" ref="slick" v-bind="settings">
      <div>
          <img class="brand-logo" src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1321_HZKTLDf6e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518501840" />
      </div>
      <div>
          <img class="brand-logo" src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1321_HZKTLDf6e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518501840" />
      </div>
      <div>
          <img class="brand-logo" src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1321_HZKTLDf6e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518501840" />
      </div>
      <div>
          <img class="brand-logo" src="https://ik.imagekit.io/fgudfi4zm/Rectangle_1321_HZKTLDf6e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658518501840" />
      </div>
      </VueSlickCarousel>
  </client-only>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: 'Masonry',
  data(){
        return {
            settings: {
                "dots": true,
                "arrows": true,
                "infinite": true,
                "speed": 1000,                
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "touchThreshold": 5,
            }
        }
    },
    components: { VueSlickCarousel },
}
</script>

<style scoped>
.slick-slider img {
    width: 100%;
}
.masonry-blog {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.masonry-container01 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: flex-start;
}
.masonry-container02 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card {
  width: 100%;
  display: flex;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog-post-card:hover {
  transform: scale(1.02);
}
.masonry-image {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}
.masonry-container03 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card1 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog > div {
  margin: 10px;
}
.masonry-blog > div > div {
  margin-bottom: 20px;
}
.masonry-blog-post-card1:hover {
  transform: scale(1.02);
}
.masonry-image1 {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}
.masonry-container04 {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: -160px!important;
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: flex-start;
}
.masonry-container05 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card2 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog-post-card2:hover {
  transform: scale(1.02);
}
.masonry-image2 {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}
.masonry-container06 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card3 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog-post-card3:hover {
  transform: scale(1.02);
}
.masonry-image3 {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}
.masonry-container07 {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: flex-start;
}
.masonry-container08 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card4 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog-post-card4:hover {
  transform: scale(1.02);
}
.masonry-image4 {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}
.masonry-container09 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card5 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog-post-card5:hover {
  transform: scale(1.02);
}
.masonry-image5 {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}
.masonry-container10 {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  flex-direction: column;
  justify-content: flex-start;
}
.masonry-container11 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card6 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog-post-card6:hover {
  transform: scale(1.02);
}
.masonry-image6 {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}
.masonry-container12 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card7 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog-post-card7:hover {
  transform: scale(1.02);
}
.masonry-image7 {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}
.masonry-container13 {
  overflow: hidden;
  border-radius: 52px;
  margin-bottom: var(--dl-space-space-fiveunits);
}
.masonry-blog-post-card8 {
  width: 100%;
  display: flex;
  max-width: 1400px;
  box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
  transition: 0.3s;
  flex-direction: column;
  justify-content: space-between;
}
.masonry-blog-post-card8:hover {
  transform: scale(1.02);
}
.masonry-image8 {
  width: 100%;
  height: 100%;
  max-height: 50rem;
  object-fit: cover;
  border-radius: 52px;
}

@media(max-width: 767px) {
  .masonry-blog {
    padding-left: 32px;
    padding-right: 32px;
    flex-direction: column;
  }
  .masonry-container01 {
    flex: 0 0 auto;
    margin-left: 0px;
    margin-right: 0px;
  }
  .masonry-container04 {
    flex: 0 0 auto;
    margin-left: 0px;
    margin-right: 0px;
  }
  .masonry-container07 {
    flex: 0 0 auto;
    margin-left: 0px;
    margin-right: 0px;
  }
  .masonry-container10 {
    flex: 0 0 auto;
    margin-left: 0px;
    margin-right: 0px;
  }
}
@media(max-width: 479px) {
  .masonry-blog {
    padding-top: 32px;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: 32px;
  }
}
</style>
