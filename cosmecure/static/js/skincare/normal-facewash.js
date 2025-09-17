const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".product-card");
const searchBar = document.getElementById("searchBar");
const sortOptions = document.getElementById("sortOptions");
const productGrid = document.querySelector(".product-grid");

// Filter by category
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterProducts();
  });
});

function filterProducts() {
  const activeBtn = document.querySelector(".filter-btn.active");
  const category = activeBtn.getAttribute("data-category");
  const searchTerm = searchBar.value.toLowerCase();

  cards.forEach(card => {
    const matchesCategory = category === "all" || card.getAttribute("data-category") === category;
    const matchesSearch = card.querySelector("h3").innerText.toLowerCase().includes(searchTerm);

    if (matchesCategory && matchesSearch) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Search
searchBar.addEventListener("keyup", filterProducts);

// Sort
sortOptions.addEventListener("change", () => {
  let sortedCards = Array.from(cards).filter(card => !card.classList.contains("hidden"));
  const option = sortOptions.value;

  if (option === "az") {
    sortedCards.sort((a, b) =>
      a.querySelector("h3").innerText.localeCompare(b.querySelector("h3").innerText)
    );
  } else if (option === "za") {
    sortedCards.sort((a, b) =>
      b.querySelector("h3").innerText.localeCompare(a.querySelector("h3").innerText)
    );
  } else if (option === "low-high") {
    sortedCards.sort((a, b) => {
      const priceA = parseInt(a.querySelector(".price").innerText.replace("₹", ""));
      const priceB = parseInt(b.querySelector(".price").innerText.replace("₹", ""));
      return priceA - priceB;
    });
  } else if (option === "high-low") {
    sortedCards.sort((a, b) => {
      const priceA = parseInt(a.querySelector(".price").innerText.replace("₹", ""));
      const priceB = parseInt(b.querySelector(".price").innerText.replace("₹", ""));
      return priceB - priceA;
    });
  }

  // Re-append sorted cards
  sortedCards.forEach(card => productGrid.appendChild(card));
});

