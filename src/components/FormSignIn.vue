<template>
  <v-form
    ref="form"
    v-model="validSignIn"
    lazy-validation
    class="sign-form"
  >
    <h1 class="form__title">Вход в аккаунт</h1>
    <v-text-field
      id="username"
      append-icon="mdi-account"
      v-model="signInData.login"
      :rules="nameRules"
      label="Логин"
      rounded
      background-color="#F7F6FF"
    ></v-text-field>
    <v-text-field
      rounded
      append-icon="mdi-lock"
      v-model="signInData.password"
      :rules="passwordRules"
      label="Пароль"
      background-color="#F7F6FF"
    ></v-text-field>

    <v-btn
      :disabled="validSignIn"
      color="success"
      class="mr-4"
      outlined
    >
      Зарегистрироваться
    </v-btn>

    <v-btn
      text
      @click="directToPage()"
    >
      У меня есть аккаунт
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    validSignIn: true,
    signInData: {
      login: null,
      password: null
    },
    nameRules: [
      valid => !!valid || 'Поле не заполнено',
      valid => (valid && valid.length <= 10) || 'Name must be less than 10 characters'
    ],
    passwordRules: [
      valid => !!valid || 'Поле не заполнено'
      // valid => /.+@.+\..+/.test(valid) || 'Пароль должен быть валидным'
    ]
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
