<template>
<router-view name="appHeader"></router-view>
  <router-view/>
  
</template>
<script>

export default {
  created(){
    this.$store.dispatch("initApp");
    // this.$store.dispatch("categories/fetchCategories");
    // const cList = this.$store.getters["categories/_categoriesList"];
    // console.log("cList",cList);

  }
}
</script>
<style>
</style>
