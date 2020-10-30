Vue.component('nav-item', {
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
	    link: {
	      type: String,
	      required: false,
	      default: "#"
	    },
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "nav-item " + this.addClass
			}
			return "nav-item"
		}
	},
	template: "<li :class='className' :style='customStyle'><a class='nav-link' :href='link'><slot></slot></a></li>"
})

Vue.component('nav-item-dropdown', {
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
	    text: {
	      type: String,
	      required: false,
	      default: "#"
	    },
	    id: {
	      type: String,
	      default: Math.round((Math.random() * 10000000000)).toString()
	    },
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "nav-item dropdown " + this.addClass
			}
			return "nav-item dropdown"
		}
	},
	template: "<li :class='className' :style='customStyle'> <a class='nav-link dropdown-toggle' href='#' :id='id' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' v-text='text'></a> <div class='dropdown-menu' :aria-labelledby='id'> <slot></slot> </div> </li>"
})