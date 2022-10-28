<template>
<div>
    <H1 text="Industries" />

    <div class="background"></div>

    <Industry/>

    <H1 text="Our Featured Work" />

    <Masonry/>

    <Faq/>
</div>
</template>

<script>
import H1 from '~/components/heading-style-a';
import Masonry from '~/components/masonry.vue';
import Industry from '../components/industry.vue';
import Faq from '../components/faq.vue';
export default {
  data() {
    return {
    };
  },
  components: {
    Masonry,
    H1,
    Industry,
    Faq
},
}
</script>

<style lang="scss" scoped>
.background {
    background: url('https://ik.imagekit.io/frlnc3rhub7/3D_Hub/Group_8194_pd_ikcSwi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659066720062');
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
</style>