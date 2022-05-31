<template>
  <div class="bg-black">
    <p class="text-center font-bold text-white sm:text-lg md:text-xl xl:text-2xl">PROGRAMMATION</p>
    <img src="../assets/img/lignes_page2.svg" class="ml-auto mr-auto mb-7 mt-3 w-3/12 pb-7" />
    <div><Comp6 /></div>
    <div><Comp7 /></div>
    <div><Comp8 /></div>
  </div>
</template>

<script>
import Comp6 from "../components/Comp6View.vue";
import Comp7 from "../components/Comp7View.vue";
import Comp8 from "../components/Comp8View.vue";

export default {
  components: { Comp6, Comp7, Comp8 },
};
</script>

<style scoped>
</style>


