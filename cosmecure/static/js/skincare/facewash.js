 const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Facewash added to cart!');
      });
    });

    const toggleBtn = document.getElementById('toggle-btn');
    const hiddenCards = document.querySelectorAll('.hidden');
    let expanded = false;

    toggleBtn.addEventListener('click', () => {
      hiddenCards.forEach(card => {
        card.style.display = expanded ? 'none' : 'block';
      });
      expanded = !expanded;
      toggleBtn.textContent = expanded ? "Show Less" : "View All Products";
    });