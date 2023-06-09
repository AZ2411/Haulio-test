<template lang="">
  
  <nav
    style="position: fixed; top: 0"
    class="bg-white dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 "
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto"
    >
    <div class="flex">
      <a href="https://flowbite.com/" class="flex items-center">
        <img
          src="../assets/Resources/Screen 1/FarmFresh Logo.png"
          class="h-14 w-20 sm:h-20 sm:w-40 mr-3"
          alt="Flowbite Logo"
        />
      </a>

      <form class="flex items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-36 sm:w-80">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          ></div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a Product or brand"
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 text-sm font-medium rounded-none text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          
          <span class="sr-only">Search for a Product or brand</span>
        </button>
      </form>
    </div>
      
      <button  class="flex items-center float-right">

        <img src="../assets/Resources/Screen 1/shopping-cart.png" class="w-6 h-6 sm:w-8 sm:h-8" alt="">
        
      </button>
    </div>
  </nav>
</template>
<script setup>

</script>
<style lang=""></style>
