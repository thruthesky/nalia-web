<template>
  <section class="layout-content mt-5">
    <LoginForm @success="$router.push('/')" @error="app.error($event)" />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginForm from "@/vue-v3-admin/components/LoginForm.vue";

@Options({
  components: {
    LoginForm
  }
})
export default class Login extends Vue {}
</script>
