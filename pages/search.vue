<template>
<!-- Commenting banner for now. Will reuse when ads are implemented! -->
        <!-- <v-img height="290" position="center center" class="d-none d-sm-block" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-01_kTyeNfnNig.jpg"/>
        <v-img class="d-block d-sm-none" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-05_8HKAegWoYk.jpg"/> -->
    <div>
       <v-container>

        <!-- visible for small screen -->
            <v-row class="d-sm-block d-md-none">
                <v-col class="d-block-sm justify-center rounded pb-0 pt-4">
                        <v-row class="justify-center mx-2 pa-0 mt-2 mb-0">
                            <v-col cols="5" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-select light solo dense v-model="productSelect" :items="getUniqueProducts" item-text="product_type" item-value="product_type" label="Product"  style="font-size:15px;" v-on:change="clear_product()" clearable></v-select>
                            </v-col>
                            <v-col cols="5" sm="2" md="2" class="d-flex pb-0 pa-0" >
                                <v-select light solo dense v-model="productTypeSelect" :items="getUniqueProduct_type" item-text="material_type" item-value="material_type" label="Type" style="font-size:15px;" v-on:change="clear_productType()" clearable></v-select>
                            </v-col>
                            <v-col cols="5" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-select light solo dense v-model="brandSelect" :items="getBrandList" item-text="brand_name" item-value="brand_name" label="Brand" style="font-size:15px;" clearable></v-select>
                            </v-col>
                            <v-col cols="5" sm="2" md="2" class="d-flex pb-0  pa-0" >
                                <v-text-field light solo dense v-model="min_price" item-text="min_price" item-value="min_price" label="Min Price" style="font-size:15px;" clearable></v-text-field>
                            </v-col>
                            <v-col cols="5" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-text-field light solo dense v-model="max_price" item-text="max_price" item-value="max_price" label="Max Price" style="font-size:15px;" clearable></v-text-field>
                            </v-col>
                            <v-col cols="5" sm="2" md="2" class="d-flex pb-0 pa-0" >
                                <v-select light solo dense v-model="weight" :items="getweight" item-text="weight" item-value="weight" label="Weight" style="font-size:15px;" v-if="productSelect == 'Filaments'" v-on:change="clear_weight()" clearable></v-select>
                            </v-col>
                            <v-col cols="5" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-select light solo dense v-model="diameter" :items="getdiameter" item-text="diameter" item-value="diameter" label="Diameter" style="font-size:15px;" v-if="productSelect == 'Filaments'" clearable></v-select>
                            </v-col>
                        </v-row>
                        <v-row class="d-flex justify-center mt-0 pt-0">
                            <!-- <v-col cols="12" sm="1" md="1" class="d-flex justify-center">
                                <v-btn small block depressed v-on:click="getProduct()" color="teal" class="caption py-4" >Clear</v-btn>
                            </v-col> -->
                            <v-col cols="4" sm="1" md="1" class="d-flex justify-center">
                                <v-btn small block depressed v-on:click="ClearModel()" color="teal" class="caption py-4" >Clear</v-btn>
                            </v-col>
                        </v-row>
                </v-col>
            </v-row>

            <!-- visible on all except small -->
            <v-row class="d-none d-sm-none d-md-block">
                <v-col class="d-block-sm justify-center rounded pb-0 pt-4">
                        <v-row class="justify-center mx-2 pa-0 mt-2 mb-0">
                            <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-select light solo dense v-model="productSelect" :items="getUniqueProducts" item-text="product_type" item-value="product_type" label="Product"  style="font-size:15px;" v-on:change="clear_product()" clearable></v-select>
                            </v-col>
                            <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-select light solo dense v-model="productTypeSelect" :items="getUniqueProduct_type" item-text="material_type" item-value="material_type" label="Type" style="font-size:15px;" v-on:change="clear_productType()" clearable></v-select>
                            </v-col>
                            <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-select light solo dense v-model="brandSelect" :items="getBrandList" item-text="brand_name" item-value="brand_name" label="Brand" style="font-size:15px;" clearable></v-select>
                            </v-col>
                            <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-text-field light solo dense v-model="min_price" item-text="min_price" item-value="min_price" label="Min Price" style="font-size:15px;" clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-text-field light solo dense v-model="max_price" item-text="max_price" item-value="max_price" label="Max Price" style="font-size:15px;" clearable></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-select light solo dense v-model="weight" :items="getweight" item-text="weight" item-value="weight" label="Weight" style="font-size:15px;" v-if="productSelect == 'Filaments'" v-on:change="clear_weight()" clearable></v-select>
                            </v-col>
                            <v-col cols="12" sm="2" md="2" class="d-flex pb-0 mr-2 pa-0" >
                                <v-select light solo dense v-model="diameter" :items="getdiameter" item-text="diameter" item-value="diameter" label="Diameter" style="font-size:15px;" v-if="productSelect == 'Filaments'" clearable></v-select>
                            </v-col>
                        </v-row>
                        <v-row class="d-flex justify-center mt-0 pt-0">
                            <!-- <v-col cols="12" sm="1" md="1" class="d-flex justify-center">
                                <v-btn small block depressed v-on:click="getProduct()" color="teal" class="caption py-4" >Clear</v-btn>
                            </v-col> -->
                            <v-col cols="12" sm="1" md="1" class="d-flex justify-center">
                                <v-btn small block depressed v-on:click="ClearModel()" color="teal" class="caption py-4" >Clear</v-btn>
                            </v-col>
                        </v-row>
                </v-col>
            </v-row>
            
        <!-- Display Products -->
            <v-row>
                <v-col >
                    <v-row>
                        <v-col>
                            <a class="text-decoration-underline" v-on:click="goBack()">Previous Page</a>
                        </v-col>
                    </v-row>
                    <v-row class="px-0 mt-2">
                        <v-col cols="6" sm="3" lg="3" xl="2" v-for="(product,index) in getProductFromSearch" :key="index" class="px-0 py-2">
                            <ProductTile :product="product"/>
                        </v-col>
                    </v-row>
                    <v-row v-if="searchList == ''">
                        <v-col>
                            <p class="body-1 text-center">Sorry! No results found! Please try a different search result!</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>  
    </div>  
</template>


<script>
import ProductTile from '~/components/product/tile'

export default {
    data(){
        return {
            productSelect: '',
            productTypeSelect: '',
            brandSelect: '',
            industrySelect: '',
            searchList: '',
            searchKey: '',
            max_price: '',
            min_price: '',
            weight: '',
            diameter: '',
            color: '',
            counter: 0
        }
    },
    components: {ProductTile },
    props: ["title", "products"],
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
        }
    },
    computed: {
        // Filter Numbers
        // sortNumbers(){
        //     this.searchList = this.$store.getters.getProducts.filter(b => parseInt(b.price.substring(4).replace(',','')) < this.max_price && parseInt(b.price.substring(4).replace(',','')) > this.min_price )
        //     return this.searchList
        // },
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

        getnull(){
            let products = this.$store.getters.getProducts.filter(b => b.product_type == null)
            return products
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

        // Data to show products start here
        getProductFromSearch(){

            // Below declarations are for the close buttons inside the list fields
            if(this.productSelect == undefined){
                this.productSelect = ''
            }
            if(this.productTypeSelect == undefined){
                this.productTypeSelect = ''
            }
            if(this.brandSelect == undefined){
                this.brandSelect = ''
            }
            if(this.max_price == undefined){
                this.max_price = ''
            }
            if(this.min_price == undefined){
                this.min_price = ''
            }
            if(this.weight == undefined){
                this.weight = ''
            }
            if(this.diameter == undefined){
                this.diameter = ''
            }

            // This is done to clear the default values from store.getters from clearing the model values 
            if(this.counter == 0){
                if(!this.productSelect){
                this.productSelect = this.$store.getters.getProductSelect
                }
                if(!this.productTypeSelect){
                    this.productTypeSelect = this.$store.getters.getProductTypeSelect
                }
                if(!this.brandSelect){
                    this.brandSelect = this.$store.getters.getBrandSelect
                }
                if(!this.max_price){
                    this.max_price = this.$store.getters.getMaxPrice
                }
                if(!this.min_price){
                    this.min_price = this.$store.getters.getMinPrice
                }
                if(!this.weight){
                    this.weight = this.$store.getters.getWeight
                }
                if(!this.diameter){
                    this.diameter = this.$store.getters.getDiameter
                }
                this.counter++
            }

            // this.searchList = this.$store.getters.getProducts.filter(b => parseInt(b.price.substring(4).replace(',','')) > this.min_price && parseInt(b.price.substring(4).replace(',','')) < this.max_price)

            // Nothing selected
            if(this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect == '' && this.min_price == '' && this.max_price == ''){
                this.searchList = _.shuffle(this.$store.getters.getProducts)
            }

            // Only price selected
            if(this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect == '' && this.min_price == '' && this.max_price != ''){
                this.searchList = this.$store.getters.getProducts.filter(b => parseInt(b.price.substring(4).replace(',','')) < this.max_price)
            }
            if(this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect == '' && this.min_price != '' && this.max_price == ''){
                this.searchList = this.$store.getters.getProducts.filter(b => parseInt(b.price.substring(4).replace(',','')) > this.min_price)
            }
            if(this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect == '' && this.min_price != '' && this.max_price != ''){
                this.searchList = this.$store.getters.getProducts.filter(b => parseInt(b.price.substring(4).replace(',','')) > this.min_price && parseInt(b.price.substring(4).replace(',','')) < this.max_price)
            }

            // only brand selected(with price)
            if (this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect != '' && this.min_price == '' && this.max_price == '') {
                return this.searchList = this.$store.getters.getProducts.filter(b => b.brand == this.brandSelect)          
            }
            if (this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect != '' && this.min_price == '' && this.max_price != '') {
                return this.searchList = this.$store.getters.getProducts.filter(b => b.brand == this.brandSelect && parseInt(b.price.substring(4).replace(',','')) < this.max_price)          
            }
            if (this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect != '' && this.min_price != '' && this.max_price == '') {
                return this.searchList = this.$store.getters.getProducts.filter(b => b.brand == this.brandSelect && parseInt(b.price.substring(4).replace(',','')) > this.min_price)          
            }
            if (this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect != '' && this.min_price != '' && this.max_price != '') {
                return this.searchList = this.$store.getters.getProducts.filter(b => b.brand == this.brandSelect && parseInt(b.price.substring(4).replace(',','')) > this.min_price && parseInt(b.price.substring(4).replace(',','')) < this.max_price)          
            }

            // only type selected
            if (this.productSelect == '' && this.productTypeSelect == '' && this.brandSelect == '') {
                return this.searchList = _.shuffle(this.$store.getters.getProducts)
            }

            //type and brand
            if (this.productSelect == '' && this.productTypeSelect != '' && this.brandSelect != '') {
                return this.searchList = _.shuffle(this.$store.getters.getProducts)
            }

            //only product
            if (this.productSelect != '' && this.productTypeSelect == '' && this.brandSelect == '' && this.min_price == '' && this.max_price == '') {
                if(this.productSelect == 'Filaments'){
                    // if nothing selected
                    if(this.weight == '' && this.diameter == ''){
                       return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect) 
                    } 
                    // if only weight selected
                    if(this.weight != '' && this.diameter == ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.weight.includes(this.weight))
                    }
                    //if only diameter selected
                    if(this.weight == '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.diameter == this.diameter)
                    }
                    // if both selected
                    if(this.weight != '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.weight.includes(this.weight) && b.dimension.diameter.includes(this.diameter))
                    } 
                }
                else{
                    return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect)
                }
                
            }
            // product and max_price
            if (this.productSelect != '' && this.productTypeSelect == '' && this.brandSelect == '' && this.min_price == '' && this.max_price != '') {
                if(this.productSelect == 'Filaments'){
                    // if nothing selected
                    if(this.weight == '' && this.diameter == ''){
                       return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && parseInt(b.price.substring(4).replace(',','')) < this.max_price) 
                    } 
                    // if only weight selected
                    if(this.weight != '' && this.diameter == ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.weight.includes(this.weight) && parseInt(b.price.substring(4).replace(',','')) < this.max_price)
                    }
                    //if only diameter selected
                    if(this.weight == '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.diameter == this.diameter && parseInt(b.price.substring(4).replace(',','')) < this.max_price)
                    }
                    // if both selected
                    if(this.weight != '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.weight.includes(this.weight) && b.dimension.diameter.includes(this.diameter) && parseInt(b.price.substring(4).replace(',','')) < this.max_price)
                    } 
                }
                else{
                    return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && parseInt(b.price.substring(4).replace(',','')) < this.max_price)  
                }
                
            }
            // product and min_price
            if (this.productSelect != '' && this.productTypeSelect == '' && this.brandSelect == '' && this.min_price != '' && this.max_price == '') {
                if(this.productSelect == 'Filaments'){
                    // if nothing selected
                    if(this.weight == '' && this.diameter == ''){
                       return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && parseInt(b.price.substring(4).replace(',','')) > this.min_price) 
                    } 
                    // if only weight selected
                    if(this.weight != '' && this.diameter == ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.weight.includes(this.weight) && parseInt(b.price.substring(4).replace(',','')) > this.min_price)
                    }
                    //if only diameter selected
                    if(this.weight == '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.diameter == this.diameter && parseInt(b.price.substring(4).replace(',','')) > this.min_price)
                    }
                    // if both selected
                    if(this.weight != '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.weight.includes(this.weight) && b.dimension.diameter.includes(this.diameter) && parseInt(b.price.substring(4).replace(',','')) > this.min_price)
                    } 
                }
                else{
                    return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && parseInt(b.price.substring(4).replace(',','')) > this.min_price)
                }   
            }
            // product, max_price and min_price
            if (this.productSelect != '' && this.productTypeSelect == '' && this.brandSelect == '' && this.min_price != '' && this.max_price == '') {
                if(this.productSelect == 'Filaments'){
                    // if nothing selected
                    if(this.weight == '' && this.diameter == ''){
                       return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && parseInt(b.price.substring(4).replace(',','')) > this.min_price && parseInt(b.price.substring(4).replace(',','')) < this.max_price) 
                    } 
                    // if only weight selected
                    if(this.weight != '' && this.diameter == ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.weight.includes(this.weight) && parseInt(b.price.substring(4).replace(',','')) > this.min_price && parseInt(b.price.substring(4).replace(',','')) < this.max_price)
                    }
                    //if only diameter selected
                    if(this.weight == '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.diameter == this.diameter && parseInt(b.price.substring(4).replace(',','')) > this.min_price && parseInt(b.price.substring(4).replace(',','')) < this.max_price)
                    }
                    // if both selected
                    if(this.weight != '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.dimension.weight.includes(this.weight) && b.dimension.diameter.includes(this.diameter) && parseInt(b.price.substring(4).replace(',','')) > this.min_price && parseInt(b.price.substring(4).replace(',','')) < this.max_price)
                    } 
                }
                else{
                    return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && parseInt(b.price.substring(4).replace(',','')) > this.min_price && parseInt(b.price.substring(4).replace(',','')) < this.max_price)
                }   
            }
            
            // type and brand
            if (this.productSelect != '' && this.productTypeSelect == '' && this.brandSelect != '') {
                if(this.productSelect == 'Filaments'){

                    if(this.weight == '' && this.diameter == ''){
                       return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.brand == this.brandSelect) 
                    } 
                    // if only weight selected
                    if(this.weight != '' && this.diameter == ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.brand == this.brandSelect && b.dimension.weight.include(this.weight))
                    }
                    //if only diameter selected
                    if(this.weight == '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.brand == this.brandSelect && b.dimension.diameter == this.diameter)
                    }
                    // if both selected
                    if(this.weight != '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.brand == this.brandSelect && b.dimension.diameter.includes(this.diameter) && b.dimension.weight.includes(this.weight))
                    }
                }
                else{
                    return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.brand == this.brandSelect)
                }
                
            }
            // product and typeselect 
            if (this.productSelect != '' && this.productTypeSelect != '' && this.brandSelect == '') {
                // For Parts and Accessories
                if(this.productSelect == 'Parts & Accessories'){
                    this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.part_type == this.productTypeSelect)          
                    return this.searchList
                }
                // For Filaments as the filter is Material_type instead of Printer_type
                else if(this.productSelect == 'Filaments'){
                    // if nothing selected
                    if(this.weight == '' && this.diameter == ''){
                       return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type.includes(this.productTypeSelect)) 
                    } 
                    // if only weight selected
                    if(this.weight != '' && this.diameter == ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type.includes(this.productTypeSelect) && b.dimension.weight == this.weight)
                    }
                    //if only diameter selected
                    if(this.weight == '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type.includes(this.productTypeSelect) && b.dimension.diameter == this.diameter)
                    }
                    // if both selected
                    if(this.weight != '' && this.diameter != ''){
                        return this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type.includes(this.productTypeSelect) && b.dimension.diameter == this.diameter && b.dimension.weight == this.weight)
                    }
                }
                // For printer, scanner and remaining types
                else{
                    this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.printer_type == this.productTypeSelect)          
                    return this.searchList
                }
            }
            //type, type and brand
            if(this.productTypeSelect != '' && this.productSelect != '' && this.brandSelect != ''){
                // For parts and accessories
                if(this.productSelect == 'Parts & Accessories'){
                    this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.part_type == this.productTypeSelect && b.brand == this.brandSelect)          
                    return this.searchList
                }
                // For Filaments as the filter is Material_type instead of Printer_type
                else if(this.productSelect == 'Filaments'){
                    if(this.weight != '' && this.diameter == ''){
                        this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type == this.productTypeSelect && b.brand == this.brandSelect && b.dimension.weight.includes(this.weight))
                        return this.searchList
                    }
                    if(this.weight == '' && this.diameter != ''){
                        this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type == this.productTypeSelect && b.brand == this.brandSelect && b.dimension.diameter == this.diameter)
                        return this.searchList
                    }
                    if(this.weight == '' && this.diameter == ''){
                        this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type == this.productTypeSelect && b.brand == this.brandSelect)          
                        return this.searchList
                    }
                    if(this.weight != '' && this.diameter != ''){
                        this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.material_type == this.productTypeSelect && b.brand == this.brandSelect && b.dimension.weight.includes(this.weight) && b.dimension.diameter.includes(this.diameter))
                        return this.searchList
                    }
                }
                // For all other product
                else{
                    this.searchList = this.$store.getters.getProducts.filter(b => b.product_type == this.productSelect && b.printer_type == this.productTypeSelect && b.brand == this.brandSelect)          
                    return this.searchList
                }
            }
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