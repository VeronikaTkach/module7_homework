//Задание 2
let testObject ={
  number: 10,
  color: 'green',
  shape: 'square'
}

let property = 'city';

function chekProp(prop, obj){
    if (prop in obj){
      return true;
    }
    else{
      return false;
    }
}
let result = chekProp(property, testObject);
console.log(result);