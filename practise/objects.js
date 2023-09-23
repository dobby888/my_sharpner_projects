let obj={
    name:'sree',
    age:24
};
console.log(obj.name);
console.log(obj);

//for...of loop for objects
for(const key in obj){
    console.log(obj[key])
    obj['class']='first';
};
console.log(obj);

//spread operators for objects
let obj1={...obj,name:'hari',fav:'series'};
console.log(obj1);

