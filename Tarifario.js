const { generarTarifario } = require('./modulos');

// Ejemplo de uso con validación de parámetros
try {
    const nombreCliente = "María Rodríguez"; 
    const tarifario = generarTarifario(nombreCliente);
    console.log(tarifario);
} catch (error) {
    console.error('Error al generar tarifario:', error.message);
}