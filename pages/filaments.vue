<template>
    <div>
        <v-img class="d-none d-sm-block" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-01_kTyeNfnNig.jpg"/>
        <v-img class="d-block d-sm-none" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-05_8HKAegWoYk.jpg"/>
        
        <v-container>
           <!-- <SearchToolBar class="ml-sm-2"/>-->
            <div class="my-5 my-sm-12">
                
                <v-row>
                    <v-col>
                        <a class="text-decoration-underline" v-on:click="goBack()">Previous Page</a>
                    </v-col>
                </v-row>
                <h2 class="title font-weight-bold mb-2">Filaments</h2>
                <v-divider/>
                <v-row class="mb-12">
                    <v-col cols="6" sm="2" class="caption my-0 my-sm-2" v-for="data in materialTypeSort" :key="data.title">

                           <v-col
              cols="12"
              sm="12"
              class="text-center product-icons icon-container"
              title="Printers"
            >
              <v-img
                :src="data.cover_image.url"
                class="printer_image"
                 :contain="true"
                @click.prevent="$router.push('/product/material/'+data.material_name)"
              ></v-img>
              <p
                class="my-2 body-1 pointer font-weight-bold product-name"
                @click.prevent="$router.push('/product/material/'+data.material_name)"
              >
                {{ data.material_name }}
              </p>
            </v-col>
                        
                      
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
import SearchToolBar from '~/components/searchtoolbar'
export default {
    methods:{
        goBack(){
            window.history.back();
        },
    },
    computed: {
        materialTypeSort(){
            return _.sortBy(this.$store.getters.getMaterialType, ['material_name'])
        },
    },
    components: {
        SearchToolBar
    }
}
</script>
<style scoped>
.icon-container {
  border: 1px solid #40a69a;  
  min-height: 363px  !important;

}

.product-name {
  background: #40a69a;
  padding: 12px;
  color: #fff;
}
.printer_image {
  width: 250px !important;
  height: 250px !important;
  object-fit: cover;
}
.pointer {
  cursor: pointer !important;
}
</style>