document.getElementById("demo").innerHTML="<h1>hello world!</h1>";//not only for texts(variables and numbers but also for headings,images,paragraphs,links....)
//document.getElementById("demo").textContent="<h1>hello world!<h1>";//only for letters and numbers
document.getElementById("demo").innerHTML+="<li>item 3</li>"
//one more way//
let demo=document.getElementById("demo");
let list=document.createElement("li");
list.textContent="item 3";
demo.appendChild(list)
console.log(document.getElementById("demo").innerHTML);
document.getElementById("demo1").innerHTML="<div>div element<div>";
var data = { name: "John", age: 30 };
var template = `<p>Name: ${data.name}, Age: ${data.age}</p>`;
document.getElementById("demo2").innerHTML = template;
document.getElementById("name").value="valli";//to change the value of the element
document.getElementById("demo").style.color="red";
document.getElementById("demo").style.border="2px solid red";
document.getElementById("demo").style.backgroundColor="blue";
document.getElementById("demo").style.fontStyle="italic";
document.getElementById("demo").setAttribute("value","valli");
document.replaceChild("demo","new_ele")