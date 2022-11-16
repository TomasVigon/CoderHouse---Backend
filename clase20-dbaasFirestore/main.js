var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


async function dbOperations() {
  console.log('BD firestore conectada...');
  const db = admin.firestore()
  //punto 1
  const alumnos = db.collection('alumnos')
  const alumno1 = await alumnos.add({ name: "Juan Perez", course: "java"})
  const alumno2 = await alumnos.add({ name: "Susi", course: "pythonn"})
  const alumno3 = await alumnos.add({ name: "Alex", course: "ruby"})

  //punto2
  const snapshot = await alumnos.get() // devuelve un array con todos los docuemtos de la coleccion
  snapshot.forEach(doc => {
    console.log(({ id: doc.id, ...doc.data() })); // data no me develve el id
  })

  //punto3
  await alumnos.doc(alumno2.id).update({ course: 'py' })

  //punto 4
  await alumnos.doc(alumno3.id).delete()
  const snapshot2 = await alumnos.get() // devuelve un array con todos los docuemtos de la coleccion
  snapshot2.forEach(doc => {
    console.log(({ id: doc.id, ...doc.data() })); // data no me develve el id
  })
}

dbOperations()