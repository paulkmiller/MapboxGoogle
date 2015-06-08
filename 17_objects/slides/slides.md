##Objects

###aka Maps, hashes, dictionaries, associative arrays

    var myObject =
      {
        key: "Value",

        "key2": "Value Two", // Keys are just strings

        // More Keys and Values

      };



----

##Objects

Any key (that's a string) maps to any value

    var myObject2 =
      {
        aString: "I'm a value!",

        PI: 3.14159,

        someBoolean: true,

        aFunnnNnNnnnNnNNnction: function (anArgument)
          {
            console.log("I do stuff with my arguments!", anArgument)
          },

        anArray: [5, 4, 3, 2, 1],

        anotherObject: {
          more: "stuff"  
        }
      };

----

##Accessing an Object

    var answer = {
      value: 42,
      description: "The answer to life, the universe, and everything",
      question: null
    }

    // Subscript notation, just like arrays!
    console.log(   answer[ "value" ]    ); // 42

    // Dot notation, WARNING: doesn't always work!
    console.log(   answer.description    ); // Logs: "The answer to life..."

----

##Object Dot Notation

    var weird = {

      dottable : "You got me!",

      "cant-dot-me" : "You can catch me, if you try!"

    }

    weird.dottable // "You got me!"

    weird.cant-dot-me // Syntax error! Undefined weirdness (it thinks we're subtracting)

    weird["cant-dot-me"] // Gotchya

----

##Changing Object Values

    var sparse = {};

    // Add new values to any object
    sparse.abcd = 3;

    // Change and access existing values
    sparse.abcd = sparse.abcd + 5

----

## For-in loops

    var stateValues = {
      NY: 46.2,
      MA: 43.3,
      CA: 22.8
    };

    var stateNames = {
      NY: "New York",
      MA: "Massah-ahchuu-sits",
      CA: "California"
    }

    // Gives you the key, not the value!!
    for (var key in stateValues) {
      console.log(
          "The great state of " +
          stateNames[ key ] +
          " agrees " +
          stateValues[ key ] +
          "%"
      );
    }

----

## Common Objects We Already Use

* document
  * .getElementById()
  * .body
* event
  * .preventDefault()
* DOM nodes
  * .onclick
  * .innerHTML
  * .style
* $('li')
  * .click()
  * .val()
  * .html()

----

## When to use Objects

When you have data that is

* associative (names paired with values)
* many different types
* deep (objects as values)

----

![GeneralAssemb.ly](../img/icons/code_along.png)
##Code along - Hover Effects - Level One

[Hover Effects Codepen - Starter](http://codepen.io/nickgrace/pen/LErgXK)

----

## Choices

We're going to take a vote, like civilized gorillas.

We will split the class up if that seems best - it's not all or nothing.

1. Free lab time with instructors
  * Work on your final project
  * Or a recent exercise
  * Or a personal exercise

2. JSON! or "How the real world passes around large amounts of data" [See here](http://codepen.io/nickgrace/pen/qEKJLG?editors=101)

----

##Good night!

<img src="http://stream1.gifsoup.com/view4/1808205/noodle-broken-gorillaz-o.gif">
