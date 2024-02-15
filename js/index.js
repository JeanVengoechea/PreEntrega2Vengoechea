/* 1. Mensaje de bienvenida*/
alert("Bienvenido al Banco Central")

/* 2. Consulta de salario */
const salario = prompt(`Por favor ingrese su salario`)
Number(salario)
console.log(`Su salario es de $${salario}`)

let cuotaIdeal = salario * 0.20
let interesMinimo = 2
let cuotasMinimas = 12

function prestamoMaximo(prestamo, cuota, interes) {
    prestamoIdeal = (prestamo * cuota) * interes
}
prestamoMaximo(cuotaIdeal, cuotasMinimas, interesMinimo)
console.log(`Tu prestamo ideal es $${prestamoIdeal}`)

/* 3. Consulta de prestamo */
let prestamoSolicitado = prompt("Por favor ingrese valor de prestamo a solicitar")
Number(prestamoSolicitado)
console.log(`Tu prestamo solicitado es $${prestamoSolicitado}`)


while (prestamoSolicitado > prestamoIdeal) {
    prestamoSolicitado = prompt(`Tu prestamo es mayor al maximo que puedes pedir en base a tu sueldo.
    Por favor ingresa un nuevo monto de prestamo` )
}

/* 4. Consultar cantidad de cuotas */
let cuotasSolicitadas = prompt("Porfavor ingrese el numero de cuotas solicitadas")
Number(cuotasSolicitadas)
console.log(`Las cuotas solicitadas para el prestamo son ${cuotasSolicitadas} cuotas`)

/* 5. Calcular el interes del prestamo en base a las cuotas solicitadas */

let interes = 1.3

if (cuotasSolicitadas <= 12) {
    interesPrestamo = 1.3
} else if (cuotasSolicitadas > 12 && cuotasSolicitadas <= 24) {
    interesPrestamo = 1.5
} else if (cuotasSolicitadas > 24 && cuotasSolicitadas <= 36) {
    interesPrestamo = 1.7
} else if (cuotasSolicitadas > 36 && cuotasSolicitadas <= 48) {
    interesPrestamo = 1.9
} else {
    interesPrestamo = 2
}

/* 6. Calculo de valor */
let valorFinalPrestamoSolicitado = 0
function valorPrestamoSolicitado(prestamo, interes) {
    valorFinalPrestamoSolicitado = prestamo * interes
}
valorPrestamoSolicitado(prestamoSolicitado, interesPrestamo, cuotasSolicitadas)
let valorDeCuotas = valorFinalPrestamoSolicitado / cuotasSolicitadas
alert((`El valor final del prestamo solicitado es de $${valorFinalPrestamoSolicitado} y se solicita en ${cuotasSolicitadas} `))
alert((`El valor final de las cuotas es $${valorDeCuotas}`))