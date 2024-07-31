// Actividad 14: Crear un array de números y encontrar todos los números pares.
const numeros = [9, 100, 500, 3, 25, 20]
const pares = []

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i])
    }
}
console.log(pares)