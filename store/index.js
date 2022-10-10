import Vuex from "vuex"
import Cookie from 'js-cookie'


const createStore = () => {
    return new Vuex.Store({
        state: {
            brands: null,
            products: null,
            printer_type: null,
            part_type: null,
            material_type: null,
            industry: null,
            services: null,
            faq: null,
            color: null,
            productSelect: '',
            productTypeSelect: '',
            brandSelect: '',
            max_price: '',
            min_price: '',
            weight: '',
            diameter: '',
            token: null,
            userInfo: {},
            totalPriceOnCart: '',
            totalPriceOnWishList: '',
            cart: [],
            wishlist: [],
            cartCount: 0,
            wishListCount: 0,
            countryDialCodes: [],
            sliderItemsHomesection4: [],
            posts: [],
            searchKeyword: '',
            searchResults: null,
            discount:{},
            settings:{},
            contents:{},
            Printer_Types:null,
            featured_products: null,

        },

        mutations: {
            setBrands(state, payload) {
                state.brands = payload
            },
            setProducts(state, payload) {
                state.products = payload
            },
            setPrinterType(state, payload) {
                state.printer_type = payload
            },
            setPartType(state, payload) {
                state.part_type = payload
            },
            setMaterialType(state, payload) {
                state.material_type = payload
            },
            setIndustry(state, payload) {
                state.industry = payload
            },
            setServices(state, payload) {
                state.services = payload
            },
            setFaq(state, payload) {
                state.faq = payload
            },
            setColor(state, payload) {
                state.color = payload
            },
            setProductSelect(state, payload) {
                state.productSelect = payload
            },
            setProductTypeSelect(state, payload) {
                state.productTypeSelect = payload
            },
            setBrandSelect(state, payload) {
                state.brandSelect = payload
            },
            setMaxPrice(state, payload) {
                state.max_price = payload
            },
            setMinPrice(state, payload) {
                state.min_price = payload
            },
            setWeight(state, payload) {
                state.weight = payload
            },
            setDiameter(state, payload) {
                state.diameter = payload
            },
            setToken(state, payload) {
                state.token = payload
            },
            setUser(state, payload) {
                state.userInfo = payload
            },

            setFeaturdProducts(state,payload){
            state.featured_products = payload
            },
            setSettings(state, payload) {
                console.log("payload",payload);
                state.settings = payload
            },


            
            clearUser(state) {
                state.userInfo = null
            },
            clearToken(state) {
                state.token = null
            },

            setCountryDialcodes(state, payload) {
                state.countryDialCodes = payload
            },
            clearCart(state) {
                if (state.cart != null) {
                    state.cart.splice(0, state.cart.length)
                }
                state.cartCount = 0
                state.totalPriceOnCart = 0
            },
            setCart(state, payload) {
                state.cart = payload
                if (state.cart != null) {
                    state.cartCount = state.cart.reduce(function (sum, current) {
                        return sum + current.quantity;
                    }, 0);
                    state.totalPriceOnCart = state.cart.reduce(function (sum, current) {
                        if (current.price) {
                            return sum + (current.price * current.quantity);
                        }
                        else {
                            return sum;
                        }
                    }, 0);
                }
                else {
                    state.cartCount = 0
                    state.totalPriceOnCart = 0
                }
            },
            setWishList(state, payload) {
                state.wishlist = payload
                state.wishListCount = state.wishlist.length

            },
            setWishListTotal(state, payload) {
                state.totalPriceOnWishList = payload
            },
            SetSlierItemsHomeSection4(state, payload) {
                state.sliderItemsHomesection4 = payload
            },

            SetPosts(state, payload) {
                state.posts = payload;

            },
            SetKeyword(state, payload) {
                state.searchKeyword = payload;
            },

            SetSearchResults(state, payload) {
                state.searchResults = payload;
            },
            SetGuestWishlist(state, payload) {
                state.wishlist = payload;

            },
            SetDiscount(state,payload){
                state.discount=payload;
                let TotalWithDiscount=payload.total_after_discount;
               // state.totalPriceOnCart=TotalWithDiscount;
            },
            setContents(state,payload) {
                state.contents = payload;
            },
            setPrinterTypes(state,payload){
                state.Printer_Types=payload;
            }


        },

        actions: {
            async nuxtServerInit({ commit, getters }) {

                // Brands
                await this.$axios.$get('/brand/all')
                    .then(res => commit('setBrands', res))
                    .catch(err => console.log(err))

                if (!getters.getProducts) {
                    // Products
                    await this.$axios.$get('/product/all')
                        .then(res => commit('setProducts', res))
                        .catch(err => console.log(err))
                }

                // Printer Type
                await this.$axios.$get('/printer_type/all')
                    .then(res => commit('setPrinterType', res))
                    .catch(err => console.log(err))


                // Part Type
                await this.$axios.$get('/part_type/all')
                    .then(res => commit('setPartType', res))
                    .catch(err => console.log(err))

                // Material Type
                await this.$axios.$get('/material/all')
                    .then(res => commit('setMaterialType', res))
                    .catch(err => console.log(err))

                // Industries
                await this.$axios.$get('/industries/all')
                    .then(res => commit('setIndustry', res))
                    .catch(err => console.log(err))

                // Services
                await this.$axios.$get('/services/all')
                    .then(res => commit('setServices', res))
                    .catch(err => console.log(err))

                // FAQ
                await this.$axios.$get('/faq/all')
                    .then(res => commit('setFaq', res))
                    .catch(err => console.log(err))

                // Colors
                await this.$axios.$get('/color/all')
                    .then(res => commit('setColor', res))
                    .catch(err => console.log(err))


                //Get All Posts

                await this.$axios.$get('/blog/post/all')
                    .then(res => commit('SetPosts', res))
                    .catch(err => console.log(err))

               //Get Settings

               await this.$axios.$get('/settings/get')
               .then(res => commit('setSettings', res))
               .catch(err => console.log(err))


                //GetContents

                await this.$axios.$get('/contents/get')
                .then(res => commit('setContents', res))
                .catch(err => console.log(err))

               //Printer_types
                await this.$axios.$get('/printer_type/all')
                .then(res => commit('setPrinterTypes', res))
                .catch(err => console.log(err))


                 //Featured_products
                 await this.$axios.$get('/product/featured/all')
                 .then(res => commit('setFeaturdProducts', res))
                 .catch(err => console.log(err))



               // setFeaturdProducts

              


                    


                //Set Wish List  og Guest User

                //  this.$store.dispatch("getGuestWishListData");
                // ,getters.getGuestWishListData



                //Home Slider 4 items

                let slideritems = [
                    {
                        web_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/In_Page_Banner-05_SIHbokLsU.jpg",
                        mobile_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/In_Page_Banner-06_8bCptQcxl.jpg",
                    },
                    {
                        web_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/In_Page_Banner-05_SIHbokLsU.jpg",
                        mobile_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/In_Page_Banner-06_8bCptQcxl.jpg",
                    },

                ]

                //context.commit('SetSlierItemsHomeSection4',slideritems)
                commit('SetSlierItemsHomeSection4', slideritems)






            },

            saveUserInfo({ commit, state }, res) {
                commit('setToken', res.token)
                commit('setUser', res.user)

                function replacer(key, value) {
                    if (key == "password") return undefined;
                    else if (key == "unique_token") return undefined;
                    else return value;
                }

                localStorage.setItem('usr', JSON.stringify(res.user, replacer))
                localStorage.setItem('nathanhr-token', res.token)
                Cookie.set('nathanhr-cookie', res.token)
            },

            initAuth(context, req) {
                let token;
                let hr;
                let emp;

                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }

                    const theCookie = req.headers.cookie
                        .split(";")
                        .find(c => c.trim().startsWith("nathanhr-cookie="));

                    if (!theCookie) {
                        return;
                    }

                    token = theCookie.split("=")[1]
                } else if (process.client) {
                    token = localStorage.getItem("nathanhr-token");
                } else {
                    token = null;
                }
                context.commit("setToken", token);
            },

            logout(context) {
                context.commit("clearToken");
                context.commit("clearUser");
                context.commit("clearCart");
                Cookie.remove("nathanhr-cookie");
                if (process.client) {
                    localStorage.removeItem("usr");
                    localStorage.removeItem("aur");
                    localStorage.removeItem("hur");
                    localStorage.removeItem("eur");
                    localStorage.removeItem("nathanhr-token");
                    localStorage.removeItem("tokenExpiration");
                    localStorage.removeItem("cart-info");
                    localStorage.removeItem("prev-url");

                }
            },

            addToCart({ commit, state }, data) {
                const isUpdate = data['update'] || false
                const colorCode = data["color_code"] || ''


                if (state.token != null) { //authenticated
                    const AuthStr = "Bearer ".concat(state.token);
                    let user = JSON.parse(localStorage.getItem('usr'))
                    data["user_id"] = user._id
                    this.$axios.$post('/carts/new', data, { headers: { Authorization: AuthStr } })
                        .then(res => {
                            this.$axios
                                .$get("/carts/" + user._id, { headers: { Authorization: AuthStr } })
                                .then((res) => {
                                    localStorage.setItem('cart-info', JSON.stringify(res));
                                    this.commit("setCart", res)
                                })
                                .catch((e) => console.log(e));
                        }).catch(e => console.log(e))
                }
                else {
                    if (isUpdate) {
                        delete data.update
                    }
                    const product_type = data.product_type
                    const name = data.name
                    let product_found = false

                    let cartFromLocalStoarge = JSON.parse(localStorage.getItem("cart-info")) || []


                    for (var cartinfo of cartFromLocalStoarge) {
                        if (cartinfo.product_type === product_type && cartinfo.name === name) {
                            if (colorCode != '') {
                                if (cartinfo.product_type.color_code === colorCode) {
                                    if (isUpdate) {
                                        cartinfo.quantity = data.quantity
                                    }
                                    else {
                                        cartinfo.quantity = cartinfo.quantity + data.quantity
                                    }
                                    localStorage.setItem('cart-info', JSON.stringify(cartFromLocalStoarge));
                                    this.commit("setCart", JSON.parse(localStorage.getItem("cart-info")))
                                    product_found = true
                                    break;
                                }
                            }
                            else {
                                if (isUpdate) {
                                    cartinfo.quantity = data.quantity
                                }
                                else {
                                    cartinfo.quantity = cartinfo.quantity + data.quantity
                                }
                                localStorage.setItem('cart-info', JSON.stringify(cartFromLocalStoarge));
                                this.commit("setCart", JSON.parse(localStorage.getItem("cart-info")))
                                product_found = true
                                break;
                            }
                        }
                    }
                    if (!product_found) {
                        data["quantity"] = data["quantity"] || 1
                        cartFromLocalStoarge.push(data);
                        localStorage.setItem('cart-info', JSON.stringify(cartFromLocalStoarge));
                        this.commit("setCart", cartFromLocalStoarge)
                    }
                }
            },
            addToWishList(context, data) {

                if (context.state.token != null) { //authenticated                              

                    const AuthStr = "Bearer ".concat(context.state.token);
                    let user = JSON.parse(localStorage.getItem('usr'))
                    data["user_id"] = user._id

                    let dataPayload = {
                        "product": data,
                        "user_id": user._id
                    }

                    this.$axios.$post('/wishlist/new', dataPayload, { headers: { Authorization: AuthStr } })
                        .then(res => {
                            context.dispatch("getWishListData");
                        }).catch(e => console.log(e))
                }

                else {
                    context.commit('setWishList', data)

                    let wishlistlocal = [];
                    let wishlisttemp = [];

                    wishlistlocal = JSON.parse(localStorage.getItem("wishlist-info")) || []
                    wishlisttemp = JSON.parse(localStorage.getItem("wishlist-temp")) || []
                    wishlistlocal.push(data)
                    wishlisttemp.push(data)
                    localStorage.setItem('wishlist-info', JSON.stringify(wishlistlocal));//store wish list for display wish list page 
                    localStorage.setItem('wishlist-temp', JSON.stringify(wishlisttemp));//store  wish list product locally for guest user ,once logged in user we will send this API

                    context.commit('setWishList', wishlistlocal)

                    // context.commit('setWishList', wishlistFromLocalStoarge)
                }



            },
            getWishListData(context) {
                const AuthStr = "Bearer ".concat(context.state.token);
                let user = JSON.parse(localStorage.getItem('usr'))

                this.$axios
                    .$get("/wishlist/" + user._id, { headers: { Authorization: AuthStr } })
                    .then((res) => {

                        let products = [];

                        res.forEach(function (wishlist) {
                            // console.log(wishlist.user_id);
                            let product = wishlist.product;

                            product.forEach(function (product) {
                                products.push(product)
                            })
                        })
                        localStorage.setItem('wishlist-info', JSON.stringify(products));
                        context.commit('setWishList', products)
                    }).catch((e) => console.log(e));
            },



            getCountryDailcodes(context) {
                let countries = ""
                context.commit('setCountryDialcodes', countries)

            },
            getSlideritems(context) {

                let slideritems = [
                    {
                        web_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Banner_ydGwCVEwi.gif",
                        mobile_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Mobile_aqS0PBDSW.gif",
                    },
                    {
                        web_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Banner_ydGwCVEwi.gif",
                        mobile_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Mobile_aqS0PBDSW.gif",
                    },
                    {
                        web_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Banner_ydGwCVEwi.gif",
                        mobile_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Mobile_aqS0PBDSW.gif",
                    },
                    {
                        web_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Banner_ydGwCVEwi.gif",
                        mobile_src:
                            "https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D-Web-Mobile_aqS0PBDSW.gif",
                    },
                ]

                context.commit('SetSlierItemsHomeSection4', slideritems)

            },

            async SearchProducts(context, data) {

                await this.$axios.$get('/search/' + data)
                    .then(res => context.commit('SetSearchResults', res))
                    .catch(err => console.log(err))

                //  context.commit('SetKeyword',data)

            },
            

            





            // if (state.token != null) { //authenticated''                



            // const AuthStr = "Bearer ".concat(state.token);
            // let user = JSON.parse(localStorage.getItem('usr'))


            //console.log(user)                      



            /* await this.$axios.$post('/wishlist/123',{ headers: {Authorization: AuthStr }})
             .then(res => console.log(res))
             .catch(err => console.log(err))   
            }*/


            // }



        },

        getters: {
            getBrands(state) {
                return state.brands
            },
            getProducts(state) {
                return state.products
            },
            getPrinterType(state) {
                return state.printer_type
            },
            getPartType(state) {
                return state.part_type
            },
            getMaterialType(state) {
                return state.material_type
            },
            getIndustries(state) {
                return state.industry
            },
            getServices(state) {
                return state.services
            },
            getFaq(state) {
                return state.faq
            },
            getColors(state) {
                return state.color
            },
            getProductSelect(state) {
                return state.productSelect
            },
            getProductTypeSelect(state) {
                return state.productTypeSelect
            },
            getBrandSelect(state) {
                return state.brandSelect
            },
            getMaxPrice(state) {
                return state.max_price
            },
            getMinPrice(state) {
                return state.min_price
            },
            getWeight(state) {
                return state.weight
            },
            getDiameter(state) {
                return state.diameter
            },
            isAuthenticated(state) {
                return state.token != null
            },
            getToken(state) {
                return state.token
            },
            getUserInfo(state) {
                return state.userInfo
            },
            getTotalPriceOnCart(state) {
                return state.totalPriceOnCart;
            },
            getTotalPriceOnWishList(state) {
                return state.totalPriceOnWishList;
            },
            getCartCount(state) {
                return state.cartCount;
            },
            getWishListCount(state) {
                return state.wishListCount;
            },
            getCart(state) {
                return state.cart
            },
            getWishList(state) {
                return state.wishlist
            },
            getHeaders(state) {
                const AuthStr = "Bearer ".concat(state.token);
                return { headers: { Authorization: AuthStr } }
            },
            getSearchResults(state) {
                return state.searchResults;
            },
            getDiscountAmount(state){
                return state.discount.discount_amount;
            }
            ,getSettings(state){
                return state.settings;
            },
            getPrinterTypes(state){
                return state.Printer_Types;
            },

            getFeaturdProducts(state){
                return state.featured_products;
            }
            
           


        }
    })
}

export default createStore
export const strict = false