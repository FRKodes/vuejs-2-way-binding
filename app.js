new Vue({
	
	el: '#demoTag',

	data: {

		name: 'This is gonna change...'

	},

	ready: function(){
		
		var that = this;
		
		setInterval(function(){

			that.name = 'Updated!';

		}, 4000);

	}

});