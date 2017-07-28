console.log('loaded');
$(document).ready(function(){
	$('#submit').click(function(event) {
		const $value=$('#input-box').val();
		$('#to-do-list').append('<p style="width=200px">'+$value+'</p>')
		$('#input-box').val('')
	});
		$('#to-do-list').on('click', 'p', function(hi) {
			const bla = $(this).contents();
			bla.appendTo('#completed')
			bla.wrap('<p style="width=200px"></p>')
	});
		$('#completed').on('click', 'p', function(hi) {
			this.remove();
	});
});