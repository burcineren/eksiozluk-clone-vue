<template>
    <div class="answerArea">
        <div class="card text-left mb-3">
          <div class="card-body">
            <div class="mt-3">
                <div class="col-12 pager">
                  <a href="#" title="bkz" class="last" @click="bkz">(bkzz:)</a>
                  <a href="#" title="başlık ya da entry'ye link" class="last link" @click="hede">hede</a>
                  <a href="#" title="akıllı bkz" class="last">*</a>
                  <a href="#" title="şpoyler ibaresi" class="last" @click="spoiler">-spoiler-</a>
                  <a href="#" title="web linki" class="last" @click="link">http://</a>
                  <a href="#" title="görsel yükle" class="last">görsel</a>
                </div>
                <div class="mb-3">
                  <select  v-model="userData.categoryId" id="question-category" class="form-control">
                    <option class="selected">Kategori Seçiniz</option>
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
                  </select>
                </div>
                <div class="form-group w-100 mt-3 mb-3">
                  <input type="text" class="form-control" placeholder="link">
                </div>
                <div class="form-group w-100">
                  <textarea  v-model="userData.details" class="form-control answerArea" placeholder="ekşi sözlük 22 yaşında' hakkında bilgi edinin" rows="5"></textarea>
                </div>
                <div class="col-2 mt-2">
                  <button   type="submit" class="btn btn-green" @click="saveCommit">yolla</button>
                </div>
            </div>
          </div>
        </div>  
    </div> 


    <!-- <div class="row mt-3">
      <div class="col-6 offset-2">
        <div class="card">
          <div class="card-header">
            Yeni Soru
          </div>
          <div class="card-body">
            <div class="mb-3">
              <label for="question-title" class="form-label" >Kısa bir başlık</label >
              <input v-model="userData.title" type="text" class="form-control" id="question-title" placeholder="Bu soru çokomelli" />
            </div>
            <div class="mb-3">
              <label for="question-details" class="form-label">Detaylar</label>
              <textarea  v-model="userData.details" class="form-control" id="question-detalist" rows="3"></textarea>
                
            </div>
            <div class="mb-3">
              <label for="question-category" class="form-label">Kategori</label>
              <select  v-model="userData.categoryId" id="question-category" class="form-select">
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.title}}</option>
              </select>
            </div>
          </div> 
          <div class="card-footer text-muted d-flex justify-content-end align-items-center" >
            <button :disabled="notAbleToSave" class="btn btn-sm btn-primary" @click="saveCommit"> Kaydet </button>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script>
// export default {
//     methods:{
//         link(){
//             prompt("hangi adrese gidecek?");
//         },
//         bkz(){
//             prompt("hangi başlığa bkz verilecek?");
//         },
//         hede(){
//             prompt("hangi başlık için link oluşturulacak?");
//         },
//         spoiler(){
//             prompt("şpoyler şeysi arasına ne yazılacak?");
//         }
//     }
    
// }
import categorySidebar from "@/components/appShared/categorySidebar" 
import { mapGetters } from "vuex";
import { appAxios } from "@/utils/securedAxios.js";
export default {
  components:{
    categorySidebar,
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
    // mounted(){
    //   this.quill = new Quill('#editor', {
    //   theme: 'snow'
    //   }); 
    //   this.quill.on('text-change', function(delta, oldDelta, source) { 
    //     console.log("delta", delta, oldDelta );
    //       if (source == 'api') {
    //         console.log("An API call triggered this change.");
    //       } else if (source == 'user') {
    //         console.log("A user action triggered this change.");
    //       }
    //     });
    // },
    created(){
        
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
      // return this.userData?.title?.length === 0 || this.userData?.details?.length === 0 || this.userData.categoryId === null;
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