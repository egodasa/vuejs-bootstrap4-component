Vue.component('modal-header', {
	props: {
		addClass: {
			type: String,
			default: ""
		}
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "modal-header " + this.addClass
			}
			return "modal-header"
		}
	},
	template: "<div :class='className'><slot></slot></div>"
})

Vue.component('modal-body', {
	props: {
		addClass: {
			type: String,
			default: ""
		}
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "modal-body " + this.addClass
			}
			return "modal-body"
		}
	},
	template: "<div :class='className'><slot></slot></div>"
})

Vue.component('modal-footer', {
	props: {
		addClass: {
			type: String,
			default: ""
		}
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "modal-footer " + this.addClass
			}
			return "modal-footer"
		}
	},
	template: "<div :class='className'><slot></slot></div>"
})

Vue.component('modal', {
    props: {
    	size: {
    		type: String,
    		default: "md"
    	},
    	id: {
    		type: String,
    		required: true
    	},
    },
    computed: {
    	className: function() {
    		return "modal-dialog modal-" + this.size
    	}
    },
    template: "<div class='modal' :id='id' tabindex='-1' role='dialog'>" +
    			"<div :class='className'>" +
	    			"<div class='modal-content'>" +
	    				"<slot></slot>" +
	    			"</div>" +
    			"</div>" +
			  "</div>"
  })