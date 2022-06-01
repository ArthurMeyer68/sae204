<template>
  <div class="flex flex-col items-center justify-center">
    <p class="pb-3 text-black dark:text-white sm:text-sm md:text-sm lg:text-lg xl:text-xl">{{ nom }}</p>
    <img src="../assets/img/lignes3_page3.svg" class="w-3/12" />
  </div>
  <p class="mt-7 mb-7 pl-56 pr-56 text-left font-normal text-black dark:text-white md:text-base xl:text-lg">{{ texte }}</p>
</template>

<script>
export default {
  props: {
    nom: String,
    texte: String,
  },
};
</script>