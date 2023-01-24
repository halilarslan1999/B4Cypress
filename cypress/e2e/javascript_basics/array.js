//creating array
var scores=new Array(); // empty
var  numbers=new Array(10); //array with initials size 10
var myNumber=new Array(8,9,10,4,2); //array with inital elements

var athletes=Array(3); // array with initials size 3
var sings=Array("Red"); // array with one element

var emptyArray= [];
var colors=['red','green','blue']

//array examples
let tools=["Jest",'selenium',"cypress","testcafe","phantomjs","protractor"]

//Accessing arra elements

console.log(tools)
console.log(tools.toString())
console.log(tools[0])
console.log(tools[3])

const string=tools.toString();
console.log(string)

const join=tools.join(" * ")
console.log(join) // to add * between element

const pop = tools.pop() //removes an elemnt from the end of an array
console.log(tools)  

const push=tools.push("slimerJS")//to add element to end of array
console.log(tools)

const shift =tools.shift()// removes an element from the beginning of an array
console.log(tools)

const unshift =tools.unshift("selenoid") // add element to begining of an array
console.log(tools)

const sort =tools.sort()//sort element
console.log(sort)

const reverse= tools.reverse() //reverse element
console.log(tools)

tools.forEach((value)=>{ //foreach loop
    if(value=="cypress"){ // controlflow selection
        console.log("cypress is trending now")
    }else{
        console.log("element NOT found")
    }
})