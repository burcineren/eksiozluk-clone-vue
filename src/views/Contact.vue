<template>
    <main>
      <div class="container">
        <div class="row mt-3">
          <category-sidebar @category-select-event="categoryId = $event" />
         <div class="col-6">
                <h4><b>iletişim</b></h4>
                <h5>dikkat edilecek hususlar</h5>
                <ol>
                    <li>mesajınızı göndermeden önce, sormak istediğiniz sorunun cevaplanmış olup olmadığını kontrol edin. mesajınıza sss'te cevap verildiyse, size dönüş yapılmayacağını bilmenizi isteriz.</li>
                    <li>mesajlarınız yazarlara iletilmemektedir.</li>
                    <li>kişiler hakkında yazılan girişlere dair şikayetler ancak gerçek kişinin kendisi, tüzel ise yetkilisi ya da hukuki vekili tarafından yapılabilir. üçüncü şahıslar tarafından yapılan şikayetler dikkate alınmayacaktır.</li>
                    <li>şikayetinizin yukarıdaki işlemlere tabi olmasını istemiyorsanız, şikayetinize not eklemeyebilirsiniz. bir yazının veya başlığın şikayet edilmesi için mesajınızın metin içermesi zorunlu değildir. metin içermeyen şikayetler de aynı şekilde incelemeye alınmaktadır. şikayetler dışındaki mesajlaşmalarda ise gizlilik garantisi verebileceğimiz bir seçenek bulunmamaktadır.</li>   
                </ol> 
                <div class="col-4 ms-2">
                    <h5>şirket bilgileri</h5>
                    <p>ekşi teknoloji ve bilişim a.ş., istanbul
                    ticaret sicil no: 518384
                    tel: 0212 284-8438</p>
                </div>
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