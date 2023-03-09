// 10.	Добавьте в класс автомобиля метод добавления скорости setSpeed(). 
// Минимальная скорость 0, максимальная 100. При выключенном автомобиле скорость задавать нельзя. 
// Ошибки выводить в консоль текстом

class Car {
    private engine: boolean = false
    private speed: number = 0

    constructor(engine: boolean, speed: number) {
        this.engine = engine
        this.speed = speed
    }

    public turnOn(): void {
        this.engine = true
    }

    public turnOff() {
        this.engine = false
        this.speed = 0
    }

    public getState() {
        if (this.engine && this.speed > 0) {
            console.log('Двигатель работает, машина едет на скорости ' + this.speed)
        } else if (!this.engine) {
            console.log('Машина заглушена')
        } else {
            console.log('Двигатель работает, машина стоит на месте')
        }
    }

    public setSpeed(addSpeed: number) {
        if (this.engine && (this.speed + addSpeed) <= 100) {
            this.speed = this.speed + addSpeed
        } else if (!this.engine) {
            console.log('Невозможно прибавить скорость: включите двигатель')
        } else {
            console.log(
                'Невозможно прибавить скорость: максимальная скорость 100. Ваша скорость ' + this.speed + 
                ', вы пытаетесь прибавить ' + addSpeed
            )
        }
    }
}

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

const carLadavesta: Car = new Car(true, 2)

carLadavesta.getState()
carLadavesta.setSpeed(50)
carLadavesta.turnOn()
carLadavesta.getState()
carLadavesta.setSpeed(51)
carLadavesta.getState()
carLadavesta.setSpeed(0)
carLadavesta.getState()
carLadavesta.turnOff()
carLadavesta.getState()
