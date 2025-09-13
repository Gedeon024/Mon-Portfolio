
        // Récupérer les éléments du DOM
        const numberInput = document.getElementById('numberInput');
        const sqrtResult = document.getElementById('sqrtResult');
        const roundResult = document.getElementById('roundResult');
        const randomResult = document.getElementById('randomResult');
        const generateRandomButton = document.getElementById('generateRandomButton');

        // Écouteur d'événement pour le champ de saisie
        numberInput.addEventListener('input', () => {
            const num = parseFloat(numberInput.value);

            if (!isNaN(num)) {
                // Calcul de la racine carrée en utilisant Math.sqrt()
                sqrtResult.textContent = Math.sqrt(num);

                // Arrondir à l'entier le plus proche en utilisant Math.round()
                roundResult.textContent = Math.round(num);
            } else {
                sqrtResult.textContent = '';
                roundResult.textContent = '';
            }
        });

        // Fonction pour générer un nombre aléatoire entre 1 et 100
        function Aleatoire() {
            return Math.floor(Math.random() * 100) + 1;
        }

        // Fonction pour générer un nombre aléatoire entre min et max
        function Aleatoire2(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Écouteur d'événement pour le bouton de génération aléatoire
        generateRandomButton.addEventListener('click', () => {
            // Utiliser la fonction Aleatoire pour générer un nombre
            const randomNum = Aleatoire();
            randomResult.textContent = randomNum;

            // Exemple d'utilisation de Aleatoire2
            // console.log("Nombre aléatoire entre 50 et 150 : " + Aleatoire2(50, 150));
        })
