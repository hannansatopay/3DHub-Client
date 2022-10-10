<template>
  <div>

    <video width="100%" height="auto" autoplay muted> <source src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/3D_Hub_Final_w_Music_-_Compressed_with_FlexClip_JdkM7WibG.mp4?ik-sdk-version=javascript-1.4.3&updatedAt=1662376443012" type="video/mp4"></video>

    <div class="spacer"></div>

    <v-container>
    
    <div id="lightgallery" class="grid-wrapper">
      <a v-for="image in portfolio" :href="image.src" class="position-relative">
        <img :src="image.src"/>
        <span class="position-absolute bottom-0 left-0 ma-5 image-tag">{{image.name}}</span>
      </a>
    </div>
    </v-container>

<div class="spacer"></div>

    <v-container>
<v-row class="inverse">
      <v-col md="6" sm="12">
        <h2>About us</h2>
        <p class="mt-2">For most businesses, a perfect product deserves to be captured at a perfect angle and perspective. That is why, with the onset of technological advancement, 3D printing is used to create a prototype of the product. Creating 3D images bring more wonders than simply creating aesthetic manipulation of a product or item. 3D printing brings a myriad of benefits, particularly in the manufacturing industry. One of the greatest values 3D printing provides is the amount of time saved in manufacturing. The reduction of time consumed during the manufacturing process gives more opportunity to deal with the other areas in production and increase productivity and efficiency.</p>
        <v-btn @click.prevent="$router.push('/about-us')" v-on="on" large depressed color="primary">Learn More</v-btn>
      </v-col>
      <v-col md="6" sm="12">
        <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/Group_8195_H5QLsfKT5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659070027302" width="100%" />
      </v-col>
    </v-row>
    </v-container>

    <div class="spacer"></div>

    <v-container class="mt-5">
      <v-row class="mt-2">
        <v-col cols="12" sm="6" class="">
          <img src="https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/3d_services_homepage_5Qockpe20.JPG?ik-sdk-version=javascript-1.4.3&updatedAt=1661494041407" width="100%" class="rounded-lg" :class="`elevation-${hover ? 24 : 6}`" />
        </v-col>
        <v-col cols="12" sm="6">
          <h3 class="text-green">3D</h3>
          <h2>Services</h2>
          <p class="mt-2">With our quick turnaround, instant quote, and attention to detail, we at 3DHUB aim to be the #1 3D Printing Service in the Region. Our online 3D print service use cutting-edge industrial 3D printing machines, which help our customers get the best quality prints at competitive prices and quick lead times.</p>
          <v-btn @click.prevent="$router.push('/services')" v-on="on" large depressed color="primary">Learn More</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="spacer"></div>

    <v-container class="mt-5">
      <v-row class="inverse mt-2">
        <v-col cols="12" sm="6">
          <h3 class="text-green">3D</h3>
          <h2>Artwork Store</h2>
          <p class="mt-2">We're passionate about great art and providing an easy way to access it. That’s why we offer customers a diverse range of artworks, curated by art experts with years of experience looking at and studying the best pieces across all mediums.
3D Artwork is a global community of collectors, curators, and emerging artists. We feature an unparalleled selection of art by artists from around the world to suit all budgets, styles, and spaces.
Discover new curator-approved artworks in special collections released weekly, or work with an art advisor to get personalized recommendations based on your style.
</p>
          <v-btn @click.prevent="$router.push('/art-store')" v-on="on" large depressed color="primary">Learn More</v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="">
          <img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/dubai_3d_startegy__Hapn-2ZIBX.jpg" width="100%" class="rounded-lg" :class="`elevation-${hover ? 24 : 6}`" />
        </v-col>
      </v-row>
    </v-container>

    <div class="spacer"></div>

    <v-container>
      <v-row class="mt-2">
        <v-col cols="12" sm="6" class="">
          <img src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/dubai_3d_startegy__Hapn-2ZIBX.jpg" width="100%" class="rounded-lg" :class="`elevation-${hover ? 24 : 6}`" />
        </v-col>
        <v-col cols="12" sm="6">
          <h3 class="text-green">3D</h3>
          <h2>Equipment Store</h2>
          <p class="mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text.</p>
          <v-btn v-on="on" large depressed color="primary" @click.prevent="$router.push('/products')">Shop Now</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div class="spacer"></div>

    <div>
      <v-img class="d-none d-sm-block"
        src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/In_Page_Banner-02_fJLpO-Y2c.jpg" />
      <v-img class="d-block d-sm-none"
        src="https://ik.imagekit.io/frlnc3rhub7/3dhub/website/In_Page_Banner-03_JYHzkfMLK.jpg" />
    </div>


    <div class="spacer"></div>

    <H1 :text="'3D Solutions'" />

    <v-container>
      <v-row class="solutions">
        <v-col md="4" sm="12" style="position: relative;" v-for="service in getServices">
          <div @click.prevent="view(service.name)">
            <img :src="service.image" width="100%" />
            <h4>{{service.name}}</h4>
          </div>
        </v-col>
      </v-row>
    </v-container>


<div class="spacer"></div>

<Technology/>

<Testimonials/>

<div class="spacer"></div>

    <BlogSlider :items="Allposts" />

    <Contact />
  </div>
</template>

<script>
import Slider from "~/components/slider";
import Clients from "~/components/clients";
import BlogSlider from "~/components/blog-slider";
import Masonry from "~/components/masonry";
import Contact from "~/components/contact.vue";
import H1 from '~/components/heading-style-a';
import Technology from '../components/technology.vue';
import Testimonials from "~/components/testimonials.vue";
import ICountUp from 'vue-countup-v2';

export default {
  data() {
    return {
        brands: 100,
        products: 5000,
        projects: 125,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: '+'
        },
        portfolio: [
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/54_AlenmaEtAf.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662373204246',
          'name': 'Coty'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/17_XAsKFkhlAp.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662373204176',
          'name': 'Morgan ikm'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/64_JKhprMMUt.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662373203932',
          'name': 'Master Card'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/5_NSc0vGxTh.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662373203571',
          'name': 'Heinz'
          },
          {
          'src': 'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/141_gDaSZYZjw.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1662373203642',
          'name': 'Amouage'
          },
          
      ]
    };
  },
  components: {
    Slider,
    Clients,
    BlogSlider,
    Masonry,
    Contact,
    H1,
    Technology,
    Testimonials,
    ICountUp
},
mounted() {
    const el = document.getElementById('lightgallery')
    window.lightGallery(el);
},
  computed: {
    getServices(){
        return this.$store.getters.getServices;
    },
    Allposts() {
      return this.$store.state.posts
    },
  },
  methods: {
    async view(title) {
      this.$router.push({path: '/services/'+title})
    },
      onReady: function(instance, CountUp) {
        const that = this;
        instance.update(that.endVal + 100);
      }
    }
};
</script>
<style lang="scss" scoped>

.solutions {
  justify-content: center
}

@media (max-width: 991.98px) {
  .col-sm-12 {
    flex: 1;
    max-width: 100%;
    width: 100%;
  }

  .row:not(.normal) {
    flex-direction: column;
  }

  .inverse {
    flex-direction: column-reverse!important;
  }
}

h3 {
  font-family: 'Rubik';
  font-weight: 600;
  font-size: 40px;
  line-height: 30px;
}

h2 {
  font-family: 'Rubik';
  font-weight: 600;
  font-size: 64px;
  line-height: 30px;
}

.special-background {
  height: 400px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/shop-now.png') no-repeat;
  display: flex;
    align-items: center;
}

@media (max-width: 991.98px) {
  .special-background {
    height: 300px;
  }

  h2 {
    font-size: 24px;
    line-height: 10px;
  }
}

.text-white {
  color: white;
}

.solutions {

  h4 {
    transition: 0.3s;
  }

  .col:hover {
    h4 {
      margin-top: -50px;
    }
  }

  img {
    border-radius: 50px;
  }

  h4 {
    background: #E0F3F2;
    padding: 20px;
    width: 100%;
    text-align: center;
    border-radius: 50px;
    margin-top: -40px;
    z-index: 1;
    position: relative;
  }
}

.home-features {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.home-cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}

.home-features-card {
  width: 30%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: center;
}

.home-heading {
  font-size: 70px;
  font-family: Rubik;
  font-weight: 700;
  line-height: 1;
}

.home-text {
  font-size: 36px;
  font-style: normal;
  text-align: left;
  font-family: Rubik;
  font-weight: 400;
  line-height: 1.55;
  text-transform: none;
  text-decoration: none;
}

.home-text-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.iCountUp {
    font-size: 5em;
    margin: 0;
    color: white;
  }

.solutions .col div {
  cursor: pointer;
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

.image-tag {
  background: white;
  padding: 10px;
  border-radius: 10px;
}
</style>