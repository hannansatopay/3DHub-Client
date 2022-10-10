<template>
    <div>
        <v-img src=""/>
        <v-container>
            <ProductDetail :product="getProductInfo[0]"/>

            <v-row>
                <v-col cols="12">
                    <H1 text="Recommend Product" />
                    <client-only>
                        <VueSlickCarousel class="mt-3" ref="slick" :arrows="true" v-bind="settings" height="235">
                            <div v-for="product in randomProducts" :key="product._id" style="outline: 0 !important;border:0!important">
                                <ProductTile :product="product"/>
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
                </v-col>
            </v-row>
        </v-container>
        
    <Why/>

        <Faq type="Shop"/>
    </div>
</template>

<script>
import H1 from '~/components/heading-style-a';
import ProductDetail from '~/components/product/detail'
import ProductTile from '~/components/product/tile'
import Faq from '~/components/faq.vue'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Why from '~/components/why.vue';

export default {
    components: { ProductDetail, Faq, H1, VueSlickCarousel, ProductTile, Why },
      data(){
        return {
            settings: {
                "dots": false,
                "focusOnSelect": false,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "touchThreshold": 5,
                "variableWidth": true
            },
        }
    },
    computed: {
        getProductInfo(){
            return _.filter(this.$store.getters.getProducts, {'name': this.$route.params.id})
        },
        randomProducts(){
            return _.shuffle(_.filter(_.reject(this.$store.getters.getProducts, {"name": this.$route.params.id}), {product_type: 'Post Processing'}), 8)
        },
    },
}
</script>

<style lang="scss" scoped>
.colors {
    height: 20px;
    width: 20px;
    border-radius: 50%;
}

.slider-card {
    width: 250px;
}
</style>