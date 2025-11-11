const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const navLinks = document.querySelectorAll('.nav-link');

const allProductCards = Array.from(productGrid.querySelectorAll('.product-card'));

function filterProducts(category) {
    allProductCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        
        if (category === 'all' || productCategory === category) {
            card.style.display = 'block'; 
        } else {
            card.style.display = 'none'; 
        }
    });

    searchInput.value = '';
    sortSelect.value = 'default';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.getAttribute('data-category');
        filterProducts(category);
    });
});

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
    
    sortProducts(sortSelect.value);
});

function sortProducts(criteria) {
    let visibleCards = allProductCards.filter(card => card.style.display !== 'none');
    
    if (criteria === 'default') {
        filterProducts(document.querySelector('.nav-link.active').getAttribute('data-category'));
        return;
    }
    
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
            return priceA - priceB; 
        }
        return 0; 
    });

    visibleCards.forEach(card => {
        productGrid.appendChild(card);
    });
    
    allProductCards.filter(card => card.style.display === 'none').forEach(card => {
        productGrid.appendChild(card);
    });

}

sortSelect.addEventListener('change', (e) => {
    sortProducts(e.target.value);
});


document.addEventListener('DOMContentLoaded', () => {

    filterProducts('all'); 
});