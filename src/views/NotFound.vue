<template>
  <div class="py-10 px-6">
    <GenericCard>
      <p class="mb-4">
        The page you were looking for could not be found. Go back to 
        <a class="underline text-yellow-400 hover:text-yellow-500"
        href="/time2launch/">main page</a>.
      </p>
      <p>
        If the problem persists
        <a class="underline text-yellow-400 hover:text-yellow-500" target="_blank" 
        href="https://github.com/adrianofinco/time2launch/issues">open an issue
          </a> 
        on Github.
      </p>
    </GenericCard>
  </div>
</template>

<script >
import GenericCard from '@/components/GenericCard.vue';

export default {
  components: { GenericCard },
  data () { return {} }
}
</script>