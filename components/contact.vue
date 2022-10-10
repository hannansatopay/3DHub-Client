<template>
    <div class="">
        <v-container>
            <v-row class="mt-2 mt-sm-10" style="box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); border-radius: 20px; overflow: hidden; padding: 0px; ">
                <v-col cols="12" sm="5" class="pa-5" style="border-radius: 20px;background-image: url(https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Ellipse_220_QDcOcJzKP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661492371772);background-size: 150px;background-position: bottom left;background-color: #E0F3F2;">
                    <h1 class="mb-3">Contact Information</h1>
                    <p>Please submit your details below for one of our representatives to contact you, to assist you with your request or to give you more information on our services.</p>
                    <p>Enquiries are responded to with 24 hours. If you require to speak to a consultant urgently, kindly give us a call, the contact information can be found below.</p>
                    <div class="mt-3">
                        <p class="body-1"><i aria-hidden="true" class="v-icon notranslate mr-4 mdi mdi-phone theme--light black--text" style="font-size: 20px;"></i> <a href="tel:9714380033482" title="Call us" class="body-1 black--text text-decoration-none">800 33482,</a> <a href="tel:+971503165866" title="Call us" class="body-1 black--text text-decoration-none">0503 165 866</a></p>
                        <p class="body-1"><i aria-hidden="true" class="v-icon notranslate mr-4 mdi mdi-email-outline theme--light black--text" style="font-size: 20px;"></i> <a href="mailto:info@3dhub.ae" title="Email us" class="black--text body-1 text-decoration-none">info@3dhub.ae</a></p>
                        <p class="body-1 d-flex"><i aria-hidden="true" class="v-icon notranslate mr-4 mdi mdi-map-marker-outline theme--light black--text" style="font-size: 22px;"></i> <span class="d-block body-1">Jebel Ali Industrial Area - Dubai, <br>United Arab Emirates</span></p>
                    </div>
                    <a href="https://www.google.com/maps/place/3D+HUB/@24.991917,55.10048,14z/data=!4m5!3m4!1s0x0:0x182dafedc3b83204!8m2!3d24.9919166!4d55.1004804?hl=en" target="_blank" class="text-decoration-underline">Get Directions</a>
                </v-col>
                <v-col cols="12" sm="7">
                    <v-form style="border: 0px; box-shadow: none;">
                        <v-alert dismissible color="green darken-1" class="caption" type="success" icon="mdi-email" v-if="isSent">
                            Thank your for your inquiry <br/> We will get back to you as soon as possible.
                        </v-alert>
                        <v-text-field label="Name" outlined/>
                        <v-text-field label="Email" outlined/>
                        <v-text-field label="Phone" outlined/>
                        <v-textarea label="Message" outlined/>
                        <v-btn @click.prevent="sendForm" color="teal" dark large depressed>Submit Inquiry</v-btn>
                    </v-form>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSent: false,
            form: {
                name: '',
                email: '',
                phone: '',
                to: 'info@3dhub.ae',
                company: '',
                message: '',
                subjectMsg: '3DHUB - Contact Us',
                eMessage: ''
            }
        }
    },
    methods: {
        sendForm(){
            this.form.eMessage = `
                    Name: ${this.form.name} <br/>
                    Email: ${this.form.email} <br/>
                    Phone: ${this.form.phone} <br/>
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
<style scoped>
form {
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.21);
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    border-radius: 20px;
    padding: 20px;
}
</style>
