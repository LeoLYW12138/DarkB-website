export default {
  computed: {
    titleShort() {
      return section => section.title.split(' ').join('-');
    }
  }
};
