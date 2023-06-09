<template class="">
  <NavBar></NavBar>
  <div id="bodyBg" :style="style">
    <div style="display: block" class=""></div>
  </div>
  <div class="relative">
    <Promotion :style="promotionStyle"  id="promotion" class="p-10 mb-10" />

    <ShoppingPage class="absolute bottom-0" />
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import Promotion from "@/components/Promotion.vue";
import ShoppingPage from "@/components/ShoppingPage.vue";
import { initFlowbite } from "flowbite";
import { ref, onMounted, reactive } from "vue";
import { useStore } from "./stores/counter";

const store = useStore();
onMounted(async () => {
  initFlowbite();
  window.addEventListener("scroll", onScroll);
  store.getProducts();
  store.getCategories();
});

const scroll = ref();

const style = reactive({
  backgroundSize: "107%",
  transform: "none",
});
const promotionStyle = reactive({
  transition: "",
  opacity: 0
});

function onScroll(e) {
  scroll.value = window.top.scrollY;

  if (scroll.value > 400 ) {
    promotionStyle.transition = "opacity 1s"
    promotionStyle.opacity = "1"

    // promotionStyle.opacity = promotionStyle.opacity + 0.025

  }
  // else{
  //   if (promotionStyle.opacity > 0) {
  //     promotionStyle.opacity = promotionStyle.opacity - 0.05
  //   }
  // }
  style.backgroundSize = 107 - scroll.value / 135 + "%";
}

//  fade In Out
</script>
<style>
#bodyBg {
  background-image: url("@/assets/Resources/Screen 1/Banner Photo.jpg");
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  
  
}
</style>
