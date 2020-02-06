var cancel = function(){
	response = confirm('Are you sure you want to clear you answers?')
	if (response){
		location.reload();
	}
}