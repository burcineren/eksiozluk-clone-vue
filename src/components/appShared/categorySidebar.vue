<template>
    <div class="col-3">
              
            <div class="list-group " >
                <a @click="gundemOpen = !gundemOpen" class="list-group-item list-group-item-action" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <span class="font-nav me-2">gündem</span><i class="fas fa-cog "></i>
                </a>
              <div class="collapse" id="collapseExample" :class="{show : gundemOpen}">
                <ul class="card card-body " >
                  <p>gündeminizi kişiselleştirin: <br></p>
                    <li><a href="#" class="nav-btn m-1">#spor</a>
                    <a href="#" class="nav-btn m-1">#siyaset</a>
                    <a href="#" class="nav-btn m-1">#anket</a>
                    <a href="#" class="nav-btn m-1">#ilişkiler</a>
                    <a href="#" class="nav-btn m-1">#ekşisözlük</a>
                    <a href="#" class="nav-btn m-1">#troll</a>
                    <a href="#" class="nav-btn m-1">#troll</a></li>
                </ul>
              </div>
              <div>
                <a v-for="category in categories" :key="category.id" @click.prevent="$emit('category-select-event', category.id)" href="#" class="list-group-item list-group-item-action" aria-current="true">
                  <span class="me-2 font-nav">{{category.title}}<span class="float-end font-nav">4</span></span>
                </a>
              </div>
            </div>
          </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  emits :["category-select-event"],
    data(){
      return{
        gundemOpen :false,
      };
    },
    created(){
      // this.$store.dispatch("categories/fetchCategories");
    },
    computed : { 
      ...mapGetters({
        categories : "categories/_categoriesList"
      })
    },
    watch : {
      categories: {
        deep: true,
        handler(categories){
          console.log("categories",categories);
          this.$store.dispatch("commits/fetchCommits")
        }
      }
    }
    
}
</script>
<style scoped>

</style>