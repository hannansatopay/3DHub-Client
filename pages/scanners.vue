<template>
    <div>
        <v-img class="d-none d-sm-block" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-02_cOOaYjjUy.jpg"/>
        <v-img class="d-block d-sm-none" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-04_vDAOKKI05.jpg"/>
        <v-container>
            <SearchToolBar class="ml-sm-2"/>
            <div class="my-5 my-sm-12">
                <v-row>
                    <v-col>
                        <a class="text-decoration-underline" v-on:click="goBack()">Previous Page</a>
                    </v-col>
                </v-row>

                <h2 class="title font-weight-bold mb-2">Scanners</h2>
                <v-divider/>
                <v-row class="mb-12">
                    <v-col cols="6" sm="2" class="caption my-0 my-sm-2" v-for="data in getScannersProducts" :key="data.id">
                        <v-btn @click.prevent="$router.push('/product/printer-type/'+data)" large block depressed>{{data}}</v-btn>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import SearchToolBar from '~/components/searchtoolbar'
export default {
    components: {
        SearchToolBar
    },
    methods:{
        goBack(){
            window.history.back();
        },
    },
    computed: {
        printerTypeSort(){
            return _.sortBy(this.$store.getters.getPrinterType, ['printer_type'])
        },
        getScannersProducts(){
            let products = _.filter(this.$store.getters.getProducts, {product_type: 'Scanners'})
            let printerTypes = []
            for(let a=0; a < products.length; a++){
                printerTypes.push(products[a].printer_type)
            }
            return _.uniq(printerTypes)
        },
    }
}
</script>

