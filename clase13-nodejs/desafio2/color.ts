class Color {
    randomColor = ():string => {
        let red:number = Math.floor(Math.random()*255)
        let green:number = Math.floor(Math.random()*255)
        let blue:number = Math.floor(Math.random()*255)
        return `rgb(${red}, ${green}, ${blue})`
    }
}

let colour = new Color()
console.log(colour.randomColor());
