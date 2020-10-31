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

Vue.component('navbar', {
	props: {
		title: {
			type: String,
			default: "Navbar"
		},
		titleLink: {
			type: String,
			default: "#"
		},
		id: {
	    	type: String,
	    	required: true
	    },
	    theme: {
	    	type: String,
	    	default: "dark"
	    },
	    color: {
	    	type: String,
	    	default: "dark"
	    },
	    size: {
	    	type: String,
	    	default: "sm"
	    }
	},
	computed: {
		navbarClass: function() {
			return "navbar navbar-expand-" + this.size + " navbar-" + this.theme + " bg-" + this.color
		}
	},
	template: "<nav :class='navbarClass'> <a class='navbar-brand' :href='titleLink' v-html='title'></a> <button class='navbar-toggler' type='button' data-toggle='collapse' :data-target='\"#\" + id' :aria-controls='id' aria-expanded='false' aria-label='Toggle navigation'> <span class='navbar-toggler-icon'></span> </button> <div class='collapse navbar-collapse' :id='id'> <ul class='navbar-nav mr-auto'> <slot></slot> </ul> </div> </nav>"
})
