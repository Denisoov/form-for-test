<template>
  <hello-world v-if="!TOKEN" />
  <CardProfile v-else />
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import CardProfile from '@/components/CardProfile'
import { mapGetters } from 'vuex'

export default {
  components: {
    HelloWorld,
    CardProfile
  },
  computed: {
    ...mapGetters(['TOKEN'])
  }
}
</script>
