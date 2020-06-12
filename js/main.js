// calculates the tip amount
function calculateTip(bill, percent) {
	return (bill * percent).toFixed(2);
}

// calculates the total, original bill plus tip
function calculateTotal(bill, tip) {
	return parseFloat(bill) + parseFloat(tip);
}

// calculates the total per person, total divided by people
function calculateSplit(total, people) {
	return (total / people).toFixed(2);
}

// calculates all functions
function calculateAll(event) {
	
	// prevents the form from taking the default form submit action
	event.preventDefault();
	
	// pulls the value of each input
	var percent = document.querySelector('#tip').value * 0.01;
	var bill = document.querySelector('#bill').value;
	var people = document.querySelector('#split').value;
	
	// performs each function
	var tip = calculateTip(bill, percent);
	var total = calculateTotal(tip, bill);
	var split = calculateSplit(total, people);
	
	// outputs the calculations
	document.querySelector('#tip-total').textContent = tip;
	document.querySelector('#new-total').textContent = total.toFixed(2);
	document.querySelector('#split-total').textContent = split;
	
}

// performs the function on button click
document.querySelector('#submit').addEventListener('click', calculateAll);