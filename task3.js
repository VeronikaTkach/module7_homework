//Задание 3
function createObject(){
  let createObject = Object.create(null);
  return createObject;
}

let emptyObject = createObject();
 
console.log(emptyObject);