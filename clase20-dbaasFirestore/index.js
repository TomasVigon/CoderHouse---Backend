// conexion por aplicacion a mongo con servidores en sao pablo
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tvigon:bocajun12@cluster0.vopqz6o.mongodb.net/?retryWrites=true&w=majority";


async function startDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect()
    // esta coleccion y base de datos esta creada
    const collection = client.db("coderhouse").collection("alumnos");
    // perform actions on the collection object
    const personas = await collection.find().toArray()
    console.log(personas);
    await client.close();
}

startDB()
