//Задание 4
function Appliance(power){
  this.typeOfPower = 'electrical network',
  this.power = power,
  this.isOn = false
}

Appliance.prototype.switchOff = function(){
  if(this.isOn == true){
    this.isOn = false
    console.log('Прибор выключен из розетки')
  }
}  

Appliance.prototype.switchOn = function(){
  if(this.isOn == false){
     this.isOn = true
      console.log('Прибор включен в розетку')
  }
}

function Computer(screenDiagonal, power){
  this.screenDiagonal = screenDiagonal,
  this.power = power
  function printDocument(){}
}

Computer.prototype = new Appliance()

function Toaster(color, power){
  this.color = color,
  this.power = power
}

Toaster.prototype = new Appliance()

const computer = new Computer(24, 350);
const toaster = new Toaster('brown', 1200);

let totalPower = computer.power + toaster.power

console.log('Суммарная мощность - ' + totalPower + 'Ватт')

console.log(computer)
computer.switchOn()

console.log(toaster)
toaster.switchOff()