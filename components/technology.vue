<template>
    <div>
        <H1 :text="'3D Technology'" />

        <v-container>
            <client-only>
                <VueSlickCarousel class="mt-3" ref="slick" v-bind="settings">
                <div class="slide">
                    <div class="card">
                        <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Picture1_lzcaGEFza.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660073450100" width="100%" />
                        <h4 class="pa-3">SLA 3D Printing</h4>
                        <p class="mt-3 text-center">VAT polymerization processes use UV light to cure material in a prefilled vat.</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="card">
                        <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Picture2_R7I8LrzEf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660073449683" width="100%" />
                        <h4 class="pa-3">MATERIAL EXTRUSION</h4>
                        <p class="mt-3 text-center">Material extrusion is an additive manufacturing technique and most efficient technology in 3D printing which uses continuous ﬁlament to construct 3D parts.</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="card">
                        <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Picture3_6_ebZGHGUW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660073449146" width="100%" />
                        <h4 class="pa-3">MATERIAL JETTING</h4>
                        <p class="mt-3 text-center">Creates objects in a similar method to a two-dimensional ink jet printer. Material is jetted onto a build platform layer by layer while simultaneously being cured using UV light.</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="card">
                        <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Picture4_tCGQMhsBf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660073448877" width="100%" />
                        <h4 class="pa-3">POWER BED FUSION</h4>
                        <p class="mt-3 text-center">Powder bed fusion is a subset of additive manufacturing whereby a heat source is used to consolidate material in powder form into 3D objects.</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="card">
                        <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Picture5_J6mIsmrzK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660073448843" width="100%" />
                        <h4 class="pa-3">DIRECT ENERGY DEPOSITION</h4>
                        <p class="mt-3 text-center">Directed Energy Deposition is a 3D printing method which uses a focused energy source to melt a metal wire or powder which is simultaneously deposited by a nozzle.</p>
                    </div>
                </div>
                <div class="slide">
                    <div class="card">
                        <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Picture6_NQGxRpVTo.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660073448693" width="100%" />
                        <h4 class="pa-3">FRP CASTING</h4>
                        <p class="mt-3 text-center">Fiber Reinforced Polyester is a method of 3D printing which uses fiberglass molding and casting of any size, shape, and details - whether it is an interior decoration model or large sculptures.</p>
                    </div>
                </div>
                <template #prevArrow="">
                    <div class="custom-arrow">
                        <v-icon class="prev-btn">mdi-chevron-left</v-icon>
                    </div>
                </template>
                <template #nextArrow="">
                    <div class="custom-arrow">
                        <v-icon class="next-btn">mdi-chevron-right</v-icon>
                    </div>
                </template>
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
                "arrows": true,
                "infinite": true,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "touchThreshold": 5,
                "variableWidth": true,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }
        }
    },
    components: { VueSlickCarousel, H1 },
}
</script>

<style>
.slick-slide {
    align-items: flex-start;
}
</style>

<style lang="scss" scoped>

.slide {
    padding: 10px;
}

.card {
  padding: 20px;
  transition: 0.3s;
}

.card:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 44px;
  transform: scale(1.02);
}

  img {
    border-radius: 24px;
  }

  h4 {
    background: white;
    width: 100%;
    text-align: center;
    margin-top: -40px;
    z-index: 1;
    position: relative;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  h4 {
    font-weight: 600;
    text-transform: uppercase;
  }
</style>