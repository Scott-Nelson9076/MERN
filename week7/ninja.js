class Ninja{
    constructor(name,health){
        this.name = name
        this.health = health
        this.speed = 3
        this.stregnth = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.stregnth)
    }
    drinkSake(){
        this.health += 10
        console.log(this.health)
    }
}

const Scott = new Ninja("Scotty",10)

Scott.sayName()

Scott.showStats()

Scott.drinkSake()

class Sensei extends Ninja{
    constructor(name) {
        super(name,200);
        this.speed = 10
        this.stregnth = 10
        this.wisdom = 10
    }
    speakWisdom(){
        this.drinkSake()
        console.log("Wise Man Never Fall Of Cliff")
    }
}

const Sarah = new Sensei("Sarah")

Sarah.speakWisdom()

Sarah.showStats()

