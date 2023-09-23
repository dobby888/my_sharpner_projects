//STACKS//


console.log("STACK BASICS");
class stack{
  constructor(){
    this.top=-1;//similar to array the indexing in stacks starts with zero so, if there are no elements present in a stack then the index of the array would be="-1",when ele are added to the stock then,this.top=this.top+1
    this.stack=[];
  }
  push(ele){
    this.top=this.top+1;//this.top=-1+1=0,this.top when the stock is empty="-1"
    this.stack[this.top]=ele;
  }
  pop(){//removes the topmost element from the stack
    this.stack.pop();
    this.top=this.top-1;
  }
  peek(){//returns the top most ele from the stack
    return this.stack[this.top]
  }
  isEmpty(){//returns whether the stack is empty or not
    if(this.top==-1)
      return true
    else
      return false
  }//top===n==>stack is full
}
x=new stack()
console.log(x.isEmpty())//returns true as the stack will be empty before pushing any object into it
x.push(-7)//pushes the element into the stack
//x.pop()
x.push(3)
x.pop()//pop function removes the just above element
x.push(5)
//x.pop()
console.log(x.stack);
console.log(x.peek());
console.log(x.isEmpty());//now it will be returning false as the stack is now
//full:if(top==stack.length)====>the stack is considered to be full
//if pop is used when the stack is empty then it will show an error
//similarly if push is used when the stack is full then also we will get an error
console.log("method-2:normal method");
var y=[];
y.push(1);
y.push(3);
y.push(5);
y.push(8);
y.push(4);
y.push(5);
console.log(y)
console.log(y[y.length-1])
console.log(y.length)
if(y.length==0){
  console.log("empty");
}
if(y.length===5){
  console.log("do not push anymore");
}
y.pop()
console.log(y) 


//QUEUES//


/*
class queue{
    constructor(){
      this.q=[];
      this.front=-1;//first ele inserted in the queue
      this.rear=-1;//last ele of the queue
    }
    enqueue(ele){//inserting ele into queue
      if(this.front==-1){//if queue is not empty===>front++,rear++
        this.front++;
        this.rear++
      }
      else{
        this.rear++;
      }
      this.q[this.rear]=ele;
    }
    dequeue(){//deleting ele from queue
      if(this.front==this.rear){//if we have only one ele in the queue
        this.front=-1;
        this.rear=-1;
      }
      else{
        this.front++;
      }
      is_empty(){//checking whether the queue is empty or not
        if(rear==-1 || front>rear){
          this.queue.length===0;
        }
      }
      get_first_element(){
        this.queue[0];
      }
    }
  obj=new queue();
  obj.enqueue(1);
  obj.enqueue(5);
  obj.enqueue(10);
  obj.dequeue();
  obj.dequeue();
  obj.dequeue();
  console.log(obj.q,obj.front,obj.rear)
  //shift function takes a lot of time hence becoming the costlier option
  NORMAL METHOD :
  q=[];
  front=-1;
  q.push(1);
  q.push(2);
  q.push(3);
  front++;//pop
  if(front===q.length){//q is full
    front=-1
  }
  q[q.length-1]==>last element of the queue
   */