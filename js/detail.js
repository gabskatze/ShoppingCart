var load = function(){
	var params = new URLSearchParams(window.location.search);
	var id = params.get('id');
	var object = getProductFromList(id);

	document.getElementById('myimage').src=object.myimg;
	document.getElementById('myprice').innerHTML = object.myprice;
	document.getElementById('mydetails').innerHTML = object.mydetails.join("<br/>");
};

function addCart(){
	var params = new URLSearchParams(window.location.search);
	var id = params.get('id');
	var object = getProductFromList(id);

	var selectedOption = document.getElementById('mysize');
	var size = selectedOption.options[selectedOption.selectedIndex].innerHTML;

	var myObject = {
		myId: id,
		mySize: size
	};
debugger;
	let objectList = JSON.parse(localStorage.getItem('myCart'));
	if (objectList === null) {
		objectList = [];
	}
	objectList.push(myObject);
	localStorage.setItem('myCart', JSON.stringify(objectList));
	
	

	location.href='cart.html'
}


