class car{//creating a car
    constructor(c="blue",s=80,ty=8){//dont change attributes order
      this.colour=c;//attribute colour is initialised with "c"
      this.speed=s;
      this.tyres=ty;
    }
    print_attributes(){//creating a function
      console.log(this.colour);
      console.log(this.speed);
      console.log(this.tyres);
    }//this keyword referes whichever obj is calling the function print_attributes and we cannot use initialisations instead of attributes while calling or defining
    calculate_distance(time){//can take time=60===>then 6000,12000
      console.log(this.speed*time);
    }
  }
  /*var mysantro=new car();
  mysantro.colour="red";//to create attributes we have to use the object variable
  mysantro.speed=100;
  mysantro.tyres=4;
  mysantro.print_attributes();
  
  
  
  var yoursantro=new car();
  yoursantro.colour="white";
  yoursantro.speed=100;
  yoursantro.tyres=4;
  yoursantro.print_attributes();*/
  
  var mysantro=new car("red",100,4);
  mysantro.print_attributes();
  mysantro.calculate_distance(60);
  //we can also write console.log(mysantro.calculate_distance(60)),if in the above function return is used instead of console.log()
  
  var yoursantro=new car("white",200,6);
  yoursantro.print_attributes();
  yoursantro.calculate_distance(120);
  base_santro=new car();//if nothing specific is mentioned then default values will be taken
  base_santro.print_attributes();
  
  
  class carx{// in javascript one class can only have one constructor
    color="";//attribute
    constructor(color="maroon",year=2021,wheels){//intialises value and assign the value during run time
      this.color=color//(this) calls the obj like car1,car2
      this.year=year;
      this.wheels=wheels;
    }
    travelling(){
      console.log("travelling to home dobby")
    }
    travelling(){
      console.log("travelling to home dobby")
    }//if function with same name and 
    no_of_years=function(x){//2nd method to create a function
      console.log(x-this.year);
    }
    no_of_years=function(x,y){
      console.log(x+y-this.year);
    }
  }
  let car1=new carx("pink",2019,4);//new keyword alloates memory by initialising the obj by creating a memory soace
  car1.color="red";
  console.log(car1.color,car1.year);
  let car2=new carx();
  car2.color="blue";
  console.log(car2.color);
  car2.travelling();//calls a funcion/method ()
  //car2.no_of_years(2031);
  car2.no_of_years(2031,2);//2031+2=2033;2033-2021=12
  var car3=new carx("grey");
  console.log(car3.color);
  var car4=new carx();
  console.log(car4.color);
  
  
  console.log("INHERITANCE");
  
  class a{
    constructor(c,d){
      this.c=c;
      this.d=d;
    }
    display(){
      console.log(this.c);
      console.log("a is invoked");
    }hello(){
      console.log("hello u r in class a")
    }
  }
  class b extends a{//we should inherite the class before using the functions/methoids/constructors in it
    constructor(a,b,c,d){//define the variables in the constructor befor calling the constructor
      super(c,d);//calls the above parent constructor using super keyword
      this.a=a;
      this.b=b;
    }
    hello(){
      super.hello();//function over riding using super keyword
      console.log("hello u r in class b");
    }
    display(){
      super.display();//display function in the parent class is called(function over riding)==>this.c,"a is invoked"
      console.log("b is invoked");
    }
  }
  var c=new b(1,2,3,4);
  c.display();
  c.hello();//first display() method is checked in class b if it is there then it gets executed and then the searching stops if it isnt there then the searching is continued upto the parent class until the class with the required function is found*/
  
  /*console.log("ACCESS NON STATIC VARIABLE/METHOD USING A STATIC METHOD===>NOT POSSIBLE");
  
  class college {
    static c_name;
    cgpa;
  
    static student_details() {// the computer gets confused as in which obj cgpa should it be considering
      console.log(college.c_name);
      console.log(this.cgpa);
    }
  }*/
  
  class cary{
    print_details(){
      console.log(cary.company_name);
      console.log(this.color);
    }
  }
  cary.company_name="hyundai";
  var obj=new cary();
  obj.color="red";
  obj.company_name="maruti";
  obj.print_details()
  
  
  console.log("STATIC AND NON-STATIC");
  
  class college{  
    static c_name="IIT";//static variable will be same to all the obj in the class
      constructor(cgpa){
      this.cgpa=cgpa;
    }
    print_deatails(){
      console.log(college.c_name);
      console.log(this.color)
    }
  }
  college.c_name="JNTUACEK";//c_name is overriden to jntuacek
  var ram=new college(9.2);
  let arun=new college(9.5);
  let m=new college(9.7);
  console.log(college.c_name,ram.cgpa,arun.cgpa,m.cgpa);
  console.log(college.c_name);
  ram.color="red";
  ram.c_name="IIT bombay";
  ram.print_deatails();
  
  
//SOME IMPORTANT DEFINITIONS//
/*
OBJECT ORIENTED PROGRAMMING
good design practices which makes a cde to be readable by anyone by following a certain rules
factory(classes:specifies the properties (attributes) an object can have and the actions (methods) it can perform and can create multiple objects with similar characteristics.)--->products(objects:we impliment the class in objects to get the req. o/p)
attributes:properties of objects(ex. for cars colour, speed, no.of wheels;for humans colour,height,weigth)
functions:reusable code which the other person posseses and instead of writing the same code again and again we can just call the function
constructors:first one to get called which are used to initialize the object
destructors:special functions that are called automatically when an object is destroyed or goes out of scope. Destructors allow for performing cleanup operations, releasing resources, or finalizing the object before its memory is freed.
Four Pillars of Object-Oriented Programming (OOP): The four pillars of OOP are the guiding principles that define the core concepts and features of object-oriented programming:
Encapsulation: Encapsulation is the bundling of data and related behaviors (methods) together in a single unit called an object. It promotes data hiding and provides a way to control access to the object's properties and methods.
Inheritance:b(objects/classes) extends a(objects/classes) or b inherits a===>it automatically inherits all the properties and methods of a and if we want to modify anything in the code instead of modifying every statement we can modify the main statement  
 single inheritance 
 multi inheritance
 multilevel inheritance===>diamond prblmn 
Polymorphism: 
  function overloading:2 functions with same names but diff. parameters==>not supported in javascript
  function overriding:overriding the parent method
Abstraction:we dont allow the user to directly set the value but through a function
Map and Set: Map and Set are built-in data structures in many programming languages, including JavaScript.
Map: A Map is a collection of key-value pairs, where each key is unique. It provides an efficient way to store, access, and update data based on a key. Maps are useful when you need to associate values with specific identifiers or perform quick lookups based on keys.
b extends a or b inherits aSet: A Set is a collection of unique values, where each value occurs only once. It allows you to store and retrieve values without any specific order. Sets are helpful when you want to keep a collection of distinct elements or check for the presence of a value without worrying about duplicates
//STATIC AND NON STATIC KEYWORDS:
static=student name,marks,surname,fav subject,elective subject,sports
nonstatic=college name,
//SIMPLER TERMS
  1. Functions: Functions are like small, reusable blocks of code that perform specific tasks. They help break down complex problems into smaller, manageable parts.

2. Classes: Think of classes as blueprints or templates for creating objects. Just like a blueprint for a house defines its structure and features, a class defines the attributes (characteristics) and behaviors (actions) of objects.

3. Objects: Objects are like real instances based on the blueprints (classes). They have their own unique characteristics (attributes) and can perform actions (behaviors) defined by the class they belong to.

4. Map and Set: A map is like a dictionary where you have a word (key) and its corresponding definition (value). It helps you quickly look up a definition by using the word. A set is like a collection of unique items, where each item appears only once.

5. Destructor: When an object is no longer needed, the destructor is like a cleanup crew that takes care of freeing up resources and doing any necessary final tasks before the object is removed.

6. Constructors: Constructors are like special functions that are called when an object is created. They help set up the initial values of the object's attributes, so it's ready to be used.

7. Binary search: Binary search is like finding a specific item in a sorted list by repeatedly dividing the list in half. It quickly eliminates half of the remaining options each time until it finds the desired item or determines it's not in the list.

8. Hash table: A hash table is like a special table that helps you store and retrieve data quickly. It uses a unique identifier (hash value) for each piece of data to determine where it should be stored. It's similar to using an index in a book to quickly find the page with the information you need.

Four pillars of object-oriented programming:

1. Encapsulation: Encapsulation is like putting related things together in a box. It keeps the inner details hidden and provides a clear way to interact with the box, so you don't have to worry about what's inside.

2. Inheritance: Inheritance is like passing down traits from parents to children. It allows you to create new classes based on existing ones and inherit their attributes and behaviors. It's like a child inheriting their parent's eye color or talents.

3. Polymorphism: Polymorphism is like having different forms of the same thing. It allows objects to be treated in a general way, even if they belong to different classes. For example, a bird and a dog can both make a sound, even though they do it differently.

4. Abstraction: Abstraction is like simplifying things by focusing on the most important parts. It hides unnecessary details and provides a clear, simplified view. It's like using a remote control to operate a TV without knowing how the internal circuits work.
 */  