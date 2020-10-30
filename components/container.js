Vue.component('container', {
	props: {
		addClass: {
	      type: String,
	      required: false,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      required: false,
	      default: ""
	    }
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "container " + this.addClass
			}
			return "container"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})

Vue.component('container-fluid', {
	props: {
		addClass: {
	      type: String,
	      required: false,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      required: false,
	      default: ""
	    },
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "container-fluid " + this.addClass
			}
			return "container-fluid"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})