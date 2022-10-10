<template>
    <div style="overflow-x: hidden;">
        <!-- Header -->
        <v-row class="d-flex" style="height: 400px;">
            <v-col cols="12" sm="6" class="pa-0 d-none d-sm-block">
                <v-img height="400px" position="center center" class="imgs" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_hub-05_DGeWj6ETe.jpg"/>
            </v-col>
            <v-col cols="12" sm="6" class="teal pa-10" >
                <!-- <img class="ml-n5" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png" width="230" contain/> -->
                <h1 class="white--text my-3 heading-b" style="width: 80%; line-height: 1.3;" >Online 3D Printing Service</h1>
                <p class="body-1 white--text" style="width: 80%; font-size: 24px; line-height: 2; my-10" >Upload your STL files, get an instant 3D printing quote and go into production. Get your designs created by the best 3D printers avaiable in the market and delivered at your doorstep.</p>
                
                <Enquiry v-bind:classname="classname"/>
             
            </v-col>
        </v-row>
    <v-img class="d-block d-sm-none pa-0" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_hub-05_DGeWj6ETe.jpg"/>

    <v-container class="justify-center">
        <h1 class="heading-b text-center mt-10 mb-5">3D printing for functional prototypes & production parts</h1>
        <p class="body-1 text-center mb-10">We provide the best quality 3D printed design with a variety of available materials in the Market!</p>
        <v-row>
            <v-col cols="12" sm="4"  v-for="(service, index) in functionalPrototypes" :key="index">
            <v-card >
                <v-img height="200" :src="service.url" class="body-1 teal--text" contain></v-img>
                <v-card-title class="teal--text">{{service.name}}</v-card-title>
                <v-divider class="mt-2 mb-2"/>
                <v-card-text>
                    <div>{{service.text}}</div>
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
    </v-container>

    <v-parallax height="200" dark src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_hub-02_YUs1b4T4ck.jpg">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">Low Cost Prototyping</h1>
                <h4 class="subheading">Build your own design!</h4>
            </v-col>
        </v-row>
    </v-parallax>
<v-container>
        <h1 class="heading-b text-center mt-10 mb-5">3D printing for low-cost and fast prototyping</h1>
        <p class="body-1 text-center mb-10">We provide the best quality 3D printed design with a variety of available materials in the Market!</p>
        <v-row class="justify-center">
            <v-col cols="6" sm="4"  v-for="(service, index) in lowcostPrototypes" :key="index">
            <v-card >
                <v-img height="150" :src="service.url" class="body-1 teal--text" contain></v-img>
                <v-card-title class="teal--text">{{service.name}}</v-card-title>
                <v-divider class="mt-2 mb-2"/>
                <v-card-text>
                    <div>{{service.text}}</div>
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
</v-container>

<v-parallax height="200" dark src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_hub-03__-jNnPstO9.jpg">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Our Materials</h1>
        <h4 class="subheading">We use the best materials in the market</h4>
      </v-col>
    </v-row>
  </v-parallax>
<v-container>
        <h1 class="heading-b text-center mt-10 mb-5">3D Printing Materials</h1>
        <p class="body-1 text-center mb-10">Below is the list of best materials avaiable in the Market!</p>
        <v-row class="justify-center">
            <v-col cols="6" sm="3" v-for="(service, index) in materials" :key="index">
            <v-card >
                <v-img height="150" :src="service.url" class="body-1 teal--text" contain></v-img>
                <v-card-title class="teal--text justify-center">{{service.name}}</v-card-title>
                <v-divider class="mt-2 mb-2"/>
                <v-card-text>
                    <div>{{service.text}}</div>
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
    </div>
</template>

<script>

  import Enquiry from "~/components/shared/enquiry";

export default {
    components: {
    Enquiry,  
  },
    data(){
        return {
            functionalPrototypes:[
                {name:'Selective Laser Sintering (SLS)',text:'SLS is used for both prototyping and small-batch production of functional plastic parts with good mechanical properties.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/woodfill_-_special/woodfill_to_use.jpg'},
                {name:'MultiJet Fusion (MJF)',text:'HP Multi Jet Fusion (MJF) can be used for both prototyping and small-batch-production of functional plastic parts',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/corkfill/Corkfill.jpg'},
                {name:'Direct Metal Laser Sintering (DMLS)',text:'DMLS produces high performance, end-use metal 3D printed parts for industrial applications in the aerospace, automotive and medical industries.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/pla_/_pha/PLA___PHA.jpg'}
            ],
            lowcostPrototypes:[
                {name:'Fused Deposition Modeling (FDM)',text:'FDM is the most widely available 3D printing process, mainly used for low-cost prototyping and design verification with very fast turn around times.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/luvocom_3f_pet_cf_9780_bk/luvocom_3f_pet.jpg'},
                {name:'Stereolithography (SLA)',text:'SLA is most suitable for visual applications to print an injection mold look alike, smooth surface finishing, and a high level of feature detail is required.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/xt-cf20/XT_CF_USE_THIS.jpg'}
            ],
            materials:[
                {name:'Nylon', text:'High strength and impact resistance. Used commonly for functional prototypes.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/nylon_pa12/spool_with_print.png'},
                {name:'PETG',text:'Good for mechanical parts with high impact resistance and flexibility. Sterilizable.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/PET_G_Fiberlogy.png'},
                {name:'PEI',text:'Engineering plastic, high performance applications, flame retardant and highly durable.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/fiberflex_40d/Fiberflex40_Fiberlogy.png'},
                {name:'Resin',text:'High detail and smooth surface, injection mold-like prototyping used for detailed applications.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/mp_rapid_uv_3d_resin_1000ml_/61K8ALk6dDL._SX342_.jpg'},
                {name:'Stainless Steel',text:'High strength and stiffness, good detail. Preffered for high strength applications.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/hybrid/Hybrid.png'},
                {name:'ABS',text:'Commodity plastic, improved mechanical and thermal properties compared to PLA.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/abs/ABS_Fiberlogy.png'},
                {name:'PLA',text:'High stiffness, good detail, affordable. Good for low-cost & fast prototyping.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/pla_for_3d_pen/PLA.jpg'},
                {name:'ASA',text:'Good UV stability and high chemical resistance, preferred material for outdoor applications.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/z_asa_pro/Z-ASA_Pro_Yellow_2000g.png'},
                {name:'TPU',text:'Rubber-like material, suitable for tubes, seals, gaskets low density and weather resistance.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/varioshore_tpu/VarioShore_TPU.jpg'},
                {name:'Aluminium',text:'Aluminum is a metal with good strength-to-weight ratio, high thermal and electrical conductivity.',url:'https://ik.imagekit.io/frlnc3rhub7/3dhub/products/scaffold/Scaffold.png'},
            ],
            form: {
                full_name: '',
                email: '',
                phone: '',
                to: 'info@3dhub.ae',
                company: '',
                message: '',
                print_type: '',
                subjectMsg: '3DHUB - Request a 3D print quote',
                eMessage: ''
            },
            required: [
                v => !!v || 'This field is required'
            ],
            isSent: false,
            dialog: false,
            show: false,
            classname:{'back':true}
        }

    },
    methods:{
      
     
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

.imgs{
    object-fit: cover;
}
</style>