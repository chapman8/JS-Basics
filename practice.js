//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name) {
  if (name === 'Tyler') {
    return true;
  } 
  else {
    return false;
  }
};


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
var getName = function() {
  var name = prompt("Name?");
  return name;
};


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function() {
  var userName = getName();
  alert("Welcome, " + userName);
};


//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

var adder = function () {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }
  return total;
  alert("The Total Number was " + total);
};



//Next Problem



//What is the difference between arguments and parameters?

//A parameter goes into the definition of a function. 
//The Parameter is then replaced with an argument when you call the function. 


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

/*Falsy Value:
false
0 (zero)
"" (empty string)
null
undefined
NaN (a special Number value meaning Not-a-Number!)

To check if falsy:*/
if (val !== false) {
  alert("This is not a falsy")
};





//Next Problem



//Create a function called myName that returns your name

var myName = function() {
  var answer = "Jeff Chapman";
  return answer;
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName
alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function () {
  return function () {
    name = "Jeff";
    return name;
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
