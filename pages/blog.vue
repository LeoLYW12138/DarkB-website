<template>
  <div>
    <div id="search">
      <label for="search-input">Search:</label>
      <input
        id="search-input"
        aria-label="Search"
        autocomplete="on"
        name="search-input"
        placeholder="Search"
        speech
        type="search"
      />
      <svg viewBox="0 0 24 24">
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>
    <search-bar />
  </div>
</template>

<script>
import searchBar from '@/components/searchBar.vue';

export default {
  components: {
    searchBar,
  },
};
</script>

<style scoped>
div#search * {
  font-family: sans-serif;
}

div#search {
  align-items: center;
  display: flex;
  max-width: 600px;
  width: 100%;
}

div#search label {
  display: none;
  font-weight: 500;
  margin: 0 5px 0 0;
}

div#search input {
  border: solid #ccc;
  border-width: 1px 0 1px 1px;
  border-radius: 2px 0 0 2px;
  flex: 1;
  font-size: 16px;
  font-weight: 200;
  height: 33px;
  margin: 0;
  min-width: 90px;
  padding: 5px;
  -webkit-appearance: textfield;
}

div#search svg {
  background-color: #26882e;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  fill: white;
  height: 33px;
  min-width: 24px;
  padding: 0 7px;
  width: 24px;
}

div#search svg:hover {
  background-color: #1d6823;
  fill: white;
}

@media all and (min-width: 500px) {
  div#search label {
    display: inline;
  }
  div#search input::placeholder {
    opacity: 0;
  }
}
</style>