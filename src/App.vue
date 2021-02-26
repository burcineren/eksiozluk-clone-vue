<template>

<router-view name="appHeader"></router-view>
  <router-view/>
  <pre>{{currentUser}}</pre>
  <pre>{{isAuthenticated}}</pre>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  created(){
    this.$store.dispatch("initApp");
    // this.$store.dispatch("categories/fetchCategories");
    // const cList = this.$store.getters["categories/_categoriesList"];
    // console.log("cList",cList);

  },
  computed : {
    ...mapGetters({
      currentUser : "users/currentUser"
    })
  }
}
</script>
<style>
</style>
