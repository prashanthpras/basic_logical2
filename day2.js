//11.Find Factorial

// let number=parseInt(prompt("enter the number"))
// let fact=1
// for(let i=1;i<=number;i++){
//     fact*=i
// }
// console.log(fact)

//12.a.Program to Display the Multiplication Table

// let number=parseInt(prompt("enter the number"))
// for(let i=1;i<=10;i++)
// {
//     let result=number*i

//     console.log(`${number}*${i}=${result}`)
// }

//12.b.Multiplication Table Up to a Range

// let number=parseInt(prompt("enter the number"))
// let range=parseInt(prompt("enter the range"))
// for(let i=1;i<=range;i++)
// {
//     let result=number*i
//     console.log(`${number}*${i}=${result}`)
// }

//13.Fibonacci Series Up to n Terms

// let number=parseInt(prompt("enter the number"))
// let n1=0,n2=1,nextTerm;
// for(let i=1;i<=number;i++){
//     console.log(n1)
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm
// }

//14. program to check an Armstrong number of three digits

// let number=parseInt(prompt("enter the three number"))
// let sum=0;
// let temp=number;
// while(temp>0){
//     let reminder=temp%10;
//     sum=sum+(reminder*reminder*reminder*reminder)
//     temp=parseInt(temp/10)
// }
// if(sum==number)
// {
//     console.log(`${number} is a armstrong number`)
// }else{
//     console.log(`${number} is not a armstrong number`)
// }

//15.a. program for a simple calculator using if else statement

// let operator = prompt("enter the operator +,-,*,/ ").trim();
// let n1 = parseInt(prompt("enter the number1"));
// let n2 = parseInt(prompt("enter the number2"));
// console.log(operator);
// let result;

// if (operator == "+") {
//   console.log("+");
//   result = n1 + n2;
// } else if (operator == "-") {
//   result = n1 - n2;
//   console.log("-");
// } else if (operator == "*") {
//   result = n1 * n2;
//   console.log("*");
// } else {
//   result = n1 / n2;
//   console.log("/");
// }
// console.log(`${n1} ${operator} ${n2} = ${result}`);

//15.b.  program for a simple calculator using switch statement

// let operator = prompt("enter the operator +,-,*,/ ").trim();
// let n1 = parseInt(prompt("enter the number1"));
// let n2 = parseInt(prompt("enter the number2"));
// console.log(operator);
// let result;

// switch (operator) {
//   case "+":
//     result = n1 + n2;
//     console.log(`${n1} + ${n2} = ${result}`);
//     break;
//   case "-":
//     result = n1 - n2;
//     console.log(`${n1} - ${n2} = ${result}`);
//     break;

//   case "*":
//     result = n1 * n2;
//     console.log(`${n1} * ${n2} = ${result}`);
//     break;
//   case "/":
//     result = n1 / n2;
//     console.log(`${n1} / ${n2} = ${result}`);
//     break;
//     default:
//         console.log("invaild operator")
//         break;
// }

//16.a.Program to Find the Sum of Natural Numbers using for loop

// let number=parseInt(prompt("enter the number"))
// let sum=0;
// for(let i=1;i<=number;i++)
// {
//     sum+=i
// }
// console.log(`sum of all natural number :`,sum)

//16.b.Program to Find the Sum of Natural Numbers using while loop

// let number=parseInt(prompt("enter the number"))
// let sum=0,i=1;
// while(i<=number){
//     sum+=i
//     i++
// }
// console.log(sum)


//17.program to check whether the last digit of three numbers is same

// const a=parseInt(prompt("enter the first integer"))
// const b=parseInt(prompt("enter the second integer"))
// const c=parseInt(prompt("enter the third integer"))
// const result1=a%10;
// const result2=b%10;
// const result3=c%10;
// if(result1==result2 && result1==result3)
// {
//     console.log(`${a},${b} and  ${c} is having last digit are same`)
// }else{
//     console.log(`${a},${b} and  ${c} is having last digit are not same`)
// }

//18.HCF using for Loop

// let number1=parseInt(prompt("enter the number1"))
// let number2=parseInt(prompt("enter the number2"))
// let HCF;
// for(let i=1;i<=number1 && number2>=i;i++)
// {
//     if(number1%i==0 && number2%i==0){
//          HCF=i
//     }
// }
// console.log(HCF)


// let n1=parseInt(prompt("enter the number1"))
// let n2=parseInt(prompt("enter the number2"))
// function HCF(n1,n2){
// if(n1>n2){
//     console.log(n1-n2)
// }else {
//     console.log(n2-n1)
// }
// }
// HCF(n1,n2)

//19.LCM Using if Statement

// let n1=parseInt(prompt("enter the number1"))
// let n2=parseInt(prompt("enter the number2"))
// function HCF(){
// if(n1>n2){
//   return  n1-n2
// }else {
//   return  n2-n1
// }
// }
// let hcf=HCF()
// console.log(hcf)
// let LCM=(n1*n2)/hcf
// console.log(LCM)


//20.program to find the factors of an integer

// let num=parseInt(prompt("enter the number"))
// for(let i=1;i<=num;i++)
// {
//     if(num%i==0){
//         console.log(i)
//     }
// }