import { appAxios } from "@/utils/securedAxios";

export default {
    namespaced: true,
    state: {
      categories : []
    },
    mutations: {
      setCategories(state, pCategories){
        state.categories = pCategories;
      }
    },
    actions: {
      fetchCategories({commit}) {
        appAxios.get("/categories").then(category_response =>{
          commit("setCategories",category_response?.data || []);
        })
      }
    },
    getters: {//getters ile state i açık hale getirioruz
      _categoriesList : state => state.categories
    }
  }