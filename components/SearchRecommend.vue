<template>
  <div>
    <h4>List of Search Recommendations</h4>
    <div class="">
      <ul>
        <li style="cursor: pointer" @click="setLocationQuery('London')">
          London
        </li>
        <li style="cursor: pointer" @click="setLocationQuery('Paris')">
          Paris
        </li>
        <li style="cursor: pointer" @click="setLocationQuery('New York')">
          New York
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchRecommend",
  data() {
    return {
      locationQuery: "",
    };
  },
  methods: {
    // setLocation is local function
    async setLocationQuery(query) {
      this.locationQuery = query;
      // call searchLocation function with the new query
      this.searchLocation();
    },
    async searchLocation() {
      console.log("Input Value:", this.locationQuery);
      await this.$store.dispatch("fetchLocationData", this.locationQuery);
    },
  },
};
</script>

<style></style>
