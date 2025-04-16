const { generarTarifario } = require('./modulos');

// Ejemplo de uso con validación de parámetros
try {
    const nombreCliente = "María Rodríguez"; // Debe ser string
    const tarifario = generarTarifario(nombreCliente);
    console.log(tarifario);
} catch (error) {
    console.error('Error al generar tarifario:', error.message);
}

// Exportar para uso en otros archivos si es necesario
module.exports = {
    mostrarTarifario: (nombre) => {
        try {
            return generarTarifario(nombre);
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
};