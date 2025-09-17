function filterSection(category) {
  let sections = document.querySelectorAll(".product-section");

  sections.forEach(section => {
    if (category === "all") {
      section.style.display = "block";
    } else {
      if (section.id === category) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    }
  });
}

 let index = 0;
    const slider = document.getElementById("slider");
    const totalSlides = document.querySelectorAll(".slide").length;

    function moveSlide(direction) {
      index += direction;
      if (index < 0) {
        index = totalSlides - 1;
      } else if (index >= totalSlides) {
        index = 0;
      }
      slider.style.transform = `translateX(${-index * 100}%)`;
    }
    setInterval(() => {
      moveSlide(1);
    }, 3000);


 const searchBar = document.getElementById("searchBar");
    const sortOptions = document.getElementById("sortOptions");
    const productContainer = document.getElementById("productContainer");
    const products = Array.from(productContainer.getElementsByClassName("card"));

    searchBar.addEventListener("keyup", () => {
      const searchText = searchBar.value.toLowerCase();
      products.forEach(product => {
        const name = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = name.includes(searchText) ? "" : "none";
      });
    });

    sortOptions.addEventListener("change", () => {
      let sortedProducts = [...products];
      const option = sortOptions.value;

      if (option === "az") {
        sortedProducts.sort((a, b) =>
          a.querySelector("h3").innerText.localeCompare(b.querySelector("h3").innerText)
        );
      } else if (option === "za") {
        sortedProducts.sort((a, b) =>
          b.querySelector("h3").innerText.localeCompare(a.querySelector("h3").innerText)
        );
      } else if (option === "low-high") {
        sortedProducts.sort((a, b) => {
          const priceA = parseInt(a.querySelector("span").innerText.replace("₹", ""));
          const priceB = parseInt(b.querySelector("span").innerText.replace("₹", ""));
          return priceA - priceB;
        });
      } else if (option === "high-low") {
        sortedProducts.sort((a, b) => {
          const priceA = parseInt(a.querySelector("span").innerText.replace("₹", ""));
          const priceB = parseInt(b.querySelector("span").innerText.replace("₹", ""));
          return priceB - priceA;
        });
      }

      productContainer.innerHTML = "";
      sortedProducts.forEach(product => productContainer.appendChild(product));
    });
