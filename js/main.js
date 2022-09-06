
const comprarProductos = () => {
    let producto;
    let cantidad = 0;
    let precio = 0;
    let total = 0;
    let continuarCompra = false;

    do {
        producto = prompt ("¿Querés comprar videojuegos, mangas o ambos?", "Ej: videojuegos");
        cantidad = Number(prompt ("¿Cuántos querés comprar?"));

        while (isNaN(cantidad)) {
            cantidad = Number(prompt ("¿Cuántos querés comprar?"));
        }

    switch (producto) {
        case "videojuegos":
            precio = 2000;
            break;
        case "mangas":
            precio = 1000;
            break;
        case "ambos":
            precio = 3000;
            break;
        default:
            alert("El producto seleccionado no existe. Chequeá nuevamente");
            precio= 0;
            cantidad= 0;
    }

    total += precio * cantidad;
    continuarCompra = confirm("¿Querés agregar otro producto al carrito?");

    } while (continuarCompra)

    return total;
}

const aplicarElDescuento = (total) => {
    if (total >= 6000) {
        return total * 0.90;
    } else {
        return total;
    }
}

const calcularElEnvio = (total) => {
    let confirmacion = confirm("¿Solicitás el envío a domicilio?");

    if (confirmacion && total >= 3000) {
      alert("Tenés el envío gratis! Te lo llevamos a tu casa :D El total de tu compra es $" + total);
    } else if (confirmacion && total < 3000 && total != 0) {
      total = total + 900;
      alert("El envío tiene un valor de $900. El total de tu compra es $" + total);
    } else {
      alert("El total de tu compra es $" + total);
    }

    return total;
}

calcularElEnvio(aplicarElDescuento(comprarProductos()));