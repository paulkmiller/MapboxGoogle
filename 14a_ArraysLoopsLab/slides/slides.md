![GeneralAssemb.ly](../img/icons/FEWD_Logo.png)

#FEWD - Logic and Arrays

---


##Agenda

* If Statements
* Loops
* Arrays

---
##If Statements

--

## IF

It simply states that if this condition is true , do this.

```
if (answer === 15) {
  // code that runs if the condition is true
  console.log('Told you so!');
}
```
--

## Else

A fallback to an if statement. This will only get executed if the previous statement did not.

```
if (gender == "female") {
  // statement1: code that runs if condition is true
  console.log("Hello, miss!");
} else {
  // statement2: code that runs if condition is false
  console.log("Hello, sir!");
}
```
--
## Else If

This is like an else statement, but with its own condition. It will only run if its condition is true, and the previous statement's condition was false.

```
if (someNumber > 10) {
  console.log("Numbers larger than 10 are not allowed.");
} else if (someNumber < 0) {
  console.log("Negative numbers are not allowed.");
} else {
  console.log("Nice number!");
}
```
---

##Loops

Loops execute repetitive code. 

--

##Incrementing

In javascript, especially for loops, it's important to track your state so you know where you are in a process.

*	Set a variable with the purpose to track the state
*	Use a stepped increment (```++```) to increase the value by 1
*	Use a stepped decrement to decrease the value by 1

---

## For Loops

You use for loops if you know how often you'll loop. The most often used variable name in loops is "i".

```
for (var i = 0; i < 5; i++) {
  console.log(i); // Prints the numbers from 0 to 4
}
```
--

## While Loops

You use while loops if you don't know how often you'll loop. In some cases, the loop will never occur. 

```
var x = 0;
while (x < 5) {
  console.log(x); // Prints numbers from 0 to 4
  x++;
}
```
--
## Do While Loops

You use do while loops if you have to loop at least once, but if you don't know how often.

```
var x = 0;
do {
    console.log(x);  // Prints numbers from 0 to 4
    x++;
} while (x < 5);
```
---
![GeneralAssemb.ly](../img/icons/code_along.png)
##FizzBuzz
---

##Arrays

What is an array?

What if we had a collection of images that we wanted to display to the screen one at a time? How could we store all the images? 

---


##Declaring Arrays

var myArr = new Array();

*	declaring an empty array using the Array constructor.

---


##Declaring Arrays

var myArr = [ ];

*	declaring an empty array using literal notation.
	
---

##Declaring Arrays

myArr = ['Hello', 54.3, true];

*	Arrays are filled with elements: i.e. myArr3 = [element, anotherElement];
*	Elements can be strings, numbers, or booleans.
	

---

##Declaring Arrays
	
	
If you leave a blank spot in an array it creates a blank shelf space (undefined) placeholder.

---


##Arrays Indexing

![Array Indexing](../img/unit_1/array_index_diagram.png)

---

##Arrays Indexing

![Array Indexing](../img/unit_1/arrays_position_diagram.png)


---


##Arrays Indexing

Array elements can be fetched by their index number (starts from 0).

	myArr = ['Hello', , 54.3, true];

	console.log(myArr[0]); //prints Hello
	console.log(myArr[1]); //prints undefined
	console.log(myArr[2]); //prints 54.3
	console.log(myArr[3]); //prints true
	
---


##Arrays Indexing

We can insert new values into any space in the array using the positions index.

	myArr[1] = 'Stuff';


---


##Arrays Indexing

We can overwrite all the elements of an array simply by giving the array new values or by setting an array equal to a different array.
```	
	var fruits = ['Apples', 'Oranges', 'Pears', 'Bananas'];
	var myArr=[1,2,3];
	myArr = fruits;
	
	console.log(myArr); //prints Apples, Oranges, Pears, Bananas
```
---

##Array Length

What if I would like to know how long my array is (how many elements)?
	
	console.log(myArr.length); //prints 4

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##Arrays

---


##Iterate Over Array

Allows you to run code using each element from the array as a value
Syntax:

	Array.ForEach

---


##Array Length
```
	var fruits=['Banana','Apple','Pear'];
		fruits.forEach(function(element,index){
		console.log(element,index);
	});
```
<aside class="notes">
Element is the item from the array
Index is the item’s position in the array
As always, code we want to execute goes between curly braces
</aside>

---

![GeneralAssemb.ly](../img/icons/exercise_icon_md.png)
##Carousel



