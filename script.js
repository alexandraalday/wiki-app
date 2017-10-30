$(document).ready(function(){

	$('#search').click(function(){
		let searchTerm = $('#searchTerm').val();
		let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
	

		$.ajax({
			type: "GET",
			url: url, 
			async: false,
			dataType: "json",
			success: function(data){
				console.log(data);
			},
			error: function(error){
				console.log(error);
			}
		});

	});

});