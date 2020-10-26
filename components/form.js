Vue.component('form-group', {
	props: {
		className: {
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
	template: "<div :class='\"form-group \" + className'>" +
              "<label>{{ label }}</label>" +
              "<slot></slot>" +
              "<small style='color: red; font-size: 11px'>{{ error }}</small>" +
            "</div>"
})