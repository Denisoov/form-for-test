<template>
    <v-row
      class="d-flex justify-center align-content-center fill-height"
    >
      <v-col
        cols="12"
        lg="4"
        md="6"
        sm="8"
      >
        <v-form
          ref="signIn"
          lazy-validation
          class="sign-form"
        >
          <h1
            class="form__title"
          >
            Вход в аккаунт
          </h1>
          <slot>
            <span class="message__error">{{ ERROR ? ERROR : '' }}</span>
          </slot>
          <v-text-field
            id="username"
            append-icon="mdi-account"
            v-model="signInData.username"
            label="Логин"
            rounded
            background-color="#F7F6FF"
          ></v-text-field>

          <v-text-field
            rounded
            append-icon="mdi-lock"
            v-model="signInData.password"
            label="Пароль"
            background-color="#F7F6FF"
          ></v-text-field>
          <v-btn
            color="success"
            class="mr-4"
            rounded
            outlined
            @click="signIn()"
          >
            Войти
          </v-btn>
          <v-btn
            text
            color="#c9c9c9"
            @click="directToPage('/registration')"
            rounded
          >
            У меня нет аккаунта
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    signInData: {
      username: null,
      password: null
    }
  }),
  computed: {
    ...mapGetters(['ERROR'])
  },
  methods: {
    ...mapActions(['SIGN_IN']),
    directToPage (url) {
      this.$router.push(url)
    },
    async signIn () {
      await this.SIGN_IN(this.signInData)
      await this.directToPage('/')
    }
  }
}
</script>

<style lang="scss">
.sign-form {
  font-family: 'Montserrat-Medium', 'sans-serif';
}
.v-label--active {
  transform: translateY(-30px) scale(0.75) !important;
}
</style>
