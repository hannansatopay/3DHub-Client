<template>
    <div>
        <div style="background: url('https://ik.imagekit.io/frlnc3rhub7/3D_Hub/bg-b_Y7Caqi86W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666939434376'); padding: 50px;">
            <h1 class="text-center mb-4">Testimonials</h1>
            <v-container>
                <client-only>
                    <VueSlickCarousel class="mt-3" ref="slick" v-bind="settings">
                        <div class="slide">
                            <div class="card">
                                <v-avatar size="56px">
                                    <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                                </v-avatar>
                              <v-rating background-color="grey lighten-1" color="warning" readonly value=5></v-rating>
                                <h4>3D Printing</h4>
                                <h5>Product Designer</h5>
                                <p class="mt-2 text-center">Vestibulum, cum nam non amet consectetur morbi aenean
                                    condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh
                                    ultrices</p>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="card">
                                <v-avatar size="56px">
                                    <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                                </v-avatar>
                              <v-rating background-color="grey lighten-1" color="warning" readonly value=5></v-rating>
                                <h4>3D Printing</h4>
                                <h5>Product Designer</h5>
                                <p class="mt-2 text-center">Vestibulum, cum nam non amet consectetur morbi aenean
                                    condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh
                                    ultrices</p>
                            </div>
                        </div>
                        <div class="slide">
                            <div class="card">
                                <v-avatar size="56px">
                                    <img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460">
                                </v-avatar>
                              <v-rating background-color="grey lighten-1" color="warning" readonly value=5></v-rating>
                                <h4>3D Printing</h4>
                                <h5>Product Designer</h5>
                                <p class="mt-2 text-center">Vestibulum, cum nam non amet consectetur morbi aenean
                                    condimentum eget. Ultricies integer nunc neque accumsan laoreet. Viverra nibh
                                    ultrices</p>
                            </div>
                        </div>
                        <template #prevArrow="">
                            <div class="custom-arrow">
                                <v-icon class="prev-btn">mdi-chevron-left</v-icon>
                            </div>
                        </template>
                        <template #nextArrow="">
                            <div class="custom-arrow">
                                <v-icon class="next-btn">mdi-chevron-right</v-icon>
                            </div>
                        </template>
                    </VueSlickCarousel>
                </client-only>
            </v-container>
        </div>
    </div>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import H1 from '~/components/heading-style-a';

export default {
    data() {
        return {
            settings: {
                "dots": true,
                "arrows": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "touchThreshold": 5,
                "variableWidth": true
            }
        }
    },
    components: { VueSlickCarousel, H1 },
}
</script>

<style lang="scss" scoped>
.card {
    text-align: center;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
}

img {
    width: 100px;
}

@media (max-width: 991.98px) {
  h1 {
    font-size: 28px!important;
    line-height: 38px!important;
  }
}

h1 {
  color: rgba(0, 0, 0, 1);
  z-index: 2;
  font-size: 48px;
  font-weight: 600;
  line-height: 58px;
  position: relative;
}
</style>