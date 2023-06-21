
    let image1 = document.getElementById("image1");

    // Chemin de la deuxième image

    let deuxiemeImage = "images/image1_2.jpg";


    // Fonction exécutée lorsque le curseur survole l'image

    function changerImage() {

      image1.src = deuxiemeImage;

    }

    // Ajouter l'événement "mouseover" pour déclencher la fonction changerImage

    image1.addEventListener("mouseover", changerImage);

  
