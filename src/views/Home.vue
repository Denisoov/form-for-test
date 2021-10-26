<template>
  <Preview v-if="!TOKEN" />
  <CardProfile v-else />
</template>

<script>
import Preview from '@/components/Preview'
import CardProfile from '@/components/CardProfile'
import { mapGetters } from 'vuex'

export default {
  components: {
    Preview,
    CardProfile
  },
  computed: {
    ...mapGetters(['TOKEN'])
  }
}
</script>
