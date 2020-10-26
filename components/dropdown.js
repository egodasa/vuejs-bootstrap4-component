Vue.component('dropdown-item', {
	props: {
		className: {
	      type: String,
	      default: "dropdown-item"
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	    link: {
	      type: String,
	      default: "primary"
	    },
	    target: {
	      type: String,
	      default: "_blank"
	    },
	},
    template: "<a :class='className' :href='link' :style='customStyle' :target='target'><slot></slot></a>"
})

Vue.component('dropdown-divider', {
	template: "<div class='dropdown-divider'></div>"
})

Vue.component('dropdown', {
	props: {
		className: {
	      type: String,
	      default: "primary"
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	    text: {
	      type: String,
	      default: ""
	    },
	    type: {
	      type: String,
	      default: "primary"
	    },
	    id: {
	      type: String,
	      default: Math.round((Math.random() * 10000000000)).toString()
	    },
	},
	template: "<div :class='\"dropdown \" + className'>" +
				"<button :class='\"btn btn-\" + type + \" dropdown-toggle\"' type='button' :id='id' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>{{ text }}</button>" +
				"<div class='dropdown-menu' :aria-labelledby='id'>" +
				"<slot></slot>" + 
				"</div>" +
				"</div>"
})