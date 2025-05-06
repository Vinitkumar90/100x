class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color  = color;
    }

    area(){
        const area = this.width * this.height;
        return area;
    }

    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}

const hello = new Rectangle(2,4,"red"); //obj created with class rectangle
const some = hello.area();
console.log(some);
hello.paint()