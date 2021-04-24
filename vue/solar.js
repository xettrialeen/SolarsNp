const solarPlanets = new Vue({
  el: "#solarplanets",
  data: {
    e: 0,
  },
  methods: {},
  mounted: () => {
    var rellax = new Rellax(".rellax", {
      center: true,
      breakpoints: [576, 768, 1201],
      horizontal: true,
    });
  },
});
