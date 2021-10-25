<template>
  <v-app>
    <Header></Header>
    <v-main>
      <v-snackbar
        right
        top
        v-model="snackbar"
        :timeout="1000"
      >
        {{ MESSAGE }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>

import Header from '@/components/Header'
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    snackbar: false
  }),
  components: {
    Header
  },
  watch: {
    MESSAGE (newVal) {
      this.snackbar = !!newVal
    },
    snackbar () {
      setTimeout(() => {
        this.RESET_MESSAGE()
      }, 2000)
    }
  },
  computed: {
    ...mapGetters(['MESSAGE'])
  },
  methods: {
    ...mapActions(['RESET_MESSAGE'])
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
