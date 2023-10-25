<template>
  <div class="container">
    <div class="container-fluid">
      <h1 class="title">Welcome find some Locations</h1>
    </div>
    <main class="container-fluid">
      <search-recommend />
      <searchbar />
      <search-result />
    </main>
  </div>
</template>

<script>
import Searchbar from '../components/Searchbar.vue';
import SearchRecommend from '../components/SearchRecommend.vue';
import SearchResult from '../components/SearchResult.vue';


export default {
  components: { SearchRecommend, Searchbar, SearchResult, Searchbar },
  name: "IndexPage",
 
};
</script>
