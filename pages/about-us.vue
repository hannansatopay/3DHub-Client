<template>
    <div class="mb-10">

    <div>
        <v-container>
        <h2 class="mb-7 mt-7 text-center">About Us</h2>

        <div class="mx-auto text-center" style="width: 75%;">
        <p>3D Hub is a subsidiary of Nathan and Nathan group of companies, founded in 2012. We follow our Parent company to be the best at what we do in terms of creating, innovation and breaking boundaries in the 3D market.
        3D Hub focuses on modernity and professionalism.</p>
        <p>Seeking the most functional and effective technological solutions. Our priority is the implementation of new products to market in a much faster and efficient way than ever before.
        Assuring that quality and customer satisfaction is one of our key attributes. along with making sure that your start to end experience with 3DHub is as smooth as can be.</p>
        <p>3DHub is formed in response to the demand of the century’s requirements on 3D printing Services and Solutions to become the leading 3D solutions seller in the region.</p>
        </div>

        </v-container>

        </div>

        <div class="background"></div>

        <div class="spacer"></div>

        <Clients />

        <div class="spacer"></div>

        <H1 text="Attributes of 3D Hub" />

        <Attributes/>

        <div class="spacer"></div>

       <div class="special-background mission">
      <v-container style="position: relative; height: 100%;">
        <v-card class="mx-auto pa-5" style="position: absolute;right: 0px;max-width: 500px;top: 50px;">
                <h2 class="text-white mb-2">Our Mission</h2>
                <p class="text-white">Our Mission is to Create the Middle East’s largest online platform focusing in the 3D space. We strive to deliver individualised solutions to all our client's printing needs and add value to our clients' businesses through our software and hardware infrastructure, and an in-depth knowledge of Additive Manufacturing.</p>
                <p class="text-white">By implementing efficient systems and listening to our community we bring together the largest platform of 3D printers, scanners, filaments, resin, spare parts and service plans that guarantee complete satisfaction.</p>
                <p class="text-white">Our aim is to provide you with the highest-quality products and services available in the fastest, most economical way possible without ever sacrificing quality. We will create long-lasting, mutually beneficial relationships</p>
            </v-card>
        <v-card class="mx-auto pa-5" style="position: absolute;max-width: 500px;left: 0px;top: 150px;">
                <h2 class="text-white mb-2">Our Vision</h2>
                <p class="text-white">The Vision of 3D HUB is to lead the 3D Prototyping industry while providing 3D Printing Solutions to new markets by using innovative technology and professionalism. We pride ourselves on bringing results that count in everything that we set out to do and we are constantly striving for successful outcomes in all areas of our 3D business.</p>
                <p class="text-white">We aim to serve “Dubai 3D Printing Strategy”, launched by his Highness Sheik Mohammed Bin Rashid Al Maktoum Carrying this unique global initiative that aims to exploit technology for the service of humanity and promote the status of Dubai as a leading hub for 3D design and printing services by the year 2030.</p>
                <p class="text-white">We aim to serve “Dubai 3D Printing Strategy”, launched by his Highness Sheik Mohammed Bin Rashid Al Maktoum Carrying this unique global initiative that aims to exploit technology for the service of humanity and promote the status of Dubai as a leading hub for 3D design and printing services by the year 2030</p>
          </v-card>
      </v-container>
    </div>

    <div class="spacer"></div>

        <Testimonials />

        <div class="spacer"></div>

        <H1 text="Value Proposition" />

        <Value/>
    </div>
</template>

<script>
import Clients from "~/components/clients.vue";
import Testimonials from "~/components/testimonials.vue";
import H1 from '~/components/heading-style-a';
import Value from '../components/value.vue';
import Attributes from '../components/attributes.vue';

export default {
    data() {
        return {
        };
    },
    components: {
    Clients,
    Testimonials,
    H1,
    Value,
    Attributes
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

@media (max-width: 991.98px) {
  .background {
    height: 300px;
  }
}

.special-background {
  height: 800px;
  background: #313131;
  display: flex;
  align-items: center;
  border: 0px;
  box-shadow: none;

    .v-card {
      border: 1px solid #C4C4C4;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      border-radius: 30px;
      border: 0px;
      box-shadow: none;
      background: transparent;
    }
}
</style>