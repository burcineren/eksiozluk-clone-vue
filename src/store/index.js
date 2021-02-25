import { createStore } from 'vuex'
import categories from "./modules/categories";
import commits from "./modules/commits";

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
  }
})
