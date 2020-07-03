var price;
var amount;

function init () {
	price = document.form.price.value;
	amount = document.form.amount.value;
	change();
}

function add () {
	p = document.form.price;
	x = document.form.amount;
	sum = document.form.sum;
	x.value ++ ;
	// sum.value = price.value;
	sum.value = parseInt(x.value) * parseInt(p.value);
}

function del () {
	p = document.form.price;
	x = document.form.amount;
	sum = document.form.sum;
		if (x.value > 1) {
			x.value -- ;
            sum.value = parseInt(x.value) * parseInt(p.value);
		}
}

function change () {
	p = document.form.price;
	x = document.form.amount;
	sum = document.form.sum;

		if (x.value < 0) {
			x.value = 0;
		}
        sum.value = parseInt(x.value) * parseInt(p.value);
}

function inNumber(){
    if(event.keyCode<48 || event.keyCode>57){
       event.returnValue=false;
    }
}