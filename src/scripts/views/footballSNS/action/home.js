/*!
 * 足球圈子-首页 view:home
 * 创建时间：2016-03-19
 * 作者：rongtao.lu
 */

var indexTpl = require('../tpl/home.string');
var utilAjax = require('../util/util-ajax.js');
require('../lib/swiper.js');
QApp.defineView('home', {
	html: indexTpl,

	plugins: ['delegated', 'ajax', {
		name: 'avalon',
		options: function(vm) {
			vm.list = [];
		}
	}],

	init: {
		vm: null
	},

	bindActions: {

	},

	bindEvents: {
		'beforeShow': function() {
			var self = this;
			self.vm = this.getVM();
			// console.info(utilAjax.query)
			utilAjax.query({
				url: "/interface/getList.do",
				success: function(rs){
					// alert();
					console.info(rs.data)
					self.vm.list = rs.data;
				},
				error:function(rs){
					// console.info(rs)
					self.vm.list = rs.data;
					console.info(rs.data)
				}
			});
			var mySwiper = new Swiper('.swiper-containe', {
				direction: 'horizontal',
				loop:true,
				autoplay:10000
			});
		}
	}
});
