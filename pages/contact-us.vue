<template>
    <div class="">
        <v-img height="290" position="center center" class="d-none d-sm-block" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-07_Ka1-4qY74.jpg"/>
        <v-img class="d-block d-sm-none" src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/Other_Page_Banners-08_PvVEruTZ2.jpg"/>
        <Contact/>
    </div>
</template>

<script>
import Contact from '~/components/contact.vue';

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
    components: { Contact },
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
