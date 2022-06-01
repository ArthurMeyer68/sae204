<template>
  <header>
    <nav
      class="
        flex
        w-full
        flex-col
        content-center
        bg-black
        py-2
        px-6
        text-center
        font-sans
        shadow
        dark:bg-white
        sm:flex-row sm:items-baseline sm:justify-between sm:text-left
      "
    >
      <div class="inner mb-2 sm:mb-0">
        <a href="/" class="hover:text-blue-dark font-sans text-2xl font-bold text-white no-underline dark:text-black">3,2,1</a><br />
        <span class="text-xs text-red-600">Festival</span>
      </div>

      <div class="self-center sm:mb-0">
        <RouterLink to="/programmation">
          <a href="#" class="text-md hover:text-blue-dark ml-2 px-1 text-white no-underline dark:text-black">Programmation</a>
        </RouterLink>
        <RouterLink to="/artistes">
          <a href="#" class="text-md hover:text-blue-dark ml-2 px-1 text-white no-underline dark:text-black">Artistes</a>
        </RouterLink>
        <RouterLink to="/festival">
          <a href="#" class="text-md hover:text-blue-dark ml-2 px-1 text-white no-underline dark:text-black">Festival</a>
        </RouterLink>
        <RouterLink to="/concerts">
          <a href="#" class="text-md hover:text-blue-dark ml-2 px-1 text-white no-underline dark:text-black">Concerts</a>
        </RouterLink>
        <RouterLink to="/contact">
          <a href="#" class="text-md hover:text-blue-dark ml-2 px-1 text-white no-underline dark:text-black">Contact</a>
        </RouterLink>
      </div>
    </nav>
  </header>
  <RouterView />
  <footer class="bg-black text-center text-white dark:bg-white dark:text-black">
    <div class="container px-6 pt-6">
      <div class="mb-6 flex justify-center">
        <a
          href="#!"
          type="button"
          class="
            dark:text-dark
            m-1
            h-9
            w-9
            rounded-full
            border-2 border-white
            uppercase
            leading-normal
            text-white
            transition
            duration-150
            ease-in-out
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            dark:border-black
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-f"
            class="mx-auto h-full w-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            ></path>
          </svg>
        </a>

        <a
          href="#!"
          type="button"
          class="
            m-1
            h-9
            w-9
            rounded-full
            border-2 border-white
            uppercase
            leading-normal
            text-white
            transition
            duration-150
            ease-in-out
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            dark:border-black dark:text-black
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="twitter"
            class="mx-auto h-full w-3"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
            ></path>
          </svg>
        </a>

        <a
          href="#!"
          type="button"
          class="
            m-1
            h-9
            w-9
            rounded-full
            border-2 border-white
            uppercase
            leading-normal
            text-white
            transition
            duration-150
            ease-in-out
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            dark:border-black dark:text-black
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="instagram"
            class="mx-auto h-full w-3"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            ></path>
          </svg>
        </a>

        <a
          href="#!"
          type="button"
          class="
            dark:
            m-1
            h-9
            w-9
            rounded-full
            border-2 border-white
            uppercase
            leading-normal
            text-white
            transition
            duration-150
            ease-in-out
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            dark:border-black dark:text-black
          "
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="linkedin-in"
            class="mx-auto h-full w-3"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </a>
      </div>

      <div>
        <form action="">
          <div class="gird-cols-1 flex grid items-center justify-center gap-4 text-white dark:text-black md:grid-cols-3">
            <div class="md:ml-auto md:mb-6">
              <p class="">
                <strong>Abonne-toi à notre newsletter</strong>
              </p>
            </div>

            <div class="md:mb-6">
              <input
                type="text"
                class="
                  form-control
                  m-0
                  block
                  w-full
                  rounded
                  border border-solid border-gray-300
                  bg-white bg-clip-padding
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  transition
                  ease-in-out
                  focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none
                  dark:border-gray-600 dark:bg-black
                "
                id="exampleFormControlInput1"
                placeholder="Adresse mail"
              />
            </div>

            <div class="mb-6 md:mr-auto">
              <button
                type="submit"
                class="
                  inline-block
                  rounded
                  border-2 border-white
                  px-6
                  py-2
                  text-xs
                  font-medium
                  uppercase
                  leading-tight
                  text-white
                  transition
                  duration-150
                  ease-in-out
                  hover:bg-black hover:bg-opacity-5
                  focus:outline-none focus:ring-0
                  dark:border-black dark:text-black
                "
              >
                S'abonner
              </button>
            </div>
          </div>
        </form>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4">
        <div class="mb-6">
          <RouterLink to="/programmation">
            <h5 class="mb-2.5 font-bold uppercase text-white dark:text-black">Programmation</h5>
          </RouterLink>
        </div>

        <div class="mb-6">
          <RouterLink to="/festival">
            <h5 class="mb-2.5 font-bold uppercase text-white dark:text-black">Festival</h5>
          </RouterLink>
        </div>

        <div class="mb-6">
          <RouterLink to="/contact">
            <h5 class="mb-2.5 font-bold uppercase text-white dark:text-black">Contact</h5>
          </RouterLink>
        </div>

        <div class="mb-6">
          <RouterLink to="/mentions">
            <h5 class="mb-2.5 font-bold uppercase text-white dark:text-black">Mentions légales</h5>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="p-4 text-center text-white dark:text-black" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2022:
      <a class="text-white dark:text-black">3,2,1 Festival</a>
    </div>
  </footer>
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { IconLogo, FilmIcon },
};
</script>
