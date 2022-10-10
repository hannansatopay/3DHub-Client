<template>
  <div style="margin-top:100px">
    <H1 text="FAQ'S" />

    <v-container>
    <v-container>
    <v-expansion-panels accordion>
              <v-expansion-panel v-for="(item, i) in getFaq" :key="i">
                <v-expansion-panel-header>{{item.question}}</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  {{item.answer}}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
    </v-container>
  </v-container>
  </div>
</template>

<script>
import H1 from '~/components/heading-style-a';

export default {
  components: {
    H1
  },
  props: {
    type: {
      type: String,
      default: 'Services'
    }
  },
  data () {
      return {
      }
  },
   computed: {
    getFaq() {
      return this.$store.getters.getFaq.filter((faq)=>faq.category==this.type);
    },
  },
}
</script>

<style lang="scss" scoped>
.v-expansion-panel::before {
    content: none!important;
}
</style>