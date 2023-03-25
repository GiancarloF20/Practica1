function calcularPago() {
    const montoPagar = document.getElementById('montoPagar').value;
    const diasRetraso = document.getElementById('dias_retraso').value;
    const intereses = 0.005; // Tasa de interés diaria (0.5%)

    const mora = montoPagar * (intereses * diasRetraso);
    const totalPagar =(montoPagar+(mora.toFixed(2))*10)/10;
    

    document.getElementById('mora').value = mora.toFixed(2);
    document.getElementById('totalPagar').value = totalPagar.toFixed(2);
}