Vue.component('form-group', {
	props: {
		addClass: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	    label: {
	      type: String,
	      default: ""
	    },
	    error: {
	      type: String,
	      default: ""
	    }
	},
	computed: {
		className: function() {
			if(this.addClass != "") {
				return "form-group " + this.addClass
			}
			return "form-group"
		}
	},
	template: "<div :class='className' :style='customStyle'>" +
              "<label v-html='label'></label>" +
              "<slot></slot>" +
              "<small style='color: red; font-size: 11px'>{{ error }}</small>" +
              "</div>"
})