<template>
  <div class="about">
    <h1>This is an register page</h1>
    <RegisterForm @error="app.error" @success="success" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RegisterForm from "@/vue-v3-admin/components/RegisterForm.vue"; // @ is an alias to /src
import { ApiUser } from "@/vue-v3-admin/services/api.interfaces";
import { App } from "@/app.service";

@Options({
  components: {
    RegisterForm,
  },
})
export default class Register extends Vue {
  success(data: ApiUser) {
    console.log("register success : ", data);
    App.success("Register success");
  }
}
</script>
