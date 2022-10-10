<template>
    <div>
      <div class="background-header pa-10 text-center">
            <v-container class="pa-10">
                <h2 class="text-white">Portfolio</h2>
                <p class="text-white mt-4">Your project is unique, and we are here to help you bring it to life. We have worked with hundreds of clients to solve problems, start businesses, engage their communities, create amazing content, expand their art to new mediums, replace broken machine parts, replicate artwork, honor award recipients and (sometimes) just get the idea out of their head so they can finally see it in real life!</p>
            </v-container>
        </div>

        <div class="spacer"></div>

       <v-container class="text-center">
       <v-btn-toggle v-model="type" color="primary accent-3" group>
        <v-btn value="All" class="rounded-xl px-5">
          All
        </v-btn>

        <v-btn value="Option A" class="rounded-xl px-5">
          Option A
        </v-btn>

        <v-btn value="Option B" class="rounded-xl px-5">
          Option B
        </v-btn>
      </v-btn-toggle>
        <div id="lightgallery" class="grid-wrapper">
          <a v-for="image in fetchPortfolio" :href="image.src">
            <img :src="image.src" >
          </a>
        </div>
      </v-container>
      <Testimonials />

      <div class="spacer"></div>

      <FAQ/>
    </div>
</template>

<script>
import Clients from "~/components/clients.vue";
import Testimonials from "~/components/testimonials.vue";
import H1 from '~/components/heading-style-a';
import Value from '../components/value.vue';
import FAQ from '../components/faq.vue';

export default {
    data () {
      return {
        type: 'All',
        active: false,
        portfolio: [
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__7__jc1I1lASC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604847',
          'type': 'Option A'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__6__T14JxdQSa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604803',
          'type': 'Option A'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__5__agYaGYYD9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634605128',
          'type': 'Option A'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__9__tu2glg_n4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634603496',
          'type': 'Option A'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__8__oI4lTB-5R.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634603307',
          'type': 'Option B'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__10__L4hV66G1p.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634601392',
          'type': 'Option A'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__7__jc1I1lASC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604847',
          'type': 'Option B'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__7__jc1I1lASC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604847',
          'type': 'Option B'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__7__jc1I1lASC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604847',
          'type': 'Option B'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__7__jc1I1lASC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604847',
          'type': 'Option B'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__7__jc1I1lASC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604847',
          'type': 'Option B'
        },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__7__jc1I1lASC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604847',
          'type': 'Option B'
          },
      ]
      }
    },
    computed: {
      fetchPortfolio(){
        return this.portfolio.filter(item => {
          if (this.type == 'All') {
            return true;
          } else {
            return item.type.toLowerCase().indexOf(this.type.toLowerCase()) > -1;
          }
          const el = document.getElementById('lightgallery')
          window.lightGallery(el);
        })
      }
    },
    components: {
    Clients,
    Testimonials,
    H1,
    Value,
    FAQ
},
mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el);
},
};

</script>

<style lang="scss" scoped>

@media (max-width: 991.98px) {
  .col-sm-12 {
    flex: 1;
    max-width: 100%;
    width: 100%;
  }

  .row {
    flex-direction: column;
  }

  .inverse {
    flex-direction: column-reverse;
  }
}

h2 {
    font-size: 48px;
}

.background {
    background: url('https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8194_pd_ikcSwi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659066720062');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top;
    height: 500px;
    display: flex;
    align-items: center;
    position : absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
}

.special-background {
  height: 400px;
  margin-bottom: 300px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Rectangle_1422_84vbXXM91.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659067540765') no-repeat;
  display: flex;
    align-items: center;

    .v-card {
        border: 1px solid #C4C4C4;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
border-radius: 30px;
    }
}

.grid-wrapper {
  // Mobile-first column count, we'll add responsive styles in a bit
  column-count: 1;
  column-gap: 20px;
  column-fill: balance;
  margin: 20px auto 0;
  padding: 2rem;

  a {
    display: inline-block;
    margin: 0 0 20px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    width: 100%;
    
    img {
      width: 100%;
      height: auto;
      filter: drop-shadow(0px 6px 31px rgba(0, 0, 0, 0.12));
      border-radius: 10px;
    }
  }

  // Add your media query breakpoints for when to expand the columns
  @media (min-width: 600px) {
    column-count: 2;
  }

  @media (min-width: 900px) {
    column-count: 3;
  }
}

.background-header {
    background: url(https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8271_tAsgsU_RF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661493143636);
    background-size: cover;
}
</style>