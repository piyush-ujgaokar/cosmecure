document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card");
  const searchBar = document.getElementById("searchBar");
  const sortOptions = document.getElementById("sortOptions");
  const productGrid = document.querySelector(".product-grid");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterProducts();
    });
  });


  if (searchBar) {
    searchBar.addEventListener("input", filterProducts);
  }

  function filterProducts() {
    const activeBtn = document.querySelector(".filter-btn.active");
    const category = activeBtn ? activeBtn.getAttribute("data-category") : "all";
    const searchTerm = searchBar ? searchBar.value.toLowerCase() : "";

    cards.forEach(card => {
      const matchesCategory = category === "all" || card.getAttribute("data-category") === category;
      const matchesSearch = card.querySelector("h3").innerText.toLowerCase().includes(searchTerm);
      card.classList.toggle("hidden", !(matchesCategory && matchesSearch));
    });
  }

  if (sortOptions) {
    sortOptions.addEventListener("change", () => {
      let visibleCards = Array.from(cards).filter(card => !card.classList.contains("hidden"));
      const option = sortOptions.value;

      if (option === "az") {
        visibleCards.sort((a, b) =>
          a.querySelector("h3").innerText.localeCompare(b.querySelector("h3").innerText)
        );
      } else if (option === "za") {
        visibleCards.sort((a, b) =>
          b.querySelector("h3").innerText.localeCompare(a.querySelector("h3").innerText)
        );
      } else if (option === "low-high") {
        visibleCards.sort((a, b) => {
          const priceA = parseInt(a.querySelector(".price").innerText.replace(/[₹,]/g, "").trim());
          const priceB = parseInt(b.querySelector(".price").innerText.replace(/[₹,]/g, "").trim());
          return priceA - priceB;
        });
      } else if (option === "high-low") {
        visibleCards.sort((a, b) => {
          const priceA = parseInt(a.querySelector(".price").innerText.replace(/[₹,]/g, "").trim());
          const priceB = parseInt(b.querySelector(".price").innerText.replace(/[₹,]/g, "").trim());
          return priceB - priceA;
        });
      }

      visibleCards.forEach(card => productGrid.appendChild(card));
    });
  }
});
