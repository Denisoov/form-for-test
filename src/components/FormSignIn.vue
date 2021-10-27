<template>
    <v-row justify="center" align="center">
      <v-col cols="12" lg="4" md="6" sm="8">
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
            @keyup.enter="signIn()"
          ></v-text-field>

          <v-text-field
            rounded
            append-icon="mdi-lock"
            v-model="signInData.password"
            label="Пароль"
            type="password"
            background-color="#F7F6FF"
            @keyup.enter="signIn()"
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
  created () {
    this.CLEAR_ERROR()
  },
  data: () => ({
    signInData: {
      username: null,
      password: null
    }
  }),
  computed: {
    ...mapGetters(['ERROR', 'TOKEN'])
  },
  methods: {
    ...mapActions(['SIGN_IN', 'CLEAR_ERROR']),
    directToPage (url) {
      this.$router.push(url)
    },
    signIn () {
      this.SIGN_IN(this.signInData)
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
