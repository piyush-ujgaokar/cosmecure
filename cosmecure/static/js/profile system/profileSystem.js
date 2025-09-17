


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