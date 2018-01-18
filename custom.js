//Marvel Comics API information
var PUBLIC_KEY = "57affa013a2f18e1e8cb694afeaf2ed5";
var hash = 'd4197903f245fc60b7ea495afc376d63';

//Function to get data from https://developer.marvel.com
function do_search() {
	var search_term = $("#search_term").val();
	$.ajax({
		type : 'get',
		url : 'https://gateway.marvel.com/v1/public/comics/' + search_term,
		data : {
			apikey : PUBLIC_KEY,
			hash : hash,
			ts : 1,
		},
		success : function(response) {
			var results = response.data.results;
			var resultsLen = results.length;
			var output = '<ul>';

			for (var i = 0; i < resultsLen; i++) {
				if (results[i].images.length > 0) {
					var imgPath = results[i].images[0].path
							+ '/standard_xlarge.'
							+ results[i].images[0].extension;
					output += '<li><img src="' + imgPath + '"><br>'
							+ results[i].title + '</li>';
				}
			}
			output += '</ul>'
			$('#result_div').append(output);

		}	
	});

	return false;
}