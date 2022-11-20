//Задание 5
class Applience {
    constructor(power){
      this.typeOfPower = 'electrical network';
      this.power = power;
      this.isOn = false;
    }
    switchOff(){
      if(this.isOn == true){
        this.isOn = false
        console.log('Прибор выключен из розетки')
      }
    } 
    switchOn(){
      if(this.isOn == false){
        this.isOn = true
        console.log('Прибор включен в розетку')
      }
    }
  }
  
  class Computer extends Applience {
    constructor(screenDiagonal, power){
      super(power);
      this.screenDiagonal = screenDiagonal;
      function printDocument(){};
    }
  }
  
  class Toaster extends Applience {
    constructor(color, power){
      super(power);
      this.color = color;
    }
  }
  
  const computer = new Computer(24, 350);
  const toaster = new Toaster('brown', 1200);
  
  let totalPower = computer.power + toaster.power
  
  console.log('Суммарная мощность - ' + totalPower + 'Ватт')
  
  console.log(computer)
  computer.switchOn()
  
  console.log(toaster)
  toaster.switchOn()
  toaster.switchOff()