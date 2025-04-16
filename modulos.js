// Validación de parámetros
function validarParametros(valor, nombreParametro, tipoEsperado = 'string') {
    // Validar que exista el parámetro
    if (valor === undefined || valor === null) {
        throw new Error(`Falta el parámetro: ${nombreParametro}`);
    }
    
    // Validar tipo de dato
    if (typeof valor !== tipoEsperado) {
        throw new Error(`El parámetro ${nombreParametro} debe ser de tipo ${tipoEsperado}`);
    }
    
    // Validaciones adicionales para números
    if (tipoEsperado === 'number') {
        if (isNaN(valor)) {
            throw new Error(`El parámetro ${nombreParametro} no es un número válido`);
        }
        if (valor <= 0) {
            throw new Error(`El parámetro ${nombreParametro} debe ser mayor a cero`);
        }
    }
    
    // Validaciones adicionales para strings
    if (tipoEsperado === 'string') {
        if (valor.trim() === '') {
            throw new Error(`El parámetro ${nombreParametro} no puede estar vacío`);
        }
    }
}

// Función para obtener tarifas
function obtenerTarifa(tipoVehiculo) {
    const tarifas = {
        'vehiculos menores sin motor': 3,
        'vehículos menores con motor': 4.5,
        'vehículos menores 4 ejes': 6,
        'vehiculos mayores 4,6 ejes': 10
    };
    
    const tarifa = tarifas[tipoVehiculo.toLowerCase()];
    if (!tarifa) {
        throw new Error('Tipo de vehículo no reconocido');
    }
    return tarifa;
}

// Función para obtener descripción del vehículo
function obtenerDescripcionVehiculo(tipoVehiculo) {
    const descripciones = {
        'vehiculos menores sin motor': 'Vehículo menor sin motor (Bicicletas, triciclos)',
        'vehículos menores con motor': 'Vehículo menor con motor (Motos, mototaxis)',
        'vehículos menores 4 ejes': 'Vehículo menor 4 ejes (Autos, camionetas)',
        'vehiculos mayores 4,6 ejes': 'Vehículo mayor 4,6 ejes (Camiones, cisternas, trailers)'
    };
    
    return descripciones[tipoVehiculo.toLowerCase()] || tipoVehiculo;
}

// Función para generar el tarifario
function generarTarifario(nombreCliente) {
    validarParametros(nombreCliente, 'nombreCliente', 'string');
    
    return `
    TARIFARIO DE SERVICIOS - SEGURVEH
    Cliente: ${nombreCliente}
    
    1. Vehículos menores sin motor (Bicicletas, triciclos)
       Tarifa: 3 soles por hora
    
    2. Vehículos menores con motor (Motos, mototaxis)
       Tarifa: 4.5 soles por hora
    
    3. Vehículos menores 4 ejes (Autos, camionetas)
       Tarifa: 6 soles por hora
    
    4. Vehículos mayores 4,6 ejes (Camiones, cisternas, trailers)
       Tarifa: 10 soles por hora
    `;
}

// Función para calcular tarifa
function calcularTarifaServicio(nombreCliente, placa, tipoVehiculo, horas) {
    // Validar todos los parámetros
    validarParametros(nombreCliente, 'nombreCliente', 'string');
    validarParametros(placa, 'placa', 'string');
    validarParametros(tipoVehiculo, 'tipoVehiculo', 'string');
    validarParametros(horas, 'horas', 'number');
    
    // Obtener datos necesarios
    const tarifaPorHora = obtenerTarifa(tipoVehiculo);
    const descripcionVehiculo = obtenerDescripcionVehiculo(tipoVehiculo);
    
    // Cálculos
    const subtotal = tarifaPorHora * horas;
    const igv = subtotal * 0.18;
    const total = subtotal + igv;
    
    // Generar recibo
    return `
    RECIBO DE SERVICIO - SEGURVEH
    Cliente: ${nombreCliente}
    Vehículo: ${placa}
    Tipo: ${descripcionVehiculo}
    Horas de servicio: ${horas}
    Tarifa por hora: S/. ${tarifaPorHora.toFixed(2)}
    
    DESGLOSE DE PAGO:
    Subtotal: S/. ${subtotal.toFixed(2)}
    IGV (18%): S/. ${igv.toFixed(2)}
    TOTAL A PAGAR: S/. ${total.toFixed(2)}
    `;
}

// Exportar todas las funciones
module.exports = {
    generarTarifario,
    calcularTarifaServicio
};//subida