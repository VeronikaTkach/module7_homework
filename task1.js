//Задание 1
function getKeys(obj){
  for (let key in obj){
    if (obj.hasOwnProperty(key)){
      console.log(key + ' ' + obj[key])
    }
  }
}

let testObject ={
  number: 10,
  color: 'green',
  shape: 'square'
}

getKeys(testObject)