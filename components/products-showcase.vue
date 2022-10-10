<template>
<v-container class="product_showcase">
  
            <v-row class="justify-center">
              <v-col
                cols="4"
                sm="2"
                class="text-center product-icons icon-container"
                title="Printers"
                @click.prevent="$router.push('/printers')"
              >
                <v-icon size="60" class="icon_color"
                  >mdi-printer-3d-nozzle-outline</v-icon
                >
                <p class="my-2 body-1 font-weight-bold card-text-showcase">Printers</p>
              </v-col>

              <v-col
                cols="4"
                sm="2"
                class="text-center product-icons icon-container"
                title="Scanners & 3d Pen"
                @click.prevent="$router.push('/scanners')"
              >
                <v-icon size="60" class="icon_color">mdi-cube-scan</v-icon>
                <p class="my-2 body-1 font-weight-bold card-text-showcase">Scanners</p>
              </v-col>

             
              <v-col
                cols="4"
                sm="2"
                class="text-center product-icons icon-container"
                title="Filaments"
                @click.prevent="$router.push('/filaments')"
              >
                <v-icon size="60" class="icon_color"
                  >mdi-bottle-tonic-outline</v-icon
                >
                <p class="my-2 body-1 font-weight-bold card-text-showcase">Filaments</p>
              </v-col>

              <v-col
                cols="4"
                sm="2"
                class="text-center product-icons icon-container"
                title="Post Processing"
                @click.prevent="
                  $router.push('/product/printer-type/Post%20Processing')
                "
              >
                <v-icon size="60" class="icon_color"
                  >mdi-television-clean</v-icon
                >
                <p class="my-2 body-1 font-weight-bold card-text-showcase"> Processing</p>
              </v-col>

              <v-col
                cols="4"
                sm="2"
                class="text-center product-icons icon-container"
                title="Parts & Accessories"
                @click.prevent="$router.push('/parts-accessories')"
              >
                <v-icon size="60" class="icon_color">mdi-layers</v-icon>
                <p class="my-2 body-1 font-weight-bold card-text-showcase">
                  Parts 
                </p>
              </v-col>

                <v-col
                cols="4"
                sm="2"
                class="text-center product-icons icon-container"
                title="Printer Services"
                @click.prevent="$router.push(`/services/services_home`)"
              >
                <v-icon size="60">mdi-hammer-screwdriver</v-icon>
                <p class="my-2 body-1 font-weight-bold card-text-showcase"> Services</p>
              </v-col>

            </v-row>
         
</v-container>
  
</template>

<script>
export default {

}
</script>

<style scoped>

@media only screen and (max-width:26.5625em) { 
	/* CSS rules here */
    .product_showcase{
    display: block  !important;
}

@media only screen and (width:20em) { 
	/* CSS rules here */
    .product_showcase{
        padding: 2px;
    }
}

.icon-container{
   
    border: 0.1px solid #dcdcdc  !important;
    max-width: 49%  !important;
   
}

.card-text-showcase{
    color:#3a9689;
}

}

@media only screen and (min-width:48em) { 
	/* CSS rules here */
      .product_showcase{
    display: none  !important;
}
}



</style>>

