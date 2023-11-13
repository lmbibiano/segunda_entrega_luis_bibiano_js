function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const productos = [
    new Producto("Nevera", 135789.99, 50),
    new Producto("Lavadora", 98456.50, 30),
    new Producto("Televisor", 240678.75, 20),
    new Producto("Lavadora", 240678.75, 20),
    
];
const iva = 0.20
const envio = 1200
const listaUsuarios = [];

function mostrarProductos() {

    alert("Productos disponibles:");
    productos.forEach(producto => {
        alert(`${producto.nombre} - Precio: clp ${producto.precio.toFixed(2)} - Stock: ${producto.stock}`);
    });
}

function ingresarUsuario() {
    const nombreUsuario = prompt("Ingrese su nombre de usuario:");
    listaUsuarios.push(nombreUsuario); // Agregar el nombre de usuario a la lista
    alert(`Su nombre ${nombreUsuario} ha sido ingresado con éxito`);
}


function realizarCompra() {
    const usuario = listaUsuarios[listaUsuarios.length - 1];
    mostrarProductos();

    const productoNombre = prompt("Ingrese el nombre del producto que desea comprar:");
    const cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));

    const productoSeleccionado = productos.find(producto => producto.nombre === productoNombre);

    if (productoSeleccionado) {
            if (cantidad > 0 && cantidad <= productoSeleccionado.stock) {
            const totalCompra = cantidad * productoSeleccionado.precio + (productoSeleccionado.precio * iva)  + envio;
            const ivac = cantidad * (productoSeleccionado.precio * iva)
            alert(`Compra realizada por: ${usuario}\n Producto: ${productoSeleccionado.nombre}\n Cantidad: ${cantidad}\n 
            Iva 20%: ${ivac.toFixed(2)}\n Costo de envio: ${envio}\n Total: $${totalCompra.toFixed(2)}`);
           
            productoSeleccionado.stock -= cantidad;
        } else {
            alert("La cantidad ingresada es inválida o excede el stock disponible.");
        }
    } else {
        alert("Producto no encontrado. Intente nuevamente.");
    }
}

while (true) {
    const opcion = parseInt(prompt("Seleccione una opción:\n1. Ingresar Usuario\n2. Mostrar productos\n3. Realizar compra\n4. Salir"));

    switch (opcion) {
        case 1:
            ingresarUsuario();
            break;
        case 2:
            mostrarProductos();
            break;
        case 3:
            realizarCompra();
            break;
        case 4:
            alert("¡Hasta luego!");
            break;
        default:
            alert("Opción inválida. Intente nuevamente.");
    }

    if (opcion === 4) {
        break;
    }
}
