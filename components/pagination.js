Vue.component('pagination', {
	props: {
		className: {
	      type: String,
	      default: ""
	    },
	    customStyle: {
	      type: String,
	      default: ""
	    },
	    perPage: {
	      type: Number,
	      default: 10
	    },
	    totalRecord: {
	      type: Number,
	      default: 54
	    },
	    previousText: {
	      type: String,
	      default: "Previous"
	    },
	    nextText: {
	      type: String,
	      default: "Next"
	    },
	    currentPage: {
	      type: Number,
	      default: 1
	    },
	    displayPage: {
	      type: Number,
		  default: 5
	    },
	    pageEvent: Function
	},
	data: function(){
		return {
			rawCurrentPage: 0
		}
	},
	methods: {
		createNewPage: function(pageNum) {
			return {
				page: pageNum,
				class: "page-item"
			}
		},
		nextPage: function() {
			if(this.rawCurrentPage < this.totalPage) {
				this.rawCurrentPage++;
				this.pageEventChange(this.rawCurrentPage);
			}
		},
		previousPage: function() {
			if(this.rawCurrentPage > 0) {
				this.rawCurrentPage--;
				this.pageEventChange(this.rawCurrentPage);
			}
		},
		setCurrentPage(pageNum) {
			if(pageNum <= this.totalPage - 1 && pageNum >= 0) {
				this.rawCurrentPage = pageNum
				console.log(this.rawCurrentPage);
				for(var x = 0; x < this.pageList.length; x++) {
					if(this.rawCurrentPage != x) {
						this.pageList[x].class = 'page-item';
					} else {
						this.pageList[x].class = 'page-item active disabled-events';
					}

					if(x > this.displayPage) {
						this.pageList[x].class += " d-none";
					}
				}
			}
		},
		pageEventChange: function(pageNum) {
			this.setCurrentPage(pageNum);
			this.pageEvent(pageNum+1);
		}
	},
	computed: {
		pageList: function() {
			var pageLength = Math.ceil(this.totalRecord/this.perPage);
			var pageList = []
			for(var x = 0; x < pageLength; x++) {
				pageList.push(this.createNewPage(x+1))
			}
			return pageList
		},
		totalPage: function() {
			return Math.ceil(this.totalRecord/this.perPage)
		},
		previousButtonStatus: function() {
			return this.rawCurrentPage != 0
		},
		nextButtonStatus: function() {
			return this.rawCurrentPage != this.totalPage - 1
		},
		previousButtonClass: function() {
			if(this.rawCurrentPage != 0) {
				return "page-item"
			}
			return "page-item disabled disabled-events"
		},
		nextButtonClass: function() {
			if(this.rawCurrentPage != this.totalPage - 1) {
				return "page-item"
			}
			return "page-item disabled disabled-events"
		},
	},
	created: function() {
		this.setCurrentPage(this.currentPage-1);
	},
	template: "<nav aria-label='Page navigation'><ul class='pagination'><li :class='previousButtonClass' @click='previousPage()'><a class='page-link' href='#' v-html='previousText'></a></li> <li v-for='(page, index) in pageList' :class='page.class'><a class='page-link' @click='pageEventChange(index)'>{{ page.page }}</a></li><li :class='nextButtonClass' @click='nextPage()'><a class='page-link' href='#' v-html='nextText'></a></li></ul></nav>"
})