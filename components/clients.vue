<template>
    <div>
        <H1 text="Clients" />

        <v-container>
            <client-only>
                <VueSlickCarousel class="mt-3" ref="slick" v-bind="settings">
                <div v-for="brand in brandsSort" >
                    <img class="brand-logo" :src="brand" />
                </div>
                </VueSlickCarousel>
            </client-only>
        </v-container>
    </div>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import H1 from '~/components/heading-style-a';

export default {
    data(){
        return {
            settings: {
                "dots": false,
                "arrows": false,
                "autoplay": true,
                "autoplaySpeed": 0,
                "infinite": true,
                "speed": 8000,
                "cssEase": 'linear',
                "slidesToShow": 6,
                "slidesToScroll": 1,
                "touchThreshold": 5,
                "variableWidth": true,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 2
                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 2
                        }
                    },
                    {
                        "breakpoint": 300,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 2
                        }
                    }
                ]
            }
        }
    },
    components: { VueSlickCarousel, H1 },
    computed: {
        brandsSort(){
            let brands = ['https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Clients/neom_logo_USazvIIly4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663674882026', 'https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Clients/dewa_Nsdf0wl15D.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663674882263', 'https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Clients/HCT-Logo_RO7NpY8OzR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663674882018', 'https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Clients/Amouage-Logo_ihsQ_wvyk.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663674882008', 'https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Clients/evolution_events_logo_YODqFB4iS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663674882031', 'https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Clients/sarwa_logo_9s-uIrbosw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1663674882173', 'https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Clients/ceaser_hotel_2ZAQPI-sB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663674881942']
            return brands;
        }
    }
}
</script>

<style lang="scss" scoped>

.container {
    max-width: 100%;
    background: white;
    padding: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
}

img {
    width: 150px;
}
</style>
<style>
.slick-slide {
    align-items: center!important;
}
</style>