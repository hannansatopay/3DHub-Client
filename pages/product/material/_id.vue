<template>
    <div>
        <v-img height="290" position="center center" class="d-none d-sm-block" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-01_kTyeNfnNig.jpg"/>
        <v-img class="d-block d-sm-none" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-05_8HKAegWoYk.jpg"/>
        <v-container>
            <SearchToolBar class="ml-sm-2"/>
            <div class="my-5 my-sm-12">
                <v-row>
                    <v-col>
                        <a class="text-decoration-underline" v-on:click="goBack()">Previous Page</a>
                    </v-col>
                </v-row>
                <p class="caption mb-0">Material Type</p>
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
    components:{
        SearchToolBar, ProductTile
    },
    methods:{
        goBack(){
            window.history.back();
        },
    },
    computed: {
        getPrinterProducts(){
            let products = this.$store.getters.getProducts.filter(a => a.material_type.includes(this.$route.params.id) &&  a.product_type == 'Filaments')
            return products
        },
    }
}
</script>