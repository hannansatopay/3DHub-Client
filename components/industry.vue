<template>
  <v-container class="container">
    <v-row>
      <v-col md="4" sm="12" v-for="industry in getIndustries" :key="industry._id">
        <div class="card" @click.prevent="view(industry.name)">
          <div class="card-body">
            <div class="cover" :style="{ backgroundImage: `url(${industry.image?industry.image:'https://ik.imagekit.io/u8in9yfbp5jz/3D_Hub/team_2__7__jc1I1lASC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660634604847'})` }"></div>
            <div class="name">
              <h4>{{industry.name}}</h4>
            </div>
            <div class="mt-3 text-center" v-html="truncateString(industry.description, 150)"></div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:{
    service: Object
  },
  data() {
    return {
    }
  },
  computed: {
    getIndustries() {
      if (this.service) {
        if (this.service.industry) {
          return this.$store.getters.getIndustries.filter((a) =>
            this.service.industry.includes(a.name)
          ).sort((a,b) => a['order'] - b['order']);
        } 
      }
      else {
        return this.$store.getters.getIndustries;
      }
    },
  },
  methods: {
    async view(title) {
      this.$router.push({path: '/industry/'+title})
    },
    truncateString(str, num) {
      if (str.length <= num) {
        return str;
      }
      return str.slice(0, num) + "...";
    }
  }
}
</script>

<style lang="scss" scoped>
.industries {
  margin-top: 150px;
  justify-content: center;
  .col:nth-child(3n-1) {
    margin-top: -150px;
  }
  .col:last-child {
    margin-top: -150px;
  }
}

@media (max-width: 991.98px) {
  .industries {
    margin-top: 0px!important;
  }
  .col:nth-child(3n-1) {
    margin-top: 0px!important;
  }
}

.card {
  padding: 20px;
  transition: 0.3s;
  cursor: pointer;
}

.card:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 44px;
  transform: scale(1.02);
}

  img:not(.icon) {
    border-radius: 24px;
  }

  .name {
    background: white;
    padding: 15px;
    text-align: center;
    margin-top: -25px;
    z-index: 1;
    position: relative;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    font-weight: 600;
    font-size: 18px;
    color: #313131;
  }

  .cover {
    width: 100%;
    height: 0;
    padding-top: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 24px;
  }
</style>
