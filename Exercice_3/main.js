

    let lastnameInput = document.getElementById("lastname");

    // Fonction exécutée lorsque l'on appuie sur une touche du clavier

    function afficherValeur(event) {

      let valeur = lastnameInput.value;

      alert("La valeur du champ est : " + valeur);

    }

    // Ajouter l'événement "keyup" pour déclencher la fonction afficherValeur

    lastnameInput.addEventListener("keyup", afficherValeur);

