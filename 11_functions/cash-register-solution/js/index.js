var total = 0;

function addvalue() {
	// Create our variables.
	var entryElement = document.getElementById('newEntry'),
		entriesElement = document.getElementById('entries'),
		totalElement = document.getElementById('total');

  // var entryvalue = parseFloat(entryElement.value);
  
  // if(isNaN(entryValue)){
  //   console.log('not a number, dude');
  // }

	// console.log(entryElement.value);

	var entry = entryElement.value;
	entry = parseFloat(entry);
	var currency = currencyFormat(entry);

	// console.log(entry);

	var entriesHTML = entriesElement.innerHTML;
	//console.log(entriesHTML);
	entriesHTML = entriesHTML + '<div>' + currency + '</div>';
	//console.log(entriesHTML);
	entriesElement.innerHTML = entriesHTML;

	total = total + entry;

	totalElement.innerHTML = currencyFormat(total);

	entryElement.value = '';

}

function currencyFormat(number) {
	var currency = parseFloat(number); //Force as number
	currency = currency.toFixed(2); //Force as number with 2 decimal places
	currency = '$' + currency;
	return currency;
}



// Set total value to 0.

// Listen for a click.
document.getElementById('entryBtn').onclick = addvalue;

// Parse our value and convert to currency.

// Build list

// Add up total.

