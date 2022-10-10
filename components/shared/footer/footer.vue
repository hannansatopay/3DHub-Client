<template>
    <div class="white">
        <v-container>
            <v-row>
                <v-col md="3" sm="12">
                    <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/3dhub-logo_-3UwJkBW7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659069244894" width="230" contain=""></img>
                    <p class="caption grey--text darken-2 mb-0 text-center text-sm-left">Copyright ©2022 3DHUB.AE . All Rights Reserved.</p>
                </v-col>
                <v-col md="2" sm="12">
                    <ul>
                        <li class="header">3D Hub</li>
                        <li @click.prevent="$router.push('/industries')">Industries</li>
                        <li @click.prevent="$router.push('/products')">Equipment Store</li>
                        <li>Art Store</li>
                        <li @click.prevent="$router.push('/services')">Services</li>
                        <li>Portfolio</li>
                    </ul>
                </v-col>
                <v-col md="2" sm="12">
                    <ul>
                        <li class="header">Company</li>
                        <li @click.prevent="$router.push('/about-us')">About Us</li>
                        <li @click.prevent="$router.push('/contact-us')">Contact Us</li>
                        <li @click.prevent="$router.push('/portfolio')">Portfolio</li>
                        <li>Careers</li>
                        <li @click.prevent="$router.push('/blog')">Blog</li>
                    </ul>
                </v-col>
                <v-col md="2" sm="12">
                    <ul>
                        <li class="header">Support</li>
                        <li>FAQs</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Returns</li>
                    </ul>
                </v-col>
                <v-col md="3" sm="12">
                    <ul>
                        <li class="header">Address</li>
                        <li>Jebel Ali Industrial Area - Dubai, United Arab Emirates</li>
                        <li>800 33482</li>
                        <li>info@3dhub.ae</li>
                    </ul>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>
@media (max-width: 991.98px) {
  .row {
    flex-direction: column;
  }

  .col-sm-12 {
    flex: 1;
    max-width: 100%;
    width: 100%;
  }
}

li.header {
    font-weight: bold;
    color: #4A4A4A;
    font-size: 18px;
}

li:not(.header) {
    cursor: pointer;
}

li:not(.header):hover {
    color: #009688;
}
</style>