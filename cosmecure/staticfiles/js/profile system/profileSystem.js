


function PlayStore_Image_Slider(){
      const images = document.querySelector('.images');
  const image = images.querySelectorAll('img');
  const totalImages = image.length;

  let currentIndex = 0;

  document.querySelector('.right-arrow img').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  document.querySelector('.left-arrow img').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
}
PlayStore_Image_Slider()







// profileSystem.js

document.querySelectorAll(".btn").forEach((btn) => {
  if (btn.textContent.includes("Add to Cart")) {
    btn.addEventListener("click", (e) => {
      const productCard = e.target.closest(".product-card");

      const product = {
        img: productCard.querySelector("img").src,
        name: productCard.querySelector("h3").textContent,
        price: productCard.querySelector(".price").textContent,
      };

      // Get existing cart from sessionStorage
      let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

      // Add new product
      cart.push(product);

      // Save back to sessionStorage
      sessionStorage.setItem("cart", JSON.stringify(cart));

      // Redirect to addToCart.html
      window.location.href = "./addToCart.html";
    });
  }
});

