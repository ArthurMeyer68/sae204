<template>
  <div class="bg-black pb-10 pt-10">
    <img class="ml-auto mr-auto mb-3 w-1/3" :src="image" alt="" />
    <div class="flex flex-col items-center justify-center">
      <p class="pb-3 text-white sm:text-sm md:text-sm lg:text-lg xl:text-xl">{{ nom }}</p>
      <img src="../assets/img/lignes4_page3.svg" class="w-3/12" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    nom: String,
  },
};
</script>