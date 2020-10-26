Vue.component('card-header', {
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
	template: "<div :class='\"card-header \" + className' :style='customStyle'><slot></slot></div>"
})
Vue.component('card-body', {
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
	template: "<div :class='\"card-body \" + className' :style='customStyle'><slot></slot></div>"
})
Vue.component('card-footer', {
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
	template: "<div :class='\"card-footer \" + className' :style='customStyle'><slot></slot></div>"
})

Vue.component('card', {
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
	template: "<div :class='\"card \" + className'><slot></slot></div>"
})