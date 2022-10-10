<template>
    <v-container>
        <div>
            <h1 class="body-1 font-weight-bold ml-2">{{title}}</h1>
        </div>
        <client-only>
            <VueSlickCarousel class="mt-3" ref="slick" :arrows="true" v-bind="settings">
                <div v-for="product in randomProducts" :key="product._id" style="outline: 0 !important;border:0!important">
                    <ProductTile :product="product"/>
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
    </v-container>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import ProductTile from '~/components/product/tile'

export default {
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
                "variableWidth": true,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 2
                        }
                    },
                    {
                        "breakpoint": 300,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 2
                        }
                    }
                ]
            }
        }
    },
    components: { VueSlickCarousel, ProductTile },
    props: ["title", "products"],
    computed: {
        randomProducts(){
            return _.sampleSize(_.filter(this.$store.getters.getProducts, {product_type: 'Printer'}), 8)
        }
    }
}
</script>

<style lang="scss" scoped>
.slider-card {
    width: 250px;
}
.product-title {
    line-height: 1.2;
    word-break: break-word;
}

@media (max-width:480px) {
   .slider-card {
        width: 150px;
    }
    .product-title {
        height: 70px;
    }
}
</style>