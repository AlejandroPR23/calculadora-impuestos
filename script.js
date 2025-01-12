document.getElementById("tax-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtención de los valores del formulario
    const amount = parseFloat(document.getElementById("amount").value);
    const taxRate = parseFloat(document.getElementById("tax-rate").value);

    if (isNaN(amount) || isNaN(taxRate)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    // Cálculo del impuesto y el total
    const taxAmount = (amount * taxRate) / 100;
    const totalAmount = amount + taxAmount;

    // Mostrar el resultado
    document.getElementById("total").textContent = `$${totalAmount.toFixed(2)}`;
});
