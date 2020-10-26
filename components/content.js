Vue.component('page-title', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	},
	template: "<div :class='\"page-title \" + className'><slot></slot></div>"
})

