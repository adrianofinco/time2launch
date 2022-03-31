<template>
  <div class="max-w-[500px] lg:max-w-[800px] mx-auto uppercase border border-gray-700 rounded-xl overflow-hidden tracking-wide lg:flex flex-row mb-8">
    <div class="w-full border-b lg:border-r border-gray-700 relative lg:max-w-[250px]">
      <span class="absolute top-0 right-0 p-1 px-2 rounded-bl-lg tracking-wider font-sans font-bold normal-case bg-black bg-opacity-50 border-b border-l border-gray-700"
      >{{ launchInfo.launchProvider.type }}</span>
      <img class="w-full lg:object-cover lg:h-full" :src="launchInfo.image">
    </div>
    <div class="w-full pt-6 pb-3 px-4 bg-black-900 bg-opacity-30">
      <h2 class="text-xl font-sans mb-4 text-center" >
        {{ launchInfo.name }}
        <span v-if="launchInfo.launchConfirmed" class="cursor-help" title="Launch confirmed" aria-label="Launch confirmed">
          <svg class="align-text-top inline w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
        </span>
        <span v-else class="cursor-help" title="Launch to be confirmed" aria-label="Launch to be confirmed">
          <svg class="align-text-top inline w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </span>
      </h2>
      
      <div class="mb-2">
        <p class="font-bold text-gray-500 -mb-1">Provider</p>
        <span class="">{{ launchInfo.launchProvider.name }}</span>
      </div>
      <div class="mb-2">
        <p class="font-bold text-gray-500 -mb-1">Launch site</p>
        <span class="">{{ launchInfo.launchSite.name }}</span>
      </div>
      <div class="mb-2">
        <p class="font-bold text-gray-500 -mb-1">Location</p>
        <span class="">{{ launchInfo.launchSite.location }}</span>
      </div>
      <CountdownTimer :launchDate="launchInfo.launchDate"/>
    </div>
  </div>
</template>

<script>
import CountdownTimer from '@/components/CountdownTimer.vue';

export default {
  components: { CountdownTimer },
  props: {
    launchInfo:{
      type: Object,
      required: false,
    },
    launched: false,
  },  
}
</script>