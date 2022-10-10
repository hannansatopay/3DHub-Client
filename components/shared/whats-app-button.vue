<template>
<div>
     <div v-if="GetContents.footer_scripts">     

        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a
        :href="decode(GetContents.footer_scripts)"
        class="float"
        target="_blank"
      >
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      title: "Lates News",
    };
  },

  methods: {
    decode(str) {
      return Buffer.from(str, "base64").toString();
    },
  },
  computed: {
    GetContents() {
      return this.$store.state.contents[0].labels.en;
    },
  },
};
</script>

<style scoped>
.float {
  position: fixed;
  width: 45px;
  height: 45px;
  bottom: 40px;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 9px;
}
</style>

