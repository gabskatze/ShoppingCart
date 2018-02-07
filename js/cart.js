
var load = function(){
	let tbody = document.getElementById('myCartItems');
	tbody.innerHTML = "";
	let mytr = 
	'<tr>'+
			'<td>'+
				'<div class="col-sm-6 hidden-xs"><img src="{{image}}" class="img-responsive"/></div>'+
			'</td>'+
			'<td>'+
				'<p class="form-control-static">{{size}}</p>'+
			'</td>'+
			'<td>'+
				'<input type="number" class="form-control text-center myQuantity" value="1" onchange="calculateSubTotal(this, {{id}})">'+
			'</td>'+
			'<td>$<span class="myPrice">{{price}}</span></td>'+
			'<td class="text-center">$<span id="mySubtotal{{id2}}" class="mySubtotal">{{price2}}</span></td>'+
			'<td class="actions">'+
				'<button type="button" onclick="removeItem({{id3}});" class="btn btn-danger delete">'+
					'<span class="glyphicon glyphicon-trash"></span>'+
				'</button>'+
			'</td>'+
	'</tr>';

	let cartList = JSON.parse(localStorage.getItem('myCart'));
	cartList.forEach(function(cartItem){
		let product = getProductFromList(cartItem.myId);
		let tr = mytr.replace("{{image}}", product.myimg);
		tr = tr.replace("{{size}}", cartItem.mySize);
		tr = tr.replace("{{price}}", product.myprice);
		tr = tr.replace("{{price2}}", product.myprice);
		tr = tr.replace("{{id}}", product.id);
		tr = tr.replace("{{id2}}", product.id);
		tr = tr.replace("{{id3}}", product.id);
		tbody.innerHTML += tr;	
	});
	calculateTotal();
}

function calculateSubTotal(element, id){
	let object = getProductFromList(id);
	let price = object.myprice;
	let quantity = parseInt(element.value);
	document.getElementById('mySubtotal'+id).innerHTML = price * quantity;
	calculateTotal();
}

function calculateTotal(){
	let subtotals = document.getElementsByClassName('mySubtotal');
	let total = 0;
	for (let i = 0; i < subtotals.length; i++) {
		let subtotal = subtotals[i]; 
		let value = parseInt(subtotal.innerHTML);
		total = total + value;	
	}
	document.getElementById('myTotal').innerHTML = total;
	document.getElementById('myTotal2').innerHTML = total;
}

function removeItem(id){
	let cartList = JSON.parse(localStorage.getItem('myCart'));
	cartList = cartList.filter(x => parseInt(x.myId) !== id);
	localStorage.setItem('myCart', JSON.stringify(cartList));
	load();
}

//load modal
function modal() {
	let el = document.getElementById("modal");
 el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}