<template>
  <section class="layout">
    <div class="header-wrapper">
      <header
        class="d-flex justify-content-between"
        v-if="currentRoute != '/private-policy'"
      >
        <div class="d-flex">
          <router-link class="logo" to="/">Nalia</router-link>
          <!-- <router-link to="/register" v-if="api.notLoggedIn">회원가입</router-link> -->
          <router-link to="/profile" v-if="api.user">Profile</router-link>
          <!-- <router-link to="/about">About</router-link> -->
        </div>
        <div class="d-flex">
          <router-link to="/private-policy">Privacy</router-link>
          <router-link to="/contacts">Contacts</router-link>
          <router-link to="/admin" v-if="api.isAdmin">Admin</router-link>
          <router-link to="/login" v-if="api.notLoggedIn">Login</router-link>
          <router-link to="/register" v-if="api.notLoggedIn"
            >Register</router-link
          >
          <router-link to="/profile" v-if="api.loggedIn">Profile</router-link>
          <router-link to="/logout" v-if="api.loggedIn">Logout</router-link>
        </div>
      </header>
    </div>
    <main>
      Loggin: {{ api.loggedIn }}, Name: {{ api.user?.user_email }}, count:
      {{ api.store.count }}
      <router-view />
    </main>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import router from "@/router";
export default class AppView extends Vue {
  currentRoute = "";

  created() {
    router.beforeEach((to, from, next) => {
      this.currentRoute = to.path;
      next();
    });
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #323232;
}

.layout {
  min-height: 100vh;
  .header-wrapper {
    background-color: #1976d2;
    a {
      display: block;
      color: #e0e0e0;
      text-decoration: none;
      padding: 1em;
      &.logo {
        padding-left: 0;
      }
    }
  }
  header,
  .layout-content,
  footer {
    margin: 0 auto;
    max-width: 1024px;
  }
}

.avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
}
.sm {
  font-size: 12px;
}
.md {
  font-size: 16px;
}
.bold {
  font-weight: bold;
}
.grey {
  color: grey;
}
.top {
  top: 0;
}
.left {
  left: 0;
}

.form-hint {
  color: grey;
}
.form-title {
  margin-top: 0.25em;
}

input {
  border: 1px solid grey;
  font-size: 1.5em;
}
.form-submit {
  margin-top: 1em;
  border: 0;
  font-size: 0.9em;
  padding: 0.5em 2em;
  color: white;
  background-color: blue;
}
</style>
