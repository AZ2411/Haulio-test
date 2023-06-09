<template lang="">
  <div style="width: 70%; height: 320px" class="max-w-sm rounded-lg mb-2">
    <button
      @click="setup()"
      class="image-holder relative"
      type="button"
      data-modal-target="staticModal"
      data-modal-toggle="staticModal"
    >
      <img
        style="border-radius: 30px"
        class="rounded-t-lg border  hover:shadow-lg image-card h-60 w-60 bg-white"
        v-bind:src="'/src/assets/Resources/Screen 3/products_image/'+ props.product.id + '/'+props.product.images[0].txt"
        
        alt=""
      />
    </button>
    <div class="p-3">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{props.product.name}}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Packet</p>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "../stores/counter";
import { ref, onMounted, reactive } from "vue";
const store = useStore();
const props = defineProps(["product"])

onMounted( () => {
  
  
});
function setup() {
  
  store.product = props.product
}

</script>
<style scoped>
.image-card:hover {
  -webkit-transform: scale(1.08);
  transform: scale(1.08);
  transition-duration: 500ms;
}
.image-holder:hover {
  margin-bottom: 10px;
}
</style>
