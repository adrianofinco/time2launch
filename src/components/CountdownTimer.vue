<template>
  <div v-if="launchCounter > 0" class="grid grid-cols-8 grid-rows-2 
  place-items-center normal-case text-[32px] sm:text-[40px] 
  sm:mt-6 mx-auto px-2 max-w-[300px] sm:max-w-[400px] lg:max-w-[350px]" >
    <span>T-</span>
    <span class="timer-days">{{ daysDisplay }}</span>
    <span>:</span>
    <span class="timer-hours">{{ hoursDisplay }}</span>
    <span>:</span>
    <span class="timer-minutes">{{ minutesDisplay }}</span>
    <span>:</span>
    <span class="timer-seconds">{{ secondsDisplay }}</span>
    <span class="col-start-2 text-base">Days</span>
    <span class="col-start-4 text-base">Hours</span>
    <span class="col-start-6 text-base">Minutes</span>
    <span class="col-start-8 text-base">Seconds</span>
  </div>
  <div v-else class="min-h-[120px] sm:text-[40px] sm:mt-6 grid place-items-center">
    <p class="font-sans text-2xl text-yellow-400 animate-alert">Launch in progress</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      launchCounter: Math.floor(
        (
          (
            new Date(this.launchDate) /* LaunchDate */
          ).getTime() - (
            new Date() /* minus Now */
          ).getTime()
        ) / 1000 /* reduce to seconds */
      ),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  props: {
    launchDate: {
      type: String,
      required: true
    }
  },
  computed: {
    daysDisplay() { return this.days.toString(); },
    hoursDisplay() { return this.hours.toString().padStart(2, '0'); },
    minutesDisplay() { return this.minutes.toString().padStart(2, '0'); },
    secondsDisplay() { return this.seconds.toString().padStart(2, '0'); }
  },
  watch: {
    launchCounter: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.launchCounter--;
          }, 1000);
        }
        this.days = Math.floor(value / (60 * 60 * 24));
        this.hours = Math.floor(value % (60 * 60 * 24) / (60 * 60));
        this.minutes = Math.floor(value % (60 * 60) / 60);
        this.seconds = Math.floor(value % 60);
      },
      immediate: true // This ensures the watcher is triggered upon creation
    }
  }
}

/*

watch: {
    countdownTimer: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.countdownTimer--;
          }, 1000);
        }
      },
      immediate: true 
    }
  }

countdownTimer: Math.floor((new Date(this.launchInfo.LaunchDate)).getTime()/1000),
*/
</script>