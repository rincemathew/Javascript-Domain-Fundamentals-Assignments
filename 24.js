// Write a menu driven program to calculate the area of a given object.

var read = require('readline-sync')
let area
class Area {
    circle() {
        var rad=parseInt(read.question("Enter the radius: "))
        area=3.14*(rad*rad)
        console.log("The Area of circle is "+area);
    }
    square(){
        var edge=parseInt(read.question("Enter the length: "))
        area=edge*edge
        console.log("The Area of square is "+area);
    }
    rectangle(){
        var len=parseInt(read.question("Enter the length: "))
        var breadth=parseInt(read.question("Enter the breadth: "))
        area=len*breadth
        console.log("The Area of rectangle is "+area);
    }
    triangle(){
        var baselength=parseInt(read.question("Enter the base length: "))
        var height=parseInt(read.question("Enter the height: "))
        area=(baselength*height)/2
        console.log("The Area of triangle is "+area);
    }
}
class MyClass extends Area{
    main(){
        console.log("Enter your choice: \n1.Circle \n2.Square \n3.Rectangle \n4.Triangle");
        var choice=parseInt(read.question())
        switch (choice) {
            case 1:
                this.circle()
                break;
            case 2:
                this.square()
                break;
            case 3:
                this.rectangle()
                break;
            case 4:
                this.triangle()
                break;
            default:
                console.log("Invalid Entry!!");
                break;
        }
    }
}

const obj=new MyClass()
obj.main()