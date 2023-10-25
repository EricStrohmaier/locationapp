<template>
  <form @submit.prevent="submitForm">
    <div class="search-bar">
      <input
        class="search"
        type="search"
        id="search"
        name="search"
        placeholder="Location"
        v-model="formData.locationQuery"
      />
      <button type="submit" class="secondary extrabutton">{{ submitText }}</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "Searchbar",
  props: {
    submitText: {
      type: String,
      default: "Search", 
    },
  },
  data() {
    return {
      formData: {
        locationQuery: "",
      },
    };
  },
  methods: {
    submitForm() {
      // local component function 
      //  this.$store.dispatch("fetchLocationData", this.formData.locationQuery);
      
      // emit event to parent component
      this.$emit("submit", this.formData.locationQuery);

    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.extrabutton{
  border: none;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: flex;
  width: fit-content
}
</style>
