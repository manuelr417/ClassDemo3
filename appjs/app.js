

$(document).on('pagebeforeshow', "#cars", function( event, ui ) {
	console.log("Jose");
	$.ajax({
		url : "http://localhost:3412/ClassDemo3Srv/cars",
		contentType: "application/json",
		success : function(data, textStatus, jqXHR){
			var carList = data.cars;
			var len = carList.length;
			var list = $("#cars-list");
			list.empty();
			var car;
			for (var i=0; i < len; ++i){
				car = carList[i];
				list.append("<li><a onclick=GetCar(" + car.id + ")>" + 
					"<h2>" + car.make + " " + car.model +  "</h2>" + 
					"<p><strong> Year: " + car.year + "</strong></p>" + 
					"<p>" + car.description + "</p>" +
					"<p class=\"ui-li-aside\">" + accounting.formatMoney(car.price) + "</p>" +
					"</a></li>");
			}
			list.listview("refresh");	
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			alert("Data not found!");
		}
	});
});

$(document).on('pagebeforeshow', "#car-view", function( event, ui ) {
	// currentCar has been set at this point
	$("#upd-make").val(currentCar.make);
	$("#upd-model").val(currentCar.model);
	$("#upd-year").val(currentCar.year);
	$("#upd-price").val(currentCar.price);
	$("#upd-description").val(currentCar.description);
	
});

////////////////////////////////////////////////////////////////////////////////////////////////
/// Functions Called Directly from Buttons ///////////////////////

function ConverToJSON(formData){
	var result = {};
	$.each(formData, 
		function(i, o){
			result[o.name] = o.value;
	});
	return result;
}

function SaveCar(){
	$.mobile.loading("show");
	var form = $("#car-form");
	var formData = form.serializeArray();
	console.log("form Data: " + formData);
	var newCar = ConverToJSON(formData);
	console.log("New Car: " + JSON.stringify(newCar));
	var newCarJSON = JSON.stringify(newCar);
	$.ajax({
		url : "http://localhost:3412/ClassDemo3Srv/cars",
		method: 'post',
		data : newCarJSON,
		contentType: "application/json",
		dataType:"json",
		success : function(data, textStatus, jqXHR){
			$.mobile.loading("hide");
			$.mobile.navigate("#cars");
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			alert("Data could not be added!");
		}
	});


}

var currentCar = {};

function GetCar(id){
	$.mobile.loading("show");
	$.ajax({
		url : "http://localhost:3412/ClassDemo3Srv/cars/" + id,
		method: 'get',
		contentType: "application/json",
		dataType:"json",
		success : function(data, textStatus, jqXHR){
			currentCar = data.car;
			$.mobile.loading("hide");
			$.mobile.navigate("#car-view");
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404){
				alert("Car not found.");
			}
			else {
				alter("Internal Server Error.");
			}
		}
	});
}

function UpdateCar(){
	$.mobile.loading("show");
	var form = $("#car-view-form");
	var formData = form.serializeArray();
	console.log("form Data: " + formData);
	var updCar = ConverToJSON(formData);
	updCar.id = currentCar.id;
	console.log("Updated Car: " + JSON.stringify(updCar));
	var updCarJSON = JSON.stringify(updCar);
	$.ajax({
		url : "http://localhost:3412/ClassDemo3Srv/cars/" + updCar.id,
		method: 'put',
		data : updCarJSON,
		contentType: "application/json",
		dataType:"json",
		success : function(data, textStatus, jqXHR){
			$.mobile.loading("hide");
			$.mobile.navigate("#cars");
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404){
				alert("Data could not be updated!");
			}
			else {
				alert("Internal Error.");		
			}
		}
	});
}

function DeleteCar(){
	$.mobile.loading("show");
	var id = currentCar.id;
	$.ajax({
		url : "http://localhost:3412/ClassDemo3Srv/cars/" + id,
		method: 'delete',
		contentType: "application/json",
		dataType:"json",
		success : function(data, textStatus, jqXHR){
			$.mobile.loading("hide");
			$.mobile.navigate("#cars");
		},
		error: function(data, textStatus, jqXHR){
			console.log("textStatus: " + textStatus);
			$.mobile.loading("hide");
			if (data.status == 404){
				alert("Car not found.");
			}
			else {
				alter("Internal Server Error.");
			}
		}
	});
}