<template>
    <v-app-bar
      app
      elevation="0"
      color="#FEFEFE"
    >
      <v-spacer></v-spacer>
      <div class="menu">
        <router-link
          class="link"
          to="/"
        >
          Главная
        </router-link>
        <router-link
          v-if="!TOKEN"
          class="link"
          to="/auth"
        >
          Войти
        </router-link>
        <router-link
          v-if="!TOKEN"
          class="link"
          to="/registration"
        >
          Регистрация
        </router-link>
        <a
          v-if="TOKEN"
          class="link"
          to="/auth"
        >
          Выход
        </a>
      </div>
    </v-app-bar>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['TOKEN'])
  }
}
</script>

<style lang="scss">
@mixin flex-container {
  display: flex;
  align-items: center;
}
.menu {
  @include flex-container;
  justify-content: space-between;
  font-family: 'Montserrat-Medium', 'sans-serif';
  font-size: 18px;
  .link {
    text-decoration: none;
    margin-right: 50px;
    color: #727272;
  }
  .router-link-exact-active {
    color: #FF0036;
  }
}
</style>
