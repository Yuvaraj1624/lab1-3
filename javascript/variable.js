/* defining variables and doing concatinating 
we can use let instead of var*/


/*var name="my name is yuvaraj";
var name2= "" + name + " thops is my friend";
alert(name);
console.log(name2);  */

/* difference between const an let variables are the value of let variable can be changed but const cannot be changed  .. if you put const in the place of let then it will show the error //*/

/*let name="yuva";
name="yuvaraj"
let name2="hii "  + name+  " is my name";
console.log(name2);*/

/*function display()
{
document.write("Name : "+ this.name + "< BR>")
document.write("Address : "+ this.address + "< BR>")
}
function person(name,address)
{
this.name = name
this.address = address
this.display = display
}
// creating instances
Ravi = new person("Ravi","Bangalore");
Mahesh = new person("Mahesh","Madras");
// print them
Ravi.display()
Mahesh.display()*/


// program to print given number is even or odd


/*var x = 100009 , mesg = " " ;
if ( x % 2 == 0 )

console.log(x + " is  even");
else
console.log(x + "is odd");*?



/* program to calculate sum and large of given two numbers
*/

/*var num1=10;
var num2=20;
var sum=num1+num2;
var large=num1>num2? num1:num2;
console.log(  num1 + "+" + num2 + "=" + sum);
document.write("large =" + large);*/


/*var i = 3
switch(i)
{
case 1: mesg = "One"
break;
case 2: mesg = "Two"
break;
default: mesg = "Default";
}
document.write(mesg)*/


// to print number 19 ,19 times ....... 1 once
var i,j;
for(i=19; i>0; i++)
{
for(j=1; j<=i; j++)
document.write(i+" ");
document.write("<BR>");
}




