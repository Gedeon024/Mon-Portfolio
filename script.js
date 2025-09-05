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