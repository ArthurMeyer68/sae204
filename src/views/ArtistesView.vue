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

  <div>
    <Comp9 image="/public/page3_1.png" nom="MUSTANG" />
    <Comp10 image="/public/page3_2.png" nom="JAIN" />
    <Comp9 image="/public//page3_3.png" nom="FEU! CHATTERTON" />
    <Comp10 image="/public/page3_4.png" nom="JOYCE JONATHAN" />
    <Comp9 image="/public//page3_5.png" nom="JESERS" />
    <Comp10 image="/public/page3_6.png" nom="LA BESTIOLE" />
    <Comp9 image="/public//page3_7.png" nom="L.E.J" />
    <Comp10 image="/public/page3_8.png" nom="CANNIBALE" />
    <Comp9 image="/public//page3_9.png" nom="ANNABELLA HAWK" />
    <Comp10 image="/public/page3_10.png" nom="LA FEMME" />
  </div>

  <RouterLink to="/artistesdet">
    <p class="pt-7 pb-7 text-center text-lg text-black">Découvrez les artistes plus en détail ici</p>
  </RouterLink>

  <RouterLink to="/programmation">
    <p class="pt-7 pb-7 text-center text-lg text-black">Découvrez la programmation de ces artistes ici</p>
  </RouterLink>
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


