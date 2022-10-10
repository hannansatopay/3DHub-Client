<template>
    <div class="mb-5">
        <v-container>
            <!-- <h1 class="heading-b mb-7 mt-7 text-center">Quick Services</h1> -->
            <v-row class="mt-7 justify-center">
                <v-col cols="6" sm="3" class="text-center product-icons tiles_hovered" title="Printers" @click.prevent="$router.push('/printers')">
                   <a><v-icon size="60">mdi-printer-3d-nozzle-outline</v-icon>
                    <p class="my-2 body-1 font-weight-bold">Printers</p></a>
                </v-col>
                <v-col cols="6" sm="3" class="text-center product-icons tiles_hovered" title="Post Processing" @click.prevent="$router.push('/product/printer-type/Post%20Processing')">
                    <a><v-icon size="60">mdi-television-clean</v-icon>
                    <p class="my-2 body-1 font-weight-bold">Post Processing</p></a>
                </v-col>
                <v-col cols="6" sm="3" class="text-center product-icons tiles_hovered" title="Scanners & 3d Pen" @click.prevent="$router.push('/scanners')">
                    <a><v-icon size="60">mdi-cube-scan</v-icon>
                    <p class="my-2 body-1 font-weight-bold">Scanners &amp; 3d Pen</p></a>
                </v-col>
                <v-col cols="6" sm="3" class="text-center product-icons tiles_hovered" title="Filaments" @click.prevent="$router.push('/filaments')">
                    <a><v-icon size="60">mdi-bottle-tonic-outline</v-icon>
                    <p class="my-2 body-1 font-weight-bold">Filaments</p></a>
                </v-col>
                <v-col cols="6" sm="3" class="text-center product-icons tiles_hovered" title="Parts & Accessories" @click.prevent="$router.push('/parts-accessories')">
                    <a><v-icon size="60">mdi-layers</v-icon>
                    <p class="my-2 body-1 font-weight-bold">Parts &amp; Accessories</p></a>
                </v-col>
                <v-col cols="6" sm="3" class="text-center product-icons tiles_hovered" title="Brand" @click.prevent="$router.push('/Brands')">
                    <a><v-icon size="60" style="transform: rotate(335deg)">mdi-label</v-icon>
                    <p class="my-2 body-1 font-weight-bold">Brands</p></a>
                </v-col>
                <v-col cols="6" sm="3" class="text-center product-icons tiles_hovered" title="Brand" @click.prevent="$router.push('/Industries')">
                    <a><v-icon size="60">mdi-factory</v-icon>
                    <p class="my-2 body-1 font-weight-bold">Industries</p></a>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

export default {
    props: [
    ],
    data() {
        return {}
    },
    methods: {},
    computed: {}
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