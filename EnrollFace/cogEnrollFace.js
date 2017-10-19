// cogEnrollFace

function addFace(usrName) {
	var faceListId = "test"
	var subscriptionKey = "7e5660b766684dcebe662b790edac7a4";
	var imgPath = "https://loginwithface.azurewebsites.net/EnrollFace/image/" + usrName + '.jpg';

	$(function() {
		var params = {
			// Request parameters
			"userData": usrName,
			//"targetFace": "{string}",
		};

		$.ajax({
			url: "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/" + faceListId + "/persistedFaces?" + $.param(params),
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