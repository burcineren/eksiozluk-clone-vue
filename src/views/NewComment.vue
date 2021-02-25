<template>
    <div class="container">
    <div class="row mt-3">
      <category-sidebar @category-select-event="categoryId = $event" />
      <div class="col-6">
        <div class="card">
          <div class="card-header">
            mesaj gir
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="question-title" class="form-label" >girilecek başlık</label >
              <input v-model="userData.title" type="text" class="form-control" id="question-title" placeholder="" />
            </div>
            <div class="mb-3">
              <label for="question-details" class="form-label">mesaj</label>
              <textarea  v-model="userData.details" class="form-control" id="question-detalist" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label for="question-category" class="form-label">konu</label>
              <select  v-model="userData.categoryId" id="question-category" class="form-select">
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
              </select>
            </div>
          </div> 
          <div class="card-footer text-muted d-flex justify-content-end align-items-center" >
            <button :disabled="notAbleToSave" class="btn btn-green" @click="saveCommit"> Kaydet </button>
          </div>
        </div>
      </div>
      <card-sidebar />
      <div class="col-3"></div>
          <app-footer />
    </div>
  </div>
</template>
<script> 
import categorySidebar from "@/components/appShared/categorySidebar";
import { mapGetters } from "vuex";
import { appAxios } from "@/utils/securedAxios.js";
import appFooter from "@/components/appShared/appFooter"
export default {
  components:{
    categorySidebar,
    appFooter
  },
    data(){
        return{
            userData : {
                title :null,
                details : null,
                categoryId :null,
            },
            quil: null,
        };

    },
    methods : {
        saveCommit(){
            if(confirm("işleme devam etmek istiyor musun?")){
                appAxios
                .post("/commits", {
                  ...this.userData,
                  created_at: new Date()
                })
                .then(commit_insert_response => {
                    console.log("commit insert response",commit_insert_response);
                    this.$router.push({name : "Home"});
                })
            }
        }
    },
    computed : {
      notAbleToSave() {
      return (
        Object.values(this.userData).filter(
          v => v === null || v?.length === 0 || v?.length === ""
        ).length > 0
      );
    },
      ...mapGetters({
        categories : "categories/_categoriesList"
      })
    },
}
</script>
<style scoped>

</style>