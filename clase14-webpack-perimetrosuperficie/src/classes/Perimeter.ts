export default class Perimeter {
    square = (side:number) => 4*side;
    rectangle = (width:number, height:number) => 2*width + 2*height;
    circle = (radius:number) => {
        const PI = 3.141516;
        return 2*PI*radius;
    }
}