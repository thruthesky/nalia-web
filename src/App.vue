<template>
  <section class="layout">
    <div class="header-wrapper">
      <header
        class="d-flex justify-content-between"
        v-if="currentRoute != '/private-policy'"
      >
        <div class="d-flex">
          <router-link class="logo" to="/">Nalia</router-link>
          <!-- <router-link to="/register" v-if="app.notLoggedIn">회원가입</router-link> -->
          <router-link to="/profile" v-if="app.user">Profile</router-link>
          <!-- <router-link to="/about">About</router-link> -->
        </div>
        <div class="d-flex">
          <router-link to="/private-policy">Privacy</router-link>
          <router-link to="/contacts">Contacts</router-link>
          <router-link to="/admin" v-if="app.isAdmin">Admin</router-link>
          <router-link to="/login" v-if="!app.user">Login</router-link>
          <router-link to="/logout" v-if="app.user">Logout</router-link>
        </div>
      </header>
    </div>
    <main>
      <router-view />
    </main>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import router from "@/router";

export default class RegisterForm extends Vue {
  currentRoute = "";

  created() {
    router.beforeEach((to, from, next) => {
      this.currentRoute = to.path;
      next();
    });
  }
}
</script>

<style lang="scss"></style>
