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
