import { createRouter, createWebHistory } from 'vue-router';
import appHeader from "@/components/appShared/appHeader";
import { isObject, isArray } from "util";
import store from "../store";
// import store from "../store"

const routes = [
  {
    path: '/',
    name: 'Home',
    components : {
      default : () => import ('../views/Home.vue'),
      appHeader,
    }
  },
  {
    path : '/new',
    name : 'NewComment',

    components: {
      default: () => import ('../views/NewComment.vue'),
      appHeader,
    }
  },
  {
    path : '/iletisim',
    name : 'Contact',

    components: {
      default: () => import ('../views/Contact.vue'),
      appHeader,
    }
  },
  {
    path : '/register',
    name : 'Register',

    components: {
      default: () => import ('../views/User/Register.vue'),
      appHeader,
    }
  },
  {
    path : '/giris',
    name : 'Login',

    components: {
      default: () => import ('../views/User/Login.vue'),
      appHeader,
    }
  },
  {
    path : '/account',
    name : 'Account',

    components: {
      default: () => import ('../views/User/Authenticated/Account.vue'),
      appHeader,
    }
  },
  {
    path : '/my-comment',
    name : 'MyComment',

    components: {
      default: () => import ('../views/User/Authenticated/MyComment.vue'),
      appHeader,
    }
  },
  {
    path : '/favorites',
    name : 'Favorites',

    components: {
      default: () => import ('../views/User/Authenticated/Favorites.vue'),
      appHeader,
    }
  },
  {
    path : '/reklam',
    name : 'Advertising',

    components: {
      default: () => import ('../views/Advertising.vue'),
      appHeader,
    }
  },
  {
    path : '/is-ilani',
    name : 'job',

    components: {
      default: () => import ('../views/job.vue'),
      appHeader,
    }
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) =>{
  let user = null;
  const authenticatedPages = [
    "Account",
    "Favorites",
    "MyComment",
    "NewComment"
  ];
  if(localStorage?.user) user = JSON.parse(localStorage?.user);
  if (isObject(user) && !isArray(user)) store.commit("users/setUser", user);
  // isAuthenticated bilgisini Store üzerinden al..
  const isAuthenticated = store.getters["users/isAuthenticated"];

  if (isAuthenticated) store.dispatch("users/setFavorites");

  // Rules...
  // Eğer Giriş yapmamışsa ve User ile ilgili bölümlere girmek istiyorsa.. Engelle ve Login sayfasına yönlendir..
  if (!isAuthenticated && authenticatedPages.indexOf(to.name) > -1)
    next({ name: "Login" });

  if (isAuthenticated && (to.name === "Login" || to.name === "Register"))
    next({ name: "Home" });

 next();
});


export default router
