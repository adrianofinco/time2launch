<template>
  <div class="bg-constellation min-h-screen text-gray-100 flex flex-col">
    <!--
    <header class="bg-white shadow" v-if="$route.meta.title">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-red-400">{{ $route.meta.title }}</h1>
      </div>
    </header>
    -->
    <header class="bg-black-900 flex items-center px-4 py-2 border-b border-gray-700">
      <h1 class="text-xl md:text-2xl lg:text-3xl tracking-wide font-mono flex-grow">
        <router-link to="/time2launch/">
          <b class="text-yellow-400">T</b>ime<b class="text-yellow-400">2L</b>aunch
        </router-link>
      </h1>
      
      <a title="View on Github" href="https://github.com/adrianofinco/time2launch" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
    </header>
    <main class="flex-grow">
      
      <router-view/>
      
    </main>
    <footer class="bg-black px-6 py-6 text-sm border-t border-gray-700 lg:text-base">
      
      <div class="text-gray-400 mb-4">
        <p class="font-bold mb-[2px]">Made with:</p>
        
        <span class="">
          <a class="underline text-yellow-400 hover:text-yellow-500" href="https://thespacedevs.com/llapi" target="_blank">
          Launch Library 2 API</a> 
          &amp; 
          <span class="text-gray-100">TailwindCSS</span> 
          &amp; 
          <span class="text-gray-100">VueJS</span>.
        </span>
      </div>

      <p class="">Checkout other projects at my 
        <a class="underline text-yellow-400 hover:text-yellow-500" href="https://github.com/adrianofinco" target="_blank">Github</a>
      </p>
    </footer>
  </div>
</template>
