<template>
  <hello-world v-if="!TOKEN" />
</template>

<script>
import HelloWorld from '../components/HelloWorld'
import { mapGetters } from 'vuex'

export default {
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters(['TOKEN'])
  }
}
</script>
