// cogEnrollFace

function addFace(usrName) {
	var faceListId = "test"
	var subscriptionKey = "ecb40364cf9d439eb9a82d96d9dd8afc";
	
	var imgPath = "https://loginwithface.azurewebsites.net/EnrollFace/image/" + usrName + '.jpg';

	$(function() {
		var params = {
			// Request parameters
			"userData": usrName,
			//"targetFace": "{string}",
		};

		$.ajax({
			url: "https://eastus.api.cognitive.microsoft.com/face/v1.0/facelists/" + faceListId + "/persistedFaces?" + $.param(params),
			beforeSend: function(xhrObj){
				// Request headers
				xhrObj.setRequestHeader("Content-Type","application/json");
				xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
			},
			type: "POST",
			async: false,
			// Request body
			data: "{" +
				"\"url\":\"" + imgPath +
			"\"}",
		})
		.done(function(data) {
			alert("success");
		})
		.fail(function() {
			alert("error");
		});
	});
	video.play();
}