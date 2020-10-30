
Vue.component('badge-warning', {
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
				return "badge badge-warning " + this.addClass
			}
			return "badge badge-warning"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('badge-primary', {
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
				return "badge badge-primary " + this.addClass
			}
			return "badge badge-primary"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('badge-secondary', {
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
				return "badge badge-secondary " + this.addClass
			}
			return "badge badge-secondary"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})

Vue.component('badge-success', {
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
				return "badge badge-success " + this.addClass
			}
			return "badge badge-success"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('badge-danger', {
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
				return "badge badge-danger " + this.addClass
			}
			return "badge badge-danger"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('badge-warning', {
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
				return "badge badge-warning " + this.addClass
			}
			return "badge badge-warning"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('badge-info', {
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
				return "badge badge-info " + this.addClass
			}
			return "badge badge-info"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('badge-light', {
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
				return "badge badge-light " + this.addClass
			}
			return "badge badge-light"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})
Vue.component('badge-dark', {
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
				return "badge badge-dark " + this.addClass
			}
			return "badge badge-dark"
		}
	},
	template: "<div :class='className' :style='customStyle'><slot></slot></div>"
})