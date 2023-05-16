class animal{
    constructor(legs){
        this.legs=legs
    }
    showLegs(){
        console.log(`This animal has ${this.legs}`)
    }

}
// let obj1 =new animal("4 legs");
// obj1.showlegs();

class dog extends animal{
    constructor(color,height,legs){
        super(legs);
        this.color=color;
        this.height=height;
    }
    showDogDetail()
    {
        console.log(`the color of dog is  ${this.color} this height is ${this.height}`);
    }
}

class cat extends animal{
    constructor(eyes,legs){
        super(legs);
        this.eyes=eyes;
    }
    showCatDetail()
    {
        console.log(`the eyes of color cat ${this.eyes}`);
    }
}

class cow extends animal{
    constructor(color,legs){
        super(legs);
        this.color=color;
    }
    showCowDetail()
    {
        console.log(`the color of cow is ${this.color}`);
    }
}
let obj1 = new cow("brown","4 legs")
let obj2 = new cat("blue","4 legs")
let obj3 = new dog("brown","3 feet","4 legs")
console.log(obj1.showCowDetail())
console.log(obj2.showCatDetail())
console.log(obj3.showDogDetail())
console.log(obj3.showLegs())
