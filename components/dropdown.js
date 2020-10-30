Vue.component('dropdown-item', {
	props: {
		addClass: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	    link: {
	      type: String,
	      default: "#"
	    },
	    target: {
	      type: String,
	      default: ""
	    },
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "dropdown-item " + this.addClass
			}
			return "dropdown-item"
		}
	},
    template: "<a :class='className' :href='link' :style='customStyle' :target='target'><slot></slot></a>"
})

Vue.component('dropdown-divider', {
	template: "<div class='dropdown-divider'></div>"
})

Vue.component('dropdown', {
	props: {
		type: {
	      type: String,
	      required: true
	    },
	    text: {
	      type: String,
	      default: ""
	    },
	    id: {
	      type: String,
	      default: Math.round((Math.random() * 10000000000)).toString()
	    },
	},
	computed: {
		dropdownClass: function() {
			return "btn btn-" + this.type + " dropdown-toggle"
		}
	},
	template: "<div class='dropdown'>" +
				"<button :class='dropdownClass' type='button' :id='id' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' v-html='text'></button>" +
				"<div class='dropdown-menu' :aria-labelledby='id'>" +
				"<slot></slot>" + 
				"</div>" +
				"</div>"
})