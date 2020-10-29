Vue.component('fa-icon', {
  props: {
  	name: {
  		type: String,
  		required: true
  	},
  	customStyle: {
  		type: String,
  		required: false,
  		default: ""
  	},
  },
  computed: {
  	iconClass: function() {
  		return "fa fa-" + this.name;
  	}
  },
  template: "<i :class='iconClass' :style='customStyle'></i>",
})