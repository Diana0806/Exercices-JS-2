
    let images = document.querySelectorAll(".container img");

    function changerImage(event) {

      let image = event.target;

      let imageId = image.id;

      let numImage = imageId.substring(5); // Récupérer le numéro de l'image à partir de l'ID

      // Construire le chemin de la deuxième image en utilisant le numéro

      let deuxiemeImage = "images/image" + numImage + ".jpg";

      image.addEventListener("mouseout", function() {

        // Rétablir la première image lorsque le curseur quitte l'image

        image.src = "images/image1.jpg";

      });

      // Changer l'image au survol

      image.addEventListener("mouseover", function() {

        image.src = deuxiemeImage;

      });

    }

    // Appliquer la fonction changerImage à toutes les images

    for (let i = 0; i < images.length; i++) {

      changerImage({ target: images[i] });

    }
