<template>
  <div>
    <h4>Search Results</h4>

    <div class="grid">
      <ul v-if="searchedLocations.length > 0">
        <li v-for="(location, index) in searchedLocations.slice().reverse()" :key="index">
          <nuxt-link :to="`/location/${location.place_id}`">{{ location.display_name }}</nuxt-link>
        </li>
      </ul>
      <p v-else>No search results found</p>
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
