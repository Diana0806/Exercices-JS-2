
    let lastnameInput = document.getElementById("lastname");

    // Fonction exécutée lorsque le champ de saisie perd le focus

    function afficherMessage() {

      alert("Merci de votre participation");

    }

    // Ajouter l'événement "blur" pour déclencher la fonction afficherMessage

    lastnameInput.addEventListener("blur", afficherMessage);
