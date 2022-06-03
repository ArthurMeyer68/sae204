<template>
  <p class="mt-10 text-center text-2xl text-black">Guide de style</p>

  <div class="flex h-32 w-1/3 p-2">
    <p class="text-2xl">Couleurs</p>
    <div class="h-32 w-32 rounded-full bg-red-600 pt-3 pb-5"></div>
    <div class="h-32 w-32 rounded-full border-4 bg-white pt-3 pb-5"></div>
    <div class="h-32 w-32 rounded-full bg-gray-900 pt-3 pb-5"></div>
    <div class="h-32 w-32 rounded-full bg-gray-800 pt-3 pb-5"></div>
  </div>

  <p class="pb-3 text-2xl">Fonts</p>
  <p class="text-base">Yu Gothic UI - text-base</p>
  <p class="text-lg">Yu Gothic UI - text-lg</p>
  <p class="text-xl">Yu Gothic UI - text-xl</p>
  <p class="text-2xl">Yu Gothic UI - text-2xl</p>
  <p class="text-xl font-bold">Yu Gothic UI - text-xl</p>

  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp1 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp2 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp3 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp4 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp5 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp6 /></div>
  <div class="ml-auto mr-auto w-1/3 bg-black pt-10"><Comp7 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp9 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp10 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Comp11 /></div>
  <div class="ml-auto mr-auto w-1/3 pt-10"><Formulaire /></div>
</template>
<script>
import Comp1 from "../components/Comp1View.vue";
import Comp2 from "../components/Comp2View.vue";
import Comp3 from "../components/Comp3View.vue";
import Comp4 from "../components/Comp4View.vue";
import Comp5 from "../components/Comp5View.vue";
import Comp6 from "../components/Comp6View.vue";
import Comp7 from "../components/Comp7View.vue";
import Comp9 from "../components/Comp9View.vue";
import Comp10 from "../components/Comp10View.vue";
import Comp11 from "../components/Comp11View.vue";
import Formulaire from "../components/FormulaireView.vue";

export default {
  components: { Comp1, Comp2, Comp3, Comp4, Comp5, Comp6, Comp7, Comp9, Comp10, Comp11, Formulaire },
};
</script>