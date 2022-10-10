<template>
    <div class="teal">
        <!-- <TopHeader/>-->
        <TopHeaderMobile/> 
        <v-app-bar class="white py-2 d-none d-sm-block v-app-bar" :clipped-left="clipped"  flat  light>
            <v-container class="d-flex justify-center justify-sm-space-between align-baseline align-sm-center flex-wrap text-center text-sm-left pt-0 pt-sm-5 px-0 px-sm-2"> 
                <v-toolbar-title @click.prevent="home" class="font-weight-medium black--text logo mt-5 mt-sm-0"><img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png" width="230" contain/></v-toolbar-title>
                <v-spacer />
                <div class="d-flex flex-wrap align-center">
                    <a href="tel:9714380033482" title="Call Us" class="black--text text-decoration-none headline font-weight-bold" style="font-family:Roboto, sans-serif !important"><v-icon color="#000000de" size="25" class="mr-2">mdi-phone</v-icon> 800 3DHUB</a>
                    <!-- <ul class="pl-0 d-sm-flex d-none">
                        <li class="mx-1"><v-btn class="caption black--text"  text to="/">Home</v-btn></li>
                        <li class="mx-1"><v-btn class="caption black--text"  text to="/about-us">About Us</v-btn></li>
                    </ul> -->
                    <!-- <v-btn  class="ml-1 caption d-none d-sm-inline-block" color="black" outlined depressed @click.prevent="login" >Login</v-btn> -->
                </div>
                <!-- <ul class="pl-4 d-flex align-center">
                    <li class="mx-1">
                        <div class="mr-3" v-if="cartInfo == ''">
                            <v-badge color="grey" content="0" overlap>
                                <v-icon color="black" size="20" class="mr-2">fas fa-shopping-cart</v-icon>
                            </v-badge>
                        </div>
                        <div class="mr-3"  v-else>
                            <v-badge  color="green darken-1" :content="cartInfo.length"  overlap>
                                <v-icon @click.prevent="viewCart" color="black" size="20" class="mr-2">fas fa-shopping-cart</v-icon>
                            </v-badge>
                        </div>
                    </li>
                </ul> -->
                <v-app-bar-nav-icon class="d-inline d-sm-none"  color="black" @click.stop="drawer = !drawer" />
            </v-container>
        </v-app-bar>
        <v-container class="py-0 d-none d-sm-block mega-menu">
            <v-row class="pa-0">
                <v-col cols="12" sm="9" class="pa-0">
                    <ul class="pa-0 d-flex align-center justify-start">
                        <li v-for="(activity, index) in menus.slice(0,11)" :key="index"><a @mouseleave="closeMegaMenu" @mouseover="openMegaMenu(activity.title)" class="py-5 d-inline-block body-2 white--text mx-8 font-weight-medium text-uppercase">{{activity.title}}</a></li>
                        <li><a @mouseleave="closeMegaMenu" @mouseover="openMegaMenu('Solutions')" @click.prevent="$router.push('/solutions')" class="py-5 d-inline-block body-2 white--text mx-8 font-weight-medium text-uppercase">Solutions</a></li>
                        <li style="position:relative">
                            <a @mouseleave="closeNav" @mouseover="openNav('3DHUB')" @click.prevent="$router.push('/about-us')" class="py-5 d-inline-block body-2 white--text mx-8 font-weight-medium text-uppercase">3DHUB</a>
                            <v-row @mouseover="open_nav = true"  @mousemove="open_nav = true" @mouseleave="open_nav = false" class="open-nav grey lighten-5" v-if="open_nav && this.activityTitle == '3DHUB'">
                                <v-col cols="12" class="py-2 px-5">
                                    <v-row>
                                        <v-col cols="12" sm="12" class="pa-0">
                                            <v-btn @click.prevent="$router.push('/about-us')" text block depressed>About Us</v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="12" class="pa-0">
                                            <v-btn @click.prevent="$router.push('/contact-us')" text block depressed>Contact Us</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </li>
                    </ul>
                </v-col>
                <v-col cols="12" sm="3" class="text-right align-self-center">
                    
                    <v-dialog v-model="dialog" width="500">
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on"  class="teal" dark  depressed><v-icon class="mr-2" size="16">mdi-tablet-ipad</v-icon> Get a quote</v-btn>
                        </template>
                        <v-card class="py-3">
                            <v-card-title class="body-1">
                                Let us know your requirements
                            </v-card-title>
                            <v-card-text>
                                <v-form ref="form">
                                    <v-row v-if="isSent">
                                        <v-col cols="12">
                                            <v-alert dismissible class="caption" type="success" icon="mdi-email">
                                                Thank you for your inquiry. <br/> We will get back to you as soon as possible.
                                            </v-alert>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" class="py-2"><v-text-field  v-model="form.full_name" outlined hide-details label="Full Name*" :rules="required"/></v-col>
                                        <v-col cols="12" class="py-2"><v-text-field  v-model="form.email" outlined hide-details label="Email*" :rules="required"/></v-col>
                                        <v-col cols="12" class="py-2"><v-text-field  v-model="form.phone" outlined hide-details label="Phone Number*" :rules="required"/></v-col>
                                        <v-col cols="12" class="py-2"><v-text-field  v-model="form.company" outlined hide-details label="Company"/></v-col>
                                        <v-col cols="12" class="py-2"><v-textarea  v-model="form.message" outlined hide-details label="Message"/></v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-btn @click.prevent="sendForm" color="black" class="white--text" depressed>Send Request</v-btn>
                                            <v-btn @click="dialog = false" class="caption" text>cancel</v-btn>
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
                    <!-- <p class="mb-0 mr-3 white--text font-weight-bold"><v-icon color="white" class="mr-2">mdi-phone</v-icon> 800 3DHUB</p> -->
                </v-col>
            </v-row>
            
            <v-row @mouseover="open_mega_menu = true"  @mousemove="open_mega_menu = true" @mouseleave="open_mega_menu = false" class="mega-menu-box grey lighten-5" v-if="open_mega_menu && this.activityTitle == 'Brands'">
                <v-col cols="12" class="pt-0 px-5">
                    <v-row>
                        <v-col cols="12" sm="12">
                            <p class="mb-1 caption font-weight-bold">Brands</p>
                            <ul class="pl-0 d-flex justify-space-around flex-wrap">
                                <li class="caption" v-for="data in brandsSort" :key="data.title">
                                    <v-img class="ma-1 logo" :title="data.brand_name" @click.prevent="$router.push('/brand/'+data.brand_name)" :src="data.brand_logo.url" height="80" width="100" contain/>
                                    <!-- <span @click.prevent="$router.push('/brand/'+data.brand_name)">{{data.brand_name}}</span> -->
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row @mouseover="open_mega_menu = true"  @mousemove="open_mega_menu = true" @mouseleave="open_mega_menu = false" class="mega-menu-box grey lighten-5" v-if="open_mega_menu && this.activityTitle == 'Products'">
                <v-col cols="12" class="py-7 px-5">
                    <v-row class="justify-center">
                        <v-col cols="12" sm="2" class="text-center product-icons" title="Printers" @click.prevent="$router.push('/printers')">
                            <v-icon size="60">mdi-printer-3d-nozzle-outline</v-icon>
                            <p class="my-2 body-1 font-weight-bold">Printers</p>
                        </v-col>
                        <v-col cols="12" sm="2" class="text-center product-icons" title="Post Processing" @click.prevent="$router.push('/product/printer-type/Post%20Processing')">
                            <v-icon size="60">mdi-television-clean</v-icon>
                            <p class="my-2 body-1 font-weight-bold">Post Processing</p>
                        </v-col>
                        <v-col cols="12" sm="2" class="text-center product-icons" title="Scanners & 3d Pen" @click.prevent="$router.push('/scanners')">
                            <v-icon size="60">mdi-cube-scan</v-icon>
                            <p class="my-2 body-1 font-weight-bold">Scanners &amp; 3d Pen</p>
                        </v-col>
                        <v-col cols="12" sm="2" class="text-center product-icons" title="Filaments" @click.prevent="$router.push('/filaments')">
                            <v-icon size="60">mdi-bottle-tonic-outline</v-icon>
                            <p class="my-2 body-1 font-weight-bold">Filaments</p>
                        </v-col>
                        <v-col cols="12" sm="2" class="text-center product-icons" title="Parts & Accessories" @click.prevent="$router.push('/parts-accessories')">
                            <v-icon size="60">mdi-layers</v-icon>
                            <p class="my-2 body-1 font-weight-bold">Parts &amp; Accessories</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row @mouseover="open_mega_menu = true"  @mousemove="open_mega_menu = true" @mouseleave="open_mega_menu = false" class="mega-menu-box grey lighten-5" v-if="open_mega_menu && this.activityTitle == 'Industries'">
                <v-col cols="12" class="py-7 px-5">
                    <ul class="px-0 d-flex justify-space-around industries-list">
                        <li class="caption py-3 px-2 text-center" v-for="data in industriesTypeSort" :key="data.title" @click.prevent="$router.push('/product/industry/'+data.industry_name)">
                            <v-icon size="50" v-if="data.industry_name == 'Aerospace & Aviation'">mdi-airplane-takeoff</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Architecture & Construction'">mdi-crane</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Automotive'">mdi-truck</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Consumer goods'">mdi-basket-outline</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Education'">mdi-library</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Food'">mdi-food-variant</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Jewelry'">mdi-diamond-outline</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Manufacturing'">mdi-factory</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Medical & Dental'">mdi-hospital-building</v-icon>
                            <v-icon size="50" v-if="data.industry_name == 'Oil & Gas'">mdi-oil</v-icon>
                            <span class="d-block caption font-weight-bold mt-3" >{{data.industry_name}}</span>
                        </li>
                    </ul>
                </v-col>
            </v-row>
            <v-row @mouseover="open_mega_menu = true"  @mousemove="open_mega_menu = true" @mouseleave="open_mega_menu = false" class="mega-menu-box grey lighten-5" v-if="open_mega_menu && this.activityTitle == 'Solutions'">
                <v-col cols="12" class="pt-0 px-5">
                    <v-row>
                        <v-col cols="12" md="3">
                            <v-img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Boxes-01_LKTfloFAx.jpg" contain/>
                            <p class="mt-2 mb-1 body-2 font-weight-bold">Educational Institutions</p>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Boxes-02_pXO1tEI3Un.jpg" contain/>
                            <p class="mt-2 mb-1  body-2 font-weight-bold">Manufacturing Industries</p>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Boxes-03_V4y62uKEz.jpg" contain/>
                            <p class="mt-2 mb-1  body-2 font-weight-bold">Hospitals & Healthcare</p>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Boxes-04_LlcdX7e78g.jpg" contain/>
                            <p class="mt-2 mb-1  body-2 font-weight-bold">Other 3D Solutions</p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <!-- <v-row @mouseover="open_mega_menu = true"  @mousemove="open_mega_menu = true" @mouseleave="open_mega_menu = false" class="mega-menu-box grey lighten-5" v-if="open_mega_menu && this.activityTitle == '3DHUB'">
                <v-col cols="12" class="pt-0 px-5">
                    <v-row>
                        <v-col cols="12" md="2">
                            <p class="mb-1 caption font-weight-bold">3D Academy</p>
                            
                        </v-col>
                        <v-col cols="12" md="3">
                            <p class="mb-1 caption font-weight-bold"></p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row> -->
            <v-row @mouseover="open_mega_menu = true"  @mousemove="open_mega_menu = true" @mouseleave="open_mega_menu = false" class="mega-menu-box grey lighten-5" v-if="open_mega_menu && this.activityTitle == '3D Academy'">
                <v-col cols="12" class="pt-0 px-5">
                    <v-row>
                        <v-col cols="12" md="2">
                            <p class="mb-1 caption font-weight-bold">3D Academy</p>
                            
                        </v-col>
                        <v-col cols="12" md="3">
                            <p class="mb-1 caption font-weight-bold"></p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <!-- <v-row @mouseover="open_mega_menu = true" @mousemove="open_mega_menu = true" @mouseleave="open_mega_menu = false" class="mega-menu-box white" v-if="open_mega_menu">
                <v-col cols="12" class="pt-0 px-5">
                    <v-row>
                        <v-col cols="12" md="2">
                            <p class="mb-1 caption font-weight-bold">Categories</p>
                            <ul class="pl-0">
                                <li class="caption" v-for="data in selectedCategory[0].activities" :key="data.title"><span @click.prevent="openCategoryPageWithActivity(selectedCategory[0].link, data.title)">{{data.title}}</span></li>
                            </ul>
                        </v-col>
                        <v-col cols="12" md="10">
                            <v-row class="pa-0">
                                <v-col cols="12" md="4" class="py-0">
                                    <p class="mb-1 caption font-weight-bold">Top Services</p>
                                    <ul class="pl-0 top-services">
                                        <li class="caption" v-for="data in selectedCategory[0].jobs" :key="data.title">{{data.title}}</li>
                                    </ul>
                                </v-col>
                                <v-col cols="12" md="4" class="py-0">
                                    <img :src="selectedCategory[0].ads[0].first_block.img_url" width="100%" />
                                </v-col>
                                <v-col cols="12" md="4" class="py-0">
                                    <img :src="selectedCategory[0].ads[1].first_block.img_url" width="100%" />
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row> -->
        </v-container>
    </div>
</template>

<script>
import TopHeader from '~/components/shared/header/header'
import TopHeaderMobile from '~/components/shared/header/top-header-mobile'

export default {
    props: [
        'activitiesList'
    ],
    components: {
        TopHeader,
        TopHeaderMobile
    },
    data() {
        return {
            dialog: false,
            isSent: false,
            form: {
                full_name: '',
                email: '',
                phone: '',
                to: 'info@3dhub.ae',
                company: '',
                message: '',
                subjectMsg: '3DHUB - Request a quote',
                eMessage: ''
            },
            required: [
                v => !!v || 'This field is required'
            ],
            date: Date.now(),
            clipped: false,
            drawer: false,
            open_mega_menu: true,
            open_nav: true,
            miniVariant: false,
            activitiesLists: {},
            activityTitle: '',
            menus: [
                { title: 'Brands',link: 'consulting'},
                { title: 'Products',link: 'products'},
                { title: 'Industries',link: 'industries'},
            ],
            selectedCategory: [{activities: [{}]}]
        }
    },
    mounted() {
       /*  this.getActivities()
        this.setCart() */
    },
    methods: {
        async getActivities() {
            if(this.$store.getters.getActivities != '') {
                this.activitiesLists =  await this.$axios.$get('/activities/categories')
                this.$store.commit('SET_ACTIVITIES', this.activitiesLists )
            }
        },
        login() {
            this.$auth.login()
        },
        home() {
            this.$router.push('/')
        },
        openMegaMenu(title) {
            this.open_mega_menu = true
            this.activityTitle = title
            /* this.selectedCategory = _.filter(this.$store.getters.getActivities, { 'title': title}); */
        },
        closeMegaMenu() {
            this.open_mega_menu = false
        },
        openNav(title){
            this.open_nav = true
            this.activityTitle = title
        },
        closeNav() {
            this.open_nav = false
        },
        /* openCategoryPage(link) {
            this.$router.push('/category/'+link)
        },
        openCategoryPageWithActivity(link, activity_link) {
            this.$router.push('/category/'+link+'/'+activity_link)
        },
        viewCart(){
            this.$router.push('/cart')
        }, 
        closeMegaMenu() {
            this.open_mega_menu = false
        }, */
        setCart(){
            this.$store.dispatch('checkCart')
        },
        sendForm(){
                this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.form.phone} <br/>
                        Company: ${this.form.company} <br/>
                        Message: ${this.form.message} <br/>
                `

                this.$axios.$post('/email/send-email/', this.form)
                .then(res=> {
                    this.$refs.form.reset()
                    this.isSent = true 
                })
                .catch(e => console.log(e)); 
        }
    },
    computed: {
        cartInfo() {
            return this.$store.getters.getCart
        },
        brandsSort(){
            return _.sortBy(this.$store.getters.getBrands, ['brand_name'])
        },
        printerTypeSort(){
            return _.sortBy(this.$store.getters.getPrinterType, ['printer_type'])
        },
        materialTypeSort(){
            return _.sortBy(this.$store.getters.getMaterialType, ['material_name'])
        },
        industriesTypeSort(){
            return _.sortBy(this.$store.getters.getIndustries, ['industry_name'])
        }
        /* getCategories(title) {
            const data = _.filter(this.TopHeader, { 'title': title});
            return data
        } */
    }
}
</script>

<style lang="scss" scoped>

.v-app-bar {
    height: 100px !important;
}

.mega-menu {
    position: relative;

    a {
        font-size: 13px !important;
    }

    .open-nav {
        position: absolute;
        top: 53px;
        left: 0;
        width:auto;
        z-index: 9;
    }

    .mega-menu-box {
        position: absolute;
        top: 53px;
        left: 0;
        width: 100%;
        z-index: 9;

        ul {
            li {
                cursor: pointer;

                
            }

            &.industries-list {
                li {
                    border: 1px solid #eee;
                    width: 100%;

                    span {
                        line-height: 1;
                    }
                }
            }

            &.top-services {
                li {
                    cursor: unset;
                }
            }
        }
    }
}

.product-icons {
    cursor: pointer;
    border: 1px solid #eee
}

ul {
    list-style: none !important;
}
ul li a {
    text-decoration: none;
}
.all-activty {
    border-right: 0px solid #2b2b2b
}
.nav-divider {
    min-height: 10px;
}
.nav-lists {
    min-height: 40px;
}
.v-toolbar__title {
    cursor: pointer;
}

.activity-lists {
    width: 500px;

    .v-list-item {
        flex: unset !important;
    }
}

@media screen and (max-width:480px) {
    .logo {
        width: 100%;
    }
}
</style>