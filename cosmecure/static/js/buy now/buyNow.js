document.addEventListener('DOMContentLoaded', () => {

    const shippingOptions = document.querySelectorAll('input[name="shipping"]');
    const shippingCostEl = document.getElementById('shipping-cost');
    const subtotalEl = document.getElementById('subtotal');
    const taxesEl = document.getElementById('taxes');
    const totalEl = document.getElementById('total-price');

    
    const subtotal = parseFloat(subtotalEl.textContent.replace('₹', ''));
    const taxes = parseFloat(taxesEl.textContent.replace('₹', ''));

    
    function updateTotalPrice() {
        
        const selectedShipping = document.querySelector('input[name="shipping"]:checked');
        const shippingCost = parseFloat(selectedShipping.value);

        
        if (shippingCost === 0) {
            shippingCostEl.textContent = 'Free';
        } else {
            shippingCostEl.textContent = `₹${shippingCost.toFixed(2)}`;
        }

   
        const newTotal = subtotal + taxes + shippingCost;

        
        totalEl.textContent = `₹${newTotal.toFixed(2)}`;
    }

    
    shippingOptions.forEach(option => {
        option.addEventListener('change', updateTotalPrice);
    });

    
    updateTotalPrice();

});