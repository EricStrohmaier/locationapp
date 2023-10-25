export const state = () => ({
  searchedLocations: [],
});

export const mutations = {
  updateSearchedLocations(state, locations) {
    // update locations
    state.searchedLocations.push(...locations);
  }
};


export const actions = {
  async fetchLocationData({ commit }, query) {
    try {
      // Make an API request to OSM and store the data in the state
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
      );
      const data = await response.json();
      // console.log("Data from OSM:", data);
      commit("updateSearchedLocations", data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  },
};

export const getters = {
  getSearchedLocations: (state) => state.searchedLocations,
  
};
