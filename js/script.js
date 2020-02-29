var cancel = function(){
	response = confirm('Are you sure you want to clear you answers?')
	if (response){
		location.reload();
	}
}

var showMessage = function(){
	alert("Hi there! We hope you enjoy our website and that you're having a great day today! :D <3");
}

var saveData = function(){
	let name = document.forms[0].name.value;
	let age = document.forms[0].age.value;
	let campus = document.forms[0].campus.value;
	let Batch = document.forms[0].Batch.value;
	let Q1A = document.forms[0].Q1A.value;
	let Q1B = document.forms[0].Q1B.value;
	let Q2A = document.forms[0].Q2A.value;
	let Q2B = document.forms[0].Q2B.value;
	let Q3A = document.forms[0].Q3A.value;
	let Q3B = document.forms[0].Q3B.value;
	let Q4A = document.forms[0].Q4A.value;
	let Q4B = document.forms[0].Q4B.value;
	let Q5 = document.forms[0].Q5.value;
	let Q6 = document.forms[0].Q6.value;
	
	let objComment = {names: name, ages: age, campuses: campus, batches: Batch, Q1As: Q1A, Q1Bs: Q1B,  
						Q2As: Q2A, Q2Bs: Q2B, Q3As: Q3A, Q3Bs: Q3B, Q4As: Q4A, Q4Bs: Q4B, Q5s: Q5, Q6s: Q6,};
						
	let jsonString = JSON.stringify(objComment);
	
	count = (!localStorage.getItem("count")) ? 1 : Number(localStorage.getItem("count")) + 1;
			
	record = "Record" + count
			
	localStorage.setItem(record, jsonString)
	
	localStorage.setItem("count", count.toString())
}
