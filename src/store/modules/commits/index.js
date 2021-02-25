import { appAxios } from "@/utils/securedAxios"

export default {
    namespaced: true,
    state: {
      commits: []
    },
    mutations: {
      setCommits(state, pCommits) {
        state.commits = pCommits;
      },
      setNewCommit(){}
    },
    actions: {
      fetchCommits({ commit }, searchKey ){
        let url = "/commits?_expand=category&_sort=created_at&_order=desc&categoryId=12";
        
        if (searchKey) {
          url = `${url}&q=${searchKey}`;
        }
        
        appAxios
        .get(url)
        .then(commit_list_response => { 
          console.log("commit_list_response",commit_list_response);
          commit("setCommits", commit_list_response?.data || []);
          });
      },
      newCommit(){}
    },
    getters: {
      _commitList :state => state.commits
    }
  }