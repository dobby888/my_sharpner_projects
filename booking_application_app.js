/*

// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// LOGGING OUTPUT
alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');


// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned, const can not
age = 31;


// DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Brad';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
console.log(typeof z);


// STRINGS

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = 'Hello World';
let val;
// Get length
val = s.length;
// Change case
val = s.toUpperCase();
val = s.toLowerCase();
// Get sub string
val = s.substring(0, 5);
// Split into array
val = s.split('');



// ARRAYS - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));



// OBJECT LITERALS
const person = {
  firstName: 'John',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}

// Get single value
console.log(person.name)

// Get array value
console.log(person.hobbies[1]);

// Get embedded object
console.log(person.address.city);

// Add property
person.email = 'jdoe@gmail.com';

// Array of objects
const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isComplete: false
  },
  {
    id: 2,
    text: 'Dinner with wife',
    isComplete: false
  },
  {
    id: 3,
    text: 'Meeting with boss',
    isComplete: true
  }
];

// Get specific object value
console.log(todos[1].text);

// Format as JSON
console.log(JSON.stringify(todos));


// LOOPS

// For
for(let i = 0; i <= 10; i++){
  console.log(`For Loop Number: ${i}`);
}

// While
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++){
  console.log(` Todo ${i + 1}: ${todos[i].text}`);
}

// For...of Loop
for(let todo of todos) {
  console.log(todo.text);
}


// HIGH ORDER ARRAY METHODS (show prototype)

// forEach() - Loops through array
todos.forEach(function(todo, i, myTodos) {
  console.log(`${i + 1}: ${todo.text}`);
  console.log(myTodos);
});

// map() - Loop through and create new array
const todoTextArray = todos.map(function(todo) {
  return todo.text;
});

console.log(todoTextArray);

// filter() - Returns array based on condition
const todo1 = todos.filter(function(todo) {
  // Return only todos where id is 1
  return todo.id === 1; 
});


// CONDITIONALS

// Simple If/Else Statement
const x = 30;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10')
}

// Switch
color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
  case 'blue':
    console.log('color is blue');
  default:  
    console.log('color is not red or blue')
}

// Ternary operator / Shorthand if
const z = color === 'red' ? 10 : 20;



// FUNCTIONS
function greet(greeting = 'Hello', name) {
  if(!name) {
    // console.log(greeting);
    return greeting;
  } else {
    // console.log(`${greeting} ${name}`);
    return `${greeting} ${name}`;
  }
}


// ARROW FUNCTIONS
const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`;
console.log(greet('Hi'));


// OOP

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob); // Set to actual date object using Date constructor
  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
  // }
  // this.getFullName = function() {
  //   return `${this.firstName} ${this.lastName}`
  // }
}

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}


// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '7-8-80');
const person2 = new Person('Steve', 'Smith', '8-2-90');

console.log(person2);

// console.log(person1.getBirthYear());
// console.log(person1.getFullName());



// Built in constructors
const name = new String('Kevin');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// ES6 CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('John', 'Doe', '7-8-80');
console.log(person1.getBirthYear());


// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// EVENTS

// Mouse Event
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// Keyboard Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', e => {
  document.querySelector('.container').append(nameInput.value);
});


// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
*/
/*
console.log(window)

window.alert(1)//alert(1)


//SINGLE ELEMENT

console.log(document.getElementById('my-form'))

console.log(document.querySelector('.container'))//container is a class name so '.' should be used

console.log(document.querySelector('h1'))//h1 is a tag name so no need of '.'


//MULTIPLE ELEMENT

const items=document.querySelectorAll('.item');//node list s similar to arrays so we can use array methods on this
//generally query selectors are prefered over get element methods
console.log(document.getElementsByClassName('item'))//gives a html collection not a node list

items.forEach((item)=>console.log(item))


const ul=document.querySelector('.items');

ul.remove()

ul.lastElementChild.remove();

ul.firstElementChild.textContent='hello';
ul.children[1].innerText='Brad';
ul.lastElementChild.innerHTML='<h4>Hello</h1>';//adds html dynamically

const btn=document.querySelector('.btn');
btn.style.background='red';//changes submit button bg to red

btn.addEventListener('click',(e)=>{//2 parts of addeventlistener when first part takes place then second part should take place
    //instead of click we can also use mouseover and mouseout
    e.preventDefault();//click stays after submitting empty form cuz now form isnt submittind by default
    //console.log(e.target.className)//if not for above line then it just flashes('click'),(e)=>position of points on web page
    document.querySelector('#my-form').style.background='#ccc'//bg color changes to dark grey upon clicking submit
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>hello</h1>'
});


const myform=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

myform.addEventListener('submit',onsubmit);//upon clicking submit button onsubmit function takes place

function onsubmit(e){
    e.preventDefault();
    console.log(nameinput.value)//adding .value will give u the value u entered in the web page
    //if .value is not added then it will be giving u the actual input <input type="text" id="name">
    if(nameinput.value==="" || emailinput.value===""){
      alert('please enter fields');//alert msg pops up
     msg.classList.add('error');//error msg appears on the web page itself
     msg.innerHTML='please enter all fields';//text in error msg

     setTimeout(()=>msg.remove(),3000)//error msg goes away after 3 seconds
    }
    else{
      //console.log('success')
      const li=document.createElement('li');//creates a new list item using tag names
      li.appendChild(document.createTextNode(`${nameinput.value}:${emailinput.value}`));//DONOT FORGET to use backticks(`) instead of single quotes(') while using $
      //createElment creates a new html ele and createTextNode adds text content into that ele dynamically(during runtime)
      userlist.appendChild(li);//appending li to userlist ele; append function adds ele/content to an existing ele in html
      //overall the above code takes the values entered by user as name and email,combines them into a string,creates a new list item and adds this list item to userlist in the html document
      //appendchild adds a new html ele as a child of an existing html ele
      
      //add fields input to local storage
      localStorage.setItem('name',nameinput.value);
      localStorage.setItem('email',emailinput.value);
      
      //claer fields
      nameinput.value='';//reset the input fields to empty
      emailinput.value='';
    }

  }
*/

const myform=document.querySelector('#my-form');
const nameinput=document.querySelector('#name');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

var users=JSON.parse(localStorage.getItem('users')) || [];

users.forEach((user)=>{
  var li=document.createElement('li');
  li.textContent`${user.name}:${user.email}`;
  userlist.appendChild(li);
});

myform.addEventListener('submit',onsubmit);//upon clicking submit button onsubmit function takes place

function onsubmit(e){
    e.preventDefault();
    console.log(nameinput.value)//adding .value will give u the value u entered in the web page
    //if .value is not added then it will be giving u the actual input <input type="text" id="name">
    if(nameinput.value==="" || emailinput.value===""){
      alert('please enter fields');//alert msg pops up
     msg.classList.add('error');//error msg appears on the web page itself
     msg.innerHTML='please enter all fields';//text in error msg

     setTimeout(()=>msg.remove(),3000)//error msg goes away after 3 seconds
    }
    else{
      //adding the user input to an object
      var user={
        name:nameinput.value,
        email:emailinput.value,
      };
      users.push(user);//pushing new user to users array
      localStorage.setItem('users',JSON.s(users));//converting array/object into string
      var li=document.createElement('li');//adding new user to userlist
      li.textContent=`${user.name}:${user.email}`;
      userlist.appendChild(li);//appending li to userlist ele; append function adds ele/content to an existing ele in html
      //overall the above code takes the values entered by user as name and email,combines them into a string,creates a new list item and adds this list item to userlist in the html document
      //appendchild adds a new html ele as a child of an existing html ele
      
      nameinput.value='';//reset the input fields to empty
      emailinput.value='';
    }
  }

  //localStorage.setItem('obj',JSON.stringify(obj));

  let obj={
    name:"sree",
    age:24
  };//storing memory in an object
  
  var obj_str=JSON.stringify(obj);//converting the obj into string
  
  localStorage.setItem('obj',obj_str);//storing the values  in the obj in the string then storing them in the local storage
  
  var str_obj=JSON.parse(localStorage.getItem('obj'));//now convert the memory of the local storage object string back to object
  //console.log(str_obj)

var 


