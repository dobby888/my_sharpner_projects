/*
localStorage.setItem('name','bob');
//console.log(localStorage.getItem('name'))//even if above line is removed we will still have that memory stored in the local storage and we can get the value by console untill the local storage is manually cleared
localStorage.removeItem('name')//removes the 'name' from local storage

sessionStorage.setItem('name','john')
//console.log(sessionStorage.getItem('name'));
//sessionStorage.removeItem('name')
//to update the name 
sessionStorage.setItem('name','sree')//overwrites the already saved value

//document.cookie='name=kylie;expires='+new Date(2070,8,8).toUTCString()
document.cookie='name=kyl; expires='+new Date(9999,0,1).toUTCString();


document.cookie='lastname=smith; expires='+new Date(9999,0,1).toUTCString();

console.log(document.cookie);
*/


let obj={
  name:"sree",
  age:24
};//storing memory in an object

var obj_str=JSON.stringify(obj);//converting the obj into string

localStorage.setItem('obj',obj_str);//storing the values  in the obj in the string then storing them in the local storage

var str_obj=JSON.parse(localStorage.getItem('obj'));//now convert the memory of the local storage object string back to object
//console.log(str_obj)