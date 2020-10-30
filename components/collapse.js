Vue.component('button-group', {
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
				return "btn-group " + this.addClass
			}
			return "btn-group"
		}
	},
	template: "<div :class='className' :style='customStyle' role='group'><slot></slot></div>"
})

Vue.component('button-toolbar', {
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
				return "btn-toolbar " + this.addClass
			}
			return "btn-toolbar"
		}
	},
	template: "<div :class='className' :style='customStyle' role='toolbar'><slot></slot></div>"
})