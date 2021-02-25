<template>
    <div class="card text-left mb-3">
        <div class="card-body">
        <div class="mt-3">
            <h3 class="card-">{{commit.title}}</h3>
            <p class="text-muted">
                {{commit.details}}
            </p>
            <div class="d-flex justify-content-between align-items-center">
            <div class="custom-text-light">
                <i class="fab fa-facebook comment comment-f me-2"></i>
                <i class="fab fa-twitter comment comment-t me-3"></i>
                <i class="fas fa-angle-up comment-up me-2"></i>
                <i class="fas fa-angle-down comment-down"></i>
                <a href="#"><i class="fas fa-tint icon-l me-2 ms-2 "></i> 65</a>
            </div>
            <div class="custom-text-light">
                <ul class="d-flex">
                    <li><a href="#"  class="me-2 comment comment-h"> {{ timesAgo(commit.created_at)}} </a></li>
                    <li><a href="#" class="link link-h me-2">Burçin Eren</a></li>
                    <li><a href="#" class="link link-h me-2">{{commit.category.title}}</a></li>
                    
                    <li>
                    <div class="dropdown">
                        <i @click="menuOpen = !menuOpen" class="fas fa-ellipsis-h link dropdown-toggle"  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" ></i>
                        <ul :class="{ show: menuOpen }"  class="dropdown-menu drpdown-m" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item text-center sikayet" href="#">şikayet</a></li>
                        </ul>
                    </div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import helperMixin from "@/utils/helperMixin";
export default {
    mixins : [helperMixin],
    props : {
        commit: {
            type : Object,
            required : true 
        }
    },
    data(){
        return{
            menuOpen : false,
            category : null,
        }
    },
}
</script>
<style scoped>
.icon-l{
    color:#b0bec5;
}
</style>