export const suma = (num1, num2) => {
    return num1 + num2
}

export const resta = (num1, num2) => {
    return num1 - num2
}

// module.exports = suma
// module.exports = resta
// como js se ejecuta de arriba hacia abajo, resta tapa a suma y solamente se exporta resta
