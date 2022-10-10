<template>
<div class="pa-2">
<v-card  v-for="data in getMyAddresses" :key="data._id" class="my-3">
  <v-card-title>{{getAdrressTitle(data)}}</v-card-title>
  <p class="pl-3">{{getAddressLine1(data)}}</p>
  <p class="pl-3">{{getAddressLine2(data)}}</p>
  <p class="pl-3">{{"Phone number: ‪" + data.contact_num}}</p>
  <v-card-actions>
      <v-btn @click.prevent="editItem(data._id)" fab depressed dark x-small color="cyan"><v-icon small dark>mdi-pencil</v-icon></v-btn>
      <v-btn @click.prevent="deleteItem(data._id)" class="" fab depressed dark x-small color="grey lighten-1" ><v-icon small dark>mdi-delete</v-icon></v-btn> 
  </v-card-actions>
</v-card>
<v-btn class="ml-3 px-4" color="primary"  @click.prevent="addItem()"><v-icon class="mx-2" small>mdi-plus</v-icon>
                  Add a new Address
              </v-btn>
<v-form ref="form" id="form1">
            <v-card>
              <v-card-title>
                <span class="headline">Add a new Address</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field ref="name" label="Name*" v-model="new_address_detail.name" required outlined :rules="required"></v-text-field>
                    </v-col>
                    <v-col >
                      <v-text-field label="10-digit mobile number*" v-model="new_address_detail.contact_num" required outlined :rules="required"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col >
                      <v-combobox :items="countryList()" label="Country/Region*" item-text="country_name" item-value="country_name" v-model="new_address_detail.nationality" required outlined  :rules="required"></v-combobox>
                    </v-col>
                   <v-col >
                      <v-text-field label="State*" v-model="new_address_detail.state" outlined :rules="required"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col >
                      <v-text-field label="Street Name*" v-model="new_address_detail.address_line_1" required outlined :rules="required"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field label="Building name/no., floor, apartment, or villa no.*" v-model="new_address_detail.address_line_2" outlined :rules="required"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field label="City*" v-model="new_address_detail.city" required outlined :rules="required"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field label="Area/District" v-model="new_address_detail.area" required outlined :rules="required"></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col >
                      <v-text-field label="Pincode" v-model="new_address_detail.pincode" outlined :rules="required"></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field label="Nearest Landmark" v-model="new_address_detail.landmark" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field label="Alternate Phone (optional)" v-model="new_address_detail.contact_num_alternate" outlined></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-radio-group v-model="new_address_detail.address_type" row>
                          <v-radio v-for="n in address_type_options" :key="n" :label="n" :value="n"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  type="submit"
                  color="primary"
                  class="px-4"
                  @click.prevent="save"
                  ><v-icon class="mx-2">mdi-content-save</v-icon>Save
                </v-btn
            >
              </v-card-actions>
            </v-card>
            </v-form>
</div>
</template>

<script>

import countries from "countries-list";
import Login from '~/components/login'

export default {
  components: {countries, Login},

    mounted() {
      this.checkUserSession()
    },

  data() {
    return {
        new_address_detail :{
          name:null,
          contact_num:null,
          pincode:null,
          locality:null,
          address:null,
          city:null,
          state:null,
          landmark:null,
          contact_num_alternate:null,
          address_type: 'Home',
          user_id:null,
          nationality:null
        },
        address_id:null,
        address_type_options:['Home', 'Work'],
        addresses:[],
        required: [
            v => !!v || 'This field is required'
        ],
        isAuth: true,
        tabs: null,
        loginDialog: false,
    };
  },
  methods:{
       checkUserSession(){
            if (!this.$store.getters.isAuthenticated) {
                this.isAuth = false
                this.loginDialog = true
            }
            else{
                this.getaddresses()
            }
      },
      closeDialog: function(){
            this.loginDialog = false
            if(this.$store.getters.isAuthenticated){
                this.getaddresses()
            }
      },
      getaddresses(){
        let user = JSON.parse(localStorage.getItem("usr"));
        this.$axios
          .$get("/address/" + user._id, this.$store.getters.getHeaders)
          .then((res) => {
            this.addresses = res
          })
          .catch((e) => console.log(e));
      },
      async save(){
        if (this.$store.getters.isAuthenticated) {
            this.isAuth = true
        }
        else{
            this.isAuth = false
            this.loginDialog = true
            return
        }
        if(this.$refs.form.validate()){
            if(!this.countryList().includes(this.new_address_detail.nationality)){
              alert("Please select Country")
              return
            }
            if(this.address_id != null){
              await  this.$axios.$put("/address/update/"+this.address_id, this.new_address_detail, this.$store.getters.getHeaders)
              .then((res) => {
                    this.getaddresses()
                    this.$refs.form.reset()
              })
              .catch(e => console.log(e));
            }
            else{
                let user = JSON.parse(localStorage.getItem("usr"));
                this.new_address_detail.user_id = user._id
                await this.$axios.$post('/address/new/', this.new_address_detail, this.$store.getters.getHeaders)
                    .then(res=> {
                    this.getaddresses()
                    this.$refs.form.reset()
                })
                .catch(e => console.log(e)); 
            }
        }
      },
      deleteItem(id) {
        if (this.$store.getters.isAuthenticated) {
            this.isAuth = true
        }
        else{
            this.isAuth = false
            this.loginDialog = true
            return
        }
        if(confirm("Are you sure you want to delete this address?")){
            this.$axios.$delete('/address/delete/'+id, this.$store.getters.getHeaders)
            .then(res => {
            this.getaddresses()
            })
           .catch((e) => console.log(e));
        }
      },
      editItem(id){
        if (this.$store.getters.isAuthenticated) {
            this.isAuth = true
        }
        else{
            this.isAuth = false
            this.loginDialog = true
            return
        }
        this.$refs.name.focus();
        this.address_id = id
        for (var address of this.addresses) {
          if(address._id === id){
            this.new_address_detail = address
            break;
          }
        }
      },
      addItem(){
        this.address_id = null
        this.new_address_detail = {}
        this.$refs.name.focus();
      },
      countryList(){
          const countryCodes = Object.keys(countries.countries);
          const countryNames = countryCodes.map(code => countries.countries[code].name);
          return countryNames;
      },
             getAdrressTitle(data){
           let display = data.name + ", " + data.contact_num
           return display
       },
       getAddressLine1(data){
           let display = ''
           if(data.address_line_1 !== undefined && data.address_line_1 !== ''){
               display = data.address_line_1
           }
           if(data.address_line_2 !== undefined && data.address_line_2 !== ''){
               if(display == ''){
                   display = data.address_line_2
               }
               else{
                   display = display + ", " + data.address_line_2
               }
           }
            if(data.landmark !== undefined && data.landmark !== ''){
               if(display == ''){
                   display = data.landmark
               }
               else{
                   display = display + ", " + data.landmark
               }
           }
           return display
       },
       getAddressLine2(data){
           let display = ''
           if(data.city !== undefined && data.city !== ''){
               display = data.city
           }
           if(data.area !== undefined && data.area !== ''){
               if(display == ''){
                   display = data.area
               }
               else{
                   display = display + ", " + data.area
               }
           }
           if(data.state !== undefined && data.state !== ''){
               if(display == ''){
                   display = data.state
               }
               else{
                   display = display + ", " + data.state
               }
           }
            if(data.nationality !== undefined && data.nationality !== ''){
               if(display == ''){
                   display = data.nationality
               }
               else{
                   display = display + ", " + data.nationality
               }
           }
            if(data.pincode !== undefined && data.pincode !== ''){
               if(display == ''){
                   display = data.pincode
               }
               else{
                   display = display + ", " + data.pincode
               }
           }
           return display
       },
  },
  computed: {
        getMyAddresses(){
            return this.addresses
        },
    }
};
</script>