<template>
  <div class="bg-black dark:bg-white">
    <p class="text-center font-bold text-white dark:text-black sm:text-lg md:text-xl xl:text-2xl">PROGRAMMATION</p>
    <img src="../assets/img/lignes_page2.svg" class="ml-auto mr-auto mb-7 mt-3 w-3/12 pb-7" />
    <Comp6
      jour="VENDREDI"
      date="10"
      mois="juin"
      nom="MUSTANG"
      heure="16H"
      nom2="JAIN"
      heure2="18H"
      nom3="FEU! CHATTERTON"
      heure3="20H"
      image="/public/page2_1.png"
      image2="/public/page2_2.png"
      image3="/public/page2_3.png"
    />
    <div><Comp7 /></div>
    <Comp6
      jour="DIMANCHE"
      date="12"
      mois="juin"
      nom="CANNIBALE"
      heure="16H"
      nom2="ANNABELLA HAWK"
      heure2="18H"
      nom3="LA FEMME"
      heure3="20H"
      image="/public/page2_8.png"
      image2="/public/page2_9.png"
      image3="/public/page2_10.png"
    />
  </div>
</template>

<script>
import Comp6 from "../components/Comp6View.vue";
import Comp7 from "../components/Comp7View.vue";

export default {
  components: { Comp6, Comp7 },
};
</script>

<style scoped>
</style>


