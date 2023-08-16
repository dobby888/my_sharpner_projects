let me={
    name:"sree",
    age:26,
    thisisarrow:()=>{
        console.log("my name is "+this.name);
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
    }
};
me.thisisarrow();
me.printalldetailsofuser();