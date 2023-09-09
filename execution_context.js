
//SCOPE OF A VARIABLE//
function a(){
    console.log(b);
}
var b=10;
a();//prints 10


//...new codes...//
function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b=10;
a();//prints 10


//...new codes...//
function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
}
a();//prints 10


//...new codes...//
function a(){
    var b=10;
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log(b);//b is not defined



//LEXICAL ENVIRONMENT//

//TEMPORAL DEAD ZONE//
//console.log(a);//reference error bcuz value isnt yet initialised and the variable is in the temporal dead zone
let a=10;//scope is in the script....let and const would be allocated memory which is called as hoisting but they are stored in a different memory space than global and we cant access them before putting a value in them

//...new codes...//
//var a=100;//scope is in the global space as the variable would be attached to the global object which could b accessed using 'window' or 'this' in console 
let a=100;//throughs a syntax error=>doesnt code a single line of code if syntax error takes place and directly throughs error
console.log('hi');//throghs syntax error bcuz if double declaration
//above syntax error only if declaration is using let instead of var

//...new codes...//
console.log('hi');
let a=10;
var a=100;

//...new codes...//
console.log('hi');//prints hi
var a=10;
var a=100;
console.log(a);//prints 100

//...new codes...//
let a;
const b=1000;
a=10;//perfectly prints the assigned value as a is declared only once
console.log(a);


let a;
const b;//syntax error=>missing intializer(=) in const declaration,which means we must assign the value right at declaration itself
b=100;
a=10;
console.log(a);


//REFERENCE ERROR//when js engine tries to find a specific variable inside the memory and we cant access it=>tdz
console.log(a);//undefined
console.log(b);//reference errror=>temporal dead zone
console.log(c);//reference error=>tdz
console.log(k);//reference error=>not present in the memory 
var a=5;
let b=10;
const c=15;
console.log('ko')


//SYNTAX ERROR//
let b;
b=5;
var b=8;//syntax error due to double declaration of b(let,const)

const c;
c=12;//syntax error due to not not assigning value to const at declaration(const)

const m;//syntax error due to absence of declaration

var d 3;
let f 5;
const d 3;//syntax error for not using (=)


//TYPE ERROR//
console.log('hu')
const b=3;
b=3;//type error=>assignment to constant variable=>initialised at declaration itself bcz the type of variable is const type
console.log('ki')


//BY DECLARING ALL THE VARIABLES AT THE TOP OF THE CODE WE CAN MINIMIZE THE TEMPORAL DEAD ZONE TO 0

const a = 5;
let b=9;
var c = 6;
console.log(this.b);
console.log(window.b);
console.log(window.a);
console.log(this.a);
console.log(window.c);
console.log(this.c);
//window and this key words are only usable to access if variable is declared using var(variable would be in the global scope)


//ITERATE THROUGH OBJECT IN JS//
//for array
var nums=['ji','jo'];
nums.forEach(element => {
    console.log(element)
});

//for objects
var a={
    key1:'ko',
    key2:'lp',
    key3:'gy'
};
var b=Object.keys(a);
b.forEach(key=>{
    console.log(a[key])
})


//FOREACH() Vs. MAP//
//forEach():perform an action on each item in a collection but doesnt returns anything so nums will remain as undefined
var modified=[2,3,4,7].forEach(double);
function double(ele,index,arr){
    console.log('arr['+index+']='+ele*2);//arr[0]=4,arr[1]=6,arr[2]=8,arr[3]=14
    return ele*2;
}
console.log(modified);//undefined
//map():new array is given:lets u transform each item in a collection and creates a new collection with the tranformed values
modified=[2,3,4,7].map(double);
function double(ele,index,arr){
    console.log('arr['+index+']='+ele*2);//arr[0]=4,arr[1]=6,arr[2]=8,arr[3]=14
    return ele*2;
}
console.log(modified);//[4,6,8,14]


//COMPOUND STATEMENT OR BLOCK({}) AND ITS USAGE//
{
    //compound statement or BLOCK({})
    var a=10;
    console.log(a);
}
if(true)//syntax error cuz it expects a statement here
if(true)console.log('hi');//single statement
if(true)true;//it can be directly used like this if we only have one statement to use but if  we have multiple statements=>

if(true){
    //compond statement
    var a=10;
    console.log(a)
}//two statements are grouped in a compound statement to represent them as a single statement
//normally 'if' expects a single statement beside it


//BLOCK SCOPE:all the variables we can access inside the block=>block scope
{
    var a=10;//var is hoisted inside the global memory space even if it is declared inside  the block:GLOBAL SCOPE
    let b=20;//let and const are hoisted inside a separate memory space block scope:SCRIPT SCOPE
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(window.b);//undefined as let variable is not inside the global scope window cant be used to access it
}
//we cant access let, const declared inside a block outside of the block as they are only block scoped variables
//but we can access var outside block scope also as it is in the global memory scope
console.log(a);
console.log(b);//b is not defined,block scope wouldnt be there in the scope section in teh sources if we put debugger on this line
console.log(c);//c is not defined


//SHADOWING IN JS//
var a=100;
{
    var a=10;//shadows the above declaration
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);//shadowed by a=10; and modified the variable outside the scope

let b=100;//script scope:let and const are hoisted here if they are not inside a block
const c=40;
{
    var a=10;
    let b=20;//shadows the above declaration only inside the block scope=>block scope
    const c=30;
    console.log(a);
    console.log(b);//20
    console.log(c);//30
}
console.log(b);//100
console.log(c);//40

//shadowing works the same way even if they are placed indside a function
const c=100;
function x(){
    const c=30;
    console.log(c);
}
x();//30
console.log(c);//100
x();//30

//ILLEGAL SHADOWING//
var a=20;
{
    var a =20;
}

//...new codes...//
let d=39;
{
    let d=56;
}

//...new codes...//
const h=45;
{
    const h=58;
}

//...new codes...//
var b=20;
{
    let b =20;
}

//...new codes...//
let c=20;
{
    var c =20;//error:c is already declared=>illegal shadowing
}
//if we were to shadow a variable it shoiuld  not  cross the boundary of its scope

let e=78;
function x(){
    var e=89;//no error cuz e is inside  its   boundary and does not interferewith above e
}

const k=10;
{
    const k=78;
    console.log(k)
    {
        
        const k=90;//if k isnt declared here then k=78
        console.log(k);//90=>LEXICAL SCOPE:physically nearest c value
    }
    console.log(k);//78
}


//CLOSURE: function along with its lexical scope bundled together forms a closure
function x(){
    var a=7;
    console.log(a);
    function y(){
        console.log(a);//a's value is not stored here its just a reference to variable a which would already be stored in the lexical/parent scope of the closure funciton y() 
    }
    return y;
 }
var z=x();//this is the closure function
console.log(z);//y function closure along with the lexical scope of its parent is returned  and put inside z variable and x context is totally removed
//..........
z();//function when they were returned from another function they still maintains there lexical scope or where they were actually present

//OR//

function x(){
    var a=7;
    console.log(a);
    return function y(){
        console.log(a);
    }
}
var z=x();
console.log(z);
z();


function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;//a=100 due to shadowing
    return y;
}
var z=x();
console.log(z);
z();


function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();

//when debugger is placed on console.log(a,b)
//closure (x) along with its parents variable a=7;
//closure (z) along with its parent variable b=900;

//even if the function y() is returned outside somewhere it would still retain these a,b memory locations


//DIFFERENCE BETWEEN CALL, APPLY AND BIND//
//CALL//
var obj={
    nums:2
};
var addtothis=function(a,b,c){

    return this.nums+a+b+c;
};

console.log(addtothis.call(obj,1,2,3));//8
//functionname.call(obj,functionarguments)

var arr=[1,2,3];//apply expects array format input only
console.log(addtothis.apply(obj,arr));
var bound=addtothis.bind(obj);
//console.dir(bound)//ƒ bound addtothis()
console.log(bound(1,2,3));//8

//CALL FUNCTIONALITY//

let add=function (c){
    console.log(this.a+this.b+c);
};
let obj={
    a:1,
    b:2
};
add.call(obj,3);

//console.dir([]);//dir:provides the list of properties and more detailed information about the provided argument(properties and methods also);log:displays vlaue provided in the argument 
//...new code...//
let argstoarray=function(){
    //console.log(arguments);//gives back an object looking output but not an array
    console.log([].slice.call(arguments));//borrowing array properties(slice property of the array is borrowed by creating an empty array using [] and by using .slice funcitonality) to turn the given input into an array
};//'arguments' variable holds all the values that were given when the function os called
argstoarray(1,2,3);//code takes the value passed to the fucniton and converts them into an array like object using slice method borrowed from an empty array

//...new code...//
let mammal=function(legs){
    this.legs=legs;
};
let cat=function(legs,isdomesticated){
    mammal.call(this,legs);//use 'this' keyword for object related code while using call or apply
    this.isdomesticated=isdomesticated;
};
let lion=new cat(4,false);
console.log(lion);

//APPLY FUNCTIONALITY//
let num=[1,2,3];
//console.log(Math.min(1,2,3));//but arrays doesnt have this functionality so we should convert array into an argument
console.log(Math.min.apply(null,num));


//BIND FUNCTIONALITY//
let button=function(content){
    this.content=content;
};
button.prototype.click=function(){
    console.log(`${this.content} clicked`)
};
let newbutton=new button('add');

//let looseclick=newbutton.click;
//looseclick();//undefined clicked=>now it not bound

let boundbutton=newbutton.click.bind(newbutton);
boundbutton();//now its bound together


let myobj={
    asyncGet(cb){
        cb();
    },
    parse(){
        console.log('parse called');
    },
    render(){
        this.asyncGet(function(){
            this.parse()
        }.bind(this))
    }
}

myobj.render();


//SETTIMEOUT//
function x(){
    var i=1;
    setTimeout(function(){
        console.log(i);
    },1000);//to dispaly value of i in 1 sec(1000 milliseconds)
    console.log('hi')//first prints hi then prints i's value after 1 sec
}
x();


//...new code...//
function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log('hi')//first prints hi then prints 6,5 times with 1 sec interval
}
x();


function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    console.log('hi')
}
x();


function x(){
    for(var i=1;i<=5;i++){
       function close(a){
        setTimeout(function(){
            console.log(a);
        },a*1000);
       }
       close(i);//close function forms a closure with access to varibale 'a' from funciton 'x' even after 'x' has finished executing
    }
    console.log('hi')//first prints hi then prints 1-5 with 1 sec interval
}
x();


const name=(arr)=>{
    let index=0;
    let print=function(){
        for(var i=0;i<name.length;i++){
            console.log(`Hello ${arr[index]}`);
        }
        index++;
    };
    return print.bind(this);
};
let fun = name(["Ram", "Shyam"]);
fun();
fun();



//a();
//b();//error
//FUNCTION STATEMENT//
function a(){
    console.log('a called');
};
a();

//FUNCTION EXPRESSION//function acts like a value which we can initialise
var b=function (){
    console.log('b called');
};
b();

//
//FUNCITON DECLARATION//function statement is also known as function declaration

//ANONYMOUS FUNCTION//a function without a name is known as anonymous function=>doent have its own identity,so we must assign them to a variable
var c=function (){
    console.log('c called');
}
c();

//NAMED FUNCTION EXPRESSION//
var d=function e(){
    console.log('d called');
    console.log(e)//never use e() in here=>it repeatedly calls the function
}
d();
//corner case:calling e() through error:e is not defined=>e is not a funciton in the global scope but a local variable=>we can access it inside the function

//DIFFERENCE BETWEEN PARAMETERS AND ARGUMENTS//
//parameters:local variables/labels/identifiers of a function are known as parameters
//arguments:values which are passed onto the functions are known as arguments

function f(g,h){//g,h=>parameters
    console.log(g+h);
}
f(1,2);//1,2=>arguments

//FIRST CLASS FUNCTIONS//ability to use functions as values is known as function class function,passed into another function or return from a function
var i=function (param){
    console.log(param);
}
//two ways to pass a function inside another funciton
function i(callback){
    console.log('hi');
    callback;//call the provided callback function
};
function j(){
    console.log('ji');
}
i(j);//passing function j as an argument to function i
//...new code..//
var k=function (param1){
    return function (){
        console.log('hi');
    }
}
console.log(k());

//FIRST CLASS CITIZENS//first class functions are also known as first class citizens

//ARROW FUNCTION//


//CURRYING IN JAVASCRIPT//one function calling another function and we want to call/use both of them
function addconst(constant){
    return (value)=>{
        return value+constant;
    }
}
console.log(addconst(15)(7));//17


//...new code...//
function addconst(constant){
    return (value)=>{
        return ()=> value+constant;
    }
}
const a=addconst(-);
console.log(a());


//CALL BACK FUNCTION IN JAVASCRIPT//functions are first class citizens in js=>u can take a function and pass it into another function, while doing that the function which is passed inside the another function is known as the  function.call back functions give us access to whole asynchronus world in a synchronous single threaded(single call stack) language
//in simple terms CALLBACK:When something is done or an event happens, call this function 
//bcuz of callback funcitons we can do async things inside javascript
setTimeout(function z(){//asynchronous settimeout takes a callback function call back funciton z=>funciton z is passed on to settimeout and it is called sometime else(5000 ms) in our program
    console.log('timer')
},5000)
function x(y){
    console.log('x');
    y();
}
x(function y(){//y is the callback function:y functions's responsibility is given to function x
    console.log('y')
});
//javascript doesnt wait for set time out to finish and proceeds to execute the remaining code=>call back function gives us the power of asynchronity
//synchronous: to execute one line at a time
//setitimeout asynchronous operations are not possible without call abck fucntions
//js only have one call stack.each and every code executed in js is executed through call stack only all the functions including set timeer fucntions also.so,if any operation blocks this call stack that function is said to be BLOCKING THE MAIN THREAD
//if a funtion x have very heavy operation which takes around 20/30 secs to cmplt/execute that function, so within that time js wont be able to execute any other functon in that code
//=>everyting would be blocked on the code=>we mustnt block the call stack/main thread
//=>use asynchronous opearations on codes which would take time like tha set time out code in above function
//=>which would mean to use call back/first class fucntions to use asynchronous operations to avoid blocking the main thread  


//CALLBACK FUNCTION//when click_me button is clicked the call back fucntion xyz will be automatically pushed into the call stack and execute it
document.getElementById("click_me").addEventListener("click",function xyz(){
    console.log("btton clicked")
});

//CLOSURES//count how many time the click me button is clicked and print the count 
//method 1:might not be a good soln
let count=0;
document.getElementById("click_me").addEventListener("click",function xyz(){
    console.log("btton clicked",count++)
});

//method 2:to make the count secure so that it cant be modified with any other part of code=>USE CLOSURES(they are used for data hiding)
function attachEventListener(){//fucntion xyz() along with the lexical scope of the global variable count is bundled together forming the closure
        let count=0;//lexical scope of fucntion xyz
    document.getElementById("click_me").addEventListener("click",function xyz(){
        console.log("btton clicked",count++)
    });
}
attachEventListener();//funciton xyz would have access to the closure addeventlistener fucntion along with its lexical scope which contains variable count which increases upon clicking the click me button

//CLOSURES AND SCOPE IN EVENTLOSTENER IN ELEMENTS TAB ALONG WITH HANDLER

//Garbage collection & removeeventlistener
//eventlisteners forms closure and take up a lot of space even if the call stack is empty, it doesnt free's up the memory bcuz it holds up the memory to add click and counts when someone clickes the click me button=>this is the reasin y removeeventlisteners are important=>slows up the browser
//=>when we remove the above event listener all the variables and fucnitons held by that event listener will be the garbage collected


//FAT ARROWS//"use strict"
"use stict";
//nrml funciton method
var getA=function (a){
    return a;
};
console.log(getA(1));
//same code but using fat arrow function
let getB=a=>a;
console.log(getB(2));

//let square=a=>a*a;
//console.log(square(2));
//same code as above but with more rules
var a=4;
let square=()=>{return a*a};//while using a separate variable make sure to use empty parenthesis() or underscore(_)
console.log(square())

let cube=(a)=>{return a*a*a};
console.log(cube(2));

let multi=(a,b)=>{return a*b};
console.log(multi(2,5))


//WHY TO USE FAT ARROW INSTEAD OF ANY NORMAL FUNCITON//
var x=function(){
    var that=this;//inside settimeout funciton this =that
    this.val=1;
    setTimeout(function(){
        that.val++;//during timeout value of val is incremented by one
        console.log(that.val)
    },1)
};
var xx=new x();


//above code using fat arrow fucntion
var x=function(){
    this.val=1;
    setTimeout(()=>{
        this.val++;
        console.log(this.val)
    },1)
};
var xx=new x();


//function
var x=function(){//i would get the first ele 
    console.log(arguments[0])
};
x(1,2,3);

//fat arrow funciton
var x=(...n)=>{
    console.log(n[0])
};
x(1,2,3)

//FUNCTION CURRYING//using 2 ways=>bind funcitons,closures concept
let multiply=function (x,y){
    console.log(x*y);
}

let multiplybytwo=multiply.bind(this,2);
//upon calling bind method it creates a copy of the multiply funciton and it doesnt invoke it directly
//above code is similar to:let multiplybytwo=function (y){
//                             let x=2;
//                             console.log(x*y);
//                         }

multiplybytwo(5);

let multiplybythree=multiply.bind(this,3);
multiplybythree(5);
//FUNCITON CURRYING using bind method:making a copy of multiply method to create more similar methods by pre setting some arguments inside functions
//=>if we pass both x,y arguments inside the new method itself then it would ignore arguments passed while calling that fucntion
//=>if we dont pass any arguments inside the new method other than 'this' and pass both the documents inside while calling that   fucntion it would consider the arguments passed while calling that fucniton


let multiply=function (x){
    return function (y){
        console.log(x*y);//here this fucntion would be having access to x even after the return of the function=>x,funciton(y) are in a box and x value is pre set such that it would be accessed by funcition(y)=>currying funciton using closure
    }
}
let multiplybythree=multiply(3);
multiplybythree(5);

//this.name="valli";
let me={
    name:'sree',//thisisarrow fucniton could take the value of name in its nearest parent ele but in this case there is no parent ele for that fucntion and if the above this.name="valli"; would actually be there in the then this fucntion could take on the value of valli in the name place as it would be the from the parent ele of the funciton thisisarrow
    //this is the global scope of the fucniton so we cant take the value of name mentioned in this global scope
    thisisarrow:()=>{
        console.log('my name is '+this.name);//o/p:my name is------no 'this' binding in here
    },
    thisisregular(){
        console.log('my name is '+this.name);//o/p:my name is sree-----'this' binding works here
    }
};
me.thisisarrow();
me.thisisregular();

//....code using normal funciton .....//
let me={
    name:"sree",
    age:26,
    thisisarrow:()=>{
        console.log("my name is "+this.name);//no 'this' bonding here
    },
    printalldetailsofuser(){
        function findname(){
            console.log("my name is "+this.name);
        }
        function printage(){
            console.log("my age is "+this.age);
        }
        findname();
        printage();
        //'this' bonding works here
    }
};
me.thisisarrow();//my name is
me.printalldetailsofuser();//my name is ,my age is undefined

//...above code works perfectly fine by using fat arrow fucntions...//
let me={
    name:"sree",
    age:26,
    thisisarrow:()=>{//above 'name' is local scope not its parents scope so thsi.name cant get the value of name from this above name variable
        console.log("my name is "+this.name);//no 'this' bonding here
    },
    printalldetailsofuser(){
        const findname=()=>{//fat arrow funciton doesnt have its own 'this'property so it starts to look for its parent 'this' property to assigned the required this.name property
            console.log("my name is "+this.name);
        }
        const printage=()=>{
            console.log("my age is "+this.age);
        }
        findname();
        printage();
        //'this' bonding works here because by using a  normal funcition before using fat arrow function we would be creating a parent fucniton for the fat arrow fucniton and it could copy the 'this' assigned variable from its parents context or scope
    }
};
me.printalldetailsofuser();//my name is sree,my name is 26


//...code using NORMAL FUNCTION and 'this' keyword within its LOCAL SCOPE...//
let obj={
    a:2,
    x:function(){
        console.log(this.a);
    }
}
obj.x();

//...code using FAT ARROW FUNCTION and 'this' keyword in its PARENTS SCOPE...//

this.b=7;
let obj1={
    b:4,
    y:()=>{
        console.log(this.b);
    }
}
obj1.y();


//EVENT LOOP//

//SPREAD OPERATORS FOR OBJECTS//
//ITERATING THROUGH OBJECTSS//
let obj1={
    name:"sree",
    name1:"sree1",
    name2:"sree2"
};
//let obj2=obj1=>passes the obj1 as a reference in obj2=>we cant change calues of obj2 without changing values in obj1
let obj2={...obj1};//instead of passing obj1 as a reference this makes another copy of obj1 in obj2=>we can iterate through and modify ibj2 without modifying obj1
obj2['name']='valli';//changes obj2 name='valli'
console.log(obj2);
obj2.key1='hari'//creates new key1:'hari'
console.log(obj1);
console.log(obj2);
let obj3={...obj1,name1:'pavan',key2:'latha'};//instead of wrirting whole line we can modify the object in the same line
console.log(obj3)

//SPREAD OPERATORS IN ARRAY//
let arr=[1,2];
let arr1=[3,4];
let arr3=[...arr,...arr1];
console.log(arr3)


//ARRAY OF OBJECTS//
let arr1=[{a:2},{b:4},{c:6}];
let arr2=[3,5];
let arr4=[{d:8}];
let arr3=[...arr1,...arr2,...arr4];
console.log(arr3)

console.log('a');

console.log('b');

setTimeout(() => console.log('e'), 1000)

setTimeout(() => console.log('c'), 0)

console.log('d')












