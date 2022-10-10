<template>
<v-container>
    <v-container class="footer-top text-center" style="background: url('/bg-green.png'); border-radius: 42px;">
        <v-row class="mx-0 ">
            <v-col cols="12" sm="8" class="text-center text-sm-left">
                <h1 class="mb-3">Get your parts into production </h1>
                <p class="mb-0 body-2">Printing services by 3DHUB</p>
            </v-col>
            <v-col cols="12" sm="4" class="align-self-center">
                
                <v-dialog v-model="dialog" width="500">
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" large depressed color="primary">Make Inquiry</v-btn>
                    </template>
                    <v-card class="py-3">
                        <v-card-title class="body-1">
                            Let us know your requirements
                        </v-card-title>
                        <v-card-text>
                            <v-form ref="form">
                                <v-row v-if="isSent">
                                    <v-col cols="12">
                                        <v-alert dismissible class="caption" type="success" icon="mdi-email">
                                            Thank your for your inquiry <br/> We will get back to you as soon as possible.
                                        </v-alert>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" class="py-2"><v-text-field  v-model="form.full_name" outlined hide-details label="Full Name*" :rules="required"/></v-col>
                                    <v-col cols="12" class="py-2"><v-text-field  v-model="form.email" outlined hide-details label="Email*" :rules="required"/></v-col>
                                    <v-col cols="12" class="py-2"><v-text-field  v-model="form.phone" outlined hide-details label="Phone Number*" :rules="required"/></v-col>
                                    <v-col cols="12" class="py-2"><v-text-field  v-model="form.company" outlined hide-details label="Company"/></v-col>
                                    <v-col cols="12" class="py-2"><v-textarea  v-model="form.message" outlined hide-details label="Message"/></v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12">
                                        <v-btn @click.prevent="sendForm" color="black" class="white--text" depressed>Send Request</v-btn>
                                        <v-btn @click="dialog = false" class="caption" text>cancel</v-btn>
                                    </v-col>
                                </v-row>
                                <v-row class="pb-0">
                                    <v-col cols="12" class="pb-0">
                                        <p class="caption blue-grey--text"><sup>*</sup>All fields are required</p>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>
    </v-container>
</v-container>    
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            isSent: false,
            form: {
                full_name: '',
                email: '',
                phone: '',
                to: 'info@3dhub.ae',
                company: '',
                message: '',
                subjectMsg: '3DHUB - Request a quote',
                eMessage: ''
            },
            required: [
                v => !!v || 'This field is required'
            ]
        }
    },
    methods: {
        sendForm(){
                this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.form.phone} <br/>
                        Company: ${this.form.company} <br/>
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
.footer-top {
    margin-top: 5em;
}

@media (max-width: 991.98px) {
 .footer-top {
    margin-top: 1em;
}
}

h1 {
    color: #009688;
}

p {
    color: #141618;
}

.footer-top {
    padding: 40px 20px;
}
</style>