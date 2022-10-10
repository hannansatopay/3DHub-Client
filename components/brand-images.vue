<template>
    <v-container class="px-0">
        <v-layout  wrap align-center justify-center class="brand-image">
            <div class="mx-2 mx-sm-5" v-for="brand in brandsSort" :key="brand._id" >
                <div @click.prevent="$router.push('/brand/'+brand.brand_name)"><img class="brand-logo" :src="brand.brand_logo.url" width="100" /></div>
            </div>
        </v-layout>

        <!--Akshaf : Carousel for Brands. Make sure that all the brands logos are of the same dimension! -->
        <!-- <v-row width ="500">
            <v-col cols="12">
                <h4 class="mb-5 mt-5">Other Recommended Part & Accessories</h4>
                <client-only>
                    <VueSlickCarousel align-center justify-center class="mt-3 d-flex justify-center" ref="slick" :arrows="true" v-bind="settings" height="235">
                                <div class="mx-2 mx-sm-5" v-for="brand in brandsSort" :key="brand._id" >
                                    <div @click.prevent="$router.push('/brand/'+brand.brand_name)"><img class="brand-logo" :src="brand.brand_logo.url" width="100" /></div>
                                </div>
                            <template #prevArrow="">
                                    <div class="custom-arrow">
                                        <v-icon class="prev-btn">mdi-less-than</v-icon>
                                    </div>
                                </template>
                                <template #nextArrow="">
                                    <div class="custom-arrow">
                                        <v-icon class="next-btn">mdi-greater-than</v-icon>
                                    </div>
                            </template>
                    </VueSlickCarousel>
                </client-only>
            </v-col>
        </v-row> -->
        
    </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    data(){
        return {
            settings: {
                "dots": false,
                "focusOnSelect": false,
                "infinite": true,
                "speed": 100,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "touchThreshold": 5,
                "variableWidth": true
            }
        }
    },
    components: {
        VueSlickCarousel
    },
    computed: {
        brandsSort(){
            //return _.sortBy(this.$store.getters.getBrands, ['brand_name'])
            return _.shuffle(this.$store.getters.getBrands)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>