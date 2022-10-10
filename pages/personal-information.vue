<template>

<div>
<div class="container">
    <v-row>
                    <v-col>
                       
                          <NuxtLink to="/my-account" class="text-decoration-underline">Back to My Account</NuxtLink>
                    </v-col>

                    
   </v-row>
</div>

<div>
   <v-card class="py-2 px-0" flat>
    <v-tabs v-model="tabs" centered>
      <v-tab>Profile</v-tab>
      <v-tab>Password</v-tab>
      <v-tab>Addresses</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabs">
      <v-tab-item><UserInfo /></v-tab-item>
      <v-tab-item><ChangePassword /></v-tab-item>
      <v-tab-item><ManageAddress /></v-tab-item>
    </v-tabs-items>
  </v-card>
</div>
</div>
  
</template>

<script>

import UserInfo from '~/components/user-info'
import ChangePassword from '~/components/change-password'
import ManageAddress from '~/components/manage-address'

export default {
    components: { UserInfo, ChangePassword, ManageAddress },
    data() {
      return {
        tabs: null,
      };
    },
  };
</script>