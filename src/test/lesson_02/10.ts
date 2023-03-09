// 10.	Добавьте в класс автомобиля метод добавления скорости setSpeed(). 
// Минимальная скорость 0, максимальная 100. При выключенном автомобиле скорость задавать нельзя. 
// Ошибки выводить в консоль текстом

class Car {
    private engine: boolean = false   // добавить конструктор
    private speed: number = 0

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

const car: Car = new Car()

car.getState()
car.setSpeed(50)
car.turnOn()
car.getState()
car.setSpeed(51)
car.getState()
car.setSpeed(0)
car.getState()
car.turnOff()
car.getState()


