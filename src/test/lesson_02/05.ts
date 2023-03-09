// 5.	Написать класс Car. Объект машины, эмулирующий ее работу после создания экземпляра, может находиться в двух состояниях: 
//  включена и выключена. По умолчанию состояние автомобиля - выключено.
//	У класса должны быть реализованы методы turnOn() и turnOff() - включающие и выключающие двигатель автомобиля соответственно. 
//  Метод getState(), который печатает состояние автомобиля в консоль.
//    Задание: Создайте экземпляр класса. Выведите текущее состояние авто. Включите авто и выведите состояние повторно.
    
class Car {
    private engine: boolean = false

    public turnOn() {
        this.engine = true
    }

    public turnOff() {
        this.engine = false
    }

    public getState() {
        this.engine === true 
        ? console.log('Двигатель работает')
        : console.log('Машина заглушена')
    }
}

const car: Car = new Car()

car.turnOn()
car.getState()
car.turnOff()
car.getState()
