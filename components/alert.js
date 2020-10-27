Vue.component('alert-heading', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<h4 :class='\"alert-heading \" + className' :style='customStyle'><slot></slot></h4>"
})
Vue.component('alert-warning', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-warning \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})
Vue.component('alert-primary', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-primary \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})

Vue.component('alert-secondary', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-secondary \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})

Vue.component('alert-success', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-success \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})

Vue.component('alert-danger', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-danger \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})
Vue.component('alert-warning', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-warning \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})

Vue.component('alert-info', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-info \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})

Vue.component('alert-light', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-light \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})

Vue.component('alert-dark', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"alert alert-dark \" + className' :style='customStyle' role='alert'><slot></slot></div>"
})