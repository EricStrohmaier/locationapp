<template>
  <div class="container">
    <div class="container-fluid">
      <h1 class="title">Welcome find some Locations</h1>
    </div>
    <main class="container-fluid">
      <search-recommend/>
      <searchbar submitText="Search" @submit="handleSearch"/>
      <search-result />
    </main>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue';
import SearchRecommend from '../components/SearchRecommend.vue';
import SearchResult from '../components/SearchResult.vue';


export default {
  components: { SearchRecommend, Searchbar, SearchResult, SearchRecommend, Searchbar },
  name: "IndexPage",
  methods: {
    handleSearch(locationQuery) {
      console.log("Input Value from Parent Component :", locationQuery);
      // call action
      this.$store.dispatch("fetchLocationData", locationQuery);
    },
  },
};
</script>
<style scoped>
.title{
  font-size: 2.5rem;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
