<template>
    <main>
      <div class="container">
        <div class="row mt-3">
          <category-sidebar @category-select-event="categoryId = $event" />
         <div class="col-6 mt-4">
                <h4><b>reklam</b></h4>
                <p>
                    arama sonuçlarında üst sıralarda yer alan; kaliteli, özgün ve kaynak gösterilen zengin içeriği ile türkiye’nin ilk ve en çok ziyaret edilen referans kaynağı olan ekşi sözlük’te marka, ürün ve hizmetlerinizi tanıtabilir, kampanyalarınızı duyurabilirsiniz.
                </p>
                <p>
                    ekşi sözlük'te özel projeler gerçekleştirmek, mobil, online video, native, display reklam alanlarında yer almak için bize ulaşabilirsiniz.
                </p>
                <p class="mt-4">
                    ayrıca kredi kartınızla online ödeme yaparak, dilediğiniz bütçeyle kendi reklam ve tanıtımlarınızı oluşturup, hemen yayına alabilirsiniz. nativespot üzerinden ekşi sözlük’ün doğasına uygun sponsorlu içerik ve gündem başlık modelinden faydalanmak için aşağıdaki linki tıklayın:
                </p>
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