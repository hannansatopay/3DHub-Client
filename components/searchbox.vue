<template>
<div>

    <!-- Image for Search background
        
        src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png" -->

    <v-container class="pt-0 mt-0">
            <h2 class="text-center heading-3 pt-0 font-weight-bold mt-2">{{searchtitle}}</h2>
    </v-container>

    <!-- Search toolbar -->
    <v-container>
        <!-- <v-img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Boxes-01_LKTfloFAx.jpg" contain/> -->
        <v-row class="px-0" style="border: 1px solid #F5F5F5; border-radius: 5px">
            <!-- Printer Search -->
            <v-col  cols="6" sm="2" lg="3" class="py-1 my-1">
                <v-card :to="`/printers`" flat class=" pa-2 slider-card">
                <v-card-title class="d-inline-block text-truncate pa-2 subtitle-2" >Printers</v-card-title>
                    <v-divider class="mt-1"/>
                    <v-card-text class="mt-2 d-inline-block text-truncate pa-2" >
                        <ul class="pl-0">
                            <li ><a @click.prevent="$router.push('/product/printer-type/DLP')">DLP</a> </li>
                            <li><a @click.prevent="$router.push('/product/printer-type/LCD')">LCD</a> </li>
                            <li><a @click.prevent="$router.push('/product/printer-type/SLA')">SLA</a> </li>
                            <li><a @click.prevent="$router.push('/printers')" class="blue-grey--text darken-4">See all Printers</a> </li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Filament Search -->
            <v-col  cols="6" sm="2" lg="3" class="py-1 my-1">
                <v-card :to="`/filaments`" flat class=" pa-2 slider-card">
                <v-card-text class="d-inline-block text-truncate pa-2 subtitle-2">Filaments</v-card-text>
                    <v-divider class="mt-1"/>
                    <v-card-text class="mt-2 d-inline-block text-truncate pa-2" >
                        <ul class="pl-0">
                            <li ><a @click.prevent="$router.push('/product/material/PLA')">PLA</a> </li>
                            <li><a @click.prevent="$router.push('/product/material/ABS')">ABS</a> </li>
                            <li><a @click.prevent="$router.push('/product/material/Carbon')">ESD</a> </li>
                            <li><a @click.prevent="$router.push('/filaments')" class="blue-grey--text darken-4">See all Filaments</a> </li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Scanner Search -->
            <v-col  cols="6" sm="2" lg="3" class="py-1 my-1">
                <v-card :to="`/scanners`" flat class=" pa-2 slider-card">
                <v-card-text class="d-inline-block text-truncate pa-2 subtitle-2" >Scanners</v-card-text>
                    <v-divider class="mt-1"/>
                    <v-card-text class="mt-2 d-inline-block text-truncate pa-2" >
                        <ul class="pl-0">
                            <li ><a @click.prevent="$router.push('/product/printer-type/Consumer%203D%20Scanner')">Consumer Scanner</a> </li>
                            <li><a @click.prevent="$router.push('/product/printer-type/Industrial%203D%20Scanner')">Industrial Scanner</a> </li>
                            <br>
                            <!-- <li><a @click.prevent="$router.push('/product/printer-type/SLM')">SLM</a> </li> -->
                            <li><a @click.prevent="$router.push('/scanners')" class="blue-grey--text darken-4">See all Printers</a> </li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Industries Search -->
            <v-col  cols="6" sm="2" lg="3" class="py-1 my-1">
                <v-card :to="`/printers`" flat class=" pa-2 slider-card">
                <v-card-text class="d-inline-block text-truncate pa-2 subtitle-2" >Industries</v-card-text>
                    <v-divider class="mt-1"/>
                    <v-card-text class="mt-2 d-inline-block text-truncate pa-2" >
                        <ul class="pl-0">
                            <li><a @click.prevent="$router.push('/product/industry/Automotive')">Automotive</a> </li>
                            <li><a @click.prevent="$router.push('/product/industry/Education')">Education</a> </li>
                            <li><a @click.prevent="$router.push('/product/industry/Manufacturing')">Manufacturing</a> </li>
                            <li><a @click.prevent="$router.push('/Industries')" class="blue-grey--text darken-4">See all Industries</a> </li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

<!-- Search by Buttons -->
    <v-container>
        <v-row justify='end'>
            <v-col class="rounded" align ="center">
              <v-btn @click.prevent="$router.push(`/Brands`)" cols="4" sm="3" md="4" class="mx-2 my-2 pa-3 teal--text">Search By Brands&nbsp; &nbsp;</v-btn>
              <v-btn @click.prevent="$router.push(`/Products`)" cols="4" sm="3" md="4" class="mx-2 my-2 pa-3 teal--text">Search By Products</v-btn>
              <v-btn @click.prevent="$router.push(`/Industries`)" cols="4" sm="3" md="4" class="mx-2 my-2 pa-3 teal--text">Search by Industry</v-btn>
            </v-col>
          </v-row>
    </v-container>

    
    </div>
</template>

<script>
export default {
    data(){
        return {
            firstOption: null,
            secondOption: null,
            searchtitle : 'Popular Search Categories!',
            fdm : 'FDM ',
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
    components: { },
    props: ["title", "products"],
    methods: {
        convertProductType(product_type){
            return product_type.toLowerCase().trim().replace('& ', '').replace(/ /g, '-')
        }
    },
    computed: {
        randomProducts(){
            let products = this.$store.getters.getProducts.filter(a => a.material_type.includes("") && a.industry.includes("") && a.name.includes(""))
            return products
        },
        getProducts(){
            let category = this.$store.getters.getProducts
            return category
        },
        getBrands(){
            let brands = _.sortBy(this.$store.getters.getBrands, ['brand_name'])
            return brands
        }
    }    
}
</script>


<style lang="scss" scoped>
.parallax-img {
    height: 350px !important;
}
@media (max-width: 480px) {
    .parallax-img {
        height: 170px !important;
    }
}
</style>