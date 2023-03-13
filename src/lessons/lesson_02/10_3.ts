class Car {
    private isTurnEngine: boolean = false
    public speed: number = 0
    private check: boolean = true

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

    public getState() {
        if (!this.isTurnEngine) { console.log('Машина заглушена') }
        else if (this.speed > 0) { console.log('Двигатель работает, машина едет на скорости ' + this.speed) }
        else { console.log('Двигатель работает, машина стоит на месте') }
    }

    public checkSpeed(speed: number) {
        if ((0 <= (this.speed + speed)) && ((this.speed + speed) <= 100)) {
            this.check = false
        }
    }

    public setSpeed(speed: number) {
        this.checkSpeed(speed)
        if (!this.isTurnEngine) { console.log('Невозможно прибавить скорость: включите двигатель') }
        else if (!this.check) {
            console.log(
                'Невозможно прибавить. Скорость должна быть от 0 до 100. Ваша скорость ' + this.speed +
                ', вы пытаетесь прибавить ' + speed
            )
        } else {
            console.log('Невозможно прибавить скорость: включите двигатель')
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
