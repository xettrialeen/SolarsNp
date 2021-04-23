const solar = new Vue({
  el: "#solar",
  data: {
    message: "hello world",
    imagebtnanime: true,
  },
  methods: {
    animebtn() {
      this.imagebtnanime = !this.imagebtnanime;
    },
  },
});
