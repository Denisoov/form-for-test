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
          v-model="validSignIn"
          lazy-validation
          class="sign-form"
        >
          <h1
            class="form__title"
          >
            Вход в аккаунт
          </h1>
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
          >
            Войти
          </v-btn>

          <v-btn
            text
            color="#c9c9c9"
            @click="directToPage()"
            rounded
          >
            У меня нет аккаунта
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
</template>

<script>

export default {
  data: () => ({
    validSignIn: true,
    signInData: {
      username: null,
      password: null
    }
  }),
  methods: {
    directToPage () {
      this.$router.push('/registration')
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
