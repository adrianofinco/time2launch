<template>
  <div v-if="launchList.length" class="py-10 px-6">
    <LaunchCard 
      v-for="launchInfo in launchList"
      :key="launchInfo.id"
      :launchInfo="launchInfo"
      />
  </div>
  <div v-if="fetchError" class="py-10 px-6">
    <GenericCard>
      An error occurred while fetching upcoming launches.
      YOu can try refreshing the page,
      if the problem persists 
        <a class="underline text-yellow-400 hover:text-yellow-500" 
          target="_blank" href="https://github.com/adrianofinco/time2launch/issues">open an issue</a> 
      on Github.
    </GenericCard>
  </div>
</template>

<script >
import LaunchCard from '@/components/LaunchCard.vue';
import GenericCard from '@/components/GenericCard.vue';
import { fetchData } from '@/helper.js';

export default {
  components: { LaunchCard, GenericCard },
  data () {
    return {
      launchList: [],
      fetchError: false
    }
  },
  created() {
    fetchData('upcoming').then(launchData => {
      if (Array.isArray(launchData) && launchData.length == 0) {
        this.fetchError = true;
        return;
      }

      for (let item of launchData.results) {
        this.launchList.push({
          id: item.id,
          image: item.image,
          name: item.name,
          launchConfirmed: item.status.id == 1,
          launchProvider: {
            name: item.launch_service_provider.name,
            type: item.launch_service_provider.type
          },
          launchSite: {
            name: item.pad.name,
            location: item.pad.location.name
          },
          launchDate: item.net
        });
      }
    })    
  }
}
</script>