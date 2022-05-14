import React from 'react'

function Navbar() {
  return (
    <div class="top-0 sticky bg-slate-800 text-white py-4">

<header class="shadow-sm">
  <div class="max-w-screen-xl p-4 mx-auto">
    <div class="flex items-center justify-between space-x-4 lg:space-x-10">
      <div class="flex lg:w-0 lg:flex-1">
        <span class="w-20 h-10 bg-gray-200 rounded-lg"></span>
      </div>

      <nav class="hidden space-x-8 text-sm font-medium md:flex">
        <a class="text-gray-500" href="">About</a>
        <a class="text-gray-500" href="">Blog</a>
        <a class="text-gray-500" href="">Projects</a>
        <a class="text-gray-500" href="">Contact</a>
      </nav>

      <div class="items-center justify-end flex-1 hidden space-x-4 sm:flex">
        <h1>pow</h1>
      </div>

      <div class="lg:hidden">
        <button class="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
          <span class="sr-only">Open menu</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewbox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>






    </div>
  )
}

export default Navbar