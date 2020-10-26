Vue.component('modal-title', {
	template: "<div class='modal-header'><slot></slot></div>"
})

Vue.component('modal-body', {
	template: "<div class='modal-body'><slot></slot></div>"
})

Vue.component('modal-footer', {
	template: "<div class='modal-footer'><slot></slot></div>"
})

Vue.component('modal', {
    props: ['size', 'title', 'id'],
    template: "<div class='modal' :id='id' tabindex='-1' role='dialog'>" +
    			"<div :class=\"'modal-dialog modal-' + size\">" +
	    			"<div class='modal-content'>" +
	    				"<slot></slot>" +
	    			"</div>" +
    			"</div>" +
			  "</div>"
  })

