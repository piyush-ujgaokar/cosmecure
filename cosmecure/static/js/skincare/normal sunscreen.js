 const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".product-card");
    const searchInput = document.getElementById("searchInput");

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filterProducts();
      });
    });

    searchInput.addEventListener("input", filterProducts);

    function filterProducts() {
      const activeBtn = document.querySelector(".filter-btn.active");
      const category = activeBtn.getAttribute("data-category");
      const searchTerm = searchInput.value.toLowerCase();

      cards.forEach(card => {
        const matchesCategory = category === "all" || card.getAttribute("data-category") === category;
        const matchesSearch = card.querySelector("h3").innerText.toLowerCase().includes(searchTerm);
        card.classList.toggle("hidden", !(matchesCategory && matchesSearch));
      });
    }