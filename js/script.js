// console.log("link");

fetch("../json/data.json")
    .then(response => response.json())
    .then(array => {
        array.forEach(element => {
            let cardCounter;
            // console.log(element);
            /***
             * Producto nombre
             */
            let productName = element.productName;
            productName = productName.toLowerCase();
            productName = productName.charAt(0).toUpperCase() + productName.slice(1);

            /***
             * Precio
             */
            let price = element.price;
            if(element.discount != 0) price = (element.price - (element.price * (element.discount/100)));
            
            /**
             * Imagen
             */
            let img = element.urlImage;
            if(img == null || img == "") img="../img/templatebottle.png" //img = "https://images.pexels.com/photos/1727829/pexels-photo-1727829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


            let divProductos = document.getElementById("productos");

            let node = `<div class="card col-4">
          <img src="${img}" class="card-img-top" alt="...">
          <div class="card-body">
          <p class="card-text">${productName}</p>
          <h5 class="card-title">Precio: $ ${price}</h5>
          </div>
        </div>`;

        divProductos.insertAdjacentHTML("afterbegin", node);

        })
    });
