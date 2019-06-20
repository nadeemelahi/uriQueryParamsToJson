var uriQuery, uriJson;

function uriQueryParamsToJson(){
   uriQuery = ((window.location.search)
	            .replace("?","\"") 	//leading ?-query marker
	            .replace(/&/g,"\",\"")
	            .replace(/=/g,"\":\"")
	            .replace(/$/,"\"") 	// close the last param with "
	            .replace(/^/,"{")
	            .replace(/$/,"}")
   );
   uriJson = JSON.parse(uriQuery);
}
