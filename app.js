//synchronous programimg:
//it basically means like everythings move in a sync and pattern and for one
//thing to be happen the first one should execute first , in a similar way , in
//sync programimg means that the first line of code will execute first then the
//second.
//like:
console.log("one");
console.log("two");
console.log("three");
//asynchronous programimg:
//unlike synchronous programimg asynchronous programimg means that you can break
//the rythm and can alter the sync of programimg , this can beneficial when there
//is a line of code that takes time to run and it blocks all other code , with
//async we can change that and make all other code run to give a better ui experience.
//like:
console.log("one");
console.log("two");
setTimeout(() => {
  console.log("hello world");
}, 4000); //settimeout is a function to delay the block of code which is inside it.
//it basically seperates this block from all other code so that the other code
//shouldnt wait for it to run.
console.log("three");

//callbacks:
//you can pass a function as an argument in another function , to basically
//use the funciton to get output.

function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumcallback) {
  sumcallback(a, b);
}
calculator(1, 2, sum);

let hello = () => {
  console.log("hello world");
};
setTimeout(hello, 3000); //callback used as asyncronus programimg.

//Callback hell: Callback hell is a programimg problem when you use nested call
//backs the code became really hard to read and manage and it is hard to create
//logic when you nest callbacks multiple times.
akjfsd;
