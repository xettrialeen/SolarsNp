const solar = new Vue({
  el: "#solar",
  data: {
    message: "hello world",
    imagebtnanime: true,
    targetLink: "./html/solarplanets.html",
  },
  methods: {
    animebtn() {
      this.imagebtnanime = !this.imagebtnanime;
    },
  },
  mounted: () => {},
});
