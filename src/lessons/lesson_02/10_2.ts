// 10.	Добавьте в класс автомобиля метод добавления скорости setSpeed(). 
// Минимальная скорость 0, максимальная 100. При выключенном автомобиле скорость задавать нельзя. 
// Ошибки выводить в консоль текстом

class Car {
    private isTurnEngine: boolean = false 
    public speed: number = 0

    constructor(isTurnEngine: boolean, speed: number) {
        this.isTurnEngine = isTurnEngine
        this.speed = speed
    }

    public turnOn(): void {
        this.isTurnEngine = true
    }

    public turnOff() {
        this.isTurnEngine = false
        this.speed = 0
    }

    public getState() {   // simple
        if (this.isTurnEngine && this.speed > 0) {
            console.log('Двигатель работает, машина едет на скорости ' + this.speed)
        } else if (!this.isTurnEngine) {
            console.log('Машина заглушена')
        } else {
            console.log('Двигатель работает, машина стоит на месте')
        }
    }

    public setSpeed(speed: number) {
        if (this.isTurnEngine && (this.speed + speed) <= 100) {
            this.speed = this.speed + speed
        } else if (!this.isTurnEngine) {
            console.log('Невозможно прибавить скорость: включите двигатель')
        } else {
            console.log(
                'Невозможно прибавить скорость: максимальная скорость 100. Ваша скорость ' + this.speed + 
                ', вы пытаетесь прибавить ' + speed
            )
        }
    }
}
/*
const carCabriolet: Car = new Car(false, 100)

carCabriolet.getState()
carCabriolet.setSpeed(50)
carCabriolet.turnOn()
carCabriolet.getState()
carCabriolet.setSpeed(51)
carCabriolet.getState()
carCabriolet.setSpeed(0)
carCabriolet.getState()
carCabriolet.turnOff()
carCabriolet.getState()
*/
const carLadavesta: Car = new Car(true, 0)

carLadavesta.getState()
carLadavesta.setSpeed(-2)
console.log(carLadavesta.speed)
carLadavesta.getState()
