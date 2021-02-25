import { createRouter, createWebHistory } from 'vue-router'
import appHeader from "@/components/appShared/appHeader";

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
    path : '/kayit',
    name : 'Register',

    components: {
      default: () => import ('../views/User/Register.vue'),
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
})

export default router
