const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const navLinks = document.querySelectorAll('.nav-link');

// Collect all product card elements once on load
// This automatically picks up the 30 products now.
const allProductCards = Array.from(productGrid.querySelectorAll('.product-card'));


// --- Filtering Functionality (Navbar) ---
function filterProducts(category) {
    // 1. Filter and show/hide the HTML elements
    allProductCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            card.style.display = 'block'; // Show the product
        } else {
            card.style.display = 'none'; // Hide the product
        }
    });

    // 2. Clear Search input and reset Sort
    searchInput.value = '';
    sortSelect.value = 'default';
    
    // 3. Update active state on navbar
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        }
    });

    // We don't render them here, we just show/hide them.
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        filterProducts(category);
    });
});


// --- Search Functionality ---
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const activeCategory = document.querySelector('.nav-link.active')?.getAttribute('data-category') || 'all';

    allProductCards.forEach(card => {
        const productName = card.getAttribute('data-name').toLowerCase();
        const productCategory = card.getAttribute('data-category');
        const matchesSearch = productName.includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || productCategory === activeCategory;

        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Re-apply sort if one is active on search results
    sortProducts(sortSelect.value);
});


// --- Sorting Functionality (A-Z, Z-A, Price) ---
function sortProducts(criteria) {
    // 1. Get only the currently visible cards
    let visibleCards = allProductCards.filter(card => card.style.display !== 'none');
    
    // Stop if no sort is selected
    if (criteria === 'default') {
        // If sorting is reset, re-apply the filter to return to original HTML order.
        filterProducts(document.querySelector('.nav-link.active').getAttribute('data-category'));
        return;
    }
    
    // 2. Perform the actual sort based on criteria
    visibleCards.sort((a, b) => {
        const nameA = a.getAttribute('data-name');
        const nameB = b.getAttribute('data-name');
        const priceA = parseInt(a.getAttribute('data-price'));
        const priceB = parseInt(b.getAttribute('data-price'));

        if (criteria === 'a-z') {
            return nameA.localeCompare(nameB);
        } else if (criteria === 'z-a') {
            return nameB.localeCompare(nameA);
        } else if (criteria === 'price-asc') {
            return priceA - priceB; // Low to High Price
        }
        return 0; // No sort applied
    });

    // 3. Re-append the sorted elements to the grid
    // Appending existing DOM nodes automatically moves them.
    visibleCards.forEach(card => {
        productGrid.appendChild(card);
    });
    
    // Hide the initially hidden cards again, in case search or filter was applied
    allProductCards.filter(card => card.style.display === 'none').forEach(card => {
        productGrid.appendChild(card);
    });

}

sortSelect.addEventListener('change', (e) => {
    sortProducts(e.target.value);
});


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Start with 'all' active 
    filterProducts('all'); 
});