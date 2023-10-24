<template>
  <form @submit.prevent="searchLocation">
    <div class="grid">
      <input
        type="text"
        placeholder="Location"
        v-model="locationQuery"
      />
    
      <button class="secondary" type="submit">Search</button> <!-- Changed button text -->
    </div>
    <ul>
      <li v-for="(location, index) in searchedLocations.slice().reverse()" :key="index">
         : {{ location.display_name }}
      </li>
    </ul>
  </form>
</template>

<script>
export default {
  data() {
    return {
      locationQuery: '',
    };
  },
  computed: {
    // Access searchedLocations from the store
    searchedLocations() {
      return this.$store.getters['getSearchedLocations'];
    },
  },
  methods: {
    async searchLocation() {
      console.log('Input Value:', this.locationQuery);
      // Dispatch the action to fetch location data based on locationQuery
      await this.$store.dispatch('fetchLocationData', this.locationQuery);
    },
  },
};
</script>
