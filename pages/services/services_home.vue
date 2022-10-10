<template>
<div style="overflow-x: hidden;">
    <!-- Header -->
    <v-row class="d-flex" style="height: 595px;">
        <v-col cols="12" sm="6" class="pa-0 d-none d-sm-block">
            <v-img height="595px" position="center center" class="imgs" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_hub-04_5AtBn_168O.jpg"/>
        </v-col>
        <v-col cols="12" sm="6" class="teal pa-10" >
            <!-- <img class="ml-n5" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_Hub_Logo_White_BG_Transparent_pM1YxUOXc.png" width="230" contain/> -->
            <h1 class="white--text my-3 heading-b" style="width: 80%; line-height: 1.3;" >Your 3D Printing Manufacturer</h1>
            <p class="body-1 white--text" style="width: 80%; font-size: 24px; line-height: 2; my-10" >On-demand manufacturing and rapid prototyping. Get your designs created by the best 3D printers avaiable in the market and delivered at your doorstep.</p>
            <Enquiry/>
        </v-col>
    </v-row>
    <v-img class="d-block d-sm-none pa-0" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_hub-04_5AtBn_168O.jpg"/>

<!-- How it works section -->
    <v-container class="my-5">
        <h1 class="mt-5 pa-5 heading-b text-center font-bold">How it Works</h1>
        <p class="body-1 text-center mb-10">We follow a simple 4 step process which delivers the product at your doorstep</p>
        <v-timeline class="my-5">
            <v-timeline-item v-for="(n,index) in howItWorks" :key="index" color="cyan" large>
                <template v-slot:opposite>
                    <span class="teal--text  body-1">Step {{index + 1}}</span>
                </template>
                <v-card class="elevation-2">
                    <v-card-title class="headline-3 black--text">{{n.title}}</v-card-title>
                    <v-card-text>{{n.content}}</v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>

     <v-container class="my-5">
         <v-col class="text-center" cols="12">
              <Enquiry/>
         </v-col>
     </v-container>

    <!-- Manufacturing Capabilities -->
        
    <v-parallax height="200" dark src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_hub-02_YUs1b4T4ck.jpg">
        <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">Our Manufacturing Capabilities</h1>
                <h4 class="subheading">Build your own design!</h4>
            </v-col>
        </v-row>
    </v-parallax>

    <v-container class="justify-center">
        <h1 class="heading-b text-center mt-10 mb-5">3D Printing Services</h1>
        <p class="body-1 text-center mb-10">We provide the best quality 3D printed design with a variety of available materials in the Market!</p>
        <v-row>
            <v-col cols="12" sm="4"  v-for="(service, index) in printingServices" :key="index">
            <v-card flat>
                <v-card-title class="justify-center teal--text">{{service.serviceType}}</v-card-title>
                <v-card-text>
                    <div>{{service.serviceText}}</div>
                    <v-divider class="mt-4 mb-4"/>
                    <div class="body-1 teal--text">{{service.serviceTypeList}}</div>
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
        
            <v-btn class="teal lighten-4 accent-4 my-5 d-flex justify-center ma-4" dark large @click.prevent="$router.push('/services/3dprintingservices')">More Details</v-btn>
        </div>
    </v-container>

    <!-- Why Choose us -->
  <v-parallax height="200" dark src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3D_hub-03__-jNnPstO9.jpg">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Why Choose us!!</h1>
        <h4 class="subheading">Why we are ahead of the competitors</h4>
      </v-col>
    </v-row>
  </v-parallax>

  <v-container>
      <h1 class="heading-b text-center align-center justify-center mt-10 mb-5">Why Choose 3DHUB!</h1>
      <p class="body-1 text-center mb-10">Its because we are the best in the Business!</p>
      <v-row justify="center"> 
          <v-col cols="12" sm="4" v-for="(service, index) in qualityAssurance" :key="index">
            <v-card flat>
                <v-card-title class="justify-center teal--text">{{service.quality}}</v-card-title>
                <v-card-text>
                    <div>{{service.text}}</div>
                </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12">
              <h3 class="mb-3 text-center"></h3>
              <v-row>
                  <v-col cols="12" sm="3" v-for="(item, i) in chooseList" :key="i">
                      <v-list disabled> 
                          <v-list-item-group color="black">
                            <v-list-item >
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon" class="teal--text"></v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.bullets" class="text-wrap"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>

                      </v-list>
                        
                  </v-col>
              </v-row>                    
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
            howItWorks:[
                {title:'Submit your designs',content:'Submit your STL file and fill in our quick quote page.'},
                {title:'Get the Quote',content:'Once your file is submitted, we guarantee a quick quote and feedback from one of our representatives.'},
                {title:'Initiate Manufacturing Process',content:'The best manufacturer in our quality-vetted network will start producing your design straight away.'},
                {title:'At your Door Delivery',content:'We handle all logistics and communications, guaranteeing your part arrives on time.'}
            ],
            services:[
                {title: '3D printing', subtitle:'FDM, SLA, SLS, MJF, DMLS, Polyjet', moreDetails:'Upload your STL files, get an instant 3D printing quote and go into production in less than 5 minutes'},
                {title: 'CNC Machining', subtitle:'Milling (3-axis, 5-axis), Turning',moreDetails:'Online CNC machining service that meets your most stringent requirements in a matter of minutes.'},
                {title: 'Sheet Metal', subtitle:'Laser cutting, Bending Metal',moreDetails:'Your online sheet metal cutting and bending service. Upload your parts, get a free instant quote and go into production in less than 5 minutes.'},
                {title: 'Injection Molding', subtitle:'Single cavity molds, Family molds',moreDetails:'Custom injection molded parts for engineers for low volume runs and production, starting as low as 100 units.'},
                {title: 'Casting', subtitle:'Sand, Investment, Plaster, Die, Permanent Mold', moreDetails:''}
            ],

            chooseList:[
                {bullets: "Quick Quotes", icon:"mdi-clock-outline"},
                {bullets: "Automated DFM feedback", icon:"mdi-comment-quote-outline"},
                {bullets: "Always available production capacity", icon:"mdi-cogs"},
                {bullets: "Simplifies order management", icon:"mdi-border-color"},
                {bullets: "Dedicated team of specialists", icon:"mdi-account-outline"},
                {bullets: "Most competitive prices in the market", icon:"mdi-cash-multiple"},
                {bullets: "Global delivery", icon:"mdi-truck-delivery-outline"},
                {bullets: 'Comprehensive capabilities', icon:'mdi-account-multiple-check-outline'}
            ],
            qualityAssurance:[
                {quality:'Quality assurance',text:'From factory audits to part inspections, we follow strict processes to ensure your parts always meet the highest quality standards.'},
                // {quality:'IP protection',text:'We take every measure to ensure the protection of your IP, which is why 27% of Fortune 500 companies trust us with their projects.'},
                {quality:'Certifications',text:'Our manufacturing partners have all the necessary certifications for your projects needs (ISO 9001, ISO 14001, IATF 16949, ISO 27001).'}
            ],
            printingServices:[
                {serviceType:'Services', serviceText:'We offer a range of printing options from Prototyping to large Scale Industrial applications suited for all customers!',serviceTypeList:'3D Printing,  Prototyping,  Modelling,    Large Scale Printing,   Industrial Scale Printing'},
                {serviceType:'Printing Materials', serviceText:'We offer more than 10 different types of Materials with multi-color options to provide a wide range of options for the users.', serviceTypeList:'Nylon, PETG, Resin, PLA, ASA, PTU, ABS, Aluminium, Stainless Steel'},
                {serviceType:'Printing Types', serviceText:'There are more than 6 different printing techniques we offer to get the best results for our customers.',serviceTypeList:'PLA,  FDM, SLA, SLS, MJF, DMLS, Polyjet'}
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
            show: false
        }
    },
    methods:{
        clearForm(){
            this.full_name= '',
            this.email= '',
            this.phone= '',
            this.company= '',
            this.message= '',
            this.print_type= '',
            this.eMessage= ''
        },
        sendForm(){
                this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.form.phone} <br/>
                        Company: ${this.form.company} <br/>
                        Print Type: ${this.form.print_type} <br/>
                        Message: ${this.form.message} <br/>
                `

                this.$axios.$post('/email/send-email/', this.form)
                .then(res=> {
                    this.$refs.form.reset()
                    this.isSent = true 
                })
                .catch(e => console.log(e)); 
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

.imgs{
    object-fit: cover;
}



   

</style>
