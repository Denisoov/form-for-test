<template>
  <v-app>
    <Header></Header>
    <v-main>
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>

import Header from '@/components/Header'

export default {
  components: {
    Header
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
