// On sélectionne le bouton qui ouvre le menu
const burgerBtn = document.querySelector('.burger-menu-btn');
// On sélectionne le menu de navigation
const navMenu = document.getElementById('main-nav');
// On sélectionne le bouton qui ferme le menu
const closeBtn = document.querySelector('.close-btn');

// Quand on clique sur le bouton burger
burgerBtn.addEventListener('click', () => {
    // On affiche le menu
    navMenu.style.display = 'flex';
});

// Quand on clique sur le bouton de fermeture
closeBtn.addEventListener('click', (e) => {
    // On empêche le comportement par défaut (recharger la page)
    e.preventDefault();
    // On cache le menu
    navMenu.style.display = 'none';
});

// On sélectionne la section des compétences
const skillsSection = document.querySelector('.competences');
// On sélectionne toutes les barres de remplissage
const skillBars = document.querySelectorAll('.skill-bar-fill');

// On définit les pourcentages de chaque compétence
const skillLevels = {
    html: '80%',
    css: '70%',
    js: '50%'
};

// Fonction pour animer les barres
function animateSkillBars() {
    skillBars.forEach(bar => {
        const skillName = bar.classList[1];
        bar.style.width = skillLevels[skillName];
    });
}

// On crée un observateur
const observer = new IntersectionObserver(entries => {
    // Si la section des compétences est visible à l'écran
    if (entries[0].isIntersecting) {
        animateSkillBars();
        // On arrête d'observer une fois l'animation lancée
        observer.disconnect();
    }
}, { threshold: 0.5 }); // Le seuil est de 0.5, ce qui signifie que l'animation se déclenche quand la moitié de l'élément est visible

// On demande à l'observateur de surveiller la section des compétences
observer.observe(skillsSection);

document.addEventListener('DOMContentLoaded', function() {
    // ... votre code existant pour les barres de compétences ...

    // Animation pour la section "À propos"
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = parseInt(element.getAttribute('data-delay')) || 0;
                const animationType = element.getAttribute('data-animation') || 'fade-in';

                setTimeout(() => {
                    element.classList.add(animationType);
                    element.style.opacity = '1'; // S'assure que l'élément est visible
                    element.style.transform = 'translateY(0) scale(1)'; // Réinitialise la transformation
                }, delay);

                observer.unobserve(element); // Arrête d'observer une fois l'animation déclenchée
            }
        });
    }, {
        threshold: 0.1 // L'animation se déclenche quand 10% de l'élément est visible
    });

    animateOnScrollElements.forEach(element => {
        element.style.opacity = '0'; // Cache les éléments au départ
        element.style.transform = 'translateY(20px)'; // Position de départ pour l'animation
        // Si vous voulez un autre type d'animation, ajustez ici. Ex: scale(0.9)
        observer.observe(element);
    });

    // Ajouter des styles CSS pour les animations (à mettre dans style.css)
    const animationStyles = `
        .animate-on-scroll {
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
            will-change: opacity, transform;
        }
        /* Animation Fade-in-up */
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        /* Ajoutez d'autres classes d'animation si vous voulez des effets différents */
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = animationStyles;
    document.head.appendChild(styleSheet);
});