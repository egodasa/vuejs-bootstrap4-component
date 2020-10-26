Vue.component('column', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='className'><slot></slot></div>"
})
Vue.component('row', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"row \" + className'><slot></slot></div>"
})

