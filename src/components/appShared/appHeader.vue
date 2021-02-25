<template>
    <header class="header-f">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="col-md-1">
              <router-link to="/">
                <img src="@/assets/logo.png">
                </router-link>
            </div>
            <div class="col-md-8 me-4">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex col-md-5 nav-form mt-2" >
                        <input v-model="searchKey"
                        @keydown.enter="search" class="form-control nav-input" type="search" placeholder="başlık, #entry, @yazar" aria-label="Search" >
                        <button class="btn btn-outline-success nav-button" type="submit"><img src="@/assets/search.png" alt="" ></button>
                    </form>
                    <!-- <div class="d-flex me-auto">
                      <input
                        class="form-control searchBox"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        v-model="searchKey"
                        @keydown.enter="search"
                      />
                    </div> -->
                </div>
            </div>
            <nav id="top-navigation" class="col-md-3 ms-5">
              <ul>
                  <li>
                    <div class="d-grid gap-2 mb-3">
                      <router-link to="/new" class="btn btn-green p-1 pe-2  r-text ps-3 ">
                        <span>mesaj</span> 
                        <i class="far fa-comment-alt me-2 ms-2"></i>
                      </router-link>
                    </div></li>
                  <li>
                    <a id="top-login-link link-dec" href="#">
                      giriş
                    </a>
                  </li>
                  <li>
                    
                      <router-link to="/kayit" class="top-registration-link link-dec">
                          kayıt ol
                      </router-link>
                      
                    
                  </li>
              </ul>
          </nav>
        </div>
    </nav>
    <div class="container">
      <nav id="sub-navigation" class="nav">
        <ul id="quick-index-nav">
            <li><a href="#" title="dünyamızda neler olup bitiyor">gündem</a></li>
            <li><a href="#" title="dünün en beğenilen entry'leri">debe</a></li> 
            <li><a href="#" title="dünyamızda neler olup bitiyor">sorunsallar</a></li>
            <li class="nav-channel-item"><a class="index-link" href="#" title="futbol, basketbol, tenis ve curling gibi ata sporları">#spor</a></li>
            <li class="nav-channel-item"><a class="index-link" href="#" title="sevgili, eski sevgili ve hoşlanılan kız">#ilişkiler</a></li>
            <li class="nav-channel-item"><a class="index-link" href="#" title="partiler, politikacılar, terör, savaş kan ve korku">#siyaset</a></li>
            <ul class=" me-0 mb-2 mb-lg-0 menu" >
                <li class="nav-item dropdown ">
                  <a @click="menuOpened = !menuOpened" class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-ellipsis-h"></i>
                  </a>
                  <ul :class="{show : menuOpened}" class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">tarihte bugün</a></li>
                    <li><a class="dropdown-item" href="#">#seyahat</a></li>
                    <li><a class="dropdown-item" href="#">#müzik</a></li>
                    <li><a class="dropdown-item" href="#">#tv</a></li>
                    <li><a class="dropdown-item" href="#">#haber</a></li>
                    <li><a class="dropdown-item" href="#">#bilim</a></li>
                    <li><a class="dropdown-item" href="#">#edebiyat</a></li>
                    <li><a class="dropdown-item" href="#">#eğitim</a></li>
                    <li><a class="dropdown-item" href="#">#ekonomi</a></li>
                  </ul>
                </li>
            </ul>
            <li>
              <a href="https://www.youtube.com/penavideo" target="_blank">
                <img src="@/assets/pena-logo.png" alt="">
              </a>
            </li>
            <li>
              <a href="https://seyler.eksisozluk.com" target="_blank" >
                <img src="@/assets/eksiseyler.png" alt="">
              </a>
          </li>
        </ul>
    </nav>
    </div>
    <hr class="mt-0">
    </header>
</template>
<script>
export default {
    data(){
        return{
            menuOpened :false,
            searchKey: null
        };
    },
    methods :{
      search() {
      this.$store.dispatch("commits/fetchCommits", {
        searchKey: this.searchKey
      });
    },
    }
}
</script>
<style scoped>

</style>