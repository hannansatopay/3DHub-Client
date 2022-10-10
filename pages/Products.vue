<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-row class="px-0 mt-2">
                        <v-col cols="6" sm="3" lg="3" xl="2" v-for="(product, index) in products" :key="index" class="px-0 py-2">
                            <ProductTile :product="product" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-card v-intersect="infiniteScrolling"></v-card>
        </v-container>
    </div>
</template>


<script>
import ProductTile from '~/components/product/tile'

export default {
    data() {
        return {
            productSelect: '',
            productTypeSelect: '',
            brandSelect: '',
            industrySelect: '',
            searchList: '',
            searchKey: '',
            color: '',
            counter: 0,
            products: [],
            page: 1,
        }
    },
    components: { ProductTile },
    props: ["title"],
    methods: {
        infiniteScrolling(entries, observer, isIntersecting) {
            this.products.push.apply(this.products, _.shuffle(this.$store.getters.getProducts).slice(0,8));
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