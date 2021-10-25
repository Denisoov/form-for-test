<template>
  <v-row justify="center" align="center">
    <v-col cols="12" lg="4" md="6" sm="8">
      <v-form
        ref="form"
        v-model="validSignIn"
        lazy-validation
        class="sign-form"
      >
        <h1
          class="form__title"
        >
          Регистрация
        </h1>
        <slot>
          <span class="message__error">{{ ERROR ? ERROR : '' }}</span>
        </slot>
        <v-text-field
          id="username"
          append-icon="mdi-account"
          v-model="loginData.username"
          :rules="Validation.usernameRules"
          label="Логин"
          rounded
          background-color="#F7F6FF"
        ></v-text-field>
        <v-text-field
          rounded
          append-icon="mdi-lock"
          v-model="loginData.password"
          :rules="Validation.passwordRules"
          label="Пароль"
          background-color="#F7F6FF"
        ></v-text-field>
        <v-btn
          color="success"
          class="mr-4"
          outlined
          rounded
          @click="logIn()"
        >
          Зарегистрироваться
        </v-btn>

        <v-btn
          text
          color="#c9c9c9"
          @click="directToPage('/auth')"
          rounded
        >
          У меня есть аккаунт
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>

import { Validation } from '@/services/validation'
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    validSignIn: true,
    Validation,
    loginData: {
      username: null,
      password: null
    }
  }),
  computed: {
    ...mapGetters(['ERROR'])
  },
  methods: {
    ...mapActions(['LOG_IN', 'CLEAR_ERROR']),
    directToPage (url) {
      if (this.ERROR) this.CLEAR_ERROR()
      this.$router.push(url)
    },
    logIn () {
      this.LOG_IN(this.loginData)
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
