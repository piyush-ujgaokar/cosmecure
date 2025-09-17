
const stars = document.querySelectorAll("#rating span");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    stars.forEach((s, i) => {
      s.classList.toggle("active", i <= index);
    });
  });
});



const mainImage = document.querySelector(".product-image img");

const thumbnails = document.querySelectorAll(".small-images img");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
    thumbnails.forEach((t) => t.parentElement.classList.remove("active-thumb"));
    thumb.parentElement.classList.add("active-thumb");
  });
});
