<template>
  <div>
    <v-container
      class="sign-content d-flex justify-center align-content-center fill-height"
    >
      <FormSignIn></FormSignIn>
    </v-container>
  </div>
</template>

<script>

import FormSignIn from '@/components/FormSignIn'

export default {
  components: {
    FormSignIn
  }
}
</script>

<style scoped>
.sign-content {
  min-height: calc(100vh - 400px);
}
</style>
