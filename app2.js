
const calculator ={
  add: function (a,b){
    return a+b ;
  },
  minus:function(a,b){
    return a-b;
  },
  div:function(a,b){
    return a/b;
  },
  multi:function(a,b){
    return a*b;
  },
  power:function(a,b){
    return a**b;
  }
  }
const plusResult = calculator.add(2,3);
const minusResult = calculator.minus(plusResult,10);
const multiResult= calculator.multi(10, minusResult);
const divideResult = calculator.div(multiResult,plusResult);
const powerResult = calculator.power(divideResult,minusResult);

/* // return값 예시

const age = 96;
function calculatorKrAge(ageOfForeigner){
 return ageOfForeigner+2;
}

const krAge = calculatorKrAge(age);
 return.log(krAge); */
 