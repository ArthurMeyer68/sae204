<template>
  <p class="pt-7 text-center font-bold text-black sm:text-lg md:text-xl xl:text-2xl">LES ARTISTES</p>
  <img src="../assets/img/lignes2_page2.svg" class="ml-auto mr-auto mb-7 mt-3 w-3/12 pb-7" />

  <div class="mb-7 md:px-36 xl:pl-56 xl:pr-64">
    <p class="mb-7 text-left font-normal md:text-base xl:text-lg">De nombreux artistes pop/rock seront présents au 3,2,1 festival.</p>
    <p class="text-left font-normal md:text-base xl:text-lg">
      Venez découvrir ces artistes qui vous feront voyager pendant leurs prestations.
    </p>
  </div>

  <p class="mb-7 text-center font-bold sm:text-lg md:text-lg xl:text-xl">Les artistes présents au festival :</p>

  <div><Comp9 /></div>
  <div><Comp10 /></div>
</template>

<script>
import Comp9 from "../components/Comp9View.vue";
import Comp10 from "../components/Comp10View.vue";

export default {
  components: { Comp9, Comp10 },
};
</script>

<style scoped>
</style>


