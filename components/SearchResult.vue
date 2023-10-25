<template>
  <div>
    <div class="grid">
      <ul>
        <h4>Search Results</h4>
        <li v-for="(location, index) in searchedLocations.slice().reverse()" :key="index">
          <nuxt-link :to="`/location/${location.place_id}`">{{ location.display_name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  computed: {
    searchedLocations() {
      return this.$store.state.searchedLocations;
    },
  },
};
</script>

<style></style>
