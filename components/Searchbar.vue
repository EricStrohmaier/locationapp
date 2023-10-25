<template>
  <form @submit.prevent="searchLocation">
    <div class="grid">
      <input
        type="text"
        placeholder="Location"
        v-model="locationQuery"
      />
    
      <button class="secondary" type="submit">Search</button> 
    </div>
    
  </form>
</template>

<script>
export default {
  data() {
    return {
      locationQuery: '',
    };
  },
 
  methods: {
    async searchLocation() {
      console.log('Input Value:', this.locationQuery);
      // fetch location data based on locationQuery
      await this.$store.dispatch('fetchLocationData', this.locationQuery);
    },
  },
};
</script>
