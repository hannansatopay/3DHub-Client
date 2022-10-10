<template>
<div>


        <div >
            <v-container>
        <!-- <ul><li v-for="(brands, index) in getProductFromSearch" :key="index">{{brands}}<br><br></li></ul> -->
        <!-- {{this.productSelect}} -->

        <!-- visible for small screen -->
                <v-row class="d-sm-block d-md-none">
                    <v-col cols="12" class="d-block-sm justify-center rounded pb-0 pt-4">
                            <v-row class="justify-center pa-0 mt-2 mb-0 rounded">
                                <v-col cols="5" sm="3" md="2" class="d-flex pa-0 mx-1 pa-0">
                                    <v-select solo dense v-model="productSelect" :items="getUniqueProducts" item-text="product_type" item-value="product_type" label="Product"  style="font-size:15px;" v-on:change="clear_product()" clearable></v-select>
                                </v-col>
                                <v-col cols="5" sm="3" md="2" class="d-flex mx-1 pa-0" >
                                    <v-select light solo dense v-model="productTypeSelect" :items="getUniqueProduct_type" item-text="material_type" item-value="material_type" label="Type" style="font-size:15px;" v-on:change="clear_productType()" clearable></v-select>
                                </v-col>
                            
                                <v-col cols="5" sm="3" md="2" class="d-flex pb-0 mx-1 pa-0" >
                                    <v-select light solo dense v-model="brandSelect" :items="getBrandList" item-text="brand_name" item-value="brand_name" label="Brand" style="font-size:15px;" clearable></v-select>
                                </v-col>
                                <v-col cols="5" sm="3" md="2" class="d-flex pb-0 mx-1 pa-0 rounded" >
                                    <v-text-field light solo dense v-model="min_price" item-text="min_price" item-value="min_price" label="Min Price" style="font-size:15px;" clearable></v-text-field>
                                </v-col>
                            
                                <v-col cols="5" sm="3" md="2" class="d-flex pb-0 mx-1 pa-0 rounded" >
                                    <v-text-field light solo dense v-model="max_price" item-text="max_price" item-value="max_price" label="Max Price" style="font-size:15px;" clearable></v-text-field>
                                </v-col>
                                <v-col cols="5" sm="3" md="2" class="d-flex pb-0 mx-1 pa-0" >
                                    <v-select light solo dense v-model="weight" :items="getweight" item-text="weight" item-value="weight" label="Weight" style="font-size:15px;" v-if="productSelect == 'Filaments'" v-on:change="clear_weight()" clearable></v-select>
                                </v-col>
                            
                                <v-col cols="5" sm="3" md="2" class="d-flex pb-0 mx-1 pa-0 rounded" >
                                    <v-select light solo dense v-model="diameter" :items="getdiameter" item-text="diameter" item-value="diameter" label="Diameter" style="font-size:15px;" v-if="productSelect == 'Filaments'" clearable></v-select>
                                </v-col>
                                <!-- <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                    <v-select light solo dense v-model="color" :items="getcolor" item-text="color" item-value="color" label="Color" style="font-size:15px;" v-if="productSelect == 'Filaments'"></v-select>
                                </v-col> -->
                            </v-row>
                             <!-- @click.prevent="goSearchPage" -->
                            <v-row class="d-flex justify-center mt-0 pt-0">
                                <v-col cols="4" sm="2" md="2" class="d-flex justify-center">
                                    <v-btn small block depressed v-on:click="goSearchPage()" color="teal lighten-1" class="caption py-4" >Search</v-btn>
                                </v-col>
                                <v-col cols="4" sm="2" md="2" class="d-flex justify-center">
                                    <v-btn small block depressed v-on:click="ClearModel()" color="grey lighten-1" class="caption py-4" >Clear</v-btn>
                                </v-col>
                            </v-row>
                    </v-col>
                </v-row>

                <!-- visible on all except small -->
                <v-row class="d-none d-sm-none d-md-block">
                    <v-col class="d-block-sm justify-center rounded pb-0 pt-4">
                            <v-row class="justify-center pa-0 mt-2 mb-0">
                                <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mx-1 pa-0">
                                    <v-select solo dense v-model="productSelect" :items="getUniqueProducts" item-text="product_type" item-value="product_type" label="Product"  style="font-size:15px;" v-on:change="clear_product()" clearable></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mx-1 pa-0" >
                                    <v-select light solo dense v-model="productTypeSelect" :items="getUniqueProduct_type" item-text="material_type" item-value="material_type" label="Type" style="font-size:15px;" v-on:change="clear_productType()" clearable></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-1 pa-0" >
                                    <v-select light solo dense v-model="brandSelect" :items="getBrandList" item-text="brand_name" item-value="brand_name" label="Brand" style="font-size:15px;" clearable></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-1 pa-0" >
                                    <v-text-field light solo dense v-model="min_price" item-text="min_price" item-value="min_price" label="Min Price" style="font-size:15px;" clearable></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-1 pa-0" >
                                    <v-text-field light solo dense v-model="max_price" item-text="max_price" item-value="max_price" label="Max Price" style="font-size:15px;" clearable></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-1 pa-0" >
                                    <v-select light solo dense v-model="weight" :items="getweight" item-text="weight" item-value="weight" label="Weight" style="font-size:15px;" v-if="productSelect == 'Filaments'" v-on:change="clear_weight()" clearable></v-select>
                                </v-col>
                                <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-1 pa-0" >
                                    <v-select light solo dense v-model="diameter" :items="getdiameter" item-text="diameter" item-value="diameter" label="Diameter" style="font-size:15px;" v-if="productSelect == 'Filaments'" clearable></v-select>
                                </v-col>
                                <!-- <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                    <v-select light solo dense v-model="color" :items="getcolor" item-text="color" item-value="color" label="Color" style="font-size:15px;" v-if="productSelect == 'Filaments'"></v-select>
                                </v-col> -->
                            </v-row>
                             <!-- @click.prevent="goSearchPage" -->
                            <v-row class="d-flex justify-center mt-0 pt-0">
                                <v-col cols="12" sm="1" md="1" class="d-flex justify-center">
                                    <v-btn small block depressed v-on:click="goSearchPage()" color="teal lighten-1" class="caption py-4" >Search</v-btn>
                                </v-col>
                                <v-col cols="12" sm="1" md="1" class="d-flex justify-center">
                                    <v-btn small block depressed v-on:click="ClearModel()" color="grey lighten-1" class="caption py-4" >Clear</v-btn>
                                </v-col>
                            </v-row>
                    </v-col>
                </v-row>
                <v-row v-if="showPrevious">
                    <v-col>
                        <a class="text-decoration-underline" v-on:click="goBack()">Previous Page</a>
                    </v-col>
                </v-row>
            </v-container>
        </div>    
        </div>
</template>


<script>


export default {  
    data(){
        return {
            productSelect: '',
            productTypeSelect: '',
            brandSelect: '',
            searchList: '',
            searchKey: '',
            max_price: '',
            min_price: '',
            weight: '',
            diameter: '',
            color: '',
            showPrevious : false
        }
    },
//    watch :("$route", { immediate: true })
//   OnRouteChange(route: Route) {
//     if (route.name == "login" || route.name == "signup") {
//       this.showHeader = false;
//     } else {
//       this.showHeader = true;
//     }
//   },
    components: { },
    props: ["title", "products" ],
    methods: {
        goBack(){
            window.history.back();
        },
        convertProductType(product_type){
            return product_type.toLowerCase().trim().replace('& ', '').replace(/ /g, '-')
        },
        ClearModel(){
            this.productSelect = ''
            this.productTypeSelect = ''
            this.brandSelect = ''
            this.max_price = ''
            this.min_price = ''
            this.searchList = ''
            this.weight = ''
            this.diameter = ''
        },
        clear_product(){
            this.productTypeSelect = ''
            this.brandSelect = ''
            this.weight = ''
            this.diameter = ''
        },
        clear_productType(){
            this.brandSelect = ''
            this.weight = ''
            this.diameter = ''
        },
        clear_weight(){
            this.diameter = ''
        },
        goSearchPage(){
            this.$store.commit('setProductSelect', this.productSelect);
            this.$store.commit('setProductTypeSelect', this.productTypeSelect);
            this.$store.commit('setBrandSelect', this.brandSelect);
            this.$store.commit('setMaxPrice', this.max_price);
            this.$store.commit('setMinPrice', this.min_price);
            this.$store.commit('setWeight', this.weight);
            this.$store.commit('setDiameter', this.diameter);
            this.$router.push('/search');
        }
    },
    computed: {
        randomProducts(){
            let products = _.shuffle(this.$store.getters.getProducts)
            return products
        },
        getProducts(){
            let category = _.sortBy(this.$store.getters.getProducts, ['product_type'])
            return _.uniq(category)
        },
        getBrands(){
            let brands = _.sortBy(this.$store.getters.getBrands, ['brand_name'])
            return brands
        },

        // Data filtration for Drop population starts here
        getUniqueProducts(){
            let productList = this.$store.getters.getProducts
            let productListArr = []
            for (let i = 0; i< productList.length; i++){
                productListArr.push(productList[i].product_type)
            }
            return _.uniq(productListArr)
        },
        getUniqueProduct_type(){
            let productType = this.$store.getters.getProducts.filter(a => a.product_type == this.productSelect)
            let ProductTypeListArr = []
            if(this.productSelect == 'Parts & Accessories'){
                for (let i = 0; i< productType.length; i++){
                ProductTypeListArr.push(productType[i].part_type)
                }
                return _.uniq(ProductTypeListArr)
            }
            else if(this.productSelect == 'Filaments'){
                for (let i = 0; i< productType.length; i++){
                ProductTypeListArr.push(productType[i].material_type)
                }
                ProductTypeListArr = ProductTypeListArr.toString().split(",").filter(value => Object.keys(value).length !== 0)
                return _.uniq(ProductTypeListArr)
            }   
            else{
                for (let i = 0; i< productType.length; i++){
                ProductTypeListArr.push(productType[i].printer_type)
                }
                return _.uniq(ProductTypeListArr)
            }            
        },
        getdiameter(){
            let productType
            let ProductTypeListArr = []
                
            if(this.productTypeSelect != ''){
                productType  = this.$store.getters.getProducts.filter(a => a.product_type == 'Filaments' && a.material_type == this.productTypeSelect)
                for (let i = 0; i< productType.length; i++){
                ProductTypeListArr.push(productType[i].dimension.diameter)
                }
                return _.uniq(ProductTypeListArr.toString().split(",").filter(value => Object.keys(value).length !== 0))   
            }

            if(this.productTypeSelect == ''){
                productType  = this.$store.getters.getProducts.filter(a => a.product_type == 'Filaments')
                for (let i = 0; i< productType.length; i++){
                ProductTypeListArr.push(productType[i].dimension.diameter)
                }
                return _.uniq(ProductTypeListArr.toString().split(",").filter(value => Object.keys(value).length !== 0))   
            }
        },
        getweight(){
            let productType
            let ProductTypeListArr = []
            if(this.productTypeSelect != ''){
                productType= this.$store.getters.getProducts.filter(a => a.product_type == 'Filaments' && a.material_type == this.productTypeSelect)
                for (let i = 0; i< productType.length; i++){
                ProductTypeListArr.push(productType[i].dimension.weight)
                }
                return _.uniq(ProductTypeListArr.toString().split(",").filter(value => Object.keys(value).length !== 0))
            }
            if(this.productTypeSelect == ''){
                productType= this.$store.getters.getProducts.filter(a => a.product_type == 'Filaments')
                for (let i = 0; i< productType.length; i++){
                ProductTypeListArr.push(productType[i].dimension.weight)
                }
                return _.uniq(ProductTypeListArr.toString().split(",").filter(value => Object.keys(value).length !== 0))
            }
        },
        getBrandList(){
            if(this.productTypeSelect == '' && this.productSelect == ''){
                let brandList = this.$store.getters.getBrands
                let brandListArr = []
                for (let i = 0; i< brandList.length; i++){
                    brandListArr.push(brandList[i].brand_name)
                }
                return _.uniq(brandListArr)
            }
            else{
                if(this.productSelect == 'Parts & Accessories'){
                let brandList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.part_type == this.productTypeSelect)
                let brandListArr = []
                for (let i = 0; i< brandList.length; i++){
                    brandListArr.push(brandList[i].brand)
                }
                return _.uniq(brandListArr)
                }
                else if(this.productSelect == 'Filaments'){
                    let brandList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type == this.productTypeSelect)
                    let brandListArr = []
                    for (let i = 0; i< brandList.length; i++){
                        brandListArr.push(brandList[i].brand)
                    }
                    return _.uniq(brandListArr)
                }
                else{
                        let brandList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.printer_type == this.productTypeSelect)
                        let brandListArr = []
                        for (let i = 0; i< brandList.length; i++){
                            brandListArr.push(brandList[i].brand)
                        }
                    return _.uniq(brandListArr)
                }
            }
        },
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


@media only screen and (max-width:26.5625em) { 
	/* CSS rules here */
    .search_tool_bar{
    display: none  !important;
}

}

@media only screen and (min-width:48em) { 
	/* CSS rules here */
      .search_tool_bar{
    display: block  !important;
}
}
</style>