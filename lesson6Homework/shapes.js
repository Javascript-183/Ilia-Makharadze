class Shape{
    constructor(name){
        this.name=name;
    }
    area(){
        return "Area calculation not implemented for generic shape.";
    }
}


class Circle extends Shape{
    constructor(name,radius) {
        super(name);//call to parent constuctor
        this.radius=radius;
    }
    area(){
        return `area of this ${this.name} is: `+ Math.PI*this.radius**2;
    }
}
class Rectangle extends Shape{
    constructor(name,width,height){
        super(name);//for parent consturctor
        this.width=width;
        this.height=height;
    }
    area(){
        return `area of this ${this.name} is: `+this.width*this.height;
    }
    
}
class Triangle extends Shape{
    constructor(name,base,height){
        super(name);//call parent class constructor
        this.base=base;
        this.height=height;
    }
    area(){
        return  `area of this ${this.name} is: `+this.base*this.height/2;
    }
}

let shape=new Shape("rame figura");
console.log(shape.area());
const circle=new Circle("sosoo",1);
console.log(circle.area());
let rectangle=new Rectangle("rectangle",12,5);
console.log(rectangle.area());
let triangle=new Triangle("triangle",5,12);
console.log(triangle.area());