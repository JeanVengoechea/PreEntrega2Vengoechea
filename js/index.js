// Orden de Datos del cliente
class cliente {
    constructor(nombre, edad, trabajo, salario, antiguedad, deudas) {
        this.nombre = nombre;
        this.edad = parseFloat(edad);
        this.trabajo = trabajo;
        this.salario = parseFloat(salario);
        this.antiguedad = antiguedad.toLowerCase();
        this.deudas = deudas.toLowerCase();
    }
}

// Datos del cliente
alert(`Bienvenido al Banco Del Mundo (BDM)`)

const clienteNuevo = new cliente(prompt(`Ingrese su nombre`), prompt(`Ingrese su edad`), prompt(`Ingrese su trabajo`), prompt(`Ingrese su salario`), prompt(`¿Usted abrio su cuenta con nosotros hace 5 años o mas?`), prompt(`¿Usted tiene deudas pendientes de pago?`))


alert(`Su nombre es ${clienteNuevo.nombre}
Su edad es ${clienteNuevo.edad} años
Su trabajo es "${clienteNuevo.trabajo}"
Su salario es de $${clienteNuevo.salario}
¿Tienes una antiguedad mayor a 5 años en el banco?: ${clienteNuevo.antiguedad}
¿Tienes deudas pendientes?: ${clienteNuevo.deudas}`)

// Calculo de interes base
const intereses = [1.20, 1.30, 1.50]

let interesBase = 0

if (clienteNuevo.antiguedad == `si` && clienteNuevo.deudas == `no`) {
    interesBase = intereses[0]
} else if (clienteNuevo.antiguedad == `no` && clienteNuevo.deudas == `no`) {
    interesBase = intereses[1]
} else {
    interesBase = intereses[2]
}

// Calculo de prestamo maximo
let valorPrestamoMaximo = clienteNuevo.salario * 0.20
let cuotasPrestamoMaximo = 12

function prestamoIdeal(prestamo, cuota, interes) {
    prestamoMaximo = (prestamo * cuota) * interes
}

prestamoIdeal(valorPrestamoMaximo, cuotasPrestamoMaximo, interesBase)

alert(`El monto maximo de prestamo que podes solicitar es de $${prestamoMaximo}`)

// Solicitud de prestamo
let prestamoSolicitado = prompt(`¿Cuanto deseas pedir de prestamo?`)

Number(prestamoSolicitado)

alert(`Tu prestamo solicitado es $${prestamoSolicitado}`)

while (prestamoSolicitado > prestamoMaximo) {
    prestamoSolicitado = prompt(`Tu prestamo excede el maximo permitido con base a tu sueldo.
    Por favor ingresa un nuevo monto a prestar` )
}

Number(prestamoSolicitado)

alert(`Tu prestamo solicitado es $${prestamoSolicitado}`)

// Solicitud de cuotas
let cuotasSolicitadas = prompt(`¿En cuantas cuotas quiere pedir su prestamo?`)

Number(cuotasSolicitadas)

alert(`Tus cuotas solicitadas son ${cuotasSolicitadas} cuotas`)

// Calculo de interes de cuotas
const interesCuotas = [1.50, 1.75, 2.25, 2.75, 3]

let interesCuotasSolicitadas = 0

if (cuotasSolicitadas <= 12) {
    interesCuotasSolicitadas = interesCuotas[0]
} else if (cuotasSolicitadas > 12 && cuotasSolicitadas <= 24) {
    interesCuotasSolicitadas = interesCuotas[1]
} else if (cuotasSolicitadas > 24 && cuotasSolicitadas <= 36) {
    interesCuotasSolicitadas = interesCuotas[2]
} else if (cuotasSolicitadas > 36 && cuotasSolicitadas <= 48) {
    interesCuotasSolicitadas = interesCuotas[3]
} else {
    interesCuotasSolicitadas = interesCuotas[4]
}

alert(`El interes que aplica para las ${cuotasSolicitadas} cuotas es de un ${interesCuotasSolicitadas}% sobre el prestamo solicitado`)

// Calculadora de cuotas de prestamo
function calculadoraDeCuotas(prestamo, cuotas, interes) {
    cuotasPrestamo = (prestamo / cuotas) * interes
}
calculadoraDeCuotas(prestamoSolicitado, cuotasSolicitadas, interesCuotasSolicitadas)

alert(`El prestamo solicitado es de $${prestamoSolicitado}, la cantidad de cuotas es de ${cuotasSolicitadas}, el interes que se aplica sobre el prestamo es de ${interesCuotasSolicitadas}% y el valor de la cuota mensual y consecutiva es de $${cuotasPrestamo}`)

alert(`Proceso Terminado. Vuelva Pronto 😎`)