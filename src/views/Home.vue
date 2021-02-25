<template>
    <main>
      <div class="container">
        <div class="row mt-3">
          <category-sidebar @category-select-event="categoryId = $event" />
          <comment-list :categoryId="categoryId" />
          <card-sidebar />
          <div class="col-3"></div>
          <app-footer />
        </div>
      </div>
    </main>
</template>

<script>
import appHeader from '../components/appShared/appHeader.vue';
import categorySidebar from "@/components/appShared/categorySidebar";
import commentList from "@/components/Home/commentList";
import cardSidebar from "@/components/appShared/cardSidebar";
import appFooter from "@/components/appShared/appFooter"


export default {
  components: { 
    appHeader,
    categorySidebar,
    commentList,
    cardSidebar,
    appFooter
     },
     data(){
       return {
         categoryId : null,
       };
     },
     
}
</script>
