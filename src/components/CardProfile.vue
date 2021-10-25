<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" md="6" sm="8">
        <v-card
          class="pb-5"
        >
          <div
            class="d-flex flex-no-wrap justify-space-between"
          >
            <div>
              <v-card-title
                class="text-h5"
                v-text="'Title'"
              ></v-card-title>

              <v-card-subtitle>
                {{ 'First name' }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn
                  class="ml-2 mt-5"
                  outlined
                  rounded
                  small
                >
                  START RADIO
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar
              class="ma-3"
              size="225"
              tile
            >
              <v-img ></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardProfile'
}
</script>

<style scoped>

</style>
