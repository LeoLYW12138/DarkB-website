export default {
  computed: {
    titleShort() {
      return section => section.title.split(' ').join('-');

      // Hello world -> ["Hello", "world"] -> "Hello-world"
    }
  }
};
