<template>
  <div class="about">
    <h1>This is an register page</h1>
    <RegisterForm @error="app.error($event)" @success="app.success" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RegisterForm from "@/vue-v3-admin/components/RegisterForm.vue"; // @ is an alias to /src
import { ApiUser } from "@/vue-v3-admin/services/api.service";

@Options({
  components: {
    RegisterForm
  }
})
export default class Register extends Vue {}
</script>
