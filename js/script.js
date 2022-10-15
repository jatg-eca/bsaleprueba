// console.log("link");

fetch("http://localhost:8080/api/products")
    .then(response => response.json())
    .then(array => {
        array.forEach(element => {
            // console.log(element);
            /***
             * Producto nombre
             */
            let productName = element.productName;

            /***
             * Precio
             */
            let price = element.price;
            if(element.discount != 0) price = (element.price - (element.price * (element.discount/100)));
            
            /**
             * Imagen
             */
            let img = element.urlImage;
        })
    });
