Vue.component('menu-sidebar', {
  props: ['link', 'icon', 'text', 'base_url'],
  template: '<li><a :href="base_url + link"><i :class="icon"></i> {{ text }}</a></li>'
})