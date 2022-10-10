<template>
    <div>
<!-- <ul><li v-for="(brands, index) in getPrinterProducts" :key="index">{{brands}}<br><br></li></ul> -->

        <v-img class="d-none d-sm-block" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-02_cOOaYjjUy.jpg"/>
        <v-img class="d-block d-sm-none" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-04_vDAOKKI05.jpg"/>
        <v-container >
            <SearchToolBar class="ml-sm-2"/>
            <div class="my-5 my-sm-12">
                <v-row>
                    <v-col>
                        <a class="text-decoration-underline" v-on:click="goBack()">Previous Page</a>
                    </v-col>
                </v-row>
                <p class="caption mb-0">Printer Type</p>
                <h2 class="title font-weight-bold mb-2">{{$route.params.id}}</h2>
                <v-divider/>
                <v-row class="px-0 mt-5" v-if="getPrinterProducts != ''">
                    <v-col  cols="6" sm="2" v-for="product in getPrinterProducts" :key="product._id" class="px-0 my-5">
                        <ProductTile :product="product"/>
                    </v-col>
                </v-row>
                <v-row class="mt-5" v-else>
                    <v-col cols="12">
                        Sorry, No Product Found.
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import SearchToolBar from '~/components/searchtoolbar'
import ProductTile from '~/components/product/tile'

export default {
    data() {
        return {
            products: []
        }
    },
    components:{
        SearchToolBar, ProductTile
    },
    mounted() {
        this.getTheProducts()
    },
    methods: {
        async getTheProducts(){
            let allProducts = await _.filter(this.$store.getters.getProducts, {'printer_type': this.$route.params.id})
            this.products = allProducts
        },
        goBack(){
            window.history.back();
        },
    },
    computed: {
        getPrinterProducts(){
            let products = _.filter(this.$store.getters.getProducts, {printer_type: this.$route.params.id})
            return products
        },
    }
}
</script>