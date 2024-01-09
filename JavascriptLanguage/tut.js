

//# Some useful settings

// 1. download the "better comments" extension with the follwing settings

// 2. download the "Exet" extension for the code running

// 3. Laptop ke saath hi baithe for this tutorial. 

//# topics to be covered ...

//? 1. What is JavaScript? Its role in web development and its capabilities.

//* It is used to make the content functioning 
//* answering: what will happen ? kya hoga?

//% what the stackoverflow stats says 















// * Let's start from basics of Js 




// # How to declare variables in Js?

// 1. var
// 2. let
// 3. const

// # Var

// * Declaration constraints: can be redeclared
// * Scope: globally scoped || function/locally scoped
// * Updating constraints: can be reupdated

// # Let

// * Declaration constraints: cannot be redeclared
// * Scope: block scoped {}
// * Updating constraints: can be reupdated


// # Const

// * Declaration constraints: cannot be redeclared
// * Scope: block scoped {}
// * Updating constraints: cannot be reupdated


// Explaining th block feature of let and the function scope of the var

//! my vision of direct code seeming : just put the block at the calling place


// % showing function behavior
var ku  = 5;

function func()
{
     ku = 2;
    console.log("ku from func1: ",ku);
};

// ? this is my way of visualizing thing
func(); // == // {
    //     var ku = 2;
    //     console.log("ku from func1: ",ku);
    // };

    //? Example 

// console.log("ku(global): ",ku);


let foo = 6;
function func2()
{
     foo = 8;
    console.log("foo from func2: ",foo);
}
func2();

console.log("foo(global): ",foo);


//% showing the block scope property of the "let" but absence of it in the "var"

// if (true) {
//     var a = 1;
//     if (true) {
//       var a = 2; // Redeclares the same variable with var
//       console.log("Inner a:", a); // 2
//     }
//     console.log("Outer a:", a); // 2 (inner declaration affects outer scope)
//   }
  
//   if (true) {
//     let b = 1;
//     if (true) {
//       let b = 2; // Declares a separate variable with let
//       console.log("Inner b:", b); // 2
//     }
//     console.log("Outer b:", b); // 1 (inner declaration doesn't affect outer scope)
//   }





//   ! take a break 



// * done

//# there are 7 primitive datatypes 

// 1. Number 
// 2. Null (object)
// 3. String
// 4. Symbol
// 5. Boolean
// 6. BigInt
// 7. Undefined

//#  Non primitive DataTypes

// 1. Object 
// 2. Array (which is also an Object) (an object whose keys are predefined as are numbers)


/****************************************************************************************************/

// # Number

// Number is a datatype which holds number weither decimal or not. || capacity:  (2^53 -1)

// How to use?
//* 1. by literals
//* 2. by constructor


//% 1. by literals
var a = 2;
    // console.log(typeof a);


    //% 2. constructor (you will got an object)

    var k = new Number(2);

    // console.log(typeof k);

    //% here it is behaving like a normal number but still it is an object 
    // console.log("ans: ",k*2);

  
    

    // # BigInt

    // it is used hold number greater than (2^53 -1) 

    // why do we need this?
    
    //? To operate over very large numbers

    //% suppose your website is taking execel sheets of survey by "jangharna" and provide the total population along with birth rate, death rate calculation and these calculations are on a very huge number which can't be handled by the Number datatype so here comes BigInt
    

    // How can we use it?

    //* 1. by literals (by adding a "n" at the end)

        var bigint_var = 47575869n;

        // console.log("typeof bigint_var: ",typeof bigint_var);

    //* 2. by BigInt method

    var another_bigint = BigInt('1234555');

    

    // # String

    //* A sequence of characters surrounded by single quotes or double quotes

        
    // How can we use it?

    // by using literals 

    var string_var = 'sahitya';


    // by using constructor

    var string_var2 = new String('Sahitya');

    // console.log("my var: ",string_var2);

    //!Note: moreover string after encoutering the Objects and Array 


 

    // # Symbol

    // This are objects that are unique and immutable

    // Let's learn it from the best source "javascript.info"




    // # Boolean

    // It's one of the primitive data types in JavaScript, representing logical values.


    // How to use it?

    // 1. using the boolean value

    var flag1 = true;

    // 2. using the Constructor
    
    // var flag2 = new Boolean('sahitya');

    // console.log("flag2: ",flag2);

    
    // 3. Important Observation (Must remember)

    var flag1 = new Boolean('');
    var flag2 = new Boolean(null);
    var flag3 = new Boolean(undefined);
    var flag4 = new Boolean(0);
    var flag5 = new Boolean(NaN);

    // console.log("flag1: ",flag1.valueOf());
    // console.log("flag2: ",flag2.valueOf());
    // console.log("flag3: ",flag3.valueOf());
    // console.log("flag4: ",flag4.valueOf());
    // console.log("flag5: ",flag5.valueOf());

    // valueof: provides the boolean value of the given data

    //*     Values considered true: Non-empty strings, non-zero numbers, non-null objects, and true itself.
    
    //*    Values considered false: Empty strings (""), zero (0), null, undefined, NaN, and false itself.


    

    // Useful Boolean operations
    
    //? 1. Logical And Operation (&&)
    // let flag1 = true;
    // let flag2 = true;

    //     console.log("true && true =  ", flag1 && flag2);        // true && true = true 

    //     flag2 = false;
    //     console.log("true && false= ", flag1 && flag2);  // false && true = false

    //     flag1 = false;
    //     console.log("false && false =  ", flag1 && flag2);  // false && false = false


        //* Koi ek bhi false hua toh output false hoga
 
     //? 2. Logical Or Operation (||)

    //  var flag1 = true;
    //  var flag2 = true;
 
    //      console.log("true || true =  ", flag1 || flag2);        // true || true = true 
 
    //      flag2 = false;
    //      console.log("true || false= ", flag1 || flag2);  // false || true = false
 
    //      flag1 = false;
    //      console.log("alse || false =  ", flag1 || flag2);  // false || false = false


    //# Double Equal to operator (==)

    // * It only checks for the value comparision between the operands it will ignore the type comparision

    // let a = 1;
    // let b = '1';

    // (a==b) --> true


    //# Triple Equal to operator (===)

    // * It checks for the value comparision as well as type comparision between the operands.

     // let a = 1;
    // let b = '1';

    // (a==b) --> false // because second is of type string and the first one is of type number



    
    // # Null

    //* First of all "null" is something in itself -- it simply means the deliberate  "absence" of something
    
    // * It has falsy nature    
    
    //? Deliberate absence ?
    // when you intentially want to show the absence or declare that the variable contains nothing  (janbujhkar)

    // var a = null;

    // console.log("a: ",a);

    // ! Note: After being created to show the absence of something it is still an object

    // console.log("typeof a:",typeof a);

    // this is a mistake in js which is accepted.


    // # Undefined

    // * kuch nahi = undefined (automatically)

    // 1. value of that variable which is not initialized
    var a;
    // console.log("a:",a);

    // 2. Function returns nothing it returns the undefined

    // 3. Non existing property access 

    // var arr = ['Team405','Hackslash'];

    // console.log("arr[2]: ",arr[2]);

    // var obj = {
    //     "name":'Team405'
    // }

    // console.log("obj[description]: ",obj.description);

    // var str = "car";

    // console.log("str[3]: ",str[3]);

    // * it is a falsy value as I have shown you earlier

    // ! take break;


    
    /**********************************************************/
    
//   ! I am leaving the Object and Array for future after learning something more..


    // # Functions in js

    //* Reusable blocks of code that perform specific tasks. They help organize code, make it more readable, and avoid repetition. (remember DRY principles)

    //* There are two methods of declaring functions: 

    // 1. By using function key word

    // 2. By using fat arrow function (ES6)


    // # 1. Function keyword

    // syntax:

    // function Name(parameters)
    // {
            // function body
    // }
    
    
    // function add(a,b)
    // {
    //     return a+b;
    // }

    // console.log("sum of 1 and 2 is: ",add(1,2));
    
    // ? what is the difference between parameters and arguments?
    

    // # 2. fat arrow functions 

    //* These are introuduced in ES 2015 or ES6. They are a kind of easy to use shortform of a function with some less capabilities as comapare to the regular functions. Offer a shorter and cleaner syntax compared to traditional function expressions.

    //* never had a name (anonymous) we can only assign it to a variable 

    // syntax: 

    // (parameters) => {
        // function body
    // }

    // var add = (a,b)=>{
    //     return a+b;
    // }

    // console.log("using fat arrow one: ",add(1,2));


    // ? what do I mean by lower capabilites?

    // - regular functions can be used as constructor
    // - able to redefine the context of "this" keyword [fat]- it takes the context of the outer surrounding to define the "this" keyword


    // ! Problem statement (1): function to take input a number from the user and changes the type of the input (string and BigInt) without changing its value and console.log at each type change alongwith the typeof operator. 
// / ******************************************************************************************/
    // # Loops in js

    // Loops are a basic feature of every programming language helps us to iterate some processess.  

    // #for
    // The most basic feautre of every coding language (except ruby) 

    // * It's a control flow statement that allows you to execute a block of code repeatedly for a specified number of times or until a certain condition is met.

    // for (initialization; condition; increment/decrement) {
        // code to be executed
    //   }

    // for(let i = 0;i < 3;i++)
    // {
    //     console.log("I am block in for loop");
    // }

    //? two or more condition in for loop

    // var j = 0;

    // for(let i = 0;i < 3 , j < 2;i++,j++)
    // {
    //     console.log("I am another block in for loop");
    // }



    // # While

    //*  It's a control flow statement that repeatedly executes a block of code as long as a specified condition remains true.

    // while (condition)
    // {
        // block of code 

        // update statement
    // }


    // ? Eg
    // let i = 0;

    // while(i < 3)
    // {
    //     console.log("I am block in while loop");

    //     i++;
    // }


    // # continue 

    //*  Skips the remaining code in the current iteration of a loop and immediately jumps to the beginning of the next iteration. 

    // for (let i = 0; i < 10; i++) {
    //     if (i % 2 === 0) {
    //       continue; // Skip even numbers
    //     }
    //     console.log(i); // Prints only odd numbers
    //   }

    //# break

    //*  Immediately terminates the entire loop, regardless of whether any iterations remain.

    // let  i = 0;

// while(i < 4 || i < 3)
// {
//    i++;

//    if(i==2)
//    {
//       break;
//    }
//    console.log(i);
// }





// infinite loop




// for(let i = 0; i < 4 ; i++)
// {

//    if(i==2){
//       break;
//    }
//    console.log(i);
// }


    // ! Problem statement(2): Write a code in which

    // % 1. user will enter the username and the password
    //% 2. then ask the user to sign in
    // % 3. User will get atmost 5 chances to enter the correct password 
    // % 4. if the user entered correct password then the username will be displayed

    // ! Note:- There are few more loop like "for..in" , "for..of" , "forEach" but they should be better explained after the Objects and Arrays


    // ! Take a break

/****************************************************************************/

    // # Object

    // definition

    //* Collection of Key-Value Pairs: Objects store data as properties (keys) and their associated values.

    //* Unordered: Properties don't have a specific order.
    //* Mutable: Values can be added, removed, or changed after creation.
    //* Dynamic: Structure can evolve as needed.


    // How to form one?

    //* 1. By the help of Object literals ({})

    var obj2 = {
        'name':'Team405', // property
        'Introduction': function (){  // method || behaviour
            console.log("Let's learn Js with Team405");
        }
    }


    //* 2. By the help of constructor functions ( Js old regime)


        // constructor function

    function Constructor(a,b){
        this.name = a,
        this.Introduction = () =>{
            console.log(`${b}`);
        }
    }

    let obj3 = new Constructor("Team405","Let's build an object using constructor");

    // obj3.Introduction();
    // console.log("name: ",obj3.name);


    //# Different ways of calling values of a key in an object
    
    //* 1. By using [] : which gives a feel like the object is actually a store in which there are many shelf and the shelf with name "name" has a value "Team405" and really object is so

    // ? Eg
    // console.log("name: ",obj3['name']); 

    //* 2. dot operator

    //* as used above it feels like a hierarchy representation like "main property hu kiska"

    //* and it is more cleaner approach then the []  

    let rama = {
        'name':"Ram Sharma",
        'friend':{
            'name': 'Tarun',
            'friend':{
                'name':'Sahitya',
                'friend':{}
            }
        }  
    }

    // ? Now what is the name of the friend of friend of "Rama"?

    // console.log("name of the friend of friend of Rama: ",rama.friend.friend.name);

    // so by using . operator we clearly know the hierarchy that how a property is connected with another object
    //! Do It Yourself (1): make a function which takes user's name and roll no. as and provides an student object containing the name and the rolln0. of the user.

/********************************************************************************** */    

    // # Conditional chaining

    //* here we can continue our property chaining if and only if the current property exist if not then the chain of property will break at the very moment

//    console.log("Value of the toy property of friend of ram: ", ram.friend?.toy?.name) //! undefined

//    so above I have said that if the property "friend" exist then check the property "toy" if it also exist then give me the value of the property 'name'

// and as it doesn't have it so it is giving "undefined"

// ? what is the siginificance of such operator ?

// It helps to avoid the errors due to non existing property access, If in the above example if you have used it without '?' then it must have thrown an error

// ? Eg.

// console.log("Value of the toy property of friend of ram (without `?` ): ",ram.friend.toy.name); //! TypeError: Cannot read properties of undefined (reading 'name')


//% - suppose you have the following object: 

// %Object
    let ram = {
        'name':"Ram Sharma",
        'friend':{
            'name': 'Tarun',
            'friend':{
                'name':'Sahitya',
                'friend':{}
            }
        }  
    }



/******************************************************************************/    


    // # Situations when they are useful than the other one

    // Mostly dot operator is useful for getting the properties because 
    //  - they are clear 
    // -  they provide an eagle view to the exact property

    // but It fails when you don't have the exact name of that property just you have the reference to it.

    // ? Suppose a situation where you don't know the name of the property "name" of the Object "Ram". just you know that the property which will provide the name of Object is stored in a variable called "ref" like below. so how could you get the value of that property

    let ref = 'name';

    // * by using []

    // console.log("name of the ram: ",ram[ref]);


    // # real life applcaition of the above situation

    // ? Display me the value of all the property of obj4
    
    let obj4 = {
        "class":'12th',
        'roll':13,
        'country':'Bharat'
    }

    // ?Eg
    // for(let key of Object.keys(obj4))
    // {
    //     console.log(`value of obj4[${key}]: ${obj4[key]}`)
    // }

   

    // ! Just suppose that the above for loop is a variety of "for" loop which simply providing me all the keys of obj4 in a variable "key". we will discuss that kind of loops in Array


/****************************************************************************** */

// start: 10;12
    //# Objects in js are dynamic ?

    

    //* 1. I can simply modify any property or method

    // ?Eg  -

    // console.log("Before: ",obj4.roll);

    // obj4.roll = 16;

    // console.log("After: ",obj4.roll);




    //* 2. I can introduce a new property or method 

     // ?Eg  -



    // obj4.desc(); //! it will throw Error :"TypeError: obj4.desc is not a function"

    obj4.desc =  ()=>{
        console.log("My roll is 13");
    }

    // console.log("After: ");
    // obj4.desc();


    
    
    //* 3. I can simply delete any property or method
    
    // ? Eg. Let's remove the method desc

    // console.log("before",obj4)

    // delete obj4.desc;

    // console.log("after",obj4)


/****************************************************************************** */
    //# Object.keys()?  

    // This is an inbuilt method by the "Object" object which simply gives us the array containing all the user defined keys of the object passed as an argument.

    let keysArray = Object.keys(obj4);

    // console.log("array of all keys in object: ",keysArray);

    //# Object.values()? 

  // This is an inbuilt method provided by the "Object" object which simply gives us the array containing all the user defined keys of the object passed as an argument.

    let valuesArray = Object.values(obj4);

    // console.log("array of all values in object: ",valuesArray);    


    // ! Problems Statement (3): You have given an object and you have to write a code which provides user the following facilites over the given object

    // object: 
let providedObj = {
    name: "Rakesh",
    age: 25 ,
    city: "Haryana",
    country: "India",
    job: "Software Engineer"
}

    
    // % 1. user can delete any of the property
    // % 2.  user can update any of the property
    // % 3. user can search for any property
    // % 4. user can create a new property

    //# You can consider it as a homework as well 📝 the of this will be available at the end 


  
/***************************************************************************** */

    //# Say Hello to "this" Keyword.
    
    //* Now we are moving towards the those concepts which will distinguish Js from all the other languages completely 🥳

    //* "this" keyword refers to the current context inside a function or method.
    
    // ? Bas itne se ke liye ye mazedar nhi hai, game to current context kya hai ye pata lagane mein hai.
    
    //# What is context ?

    //* as per the google it is "The part of a text or statement that surrounds a particular word or passage and determines its meaning."

    // btn.style.backgroundColor = "red";
    //* in hindi:  सन्दर्भ 

    //* So just modify this english statement as per the Js: "Something that surrounds or refers a particular Object and determines its properties and methods"

    //* And issi context ko sakshat "this" keyword refer karta hai 

    //* Means by the help of "this" keyword we can refer the object in the current context of the function or method
    
    
    //? Eg.
    
    // # what are classes ?

    //* It is a piece of code that defines a blueprint for creating objects or instances with specific properties and methods.

    //* It's not an object itself, but a template for object creation.
 
   //% 1.  Class formation using function (Yaad karo wo purane din): 

   function newClass(name,className) 
   {
        this.name = name
        this.className = className
   }

   //* now the above constructor will help me to create an Objects or instance of class "newClass" whose "name" property is filled by the first argument and the "className" property is filled by the second argument

   let obj5 = new newClass("sahitya" ,"classJs");

//    console.log("obj5: ",obj5);

//% 2. Class formation using class keyword (introduced in ES6)   

   
   class MyClass{

    constructor(name, className){
        this.name = name
        this.className = className
    }

    greet() {
        console.log(`hi ${this.name}`);
    }

   }

   let obj6 = new MyClass('obj6','randomclass');

//    console.log("obj6: ",obj6);

//* In the above two examples the "this" keyword is refering to the instance created by the classes "MyClass" or "newClass". 

// * they are saying that the "name" property of the instance contains the value of the "name" parameter and the "className" property of the instance contains the value of the "className" parameter

// and so we get the required classes

// !  Do It Yourself (2): Just create an object using classes as well as the Constructor only class.


// ! we will see further examples in Browser 


//% 3. Standalone Function 

//* Standalone Function : functions which are called alone that are not a method or inside something they are independent functions 

   function add(a,b){
    
        console.log("this(inside a standAloneFunction): ",this);

        return a+b;
   }

//    var res = add(2,3);

   //* here you will find that it is refering to the global object.
   
   
   
   
   //% 5. Methods of an object
   
   
   //% 6. Function inside a Method
   
   //% 4. EventHandler 




    
    

/******************************************************************************* */

    // # Array 

    //* Arrays are ordered collections of elements, used to store multiple values or values of multiple types (specially in Js) under a single variable name.    

    //* Each element has a unique numerical index, starting from 0.


    //# How can we create an array? 
    
    //* 1. Using array literal []    
    let arr = [1,2,3,"Team405"]; 

    //* 2. using array constructor
    
    let arr1 = new Array(1,2,3,"team405");

    // console.log("arr1: ",arr1);



   //# How to access array elements 

   let firstElement = arr1[0];

//    console.log("firstElement: ",firstElement);

/******************************************************************************* */

// # Are Arrays also dynamic like Objects?

//* Yes

const numbers = [1, 2, 3, 4, 5];


 //% 1. Push: Adds elements to the end: (Not returns anything)

 numbers.push(6); // numbers now becomes [1, 2, 3, 4, 5, 6]


//% 2. Pop: Removes the last element: (Returns the removed element)

var removedNumber = numbers.pop();

//% 3. Unshift: Adds elements to the beginning: (Not returns anything)

numbers.unshift(0); // [0, 1, 2, 3, 4, 5]

//% 4. Shift: Removes the first element: (Returns the removed element)

var removedNumber = numbers.shift(); // [1, 2, 3, 4, 5]

//% 5. Direct assignment: Change elements at specific indices 

numbers[1] = 10; // [0, 10, 2, 3, 4, 5]

/******************************************************************************* */


// # Some more Array methods

let arr3 = [1,2,4,0,2,1];

//% 1. find(callback): Finds the first element that satisfies a condition

const firstEvenNumber = numbers.find((number) => {
    return (number % 2 === 0);
}); // 0


//% 2. includes(element): Checks if an element exists in the array:

    // console.log("does arr3 includes the 10? : ",arr3.includes(10)); // false

//% 3. indexOf(element): Returns the index of the first occurrence of an element

    // console.log("the index of 1 in arr3 is: ",arr3.indexOf(1));

//% 4. join(separator): Converts elements to a string, separated by the specified separator: 

    // console.log("the string formed by the joining of all the elements: ",arr3.join(''));

// ! add compare method to it as well 

//% 5. sort(): Sorts elements in place:

//* It sorts the number on the basis of their first digit(not the oneth place digit) if they found same then it compares the second digit 

//* first digit of (123) is 1 {to which I am refering in the above definition} 

var arr4 = new Array(12,21,10,9);
// console.log("unsorted array: ",arr4)

// console.log("sorted array: ",arr4.sort());

//%6. splice(index , deleteCount , item1 , item2 , ...):

// * This method will delete "deleteCount" number of elements starting from element at this -> "index", and inplace of those elements item1 and item2 or more elements can be inserted

// * It will modify the given array.

// * it returns the new array containing those deleted elements.

// let arr7 = [1,2,3,4,5,6,7,8,9,10];

// console.log("return of slice:",arr.splice(1,4));

// console.log("arr:",arr);

//% 7. slice(startIndex, endIndex)

// * This method will extract elements from startIndex to the endIndex-1 from the given array.

// * It not modifies the given array.

// * But it returns the new array containing the elements between the startIndex and endIndex.


// let arr7 =[1,2,3,4,5,6,7,8,9,10];

// console.log("return of slice:",arr.slice(1,4));

// console.log("arr:",arr);











// ! Do It Yourself (3): Implement all the given array methods on your own


/******************************************************************************* */

    //# Advance Array methods

    //% 1. map(): 
    //* Creates a new array by applying a function to each element and whatever the function returns after calling for each element of that array will be the new element of the new array.

    let arr5 = [1,2,3,4]

        var newArr = arr5.map((ele)=>{
            return (ele*2);
        })

        // * here the callback function which I have provided is returning the 2 times of the element for which it is called. 

        // console.log("newArr: ",newArr); //  [ 2, 4, 6, 8 ]

    //* Here are some of the usefull parameters of the callback function of the map method 

    // const newArr = arr4.map((ele,index,arr)=>{
    //         console.log(`ele: ${ele} index: ${index} entireArray: ${arr}`);
    // })


    //% 2.filter()

    //* Create a new Array using the given array in which only those elements are included which passes a certain condition or test

    const newArr2 = arr5.filter((ele)=>{
            return (ele%2 !== 0);
    })

    // console.log("newArr2: ",newArr2);

    //* above I have included only those element which on dividing with 2 gives a non-zero remainder (odd number)
    
    //% 3.reduce()

    //* Reduces an array to a single value by applying a function which accumulates the value returned after the calculation on each element of the array to an accumulator

    const reducedArray = arr5.reduce((accumulator , element)=>{
        return (accumulator+element);
    })


    // console.log("reducedArray: ",reducedArray);

    //* above function is taking the first element of the array as its accumulator and the second element as the starting element and this is just for starting after that the whatever the function returns will be the new accumulator 


    // !Problem statement (4): 

    // % 1. Write a function which returns a value out of the given array (numbers) by implement a calculation over each element of the array like if an element is even then it will be multiplied and if odd then it will be divided.

    // % 2. Write a function which returns an array out of the given array (numbers) whose every odd  positioned element is greater than the same position value by 3 in the given array and the even positioned will be lower than 3.




/******************************************************************************* */

  //! Let tell you a truth now !!!

  //* Array is an Object : It's keys are the index numbers and the values are the value present at those index numbers

//   console.log('typeof array: ', typeof arr5);

    //* To see the above thingh we have to see an array in the browser console 

/******************************************************************************* */

    //# SO now it is the time to let you all know about the special loops in js
     



    // #for..in loop  

    // a loop formed for objects to iterate over the enumerable properties of an object.

    //? what are enumerable properties? 

    // 1. Properties that can be covered using the for..in loop
    // 2. Visible to Object.keys() , Object.values() , Object.entries()
    // 3. Serialized by JSON.stringify()

    


    // ? what are non-enumerable Properties?

    // 1. Properties which are inherited from the prototypes
    // 2. Built-in properties of objects like __proto__ (universal)
    // Like the length property of Array objects

 

    var ne_num = new Array(1,2,3,3,4,4,45); 

    //* it is nothing but iterate over the keys of the array ( index numbers) and object


   
    let arr6 = ['T','e','a','m','4','0','5'];

    let obj7 = {
        'name':'Team405',
        'domain':'tech'
    }

    //% For..in loop on object
    // for(let key in obj7)
    // {
    //     console.log("keys: ",key);
    // }
    
      //% For..in loop on array
    // for(let key in arr6)
    // {
    //     console.log("keys: ",key);
    // }


    
    // #for..of

    //* it is nothing but iterate over the values of the array but not on the objects (they are not iterable)
    
      //% For..of loop on array
    // for(let value of arr6)
    // {
    //     console.log("keys: ",value);
    // }

    // #forEach

    //* It is just like the map function but still but without creating any new array and without returning anything it just used to iterate over the elements of the array.
   
    //* It is only for the arrays

    arr6 = [1,2,3,4];

    // arr6.forEach((ele , index , arr)=>{
    //     console.log(`ele: ${ele} index: ${index} entireArray: ${arr}`);
    // })

    //! Problem Statement (5): Let an array [1,2,3,4,5,6] Your task is to remove every even indexed element in the array.




/******************************************************************************* */

    // # String

    //* here we will talk about the advance string methods

    // # Backticks (``)

    //* ` ` is a special character in js that is used to include the value of a variable in a string by the help of "${variableName}"

    let str1 = "Team405";
    
    
    //% 1.  substring(startIndex , endIndex): Extracts a portion of the string.

    //* It will extract the string from the startIndex to the endIndex - 1  

        // console.log("substring: ",str1.substring(1,3));

    //% 2.  split(separtor): It separates all the caharcters of the string based on the separator and store it in an array but that separator should also be present in the string

    // console.log("arrayof chars: ",str1.split('a')); //  [ 'Te', 'm405' ]

    //%3 str1.match(/regex/): 

    console.log("array of matched string: ",str1.match(/ea/)); // [ 'ea', index: 1, input: 'Team405', groups: undefined ]






/******************************************************************************* */
    // # Regex
    
    // JavaScript Regular Expressions, or JS Regex, are powerful tools for searching and manipulating text data. They allow you to match patterns within strings, enabling complex and fine-grained text processing


    // # Real world use of regex

    ///% 1. when you have to take input of only those characters which satisfy a particluar patter in your input tag of your form

    // ^ : this stands for the start
    
    // $ : this stands for the end

    // "?" : this stands for the optional

    // "*" : this stands for the zero or more

    // "+" : this stands for the one or more

    // "()" : this stands for the group

    // "|" : this stands for the or operator

    // "." : this stands for the any character


    //! Problem Statement(6) 
    
    //% 1. Provide me a regexp which matches only those emails who has the "ac.in" in the last and "@" in between the email addresses.    

    //% 2. Provide me a regexp which has to be used for an input validation of google link (may be of drive or maps) means it should have :-

    // 1. "https" at the begining it can match with "http" as well.
    // 2. the above string must be followed by the ":" and then "//"  
    // 3. after the above there must be "google.com" written somewhere in the string

    //% 3. validate date string in mm/dd/yyyy format only.

    //! Problem statement : differentiate between DD/MM/YYYY  and MM/DD/YYYY format

    //% 4. write a function which takes string (HTML element) as an argument and returns the textcontent of it.

/*******************************************************************************/ 

//# Link to Dmitry Soshnikov's 

// http://dmitrysoshnikov.com/

// # Github notes link: https://github.com/Sahityaaryan/JavaScriptStudyJams



//# settings.json for "Better Comments"

// {
//     "tag": "%",
//     "color": "#4DB6AC",
//     "strikethrough": false,
//     "underline": false,
//     "backgroundColor": "transparent",
//     "bold": false,
//     "italic": false
// },

// {
//     "tag": "!",
//     "color": "#FF2D00",
//     "strikethrough": false,
//     "underline": false,
//     "backgroundColor": "transparent",
//     "bold": false,
//     "italic": false
// },
// {
//     "tag": "?",
//     "color": "#3498DB",
//     "strikethrough": false,
//     "underline": false,
//     "backgroundColor": "transparent",
//     "bold": false,
//     "italic": false
// },
// {
//     "tag": "~",
//     "color": "#474747",
//     "strikethrough": true,
//     "underline": false,
//     "backgroundColor": "transparent",
//     "bold": false,
//     "italic": false
// },
// {
//     "tag": "#",
//     "color": "#FF5722",
//     "strikethrough": false,
//     "underline": false,
//     "backgroundColor": "transparent",
//     "bold": false,
//     "italic": false
// },
// {
//     "tag": "*",
//     "color": "#FDE83D",
//     "strikethrough": false,
//     "underline": false,
//     "backgroundColor": "transparent",
//     "bold": true,
//     "italic": false
// }