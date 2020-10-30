Vue.component('alert-heading', {
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
				return "alert-heading " + this.addClass
			}
			return "alert-heading"
		}
	},
	template: "<h4 :class='className' :style='customStyle'><slot></slot></h4>"
})
Vue.component('alert-warning', {
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
				return "alert alert-warning " + this.addClass
			}
			return "alert alert-warning"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('alert-primary', {
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
				return "alert alert-primary " + this.addClass
			}
			return "alert alert-primary"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('alert-secondary', {
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
				return "alert alert-secondary " + this.addClass
			}
			return "alert alert-secondary"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})

Vue.component('alert-success', {
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
				return "alert alert-success " + this.addClass
			}
			return "alert alert-success"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('alert-danger', {
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
				return "alert alert-danger " + this.addClass
			}
			return "alert alert-danger"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('alert-warning', {
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
				return "alert alert-warning " + this.addClass
			}
			return "alert alert-warning"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('alert-info', {
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
				return "alert alert-info " + this.addClass
			}
			return "alert alert-info"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('alert-light', {
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
				return "alert alert-light " + this.addClass
			}
			return "alert alert-light"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('alert-dark', {
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
				return "alert alert-dark " + this.addClass
			}
			return "alert alert-dark"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})