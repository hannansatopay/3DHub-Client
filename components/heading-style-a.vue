<template>
  <div class="heading py-5">
    <div>
      <h1>{{ text }}</h1>
      <img :src="svg_src" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderStyleA',
  props: {
    svg_src: {
      type: String,
      default:
        '/playground_assets/54bf6588-54d4-4faa-9cc6-5f041cd707ac-kqqh.svg',
    },
    text: {
      type: String,
      default: 'Attributes of 3D Hub',
    }
  },
}
</script>

<style scoped>
@media (max-width: 991.98px) {
  h1 {
    font-size: 28px!important;
    line-height: 38px!important;
  }
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5em;
  margin-bottom: 2.5em;
}

.heading div {
    position: relative;
  }

h1 {
  color: rgba(0, 0, 0, 1);
  z-index: 2;
  font-size: 48px;
  font-weight: 600;
  line-height: 58px;
  position: relative;
}
img {
  top: -50px;
  left: -50px;
  width: 168px;
  height: 123px;
  position: absolute;
}
</style>
