var cancel = function(){
	response = confirm('Are you sure you want to clear you answers?')
	if (response){
		location.reload();
	}
}

var showMessage = function(){
	alert("Hi there! We hope you enjoy our website and that you're having a great day today! :D <3");
}
