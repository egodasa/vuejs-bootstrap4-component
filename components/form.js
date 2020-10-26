Vue.component('form-group', {
  props: ['label', 'error', 'className'],
  template: "<div :class='\"form-group \" + className'>" +
              "<label>{{ label }}</label>" +
              "<slot></slot>" +
              "<small style='color: red; font-size: 11px'>{{ error }}</small>" +
            "</div>"
})