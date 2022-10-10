<template>
    <div>        
        <!-- Commenting banner for now. Will reuse when ads are implemented! -->
        <v-img class="d-none d-sm-block" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-02_cOOaYjjUy.jpg"/>
        <v-img class="d-block d-sm-none" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-04_vDAOKKI05.jpg"/>
         <v-container>
             <SearchToolBar class="ml-sm-2"/>
            <v-row>
                <v-col cols="12" sm="5">
                    <v-img height="400" :src="getProductInfo[0].image.url" contain/>
                    <div v-if="getProductInfo[0].color_price != '' " class="d-flex flex-wrap align-center justify-center my-5 mx-5">
                     
                        <v-tooltip v-for="color in getProductInfo[0].color_price" :key="color.id" bottom>
                        <template v-if="color !== ' ' && color !== '' " v-slot:activator="{ on, attrs }">
                            <v-btn 
                            class="colors ma-1"
                            depressed
                            x-small
                            fab
                            :color="color.color"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            ></v-btn>
                        </template>
                        <span>{{getColorName(color.color)}}</span>
                        </v-tooltip>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" class="px-5 pt-10">
                    <p class="caption mb-0">{{getProductInfo[0].brand}}</p>
                    <p class="title font-weight-bold">{{getProductInfo[0].name}}</p>
                    <p class="caption mb-0">Product Type: <span class="font-weight-bold">{{getProductInfo[0].product_type}}</span></p>
                    <p class="caption mb-0">Material Type: <span class="font-weight-bold px-1" v-for="material in getProductInfo[0].material_type" :key="material.id">{{material}}</span></p>
                    <p class="caption mb-0" v-if="getProductInfo[0].dimension.width != ''">Width: <span class="font-weight-bold">{{getProductInfo[0].dimension.width}}</span></p>
                    <p class="caption mb-0" v-if="getProductInfo[0].dimension.height != ''">Height: <span class="font-weight-bold">{{getProductInfo[0].dimension.height}}</span></p>
                    <p class="caption mb-0" v-if="getProductInfo[0].dimension.length != ''">Length: <span class="font-weight-bold">{{getProductInfo[0].dimension.length}}</span></p>
                    <p class="caption mb-0" v-if="getProductInfo[0].dimension.weight != ''">
                        Weight: <span class="font-weight-bold" v-for="weight in getProductInfo[0].dimension.weight" :key="weight.id">{{weight}}</span>
                    </p>
                   
                    <p class="caption mt-5">{{getProductInfo[0].short_description}}</p>

                    <!-- Price will be shown only if we have the price in the database. Else it will show the 'Request Quote' button! -->
                    <h3><span class="teal--text">Price: {{getProductInfo[0].price}}</span></h3>
                    
                    <div>
                        <v-dialog v-model="dialog" width="500">
                            <template v-slot:activator="{ on }">
                                <v-btn v-on="on"   color="teal mt-5 mb-10 darken-1" large depressed dark>Enquiry</v-btn>
                            </template>
                            <v-card class="py-3">
                                <v-card-title class="body-1">
                                    Product Enquiry
                                </v-card-title>
                                <v-card-text>
                                    <v-form ref="form">
                                        <v-row>
                                            <v-col cols="12" class="pt-2 pb-0">
                                                <v-row>
                                                    <v-col cols="12" sm="4">
                                                        <v-img height="100" :src="getProductInfo[0].image.url" contain/>
                                                    </v-col>
                                                    <v-col cols="12" sm="8" class="align-self-center">
                                                        <p class="title black--text font-weight-bold mb-0">{{getProductInfo[0].name}}</p>
                                                        <v-row class="mb-0 pb-0">
                                                        <v-col class="py-0">
                                                            <span class="caption mb-0 text-left">{{getProductInfo[0].brand}}</span>
                                                        </v-col>
                                                        <v-col cols="4" class="py-0">
                                                            <span class="subtitle-2 mb-0 text-right">Price: {{getProductInfo[0].price}}</span>
                                                        </v-col>
                                                    </v-row>
                                                    </v-col>
                                                </v-row>
                                            </v-col>
                                            <v-col cols="12" class="py-2"><v-text-field  v-model="form.full_name" outlined hide-details label="Full Name*" :rules="required"/></v-col>
                                            <v-col cols="12" class="py-2"><v-text-field  v-model="form.email" outlined hide-details label="Email*" :rules="required"/></v-col>
                                            <v-col cols="12" class="py-2"><v-text-field  v-model="form.phone" outlined hide-details label="Phone Number*" :rules="required"/></v-col>
                                            <v-col cols="12" class="py-2"><v-text-field  v-model="form.company" outlined hide-details label="Company"/></v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-btn @click.prevent="sendForm" color="teal" class="white--text" depressed>Send Request</v-btn>
                                                <v-btn @click="dialog = false" class="caption" text>cancel</v-btn>
                                            </v-col>
                                        </v-row>
                                        <v-row v-if="isSent">
                                            <v-col cols="12">
                                                <v-alert dismissible class="caption" type="success" icon="mdi-email">
                                                    Your inquiry is very important to us. <br/> We will get back to you as soon as possible.
                                                </v-alert>
                                            </v-col>
                                        </v-row>
                                        <v-row class="pb-0">
                                            <v-col cols="12" class="pb-0">
                                                <p class="caption blue-grey--text"><sup>*</sup>All fields are required</p>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="12">
                    <div class="my-3 mt-sm-10 pt-sm-10 pr-sm-5" v-if="productVideo">
                        <iframe width="100%" height="400" :src="productVideo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </v-col>
                <!-- <v-col cols="12" sm="12">
                        <v-card class="mt-5" flat>
                            <v-tabs background-color="white">
                                <v-tab>Specification</v-tab>
                                <v-tab>Features</v-tab>
                        
                            <v-tab-item class="caption">
                                    <v-row>
                                        <v-col cols="12" sm="4" v-for="i in getProductInfo_specs" :key= "i" class="pa-0 my-0">
                                            <v-list-item class="my-n1">
                                                <v-list-item-icon>
                                                    <v-icon color="teal">mdi-circle-medium</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content class="pa-0">
                                                    <p class="caption text-wrap my-0">{{i}}</p>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>
                                    </v-row>
                                </v-tab-item>
                                <v-tab-item class="py-7 caption">
                                    <v-row>
                                        <v-col cols="12" sm="6" v-for="i in getProductInfo_features" :key= "i" class="pa-0 my-0">
                                            <v-list-item class="my-n1" >
                                                <v-list-item-icon>
                                                    <v-icon color="teal">mdi-circle-medium</v-icon>
                                                </v-list-item-icon>
                                                <v-list-item-content class="pa-0">
                                                    <p class="caption text-wrap">{{i}}</p>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-col>
                                    </v-row>
                                </v-tab-item>
                        </v-tabs>
                    </v-card>
                </v-col> -->
            </v-row>
            <v-row v-if="randomProducts.length != 0">
                <v-col cols="12">
                    <h4 class="mb-5 mt-5">Other Recommended Printers</h4>
                    <client-only>
                        <VueSlickCarousel class="mt-3" ref="slick" :arrows="true" v-bind="settings" height="235">
                            <div v-for="product in randomProducts.splice(0,8)" :key="product._id" style="outline: 0 !important;border:0 !important">
                                <v-card :to="`/product/software/${product.name.split('/').join('%2F')}`" class="slider-card mx-2">
                                    <v-img :src="product.image.url"  height="130" class="pa-0 my-1" contain/>
                                    <v-card-title class="body-2 font-weight-bold" height="75">{{product.name}}</v-card-title>
                                    <v-card-subtitle><p class="mb-0 caption"><span class="font-weight-medium">{{product.brand}}</span></p></v-card-subtitle>
                                    <v-card-text class="mt-0  pb-0">
                                        <p class="body-2 teal--text font-weight-bold mb-0 product-title">{{product.price}}</p>
                                    </v-card-text>
                                <!-- Commenting button as suggested - Future scope is to add 2 links 'Buy Now' and 'Add to Cart' -->
                                    <!-- <v-card-actions class="secondary pa-0 mt-3">
                                        <v-btn :to="`/product/software/${product.name.split('/').join('%2F')}`" color="white" class="white--text py-5 caption teal" text dark depressed block><v-icon class="mr-3">mdi-layers-search-outline</v-icon> View Product</v-btn>
                                    </v-card-actions> -->
                                </v-card>
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

export default {
    data(){
        return {
            dialog: false,
            isSent: false,
            form: {
                full_name: '',
                email: '',
                phone: '',
                subjectMsg: '3DHUB - Request a Pricing Quote',
                to: 'info@3dhub.ae',
                comapny: '',
                eMessage: ''
            },
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
            required: [
                v => !!v || 'This field is required'
            ]
        }
    },
    async asyncData({app, store}){
        let data = await app.$axios.$get('/product/name/'+app.context.params.id)
        return {
            products: data
        }
    },
    components: {
        VueSlickCarousel,SearchToolBar
    },
    methods: {
        sendForm(){
                this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.form.phone} <br/>
                        Company: ${this.form.company} <br/>
                        Product: ${this.getProductInfo[0].name} <br/>
                `

                this.$axios.$post('/email/send-email/', this.form)
                .then(res=> {
                    this.$refs.form.reset()
                    this.isSent = true 
                })
                .catch(e => console.log(e)); 
        },
        getColorName(color) {
            let colorData = this.$store.getters.getColors.filter(a=> a.hex == color)           
           if(colorData.length > 0){
            return colorData[0].color_name
        }
        else{
            return ""
        }
        }
    },
    computed: {
        getProductInfo(){
            return _.filter(this.products, {'name': this.$route.params.id, "product_type": 'Software'})
        },
        getProductInfo_specs(){
            let obj = _.filter(this.$store.getters.getProducts, {'name': this.$route.params.id, product_type: 'Software'})
            let str_specs = JSON.stringify(obj[0].specs);
            let str_specs_withoutBreak = str_specs.replace(/(?:\n\n|\\n|\n|")/g,";")
            let arr = str_specs_withoutBreak.split(";")
            arr = arr.filter(function(el) { return el; }) // To remove empty elements from array since we have multiple \n in the string
            arr = arr.filter(function(el) { return /\S/.test(el); }) // To remove white space elements from array since we have multiple
            return arr;
        },
        getProductInfo_features(){
            let obj = _.filter(this.$store.getters.getProducts, {'name': this.$route.params.id, product_type: 'Software'})
            let str_specs_features = JSON.stringify(obj[0].features);
            let str_specs_withoutBreak_features = str_specs_features.replace(/(?:\n|\\n|\n\n|")/g,";")
            let arr = str_specs_withoutBreak_features.split(";")
            arr = arr.filter(function(el) { return el; }) // To remove empty elements from array since we have multiple \n in the string
            arr = arr.filter(function(el) { return /\S/.test(el); }) // To remove white space elements from array since we have multiple
            return arr;
        },
        randomProducts(){
                return _.shuffle(_.filter(_.reject(this.$store.getters.getProducts, {"name": this.$route.params.id}), {"product_type": 'Software'}), 8)
        },
        productVideo() {
            if(this.getProductInfo[0].video == null) {
                return  false
            }

            return this.getProductInfo[0].video[0]
        }
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