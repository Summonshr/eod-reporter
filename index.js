import "./style.css";
import "./custom.css";
import methods from "./methods";
import computed from "./computed";
import data from "./data";
import Vue from "vue";

new Vue({
  el: "#app",
  computed,
  updated(){
    localStorage.setItem('data', JSON.stringify(this.$data))
  },
  methods,
  data
});
