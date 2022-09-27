import express, { Request, Response } from 'express'
import Perimeter from './classes/Perimeter'
import Surface from './classes/Surface'

const app = express()
const perimeterService = new Perimeter()
const surfaceService = new Surface()

app.get('/operations', (req:Request, res:Response) => {
    let figure:string = req.query.figure
    if (figure === "square"){
        let side = parseInt(req.query.side)
        res.send({figure, params:{side}, perimeter: perimeterService.square(side), surface: surfaceService.square(side)})
    }
    if (figure === "rectangle"){
        let width = parseInt(req.query.width)
        let height = parseInt(req.query.height)
        res.send({figure, params:{width, height}, perimeter: perimeterService.rectangle(width,height), surface: surfaceService.rectangle(width,height)})
    }
    if (figure === "circle"){
        let radius = parseInt(req.query.radius)
        res.send({figure, params:{radius}, perimeter: perimeterService.circle(radius), surface: surfaceService.circle(radius)})
    }
})

app.listen(8080, () => console.log('Server up'))