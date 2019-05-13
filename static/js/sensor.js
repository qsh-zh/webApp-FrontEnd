function pageInit(){
	makeYear();
	makeMonth();
	makeDay();
	makeHour();
	makeMinute();
	makeSecond();
	
}

function dosubmit(){
	var year = document.getElementById("year").value;
	var month = document.getElementById("month").value;
	var day = document.getElementById("day").value;
	var hour = document.getElementById("hour").value;
	var minute = document.getElementById("minute").value;
	var second = document.getElementById("second").value;
	var datetime=year + "-" + month + "-" + day+" "+hour+":"+minute+":"+second;
	alert(datetime);
	var input=document.createElement("input");
	input.type="hidden";
	input.name="datetime";
	input.value=datetime;
	document.getElementById("sensor").appendChild(input);
	return true;
}

function makeYear(){
	var year = document.getElementById("year");
	for(var i=2012; i<=new Date().getFullYear(); i++){
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = i;
		year.appendChild(option);
	}
}

function makeMonth(){
	var year = document.getElementById("month");
	for(var i=1; i<=12; i++){
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = i;
		year.appendChild(option);
	}
}

function makeDay(){
	var year = document.getElementById("day");
	for(var i=1; i<=31; i++){
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = i;
		year.appendChild(option);
	}
}

function makeHour(){
	var year = document.getElementById("hour");
	for(var i=0; i<=23; i++){
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = i;
		year.appendChild(option);
	}
}

function makeMinute(){
	var year = document.getElementById("minute");
	for(var i=0; i<=59; i++){
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = i;
		year.appendChild(option);
	}
}

function makeSecond(){
	var year = document.getElementById("second");
	for(var i=0; i<=59; i++){
		var option = document.createElement("option");
		option.value = i;
		option.innerHTML = i;
		year.appendChild(option);
	}
}