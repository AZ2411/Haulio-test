<template lang="">
  <div
    style="height: calc(100vh - 81px); background-color: #ecf0f1"
    class="relative flex"
  >
    <div style="background-color: #c8cdcf" class="h-full w-96 overflow-y-auto">
      <ul class="space-y-2 font-medium mt-5">
        <li style="cursor: pointer" class="relative navsideView">
          <a
            type="button"
            class="flex justify-between items-center mt-3 p-3 text-gray-900 hover:bg-gray-200"
            :class="{ 'bg-gray-300': !sideMenuStatus }"
            @click="opnSideMenu"
          >
            <span class="ml-3">On Sales</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mt-3 p-3 text-gray-900 hover:bg-gray-200"
          >
            <span class="ml-3">New</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mt-3 p-3 text-gray-900 hover:bg-gray-200"
          >
            <span class="ml-3">Shop by Store</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mt-3 p-3 text-gray-900 hover:bg-gray-200"
          >
            <span class="ml-3">Fruit & Veg</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mt-3 p-3 text-gray-900 hover:bg-gray-200"
          >
            <span class="ml-3">Meat & Seafood</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mt-3 p-3 text-gray-900 hover:bg-gray-200"
          >
            <span class="ml-3">Dairy & Chilled</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mt-3 p-3 text-gray-900 hover:bg-gray-200"
          >
            <span class="ml-3">Bakery</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center mt-3 p-3 text-gray-900 hover:bg-gray-200"
          >
            <span class="ml-3">Beverages</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- Side Bar -->
    <div
      style="left: 302px; top: 18px; background-color: #c8cdcf"
      class="absolute w-44 overflow-y-auto font-bold z-50"
      :class="{ hidden: sideMenuStatus }"
    >
      <div class="h-full overflow-y-auto bg-gray-300">
        <ul class="space-y-2 font-medium">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-white hover:bg-gray-200"
            >
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-white hover:bg-gray-200"
            >
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-white hover:bg-gray-200"
            >
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-white hover:bg-gray-200"
            >
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Side Bar -->
    <!-- card -->
    <div class="w-screen mt-5">
      <div class="grid grid-cols-3 px-10 ml-10">
        <div v-for="product in store.rawProducts">
          <Product :product="product" />
        </div>
      </div>
    </div>
    <!-- modal -->

    <!-- Modal toggle -->
    <button
      data-modal-target="staticModal"
      data-modal-toggle="staticModal"
      class="overlay hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Toggle modal
    </button>

    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabindex="-1"
      aria-hidden="true"
      class="popup fixed top-0 left-0 right-0 z-30 hidden w-full overflow-x-hidden overflow-y-auto md:inset-0 h-auto max-h-full"
    >
      <div style="width: 70%" class="relative max-h-full mx-auto z-40">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="flex items-start justify-between">
            <button
              @click="closeModel()"
              type="button"
              class="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="staticModal"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div
            v-if="store.product"
            style="height: 600px"
            class="relative bg-gray-100 shadow-lg grid grid-cols-2"
          >
            <div class="relative">
              <img
                id="modalImage"
                style=""
                :src="
                  '/src/assets/Resources/Screen 3/products_image/' +
                  store.product.id +
                  '/' +
                  store.product.images[0].txt
                "
                alt=""
                class="h-full"
              />
              <div class="absolute top-1/2 flex justify-between w-full z-50">
                <button @click="previousImg()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-20 h-20 opacity-70"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button @click="nextImg()">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-20 h-20 opacity-70"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="p-6 space-y-6 relative">
              <h2
                style="font-size: 36px; font-weight: bold; margin: 0px"
                class="mt-0"
              >
                {{ store.product.name }}
              </h2>
              <h2 style="font-size: 20px; margin: 0px" class="">
                Packet of one bundle
              </h2>
              <div class="">
                <div class="grid grid-cols-3 mb-4">
                  <p class="informataion-txt">Key Information</p>
                  <p class="ml-10 informataion-txt col-span-2">
                    Packet of one bundle of {{ store.product.name }}
                  </p>
                </div>
                <div class="grid grid-cols-3 mb-4">
                  <p class="informataion-txt">About the product</p>
                  <div class="ml-10 informataion-txt col-span-2">
                    <p style="display: inline">
                      {{ store.product.desc[0].few }}
                    </p>
                    <button
                      v-if="!textStatus"
                      style="display: inline"
                      class="font-bold"
                      @click="textStatus = !textStatus"
                    >
                      See more...
                    </button>
                    <p v-if="textStatus" style="display: inline">
                      {{ store.product.desc[1].rest }}
                    </p>
                    <button
                      v-if="textStatus"
                      style="display: inline"
                      class="font-bold"
                      @click="textStatus = !textStatus"
                    >
                      See less...
                    </button>
                  </div>
                </div>
                <div class="grid grid-cols-3 mb-4">
                  <p class="informataion-txt">Country of Origin</p>
                  <p class="ml-10 informataion-txt col-span-2">
                    {{ store.product.country }}
                  </p>
                </div>
                <div class="border border-yellow-400 p-2 text-left rounded-2xl">
                  <h2 class="mb-5">Category</h2>
                  <div class="category grid grid-cols-3 lg:grip-cols-2">
                    <div
                      v-for="category in store.product.category"
                      class="border rounded-lg w-20 text-center bg-yellow-400 text-white"
                    >
                      {{ category.name }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="action text-white absolute bottom-20 w-full h-16">
                <form action="" class="h-full">
                  <div class="flex relative h-full">
                    <label
                      for="mainQtyInput"
                      class="border py-2 px-6 bg-yellow-400 rounded-xl mx-2 h-10"
                      >QTY</label
                    >

                    <div
                      id="inputNumHolder"
                      tabindex="0"
                      @blur="handleBlur()"
                      class="rounded-lg w-20 xl:mr-16 mr-5 shadow mb-0 h-fit border border-black focus:ring-0 outline-none"
                    >
                      <input
                      id="mainQtyInput"
                        v-model="inputNum"
                        @focus="focusInputNumber()"
                        
                        type="number"

                        class="text-black h-10 w-20 border rounded-t-lg  qty text-center bg-transparent hideOutLineNon border-transparent focus:border-transparent focus:ring-0"
                      />
                      
                      
                      <div
                      class="text-black w-20 border rounded-b-lg qty border-transparent text-center "

                        :class="{ hidden: !qtyStatus }"
                      >
                        <ul
                          class="py-2 text-sm text-gray-700 dark:text-gray-200"
                          
                        >
                          <li>
                            <div
                              @click="changInputNum(inputNum1)"
                              class="block px-4 h-10 text-center hover:bg-gray-200 w-full cursor-pointer"
                              >{{ inputNum1 }}</div
                            >
                          </li>
                          <li>
                            <div
                              @click="changInputNum(inputNum2)"
                              class="block px-4 h-10 text-center hover:bg-gray-200 w-full cursor-pointer"
                              >{{inputNum2}}</div
                            >
                            
                          </li>
                        </ul>
                      </div>
                      <!-- <select
                        id="countries"
                        class="qty text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option selected>1</option>
                        <option value="US">2</option>
                        <option value="CA">3</option>
                      </select> -->
                    </div>
                    <div
                      class="border rounded-xl text-white bg-yellow-400 py-2 xl:w-44 w-32 h-fit text-center cursor-pointer"
                    >
                      Add to Cart
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive, watch } from "vue";
import Product from "../components/Product.vue";
import { useStore } from "../stores/counter";
const store = useStore();
const textStatus = ref(false);
const sideMenuStatus = ref(true);
const photoNumber = ref(0);
const totlaImg = ref(null);

function opnSideMenu() {
  sideMenuStatus.value = !sideMenuStatus.value;
}

function nextImg() {
  totlaImg.value = store.product.images.length;

  photoNumber.value = photoNumber.value + 1;

  if (photoNumber.value < totlaImg.value) {
    let imgSrc = `/src/assets/Resources/Screen 3/products_image/${
      store.product.id
    }/${store.product.images[photoNumber.value].txt}`;
    console.log(imgSrc);
    document.getElementById("modalImage").src = imgSrc;
  }
}
function previousImg() {
  totlaImg.value = store.product.images.length;

  if (photoNumber.value > 0) {
    console.log(photoNumber.value);
    photoNumber.value = photoNumber.value - 1;
    console.log(photoNumber.value);
    let imgSrc = `/src/assets/Resources/Screen 3/products_image/${
      store.product.id
    }/${store.product.images[photoNumber.value].txt}`;
    console.log(imgSrc);
    document.getElementById("modalImage").src = imgSrc;
  }
}

function resetPhotoNumber() {
  photoNumber.value = 0;
  store.product = null;
}
const inputNum = ref(1);
const inputNum1 = ref(null);
const inputNum2 = ref(null);
const qtyStatus = ref(false);
const divChangeValue = ref(null);
watch(inputNum, () => {
  inputNum1.value = inputNum.value + 1;
  inputNum2.value = inputNum.value + 2;
  if (inputNum.value == 0 || inputNum.value == null) {
    inputNum.value = 1;
  }
});
function changInputNum(number) {
  inputNum.value = number;
  qtyStatus.value = false;
}

function focusInputNumber() {
  qtyStatus.value = true;
  inputNum1.value = inputNum.value + 1;
  inputNum2.value = inputNum.value + 2;
  document.getElementById("inputNumHolder").focus();
}
function handleBlur() {
  qtyStatus.value = false;
}
function closeModel() {
  inputNum.value = 1;
}
</script>
<style scoped>
.informataion-txt {
  font-size: 12px;
}
.qty::-webkit-outer-spin-button,
.qty::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
