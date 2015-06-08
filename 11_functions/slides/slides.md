##Agenda

* Questions
* Functions
* Anonymous Functions

---

##Questions

Got any?

---

##Functions

Chunks of code that help us:

* Stay organized
* Not repeat ourselves
* Control the order things happen

---

##Function Syntax

```
var functionName = function( parameter ) {
    code;
};

functionName();
```

* Declare the function using var, and then give it a name.
* Use the function keyword to tell the computer that you are making a function.
* The bit in the parentheses is called the parameter. Think of it as a placeholder word that we give a specific value when we call the function.
* Write your block of reusable code between { }. Every line of code in this block must end with a ;
* Execute the function by calling it.

---

##Function Syntax

```
var todaysWeather = function( conditions ) {
    console.log("Today is " + conditions);
};

todaysWeather('sunny');
```

Console results:
```
Today is sunny
```

---

##Function Syntax

```
function helloWorld(){
	console.log('hello!');
}
```

If this were our only javascript, nothing would ever happen!

Defining a function does not cause it to run.

---

##Function Calls

```
function helloWorld(){
	console.log('hello!');
}

console.log('world!');

helloWorld(); //this is how we call a function!
```

Console results:
```
world!
hello!
```

---

##Function Arguments

Arguments give us a way to tell a function to use certain data.

```
function greetPerson(greeting, name){
	console.log(greeting + ', ' + name + '.');
}

var message = 'Welcome to FEWD12';

greetPerson(message, 'Donatello');
greetPerson(message, 'Michaelangelo');
```

Console results:
```
Welcome to FEWD12, Donatello.
Welcome to FEWD12, Michaelangelo.
```

--

##Function Arguments

Inside of a function, an argument is like a variable.

```
function hello(message){
	if(message === 'goodbye') {
		message = 'hello';
		console.log('you say goodbye, and I say');
	}
	else {
		console.log(message);
	}

	console.log(message);
}

hello('hello');
hello('goodbye');
```

Console results:
```
hello
hello
you say goodbye, and I say
hello
```
---

##Function Arguments

```
function add(x, y) {
  var total = x + y;
  return total;
}

add(2, 3); //this is how we call a function!
```

Console results:
```
5
```

---

##Function returns

Functions can give back data too! `return` is the magic word

```
var timesTwo = function(number) {
    return number * 2;
};

var newNumber = timesTwo(3);
console.log(newNumber);

```

Console results:
```
6
```

---

##Function returns

```
function winningHand(dealer, player) {
	if(player > dealer && player <= 21){
		return true;
	}
	else {
		return false;
	}
}

var playerWins = winningHand(18, 20);

if(playerWins){
	console.log('You win!!');
}
else {
	console.log('The dealer wins, sorry buddy');
}

```

Console results:
```
You win!!
```

---

##Organizing Function

Where do you put functions

* Helpful to group them by purpose
	* click handlers, validations, etc.
* Good practice to define them before using them

---

![GeneralAssemb.ly](../img/icons/code_along.png)
##Cash Register

---


##Anonymous Functions

Functions don't always need a name (hence, anonymous)
```
document.getElementById('myBtn').onclick = function(){
	// do some stuff
}
```

```
var myFunction = function(){
	// do some stuff
}

myFunction(); // this variable has a function in it!
```

---


![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##Rock, Paper, Scissors

---

##Good night!

<img src="../img/unit_2/space_bear.gif">
