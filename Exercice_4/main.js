
    let lastnameInput = document.getElementById("lastname");

    let firstnameInput = document.getElementById("firstname");

    let cityInput = document.getElementById("city");

    let razButton = document.querySelector("button[name='button']");


    // Fonction exécutée lorsque le bouton "RAZ" est cliqué

    function razForm() {

      lastnameInput.value = "";

      firstnameInput.value = "";

      cityInput.value = "";

    }


    // Ajouter l'événement "click" pour déclencher la fonction razForm

    razButton.addEventListener("click", razForm);
