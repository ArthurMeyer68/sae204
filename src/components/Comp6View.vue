<template>
  <div class="pl-20">
    <p class="text-white dark:text-black md:text-xl xl:text-2xl">{{ jour }}</p>
    <div class="flex">
      <p class="text-red-600 md:text-3xl xl:text-5xl">{{ date }}</p>
      <p class="pl-3 text-white dark:text-black md:text-3xl xl:text-5xl">{{ mois }}</p>
    </div>

    <p class="pt-2 text-white dark:text-black md:text-xl xl:text-2xl">2022</p>
  </div>

  <img :src="image" alt="" class="ml-auto mr-auto mb-3 w-1/3" />
  <div class="flex justify-center">
    <p class="pr-2 text-white dark:text-black md:text-base xl:text-2xl">{{ nom }}</p>
    <p class="pb-10 pl-2 text-white dark:text-black md:text-base xl:text-2xl">{{ heure }}</p>
  </div>

  <img :src="image2" alt="" class="ml-auto mr-auto mb-3 w-1/3" />
  <div class="flex justify-center">
    <p class="pr-2 text-white dark:text-black md:text-base xl:text-2xl">{{ nom2 }}</p>
    <p class="pb-10 pl-2 text-white dark:text-black md:text-base xl:text-2xl">{{ heure2 }}</p>
  </div>

  <img :src="image3" alt="" class="ml-auto mr-auto mb-3 w-1/3" />
  <div class="flex justify-center">
    <p class="pr-2 text-white dark:text-black md:text-base xl:text-2xl">{{ nom3 }}</p>
    <p class="pl-2 pb-10 text-white dark:text-black md:text-base xl:text-2xl">{{ heure3 }}</p>
  </div>
</template>

<script>
export default {
  props: {
    jour: String,
    date: String,
    mois: String,
    nom: String,
    heure: String,
    nom2: String,
    heure2: String,
    nom3: String,
    heure3: String,
    image: String,
    image2: String,
    image3: String,
  },
};
</script>