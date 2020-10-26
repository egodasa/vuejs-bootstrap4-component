Vue.component('badge-primary', {
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
	template: "<div :class='\"badge badge-primary \" + className' :style='customStyle' role='badge'><slot></slot></div>"
})

Vue.component('badge-secondary', {
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
	template: "<div :class='\"badge badge-secondary \" + className' :style='customStyle' role='badge'><slot></slot></div>"
})

Vue.component('badge-success', {
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
	template: "<div :class='\"badge badge-success \" + className' :style='customStyle' role='badge'><slot></slot></div>"
})

Vue.component('badge-danger', {
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
	template: "<div :class='\"badge badge-danger \" + className' :style='customStyle' role='badge'><slot></slot></div>"
})

Vue.component('badge-warning', {
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
	template: "<div :class='\"badge badge-warning \" + className' :style='customStyle' role='badge'><slot></slot></div>"
})

Vue.component('badge-info', {
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
	template: "<div :class='\"badge badge-info \" + className' :style='customStyle' role='badge'><slot></slot></div>"
})

Vue.component('badge-light', {
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
	template: "<div :class='\"badge badge-light \" + className' :style='customStyle' role='badge'><slot></slot></div>"
})

Vue.component('badge-dark', {
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
	template: "<div :class='\"badge badge-dark \" + className' :style='customStyle' role='badge'><slot></slot></div>"
})