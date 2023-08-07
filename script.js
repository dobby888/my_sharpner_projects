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