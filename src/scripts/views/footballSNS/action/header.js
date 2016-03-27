



var indexheader= require('../tpl/header.string');
QApp.defineView('header',{
	html:indexheader,
	plugins: ['delegated'],
	bindActions: {

	},
	bindEvents: {
		'beforeShow': function() {
			
		}
	}
});


