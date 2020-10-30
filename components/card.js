Vue.component('card-header', {
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
				return "card-header " + this.addClass
			}
			return "card-header"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('card-body', {
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
				return "card-body " + this.addClass
			}
			return "card-body"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('card-footer', {
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
				return "card-footer " + this.addClass
			}
			return "card-footer"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})

Vue.component('card', {
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
				return "card " + this.addClass
			}
			return "card"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})