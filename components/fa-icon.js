Vue.component('fa-icon', {
  props: ['name'],
  template: "<i :class='\"fa fa-\" + name'></i>",
})