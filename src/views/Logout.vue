<template>
  <div class="logout">
    <h1>Logout!</h1>
  </div>
</template>

<script lang="ts">
import { Api } from "@/vue-v3-admin/services/api.service";
import { Vue } from "vue-class-component";
export default class Logout extends Vue {
  created() {
    console.log("Logout");
    Api.logout();
  }
}
</script>
