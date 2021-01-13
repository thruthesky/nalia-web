import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

import Admin from "@/vue-v3-admin/Admin.vue";
import AdminHome from "@/vue-v3-admin/view/AdminHome.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/logout",
    name: "Logout",
    component: () => import("../views/Logout.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/private-policy",
    name: "PrivatePolicy",
    component: () => import("../views/PrivatePolicy.vue")
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    children: [
      {
        path: "",
        component: AdminHome
      },
      {
        path: "users/:uid",
        component: () => import("../fire-admin-vue/admin/Users.vue")
      },
      {
        path: "categories",
        name: "Categories",
        component: () => import("../fire-admin-vue/admin/Categories.vue")
      },
      {
        path: "posts/:category",
        name: "Posts",
        component: () => import("../fire-admin-vue/admin/posts/Posts.vue")
      },
      {
        path: "search-posts",
        name: "SearchPosts",
        component: () => import("../fire-admin-vue/admin/SearchPosts.vue")
      },
      {
        path: "photos/:path",
        name: "Photos",
        component: () => import("../fire-admin-vue/admin/Photos.vue")
      },
      {
        path: "settings",
        name: "Settings",
        component: () => import("../fire-admin-vue/admin/settings/Settings.vue")
      },
      {
        path: "settings/app",
        name: "AppSettings",
        component: () =>
          import("../fire-admin-vue/admin/settings/AppSettings.vue")
      },
      {
        path: "settings/forum/:category",
        name: "CategorySettings",
        component: () =>
          import("../fire-admin-vue/admin/settings/CategorySettings.vue")
      },
      {
        path: "translations",
        name: "Translations",
        component: () => import("../fire-admin-vue/admin/Translations.vue")
      },
      {
        path: "purchases",
        name: "Purchases",
        component: () =>
          import("../fire-admin-vue/admin/purchases/Purchases.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
