Vue.component('breadcrumb', {
	props: {
		addClass: {
			type: String,
			default: ""
		}
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "breadcrumb " + this.addClass
			}
			return "breadcrumb"
		}
	},
	template: "<nav aria-label='breadcrumb'><ol :class='className'><slot></slot></ol></nav>"
})

Vue.component('breadcrumb-item', {
	props: {
		addClass: {
			type: String,
			default: ""
		},
		link: {
			type: String,
			default: "#"
		}
	},
	computed: {
		className: function() {
			var tmpClassName = "breadcrumb-item";
			if(this.addClass != "") {
				tmpClassName += " " + this.addClass
			}
			return tmpClassName
		}
	},
	template: "<li :class='className'><a :href='link'><slot></slot></a></li>"
})

Vue.component('breadcrumb-item-active', {
	props: {
		addClass: {
			type: String,
			default: ""
		},
	},
	computed: {
		className: function() {
			var tmpClassName = "breadcrumb-item";
			if(this.addClass != "") {
				tmpClassName += " " + this.addClass
			}
			return tmpClassName
		}
	},
	template: "<li :class='className'><slot></slot></li>"
})