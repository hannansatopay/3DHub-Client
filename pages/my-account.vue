<template>
<v-container class="mt-10 mb-30">
    <v-card-title class="display-1">My Account</v-card-title>
    <v-card flat>
    <v-tabs vertical>
      <v-tab>
        Profile
      </v-tab>
      <v-tab>
        Password
      </v-tab>
      <v-tab>
        Addresses
      </v-tab>
      <v-tab-item>
        <v-card>
          <UserInfo />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <ChangePassword />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card>
          <ManageAddress />
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</v-container>

</template>

<script>

import Login from '~/components/login'
import UserInfo from '~/components/user-info'
import ChangePassword from '~/components/change-password'
import ManageAddress from '~/components/manage-address'

export default {
    mounted() {
        this.checkUserSession()
    },
    components: {
        Login,
        UserInfo, ChangePassword, ManageAddress
    },
    data() {
        return {
          isAuth: true,
          tabs: null,
          loginDialog: false,
        };
    },
   methods: {
      checkUserSession(){
          if (!this.$store.getters.isAuthenticated) {
              this.isAuth = false
              this.loginDialog = true
          }
      },
      closeDialog: function(){
          this.loginDialog = false
      },
    }

};
</script>