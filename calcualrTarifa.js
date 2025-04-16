const { calcularTarifaServicio } = require('./modulos');

// Ejemplo de uso con validación de parámetros
try {
    const recibo = calcularTarifaServicio(
        "María Rodríguez",  
        "ABC-123",         
        "Vehículos menores con motor", 
        3                  
    );
    console.log(recibo);
} catch (error) {
    console.error('Error al calcular tarifa:', error.message);
}

