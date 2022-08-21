/* const age =prompt("How old are you?");
console.log(typeof age);

console.log(typeof "15",typeof parseInt("15")); */
// ㄴstring을 number로 바꿔줌,, parseInt()

/* const age=parseInt(prompt("How old are you?"));
console.log(age);
 */
// -------------------------

const age=parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

if(isNaN(age)||age<0){
// condition===true ,,, condition자리에는true나 false 답이 올 수 있어야한다.
console.log("Please write a real positive number");
// =>만약 입력창에 숫자가 아닌 string을 적게 되면 isNaN=ture가 되면서 true일경우 나오는 {}안의 내용이 나오게 된다
}
/* else{
  // condition===false
  console.log("Your age is "+ age) ;
} */

else if(age<18){
  console.log("you are too young");
}
else if(age>=18 && age <=50){
  console.log("you can drink");
}
else if(age>50 && age<=80){
  console.log("you should exercise");
}
else if(age>80){
  console.log("you can do whatever you want");
}
else{
  console.log("be careful your health");
}