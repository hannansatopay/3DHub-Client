<template>
    <div>
        <!-- {{getPartsProducts}} -->
        <v-container class="pb-0" >
            <SearchToolBar class="ml-sm-2"/>
            <v-row >
                <v-col cols="6" sm="2">
                    <v-card class="pa-2 justify-center" flat>
                    <v-img :src="brandDescription[0].brand_logo.url"  height="150" class="pa-0 my-1" contain/>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="10">
                    <v-card class="pa-2" flat>
                    <h1 class="text-center pb-2">{{brandName}}</h1>
                    <p class="body-1 pt-2 mt-2">{{brandDescription[0].brand_description}}</p>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

<!-- Adding the Tab structure! -->
            <v-container >
                <v-row>
                    <v-col>
                        <a class="text-decoration-underline" v-on:click="goBack()">Previous Page</a>
                    </v-col>
                </v-row>
                <v-tabs class="d-flex justify-center" v-model="tabs">
                    <v-tab v-if="getPrinterProducts != ''" href="#printer">Printer</v-tab>
                    <v-tab v-if="getScannersProducts != ''" href="#scanner">Scanner</v-tab>
                    <v-tab v-if="getFillamentsProducts != ''" href="#filaments">Filaments</v-tab>
                    <v-tab  v-if="getPartsProducts != ''" href="#accessories">Parts & Accessories</v-tab>
                    <v-tab v-if="getProcessingProducts != ''" href="#processing">Post Processing</v-tab>
                </v-tabs>
            
            <!-- for Printer -->
                <v-tabs-items v-model="tabs">
                    <v-tab-item id="printer" >
                        <v-row class="px-0 mt-5">
                            <v-col cols="6" sm="2" v-for="product in getPrinterProducts" :key="product._id" class="px-0 my-5">
                                <ProductTile :product="product"/>
                            </v-col>
                        </v-row>
                    </v-tab-item>

                    <!-- for Scanner -->
                    <v-tab-item id="scanner">
                        <v-row class="px-0 mt-8">
                            <v-col cols="6" sm="2" v-for="product in getScannersProducts" :key="product._id" class="px-0 my-5">
                                <ProductTile :product="product"/>
                            </v-col>
                        </v-row>
                    </v-tab-item>

                    <!-- For Filaments -->
                    <v-tab-item id="filaments">
                        <v-row class="px-0 mt-2">
                            <v-col cols="6" sm="2" v-for="product in getFillamentsProducts" :key="product._id" class="px-0 my-5">
                                <ProductTile :product="product"/>
                            </v-col>
                        </v-row>
                    </v-tab-item>

                    <!-- Accessories -->
                    <v-tab-item id="accessories">
                        <v-row class="px-0 mt-2">
                            <v-col cols="6" sm="2" v-for="product in getPartsProducts" :key="product._id" class="px-0 my-5">
                                <ProductTile :product="product"/>
                            </v-col>
                        </v-row>
                    </v-tab-item>

                    <!-- Post Processing -->
                    <v-tab-item id="processing">
                        <v-row class="px-0 mt-2">
                            <v-col cols="6" sm="2" v-for="product in getProcessingProducts" :key="product._id" class="px-0 my-5">
                                <ProductTile :product="product"/>
                            </v-col>
                        </v-row>
                    </v-tab-item>
                </v-tabs-items>
            </v-container>
    </div>
</template>

<script>
import SearchToolBar from '~/components/searchtoolbar'
import ProductTile from '~/components/product/tile'

export default {
    data () {
      return {
        tabs: null
      }
    },
    components: {
        SearchToolBar, ProductTile
    },
    methods: {
        goBack(){
            window.history.back();
        },
        convertProductType(product_type){
            return product_type.toLowerCase().trim().replace('& ', '').replace(/ /g, '-')
        }
    },
    computed: {
        brandName(){
            //let brands = _.sortBy(this.$route.params.id)
            return this.$route.params.id
        },
        brandDescription(){
            let brandDesc = _.filter(this.$store.getters.getBrands, {brand_name: this.$route.params.id})
            return brandDesc
        },
        getPrinterProducts(){
            let products = _.filter(this.$store.getters.getProducts, {product_type: 'Printer', brand: this.$route.params.id})
            return products
        },
        getScannersProducts(){
            let products = _.filter(this.$store.getters.getProducts, {product_type: 'Scanners', brand: this.$route.params.id})
            return products
        },
        getFillamentsProducts(){
            let products = _.filter(this.$store.getters.getProducts, {product_type: 'Filaments', brand: this.$route.params.id})
            return products
        },
        getPartsProducts(){
            let products = _.filter(this.$store.getters.getProducts, {product_type: 'Parts & Accessories', brand: this.$route.params.id})
            return products
        },
        getProcessingProducts(){
            let products = _.filter(this.$store.getters.getProducts, {product_type: 'Post Processing', brand: this.$route.params.id})
            return products
        }
    }
}
</script>

<style lang="scss" scoped>
.product-title {
    height: 50px;
    line-height: 1;
}
.printer-title {
    height: 50px;
    line-height: 1;
}
.slider-card {
   /*  border: 1px solid #eee */
}
</style>