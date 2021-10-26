<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4" md="6" sm="8">
        <v-card
          min-height="225"
          class="pb-5"
          align="center" justify="center"
        >
          <v-avatar
            class="ma-6"
            size="205"
          >
            <v-img :src="!!USER_DATA.avatar ? USER_DATA.avatar : ''" ></v-img>
          </v-avatar>
          <v-card-title class="justify-center">
            <h5 class="title__value">
              {{ !!USER_DATA.username ? USER_DATA.username : '' }}
            </h5>
          </v-card-title>
          <v-card-subtitle class="pb-0">
            О себе
          </v-card-subtitle>
          <v-card-text>
            {{ !!USER_DATA.about ? USER_DATA.about : 'Информация отсутствует' }}
          </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="mt-5 mr-5"
                outlined
                disabled
                rounded
                small
              >
                ИЗМЕНИТЬ
              </v-btn>
            </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  created () {
    this.GET_DATA_USER()
  },
  computed: {
    ...mapGetters(['USER_DATA'])
  },
  methods: {
    ...mapActions(['GET_DATA_USER'])
  }
}
</script>

<style>
  .v-card__subtitle {
    font-family: 'Montserrat-Medium', 'sans-serif';
  }
  .title__value {
    font-family: 'Montserrat-Bold', 'sans-serif';
    letter-spacing: 0;
    text-align: center;
  }
</style>
