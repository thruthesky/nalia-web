import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

import Admin from "@/vue-v3-admin/Admin.vue";
import AdminHome from "@/vue-v3-admin/views/AdminHome.vue";

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
        component: () => import("../vue-v3-admin/views/Users.vue")
      },
      {
        path: "categories",
        name: "Categories",
        component: () => import("../vue-v3-admin/views/Categories.vue")
      },
      {
        path: "posts/:category",
        name: "Posts",
        component: () => import("../vue-v3-admin/views/Posts.vue")
      },
      {
        path: "search-posts",
        name: "SearchPosts",
        component: () => import("../vue-v3-admin/views/SearchPosts.vue")
      },
      {
        path: "photos/:path",
        name: "Photos",
        component: () => import("../vue-v3-admin/views/Photos.vue")
      },
      {
        path: "settings",
        name: "Settings",
        component: () => import("../vue-v3-admin/views/settings/Settings.vue")
      },
      {
        path: "settings/app",
        name: "AppSettings",
        component: () =>
          import("../vue-v3-admin/views/settings/AppSettings.vue")
      },
      {
        path: "settings/forum/:category",
        name: "CategorySettings",
        component: () =>
          import("../vue-v3-admin/views/settings/CategorySettings.vue")
      },
      {
        path: "translations",
        name: "Translations",
        component: () => import("../vue-v3-admin/views/Translations.vue")
      },
      {
        path: "purchases",
        name: "Purchases",
        component: () =>
          import("../vue-v3-admin/views/Purchases.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
