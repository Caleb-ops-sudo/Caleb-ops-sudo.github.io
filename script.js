let currentImageIndex = 0;
const imagePaths = ['project1.jpg', 'project2.jpg', 'project3.jpg', 'project4.jpg'];

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function changeImage(direction) {
  currentImageIndex = (currentImageIndex + direction + imagePaths.length) % imagePaths.length;
  document.getElementById('project-image').src = imagePaths[currentImageIndex];
}

function autoRotate() {
  changeImage(1);
}

window.onload = () => {
  setInterval(autoRotate, 5000);
  document.getElementById('loading-screen').classList.add('hide-loader');
};

window.addEventListener('scroll', () => {
  document.body.classList.toggle('scrolled', window.scrollY > 50);
});
