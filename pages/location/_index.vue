<template>
  <div class="container">
    <h1>Location Details </h1>
    <div v-if="location">
        <p class="bold">Display Name: {{ location.display_name }}</p>
      <p>Address Type: {{ location.addresstype }}</p>
      <p>Latitude: {{ location.lat }}</p>
      <p>Longitude: {{ location.lon }}</p>
    </div>
    <div v-else>
      <p>Location not found.</p>
    </div>
    <nuxt-link to="/">Back to search</nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    location() {
      // route params is url getting the passed place_id 
      const locationId = this.$route.params.index;
      // get all the locations and filter out the correct id 
      const locations = this.$store.state.searchedLocations;

      const location = locations.find((loc) => loc.place_id == locationId);

      return location || null;
    },
  },
};
</script>
