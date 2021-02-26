<template>
    <div class="container">
      <div class="row">
        <category-sidebar @category-select-event="categoryId = $event" />
        <div class="col-6">
            <h6 class="mt-5 mb-5"><b>yeni kullanıcı kaydı</b></h6>
            <div class="row g-3 col-7">
                <div class="col-12">
                    <label for="exampleInputEmail1" class="form-label">nick</label>
                    <input v-model="userData.nick" type="text" class="form-control" aria-label="nick">
                  </div>
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
                  <router-link to="/giris" class="p-0 m-0 btn btn-link text-primary">zaten üyeyim</router-link>
                </div>
               <div class="mb-3">
              <label class="form-label">İlgi Duyduğunuz Kategori</label>
              <select v-model="userData.categoryId" class="form-select">
                <option selected>Lütfen bir kategori seçiniz</option>
                <option
                  v-for="category in categoryList"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.title }}
                </option>
              </select>
            </div><!-- 
                <div class="col-md-4 mt-4">
                  <label for="inputState" class="form-label"></label>
                  <select id="inputState" class="form-select">
                    <option selected></option>
                    <option>ocak</option>
                    <option>şubat</option>
                    <option>mart</option>
                    <option>nisan</option>
                  </select>
                </div>
                <div class="col-md-3  mt-4">
                  <label for="inputState" class="form-label"></label>
                  <select id="inputState" class="form-select">
                    <option selected></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </div> -->
                <!-- <div class="col-12">
                  <input type="checkbox" class="btn-check col-1" id="btn-check-outlined" autocomplete="off">
                  <label class="btn btn-outline-primary btn-g" for="btn-check-outlined">kadın</label>

                  <input type="checkbox" class="btn-check col-1" id="btn-check-outlined" autocomplete="off">
                  <label class="btn btn-outline-primary btn-g" for="btn-check-outlined">kadın</label>

                  <input type="checkbox" class="btn-check col-1" id="btn-check-outlined" autocomplete="off">
                  <label class="btn btn-outline-primary btn-g" for="btn-check-outlined">kadın</label>

                  <input type="checkbox" class="btn-check col-1" id="btn-check-outlined" autocomplete="off">
                  <label class="btn btn-outline-primary btn-g" for="btn-check-outlined">kadın</label>
                </div> -->
                <!-- <div class="col-12">
                  <label for="inputPassword4" class="form-label">şifre</label>
                  <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-12">
                  <label for="inputPassword4" class="form-label">şifre(tekrar)</label>
                  <input type="password" class="form-control" id="inputPassword4">
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                      ekşi sözlük kullanıcı sözleşmesini okudum ve kabul ediyorum
                    </label>
                  </div>
                </div> -->
                <div class="col-12">
                  <button @click="onSave({ ...userData })" type="submit" class="btn btn-green col-12">kayıt ol işte böyle</button>
                </div>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
import categorySidebar from "@/components/appShared/categorySidebar"
import { mapGetters, mapActions } from 'vuex'
export default {
  components:{
    categorySidebar
  },
  data(){
    return{
      userData : { 
        nick : null,
        email : null,
        password : "",
        categoryId: null
      }
    };
  },
  methods : {
    ...mapActions({
      onSave : "users/register"

    }),
    // onSave(){
    //   this.$store.dispatch("users/register",{...this.userData})
    // }
  },
  computed: {
    ...mapGetters({
      categoryList: "categories/_categoriesList"
    })
  }
  
}
</script>