Vue.component('page-title', {
	props: {
		addClass: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "page-title " + this.addClass
			}
			return "page-title"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})

