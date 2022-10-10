<template>
    <div>
        <!-- Commenting banner for now. Will reuse when ads are implemented! -->
        <!-- <v-img class="d-none d-sm-block" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-02_cOOaYjjUy.jpg"/>
        <v-img class="d-block d-sm-none" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-04_vDAOKKI05.jpg"/> -->
        <v-container>
            <!-- {{route.params.id}} -->
            <SearchToolBar class="ml-sm-2"/>
            <v-row>
                <v-col>
                    <a class="text-decoration-underline" v-on:click="goBack()">Previous Page</a>
                </v-col>
            </v-row>
            <ProductDetail :product="getProductInfo[0]"/>
            <v-row v-if="randomProducts != ''">
                <v-col cols="12">
                    <h4 class="mb-5">Other Recommended Post Processing</h4>
                    <client-only>
                        <VueSlickCarousel class="mt-3" ref="slick" :arrows="true" v-bind="settings" height="235">
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
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import SearchToolBar from '~/components/searchtoolbar'
import ProductTile from '~/components/product/tile'
import ProductDetail from '~/components/product/detail'

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
                "variableWidth": true
            },
        }
    },
    components: {
        VueSlickCarousel,SearchToolBar, ProductTile, ProductDetail
    },
    methods: {
        goBack(){
            window.history.back();
        },
    },
    computed: {
        getProductInfo(){
            let query = {}
            query['name'] = this.$route.params.id
            query['product_type'] = 'Post Processing'
            let url = this.$router.history.current.path.split('/');
            if(url !== '' && url.length > 2){
                query['brand'] = url[2]
            }
            return _.filter(this.$store.getters.getProducts, query)
        },
        randomProducts(){
            return _.shuffle(_.filter(_.reject(this.$store.getters.getProducts, {"name": this.$route.params.id}), {product_type: 'Post Processing'}), 8)
        },
    }
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