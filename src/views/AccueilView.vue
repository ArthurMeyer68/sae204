<template class="bg-gray-800">
  <div><img src="/home_page_img.png" alt="image festival" class="object-contain" /></div>
  <div><img src="/logoh.png" alt="logo festival" class="my-7 ml-auto mr-auto w-6/12" /></div>
  <div><img src="/lignes.svg" class="ml-auto mr-auto mb-7 w-2/3" /></div>

  <p class="mb-7 text-center font-bold text-black dark:text-white sm:text-lg md:text-xl xl:text-2xl">S’amuser et partager !</p>

  <div class="mb-7 md:px-36 xl:pl-56 xl:pr-64">
    <p class="mb-7 text-left font-normal text-black dark:text-white md:text-base xl:text-lg">
      Amusez-vous au sein du 3,2,1 festival grâce aux nombreux artistes pop/rock présents.
    </p>
    <p class="text-left font-normal text-black dark:text-white md:text-base xl:text-lg">
      Du 10 au 12 juin, vivez et partagez des moments uniques.
    </p>
  </div>
  <div class="pb-7"><Comp1 /></div>
  <p class="px-10 pb-7 text-center font-bold text-black dark:text-white md:text-base xl:text-2xl">ÇA NE COÛTE TROIS FOIS RIEN !</p>
  <div><img src="/home_page_img_4.png" class="ml-auto mr-auto mb-7 w-2/3" /></div>
  <div class="mb-7 md:px-36 xl:pl-56 xl:pr-64">
    <p class="mb-7 text-left font-normal text-black dark:text-white md:text-base xl:text-lg">
      Le 3,2,1 festival s’engage à reverser une partie de ses dons aux restos du coeur.
    </p>
    <p class="text-left font-normal text-black dark:text-white md:text-base xl:text-lg">
      Alors, n’hésitez pas, venir au festival c’est aussi être solidaire !
    </p>
  </div>
  <div><Comp2 /></div>
  <div><Comp3 /></div>
  <div><Comp4 /></div>
  <div><Comp5 /></div>
</template>

<script>
import Comp1 from "../components/Comp1View.vue";
import Comp2 from "../components/Comp2View.vue";
import Comp3 from "../components/Comp3View.vue";
import Comp4 from "../components/Comp4View.vue";
import Comp5 from "../components/Comp5View.vue";
export default {
  components: { Comp1, Comp2, Comp3, Comp4, Comp5 },
};
</script>