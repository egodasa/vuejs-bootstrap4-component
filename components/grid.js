Vue.component('column', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='className'><slot></slot></div>"
})
Vue.component('row', {
	props: {
		addClass: {
	      type: String,
	      default: ""
	    },
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "row " + this.addClass
			}
			return "row"
		}
	},
	template: "<div :class='\"row \" + className'><slot></slot></div>"
})

