// Défilement fluide pour les liens du menu et le bouton Découvrir
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // petit offset si tu as un header fixe
        behavior: 'smooth'
      });
    }
  });
});

// Popups inchangés
function openPopup(id) {
  document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Le formulaire sera fonctionnel plus tard !");
});

// Fade-in dynamique sur scroll
const aboutSections = document.querySelectorAll('.about-section');

window.addEventListener('scroll', () => {
  aboutSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });
});
