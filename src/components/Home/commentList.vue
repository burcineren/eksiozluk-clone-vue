<template>
    <div class="col-6" >
      <h2 class="link-dec">Gündemdeki herhangi bi konu</h2>
      <div class="d-flex justify-content-between align-items-center">
        <div class="custom-text-light">
          <p>şükela: <a href="#" class="link-dec" >tümü</a> | <a href="#" class="link-dec">bugün</a> </p>
        </div>
        <div class="col-sm-0">
          <div class="pager" data-currentpage="1" data-pagecount="4">
            <select>
              <option selected="selected">1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
              /
              <a href="#" title="son sayfa" class="last">4</a>
              <a href="#" rel="next" title="sonraki sayfa" class="next">
                »
              </a>
          </div>
        </div>
      </div>
      <div v-if="commits.length > 0">
          <comment-list-item v-for="commit in commits" :key="commit.id" :commit="commit"/>
      </div>
      <div v-else class="alert alert-light" role="alert">
        Bu başlığa ait bir entry bulunamadı. Entry girmek için
        <router-link to="/new" class="buttonClick">tıkla</router-link>
      </div>
      <div>
        <comment-add />
      </div>
    </div>
</template>
<script>
import commentListItem from "@/components/Home/commentListItem";
import commentAdd from "@/components/Home/commentAdd";
import { appAxios } from "@/utils/securedAxios"

export default {
    props: ["categoryId"],
    components :{
        commentListItem,
        commentAdd
    },
    data(){
      return{
        commits : []
      };
    },
    created(){
      this.fetchCommit();
    }, 
    methods : {
        fetchCommit(){
            const url = this.categoryId
             ? `/commits?_expand=category&_sort=created_at&_order=desc&categoryId=${this.categoryId}` 
             :`/commits?_expand=category&_sort=created_at&_order=desc`
             
           appAxios.get(url).then(commit_list_response => { 
            this.commits = commit_list_response?.data || [];
            });
        }
    },
    watch:{
        categoryId(categoryId){
            if(categoryId !== null){
                this.fetchCommit();
            }
        }
    }
}
</script>
<style scoped>
.buttonClick{
  color:#81C14B;
}
</style>