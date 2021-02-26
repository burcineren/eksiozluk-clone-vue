import { createStore } from 'vuex'
import categories from "./modules/categories";
import commits from "./modules/commits";
import users from "./modules/users"

//commit...

export default createStore({
  state: {
    
    },
  mutations: {
  },
  actions: {
    initApp({dispatch}){
       dispatch("categories/fetchCategories");
    }
  },
  modules: {
    categories,
    commits,
    users
  }
})
