<template>
    <div class="mb-10">
        <v-parallax height="200" dark src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 class="display-1 font-weight-thin mb-4">Services</h1>
                    <h4 class="subheading">Please fill in the below form to get the quote from us!!</h4>
                </v-col>
                </v-row>
            </v-parallax>
        <v-container class="mt-5">
            <!-- <h1 class="heading-b mb-7 mt-3 text-center">Services</h1>
            <p class="caption text-center">Please fill in the below form to get the quote from us!!</p> -->
            <!-- Step 1 -->
            <h2>{{step1}}</h2>
            <v-row class="px-0" v-model="selectTechnology">
                <v-col  cols="5" sm="2" v-for="(tech, index) in technology" :key="index" class="my-5 mx-3 pt-2">
                    <v-card @click.prevent="selectTech(index)" width="180" height="140" class="pa-2 slider-card mx-2 pt-6" >
                        <v-card-text class="d-inline-block py-0 px-2" >
                            <h2 class="primary--text font-weight-bold mb-2">{{tech.title}}</h2>
                            <p class="body-2">{{tech.subtitle}}</p>            
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <!-- Step 2 -->
        <div style="background-color : #EEEEEE;" class="px-0 py-5">
            <v-container>
                <h2>{{step2}}</h2>
                <v-form ref="form">
                        <v-col cols="12" md="4">
                            <v-text-field label="Select the Printing Technique" :value="selectTechnology" disabled></v-text-field>
                        </v-col>
                    <v-file-input v-model="form.files" class="mt-5" color="teal" counter label="File input" type="file" id="files" ref="files" multiple placeholder="Select your STL files" prepend-icon="mdi-paperclip" outlined :show-size="1000" v-on:change="handleFileUploads()" required>
                        <template v-slot:selection="{ index, text }">
                        <v-chip v-if="index < 2" color="teal" dark label small>{{ text }}</v-chip>
                        <span
                            v-else-if="index === 2" class="overline grey--text text--darken-3 mx-2"> +{{ files.length - 2 }} File(s)
                        </span>
                        </template>
                    </v-file-input>
                    <v-row>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.full_name" :rules="nameRules" :counter="10" label="Name" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.email" :rules="emailRules" label="E-mail" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="4">
                            <v-text-field v-model="form.phone" label="Mobile" type="number" required></v-text-field>
                        </v-col>
                        <v-col cols="12" md="9">
                            <v-text-field v-model="form.message" :rules="messageRule" label="Message"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="3">
                            <v-btn @click.prevent="sendForm" color="teal" class="white--text pl-5" depressed>Upload Files</v-btn>
                        </v-col>
                    </v-row>
                    <v-row v-if="isSent">
                        <v-col cols="12">
                            <v-alert dismissible class="caption" type="success" icon="mdi-email">
                                Thank you for your inquiry. <br/> We will get back to you as soon as possible.
                            </v-alert>
                        </v-col>
                    </v-row>
                </v-form>   
            </v-container>
        </div>
    </div>
</template>

<script>

export default {
    props: [
    ],
    data: () => ({
      technology: [
        {title: '3D printing', subtitle:'FDM, SLA, SLS, MJF, DMLS, Polyjet'},
        {title: 'CNC Machining', subtitle:'Milling (3-axis, 5-axis), Turning'},
        {title: 'Sheet Metal', subtitle:'Laser cutting, Bending'},
        {title: 'Injection Molding', subtitle:'Single cavity molds, Family molds'},
        {title: 'Casting', subtitle:'Sand, Investment, Plaster, Die, Centrifugal, Permanent Mold'}
      ],
      step1 : '1. Select a Technology!!',
      step2 : '2. Fill the form to get quote!!',
      step3 : '3. Input Contact Details!!',
      active : '',
      selectTechnology : '',
      isSent: false,
      eMessage: '',
      form: {
            full_name: '',
            email: '',
            phone: '',
            to: 'akshafmulla@gmail.com',
            message: '',
            subjectMsg: '3DHUB - Request a 3D printing quote',
            eMessage: '',
            files: []
            },
      nameRules: [
        v => !!v || 'Name is required',
        //v => v.length <= 20 || 'Name must be less than 20 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      //numberRule: [v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 12) || 'Number has to be between 0 and 12'],
      messageRule: [
        //v => v.length <= 200 || 'Name must be less than 200 characters',
      ],
      require: [
        v => !!v || 'This field is required'
        ],
    }),
    methods:{
        selectTech(index){
            this.selectTechnology = this.technology[index].title
        },
        handleFileUploads(){
            this.form.files = this.$refs.files.files;
        },
        sendForm(){

            let formData = new FormData();
            // formData.append('file', this.form.file);

                this.form.eMessage = `
                        Name: ${this.form.full_name} <br/>
                        Email: ${this.form.email} <br/>
                        Phone: ${this.form.phone} <br/>
                        Message: ${this.form.message} <br/>
                        Technology: ${this.selectTechnology}<br/>
                        File: ${this.form.files}<br/>
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
</style>