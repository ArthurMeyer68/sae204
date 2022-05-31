<template>
  <div class="bg-black">
    <div class="py-8 text-center text-gray-50 md:text-base xl:text-2xl">
      <p>ARTISTES</p>
      <p>PROGRAMMATION</p>
    </div>
    <img src="../assets/img/ligne_2.svg" class="ml-auto mr-auto mb-7 w-2/3 pb-7" />

    <div class="bg-[url('src/assets/img/home_page_img_5.png')] bg-cover">
      <div class="py-48 text-center text-gray-50 md:text-base xl:text-2xl">
        <p>Feu! Chatterton</p>
      </div>
    </div>
    <div class="bg-[url('src/assets/img/home_page_img_6.png')] bg-cover">
      <div class="py-48 text-center text-gray-50 md:text-base xl:text-2xl">
        <p>L.E.J</p>
      </div>
    </div>
    <div class="bg-[url('src/assets/img/home_page_img_7.png')] bg-cover">
      <div class="py-48 text-center text-gray-50 md:text-base xl:text-2xl">
        <p>La Femme</p>
      </div>
    </div>
    <p class="px-10 pb-7 pt-7 text-center text-gray-50 md:text-base xl:text-lg">
      Découvrez les artistes et la programmation complètes du festival
    </p>
    <img src="../assets/img/fleche.svg" class="ml-auto mr-auto mb-7 pb-7" />
    <div class="flex pl-96 pb-10">
      <RouterLink to="/artistes">
        <div class="contour-white">
          <p class="text-center text-base text-gray-50">Les artistes</p>
        </div>
      </RouterLink>
      <RouterLink to="/programmation">
        <div class="contour-white pl-96">
          <p class="text-center text-base text-gray-50">Programmation</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>