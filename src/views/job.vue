<template>
    <main>
      <div class="container">
        <div class="row mt-3">
          <category-sidebar @category-select-event="categoryId = $event" />
         <div class="col-6 mt-4">
                <h4><b>sözlük iş ilanları</b></h4>
                <ul>
                    <li> ekşi sözlük ekibinin bir parçası olarak çalışacak,</li>
                    <li>ayda 35 milyon kullanıcı tarafından ziyaret edilen 20 yıllık, devasa online bir platformun geliştirilmesi sürecinde yer alacak,</li>
                    <li> bu dev platformun sunduğu kendine has teknik problemlerle başa çıkıp orijinal deneyimler kazanacak,</li>
                    <li>yeni teknolojiler öğrenme ve yeni mecralar geliştirme fırsatını yakalayacak,</li>
                    <li>keyifli ve samimi atmosferi olan çalışma ortamında eğlenceli bir ekibe dahil olacak,</li>
                    <li>takım elbiseyle kod yazma manyaklığından azade çalışma arkadaşları arıyoruz:</li>
                </ul>
         </div>
          <card-sidebar />
          <div class="col-3"></div>
          <app-footer />
        </div>
      </div>
    </main>
</template>
<script>
import categorySidebar from "@/components/appShared/categorySidebar";
import appFooter from "@/components/appShared/appFooter"
export default {
    components:{
    categorySidebar,
    appFooter
  },   
}
</script>