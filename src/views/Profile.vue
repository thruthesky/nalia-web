<template>
  <div class="profile">
    <h1>This is an profile page</h1>
    <hr />
    <ProfileUpdateForm @error="app.error" @success="success" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProfileUpdateForm from "@/vue-v3-admin/components/ProfileUpdateForm.vue";
import { ApiUser } from "@/vue-v3-admin/services/api.interfaces";
import { App } from "@/app.service";

@Options({
  components: {
    ProfileUpdateForm,
  },
})
export default class Profile extends Vue {
  success(data: ApiUser) {
    console.log("updated profile :", data);
    App.success("Profile Updated!");
  }
}
</script>
