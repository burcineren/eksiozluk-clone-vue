import { appAxios } from "@/utils/securedAxios";
import router from "../../../router";
export default {
    namespaced :true,
    state : {
        user : null,
    },
    mutations: {
        setUser(state, pUser){
            state.user =pUser;
        },
        logout(state) {}
    },
    actions: {
        register({commit}, pUser ){
            appAxios.post("/users", pUser).then(register_response => {
                console.log("Register", register_response);
                commit("setUser",register_response);
            })
        },
        login({ commit}, pUser){
            appAxios.get(`/users?email=${pUser.email}&password=${pUser.password}`).then(login_respose => {
                console.log("login_respose",login_respose);
                if(login_respose?.status === 200 && login_respose?.data?.length>0){
                    commit("setUser", login_respose?.data[0]);
                    localStorage.user = JSON.stringify(login_respose?.data[0]);
                    router.push("/");
                }
            })
                    
        },
    },
    getters: {
        currentUser : state => state.user,
        isAuthenticated :state => state.user ==! null
    }
}