
    <!-- <div class="col-6">
            <h6 class="mt-5 mb-5"><b>giriş</b></h6>
            <template class="col-6">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">e-mail adresi</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">şifre</label>
                  <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">unutma bunları sorucam sonra</label>
                </div>
                <button type="submit" class="btn btn-green col-12">giriş yapmaya çabala</button>
            </template>
          </div> -->
<template>
    <div class="container">
      <div class="row">
        <category-sidebar @category-select-event="categoryId = $event" />
        <div class="col-6">
            <h6 class="mt-5 mb-5"><b>kullanıcı girişi</b></h6>
            <div class="row g-3 col-7">
                <div class="col-12">
                  <label for="exampleInputEmail1" class="form-label">e-mail</label>
                  <input v-model="userData.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="col-12">
                  <label for="inputPassword4" class="form-label">şifre</label>
                    <input
                    v-model="userData.password"
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="col-12">
                  <router-link to="/register" class="p-0 m-0 btn btn-link text-primary">Üye Değilim</router-link>
                </div>
                <div class="col-12">
                  <button @click="login({...userData})" type="submit" class="btn btn-green col-12">giriş yapmaya çabala</button>
                </div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
import categorySidebar from "@/components/appShared/categorySidebar"
import { mapActions } from 'vuex';
export default {
  components:{
    categorySidebar
  },
  data(){
    return{
      userData : { 
        email :"burcin.ern969@gmail.com",
        password : "111",
      }
    };
  },
  methods : {
    ...mapActions({
      login : "users/login"
    })
  },
  
}
</script>