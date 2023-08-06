/*
//GETELEMENTBYID
    var headertitle=document.getElementById('header-title');
    var header=document.getElementById('main-header');

    console.log(headertitle)
    headertitle.textContent='hello';
    headertitle.innerText='good bye';//overrides the above
    //
    console.log(headertitle.innerText);//even after style="display:none" textContent disregards the span and displays item lister 123 in console page (only) but innertext removes the 123 considering the span
    //innertext pays attention to the style and textcontent doesnt
    headertitle.innerHTML='<h3>hello</h3>'//doesnt changes the hello to h3 instead it places h3 hello inside h1
    //we can use any selectors for the above operations instead of getelementbyid
    headertitle.style.borderBottom='solid 3px #000';//border line under the header title only
    header.style.borderBottom='solid 3px #000';//border line under the full actual main header
    


    //GETELEMENTSBYCLASSNAME
    
    var items=document.getElementsByClassName('list-group-item');
    console.log(items)//html collection like an array so array poperations could be used
    console.log(items[1]);
    items[1].textContent='hello 2';
    items[1].style.fontWeight='bold';
    items[1].style.backgroundColor='yellow';

    items.style.backgroundColor='#f4f4f4';//it doesnt work cuz its an html collection or an array so we have to loop through the items list

    for(var i=0;i<items.length;i++){
      items[i].style.backgroundColor='blue';//doesnt add to ele with different class name or ele without a class name
    }


    //GETELEMENTSBYTAGNAME
  
    var li=document.getElementsByTagName('li');
    console.log(li)//html collection like an array so array poperations could be used
    console.log(li[1]);
    li[1].textContent='hello 2';
    li[1].style.fontWeight='bold';
    li[1].style.backgroundColor='yellow';

    items.style.backgroundColor='#f4f4f4';//it doesnt work cuz its an html collection or an array so we have to loop through the items list

    for(var i=0;i<li.length;i++){
      li[i].style.backgroundColor='blue';//this applies to newly added ele without classname also cux it goes by the tag name not by the class name

    }
 
  //QUERYSELECTOR:used for only item(first one)
  
  var header=document.querySelector('#main-header')//bothtag and class
  header.style.borderBottom='solid 3px blue';

  var input=document.querySelector('input');
  input.value='hello world'

  var submit=document.querySelector('input[type="submit"]');
  submit.value='send'//submit button changed to send  
  var item=document.querySelector('.list-group-item');
  item.style.color='red'//first item color=red

  var lastitem=document.querySelector('.list-group-item:last-child');
  lastitem.style.color='blue'//dont forget to remove item 5 before this code
   
  var seconditem=document.querySelector('.list-group-item:nth-child(2)');
  seconditem.style.color='coral';
   

  //QUERYSELECTORALL
  var titles=document.querySelectorAll('.title');//for classes,id's and tag's also
  console.log(titles);//nodelist of array===>array operations can be used
  titles[0].textContent='hello';

  var odd=document.querySelectorAll('li:nth-child(odd)');

  for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='pink';
  }

  var even=document.querySelectorAll('li:nth-child(even)');

  for(var i=0;i<even.length;i++){
    even[i].style.backgroundColor='lightblue';
  }


//div is the parent of div,form is the sibling of h2(both of them are on the same level)

//TRAVERSING THE DOM
var itemlist=document.querySelector('#items');
//parentNode
//console.log(itemlist.parentNode)//div is the parent node of the itemslist
//itemlist.parentNode.style.backgroundColor='pink';
//console.log(itemlist.parentNode.parentNode);//container is teh parentnode of div

//parentelement
//console.log(itemlist.parentElement)//div is the parent node of the itemslist
//itemlist.parentElement.style.backgroundColor='lightblue';
//console.log(itemlist.parentElement.parentElement);//container is teh parentnode of div
//parentnode and parentelement are almost similar to each other

//childnode
//console.log(itemlist.childNodes);//textnode represents space like line breaks=>nodelist 

//console.log(itemlist.children);//excludes all the line breaks or textnodes=>html collection
//console.log(itemlist.children[1]);
//itemlist.children[1].style.backgroundColor='yellow';


//firstchild
console.log(itemlist.firstChild);//includes text nodes
//firstelementchild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='hello 1';


//lastchild
console.log(itemlist.lastChild);//includes text nodes
//lastelementchild
console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='hello 4';


//SIBLING
console.log(itemlist.nextSibling);
//nextelementsibling
console.log(itemlist.nextElementSibling)

//previoussibling
console.log(itemlist.previousSibling);
//previouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='green';


//create element

//create a div
var newdiv=document.createElement('div');

//add class
newdiv.className='hello';

//add id
newdiv.id='hello 1';

//add attribute
newdiv.setAttribute('title','hello div');//first parameter is the attribute u want to add and second parameter is the value u want to add

//create a textnode
var newdivtext=document.createTextNode('hello world');

//add text to div
newdiv.appendChild(newdivtext);//hello world is inside the div in js

//
var container=document.querySelector('header .container');//use(.) not a comma and use space before the dot, it searches for a class named as container inside the header,since container is a class (.) is used
var h1=document.querySelector('header h1');//use space b/w the both since h1 is a tag not a class(.) is not used



console.log(newdiv);

newdiv.style.fontSize='30px'

container.insertBefore(newdiv,h1)


//ADD HEllo word before item lister and item 1

var newdiv=document.createElement('div');
var newdivtext=document.createTextNode('HEllo word');
newdiv.appendChild(newdivtext);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1);


var itemsList=document.querySelector('#items');
var helloWordText=document.createTextNode('HEllo word');
var newListItem=document.createElement('li');
newListItem.appendChild(helloWordText);
itemsList.insertBefore(newListItem,itemsList.firstElementChild);    
*/


//DELETE AND EDIT FUNCTIONALITY
var form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
var filter=document.getElementById('filter');

//form submit events
form.addEventListener('submit', additem);
//del event
itemlist.addEventListener('click', removeitem);
//filter event
filter.addEventListener('keyup',filteritems);

//add item
function additem(e){
  e.preventDefault();

  //console.log(1)//1 will be displayed in the console upon clicking on submit
  
  //get input value
  var newitem=document.getElementById('item').value;//upon adding .value the value entered in the form will be added to the list

  //create new li ele
  var li=document.createElement('li');
  //add class
  li.className='list-group-item';
  //console.log(li)
  //add text node with input value
  li.appendChild(document.createTextNode(newitem));

  //create del button ele
  var del=document.createElement('button');

  //add class to del btn
  del.className='btn btn-danger btn-sm float-right delete';
  //append text node
  del.appendChild(document.createTextNode('X'));

  //append button to li
  li.appendChild(del);delete
  

  var edit=document.createElement('button');

  //add class to del btn
  edit.className='btn btn-primary btn-sm float-right edit';
  //append text node
  edit.appendChild(document.createTextNode('EDIT'));

  //append button to li
  li.appendChild(edit);

  //append li to list
  itemlist.appendChild(li);
}

function removeitem(e){
  //console.log(1)//in console it would just trigger the input even if the form is clicked on item list but we want that to happen only when 'X' is clicked
  if(e.target.classList.contains('delete')){//del variable is different from delete in html
    if(confirm('are u sure?')){
      var li=e.target.parentElement;//parent ele is the item list whereas child is the "X" button
      itemlist.removeChild(li);
    }
  }
}

function filteritems(e){
  //convert text to lowerase to prevent mismatch
  var text=e.target.value.toLowerCase();//search in item lister section
  //get all li's
  var items=itemlist.getElementsByTagName('li');
  //console.log(items)//upto this the group items is an html collection but now we need to convert it into an array
  //convert to an array
  Array.from(items).forEach(function(item){//items is different from item
    var itemname=item.firstChild.textContent;
    if(itemname.toLowerCase().indexOf(text)!=-1){//if its a match then it would not be equal to -1
      item.style.display='block';
    }
    else{
      item.style.display='none';
    }
  });
}