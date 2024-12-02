document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const cardNumber = document.getElementById("card-number").value;
    const cvv = document.getElementById("cvv").value;
    const paymentType = document.getElementById("payment-type").value;

    if (!cardNumber || !cvv || !paymentType) {
        alert("Please fill in all fields!");
        return;
    }

    // Simulate payment processing
    alert("Payment Successful! Thank you for your purchase!");
    window.location.href = "index.html";
});
