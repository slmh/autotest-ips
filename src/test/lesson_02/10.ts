// 10.	Добавьте в класс автомобиля метод добавления скорости setSpeed(). 
// Минимальная скорость 0, максимальная 100. При выключенном автомобиле скорость задавать нельзя. 
// Ошибки выводить в консоль текстом
    /*
class Car {
    engine: boolean = false
    speed: number = 0
    turnOn() {
        this.engine = true
    }
    turnOff() {
        this.engine = false
        this.speed = 0
    }
    getState() {
        this.engine === true 
        ? console.log('Двигатель работает, скорость машины: ' + this.speed)
        : console.log('Машина заглушена')
    }
    setSpeed() {
        if (this.engine === true && this.speed < 100) {
            this.speed = this.speed + 10
        } else if (this.engine === false) {
            console.log('Невозможно прибавить скорость: включите двигатель')
        } else {
            console.log('Невозможно прибавить скорость: максимальная скорость 100, ваша скорость ' + this.speed)
        }
    }
}

const car: Car = new Car()

car.getState()
car.turnOn()
car.getState()

car.setSpeed()
car.setSpeed()
car.setSpeed()

car.getState()
*/

class Car {
    engine: boolean = false
    speed: number = 0
    turnOn() {
        this.engine = true
    }
    turnOff() {
        this.engine = false
        this.speed = 0
    }
    getState() {
        if (this.engine === true && this.speed > 0) {
            console.log('Двигатель работает, машина едет на скорости ' + this.speed)
        } else if (this.engine === false) {
            console.log('Машина заглушена')
        } else {
            console.log('Двигатель работает, машина стоит на месте')
        }
    }
    setSpeed(addSpeed: number) {
        if (this.engine === true && (this.speed + addSpeed) <= 100) {
            this.speed = this.speed + addSpeed
        } else if (this.engine === false) {
            console.log('Невозможно прибавить скорость: включите двигатель')
        } else {
            console.log(
                'Невозможно прибавить скорость: максимальная скорость 100. Ваша скорость ' + this.speed + 
                ', вы пытаетесь прибавить ' + addSpeed
            )
        }
    }
}

const car: Car = new Car()

car.getState()
car.setSpeed(50)
car.turnOn()
car.getState()
car.setSpeed(51)
car.getState()
car.setSpeed(50)
car.getState()
car.turnOff()
car.getState()