export default class Surface {
    square = (side:number) => side*side;
    rectangle = (width:number, height:number) => width*height;
    circle = (radius:number) => {
        const PI = 3.141516;
        return PI*(radius**2);
    }
}