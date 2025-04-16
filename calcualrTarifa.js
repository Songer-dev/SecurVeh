const { calcularTarifaServicio } = require('./modulos');

// Ejemplo de uso con validación de parámetros
try {
    const recibo = calcularTarifaServicio(
        "María Rodríguez",  // nombreCliente (string)
        "ABC-123",         // placa (string)
        "Vehículos menores con motor", // tipoVehiculo (string)
        3                  // horas (number)
    );
    console.log(recibo);
} catch (error) {
    console.error('Error al calcular tarifa:', error.message);
}

