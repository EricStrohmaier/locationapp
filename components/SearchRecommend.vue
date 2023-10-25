<template>
  <div>
    <h4>List of Search Recommendations</h4>
    <div class="grid grid-style">
      
        <li class="item"  @click="setLocationQuery('London')">
          London
        </li>
        <li class="item" @click="setLocationQuery('Paris')">
          Paris
        </li>
        <li class="item" @click="setLocationQuery('New York')">
          New York
        </li>
    
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

<style scoped>
.grid-style {
  padding-bottom: 20px;
}
.item {
  cursor: pointer;
  list-style: none;
  padding: 5px;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: #ffffffd6;
  color: black;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  
}
:hover.item {
  transition: ease-in-out 0.2s;
  background-color: #797979;
  color: rgb(255, 255, 255);
}


</style>
