<template>
    <div>
        <div class="mb-2 secondary">
            <div cols="12" class="text-center py-12">
                <h2 class="white--text the3d-text">3D Insights</h2>
            </div>
        </div>
        <v-container>
            <v-row class="mb-3">
                <v-col cols="12">
                    <v-divider/>
                </v-col>
            </v-row>
            <v-row class="news-block">
                <v-col cols="12" sm="4">
                    <img width="100%" height="200" position="center center" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/dubai_3d_startegy__Hapn-2ZIBX.jpg" />
                    <p class="caption mt-3 mb-1">12 June 2020</p>
                    <h3 class="mb-4"><a href="https://www.dubaifuture.gov.ae/our-initiatives/dubai-3d-printing-strategy/" target="_blank">Dubai is set to become the world’s leading 3D printing Hub with the newly launched 3D printing strategic Alliance</a></h3>
                    <p class="caption">The crown prince of Dubai, and Chairman of the Board of Trustees of Dubai Future Foundation, H.H. Sheikh Hamdan binMohammed bin Rashid Al Maktoum announced the launch of 3D printing Strategic Alliance.</p>
                </v-col>
                <v-col cols="12" sm="4">
                    <img width="100%" height="200" position="center center" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/2_storey_3d__r3p65m12L.jpg" />
                    <p class="caption mt-3 mb-1">03 March 2019</p>
                    <h3 class="mb-4"><a href="https://www.3dprintingmedia.network/dubai-largest-3d-printed-two-storey-building/" target="_blank">Dubai unveils world’s largest 3D printed two-storey building</a></h3>
                    <p class="caption">Middle Eastern City, Dubai has announced yet another milestone in the field of Construction with the help of 3D Printing paving the path to the future of the construction industry.</p>
                </v-col>
                <v-col cols="12" sm="4">
                    <img width="100%" height="200" position="center center" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/3d-printed-observation-tower_8XBiPM64Fj.jpg" />
                    <p class="caption mt-3 mb-1">17 February 2020</p>
                    <h3 class="mb-4"><a href="https://www.3dnatives.com/en/3d-printed-tower-in-dubai-220620205/" target="_blank">3D Printed Observation Tower in Dubai’s Desert</a></h3>
                    <p class="caption">3D Construction printing refers to various technologies that use additive manufacturing as core method to fabricate buildings or construction components.</p>
                </v-col>
            </v-row>   
            <v-row class="mb-sm-10" v-if="!sessionActive">
                <v-col cols="12">
                    <v-row>
                        <v-col cols="5" sm="5">
                            <h2 class="mb-1">Newsletter</h2>
                            <p class="body-2 secondary--text mb-0">Signup with our newsletter to get the latest news and updates</p>
                            
                        </v-col>
                        <v-col cols="5" sm="5" >
                            <v-form ref="newsletter" >
                                <div class="text-left">
                                    <v-dialog v-model="loginDialog" width="500">
                                        <template v-slot:activator="{ on }">
                                            <v-btn v-on="on" class="ml-1 caption ml-10 mt-5" depressed >Signup</v-btn>
                                        </template>
                                        <v-card class="pt-2 pb-2" flat>
                                            <v-tabs v-model="tabs" centered>
                                            <v-tab>Sign In</v-tab>
                                            <v-tab>Sign Up</v-tab>
                                            </v-tabs>
                                            <v-tabs-items v-model="tabs">
                                                <v-tab-item><Login v-on:close-dialog="closeDialog" v-bind:signIn="true" v-bind:redirect="false" /></v-tab-item>
                                                <v-tab-item><Login v-on:close-dialog="closeDialog" v-bind:signIn="false" v-bind:redirect="false"/></v-tab-item>
                                            </v-tabs-items>
                                        </v-card>
                                    </v-dialog>
                                </div>
                                <span class="caption" v-if="isEmailSent"> Successfully Sent </span>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container> 
    <div class="text-xs-center d-flex d-md-none">
      <v-menu class="mr-10" min-width = "300" max-width="500" top v-model="menu" :close-on-click="false" :close-on-content-click="false" :nudge-top="60" offset-x>
        <template v-slot:activator="{ on }">
          <v-fab-transition>
            <v-btn class="mr-5" v-model="fab" v-on="on" color='black' @click="fab = !fab; menu = false" dark fixed bottom right fab>
              <v-icon>mdi-comment</v-icon>
            </v-btn>
          </v-fab-transition>
        </template>
        <v-card>
          <v-list dark class="chat-header">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="subtitle-1 pl-3">Welcome To 3DHUB customer support!</v-list-item-title><br>
                <p class="caption pl-3">We are Dubai based 3D printing platform!! You can get in touch using whatsapp or send us an email to info@3dhub.ae</p>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="fab = !fab; menu = false">
                  <v-icon class="align--end">mdi-close</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-container class="chat-background">
            <v-layout row wrap >
              <v-flex class="text-xs-right pl-4 justify-end" xs12 mb-4>
                <v-chip class="chip-chat">
                  Hello! I am Kyle, how can I help you? <v-icon right>mdi-done_all</v-icon>
                </v-chip>
              </v-flex>
              <v-flex xs10>
                <v-text-field single-line class="teal--text my-input ml-4" v-model="text" outline></v-text-field>
              </v-flex>
              <v-flex xs2>
                <v-btn large class="black--text" icon @click="fab = !fab; menu = false" :href="apilink" target="_blank">
                  <v-icon>mdi-send</v-icon>
                </v-btn>
               </v-flex>
             </v-layout>  
          </v-container>
        </v-card>  
      </v-menu>   
    </div>
    </div>
</template>

<script>
import Login from '~/components/login'
export default {
    components: {
        Login
    },
    data: () => ({
        fab: false,
        fav: true,
        menu: false,
        message: false,
        hints: true,
        phone: '971566789913',
        text: "",
        apilink: "",
        isEmailSent: false,
        form: {
            email: ''
        },
        isAuth: true,
        tabs: null,
        loginDialog: false,
     }),
    watch: {
        text(val) {
                // this.apilink = 'http://';
                // this.apilink += this.isMobile() ? 'api' : 'web';
                // this.apilink += 'https://wa.me/' + this.phone + '?text=' + encodeURI(this.text);
        }
    },
    created: function () {
      // this.apilink = 'http://';
      // this.apilink += this.isMobile() ? 'api' : 'web';
      this.apilink = 'https://wa.me/' + this.phone + '?text=' + encodeURI("Hello!");
    },
    methods: {
        closeDialog: function(){
            this.loginDialog = false
            if(this.$store.getters.isAuthenticated){
                this.getaddresses()
            }
        },
        isMobile() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;});
          return check;
        },
        async sendForm(){
            await this.$axios.$post('/newsletter/new/', this.form)
            .then(res=> {
                this.$refs.newsletter.reset()
                this.isEmailSent = true 
            })
            .catch(e => console.log(e)); 
        }
    },
    computed: {
        sessionActive(){
            return this.$store.getters.isAuthenticated
        },
    }
}
</script>

<style lang="scss" scoped>
.the3d-text {
    font-family: 'Roboto', sans-serif !important;
}
.news-block h3 {
    line-height: 1.2;
    min-height: 65px;
}
.news-block a {
    text-decoration: none;
    color: black;
}
</style>