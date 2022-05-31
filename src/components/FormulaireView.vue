<template>
  <form class="mr-auto ml-auto w-full max-w-lg pb-10">
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="mb-6 w-full px-3 md:mb-0 md:w-1/2">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> First Name </label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded
            border border-red-500
            bg-gray-200
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:bg-white focus:outline-none
          "
          id="grid-first-name"
          type="text"
          placeholder="Mickaël"
        />
      </div>
      <div class="w-full px-3 md:w-1/2">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-last-name"> Last Name </label>
        <input
          class="
            block
            w-full
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="grid-last-name"
          type="text"
          placeholder="Satourne"
        />
      </div>
    </div>
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-password"> E-mail </label>
        <input
          class="
            mb-3
            block
            w-full
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="email"
          type="email"
        />
      </div>
    </div>
    <div class="-mx-3 mb-6 flex flex-wrap">
      <div class="w-full px-3">
        <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-password"> Message </label>
        <textarea
          class="
            no-resize
            mb-3
            block
            h-48
            w-full
            resize-none
            appearance-none
            rounded
            border border-gray-200
            bg-gray-200
            py-3
            px-4
            leading-tight
            text-gray-700
            focus:border-gray-500 focus:bg-white focus:outline-none
          "
          id="message"
        ></textarea>
      </div>
    </div>
    <div class="md:flex md:items-center">
      <div class="md:w-1/3">
        <button
          class="focus:shadow-outline rounded bg-gray-600 py-2 px-4 font-bold text-white shadow hover:bg-black focus:outline-none"
          type="button"
        >
          Send
        </button>
      </div>
      <div class="md:w-2/3"></div>
    </div>
  </form>
</template>