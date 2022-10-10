<template>
    <div class="mb-10">
        <v-container>
            <!--<ul><li v-for="(brands, index) in brandsSort" :key="index">{{users}}<br><br></li></ul>-->
            <SearchToolBar class="ml-sm-2"/>
            <h1 class="heading-b mb-7 mt-7 text-center">Brands</h1>

            <v-row class="px-0 mt-5" v-if="brandsSort != ''">
                <v-col  cols="6" sm="3" v-for="(brands, index) in brandsSort" :key="index" class="px-3 my-5">
                    <v-card :to="`/brand/${brands.brand_name}`" class=" pa-2 slider-card mx-2">
                        <v-img :src="brands.brand_logo.url"  height="150" class="my-1" contain/>
                        <v-divider class="mt-4"/>
                        <v-card-text class="mt-2 d-inline-block text-truncate pa-2" >
                            <h2 class="primary--text font-weight-bold text-center mb-0">{{brands.brand_name}}</h2>            
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="mt-5" v-else>
                <v-col cols="12">
                    Sorry, No Product Found.
                </v-col>
            </v-row>
            
            <v-divider class="mb-6 mt-10"/>

        </v-container>
    </div>
</template>

<script>
import SearchToolBar from '~/components/searchtoolbar'

export default {
    props: [
    ],
    data() {
        return {
        }
    },
    components: {
        SearchToolBar
    },
    methods: {
    },
    computed: {
        brandsSort(){
            return _.sortBy(this.$store.getters.getBrands, ['brand_name'])
            //return this.$store.getters.getBrands
        }
    }
}
</script>

<style lang="scss" scoped>

@media screen and (max-width:480px) {
    .logo {
        width: 100%;
    }
}

h1.heading-b {
    font-size: 40px;
}
</style>