const categorias = ["DESAYUNO Y MERIENDA ", "ALMUERZO Y CENA ", "POSTRES ", "BEBIDAS "];

console.log("Tenemos " + categorias.length + " Categorias en el menú\n" + categorias);

class Lista {
    constructor(id, nombre, precio, category, imgValor) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.category = category;
        this.img = imgValor;      
    }

    sumarIva(){
        this.precio = this.precio * 1.21;
    }
}

class Pedido {
    constructor(comida, bebida, postre) {
        this.comida = comida;
        this.bebida = bebida;
        this.postre = postre;
        
    }
}

let ordenComida;
let ordenBebida;
let ordenPostre;

let contador = 0;
const listaOrdenes = [];

function mostrarEnLista(pedidos) {

    let ul = document.getElementById("ul")
    let contenedor2 = document.createElement("div")
    contenedor2.innerHTML = `
        <br>
        <li>Comida y Bebida: ${pedidos.comida} con ${pedidos.bebida}</li>
        <li>Postre: ${pedidos.postre}</li>
        <img src=${comida.img} class="imagen"/>
        <img src=${bebida.img} class="imagen"/>
        <img src=${postre.img} class="imagen"/>
        
        
        <br>`

    ul.appendChild(contenedor2)

}


let listaProductosMenu = "Estos son nuestros productos";

const listaProductos = [];

listaProductos.push(new Lista(1, "pizza", 600, categorias[1], "./img/pizza.jpg"));
listaProductos.push(new Lista(1, "milanesas con pure", 550, categorias[1], "./img/milanesaConPure.jpg"));
listaProductos.push(new Lista(2, "milanesas con ensalada", 550, categorias[1], "./img/milanesaConEnsalada.jpg"));
listaProductos.push(new Lista(3, "milanesas con papas fritas", 550, categorias[1], "./img/milanesasConPapasFritas.jpg"));
listaProductos.push(new Lista(4, "asado con pure", 550, categorias[1], "./img/asadoConPure.jpg"));
listaProductos.push(new Lista(5, "asado con ensalada", 550, categorias[1], "./img/asadoConEnsalada.jpg"));
listaProductos.push(new Lista(5, "sopa de verduras", 550, categorias[1], "./img/SopaDeVerduras.jpg"));
listaProductos.push(new Lista(6, "pastafrola", 150, categorias[0], "./img/pastafrola.jpg"));
listaProductos.push(new Lista(7, "cafe con leche", 220, categorias[0], "./img/cafeConLeche.jpg"));
listaProductos.push(new Lista(8, "flan", 170, categorias[2], "./img/flan.jpg"));
listaProductos.push(new Lista(8, "helado", 240, categorias[2], "./img/helado.jpg"));
listaProductos.push(new Lista(9, "fernet con coca", 450, categorias[3], "./img/fernetConCoca.jpg"));
listaProductos.push(new Lista(10, "cerveza pinta", 220, categorias[3], "./img/cervezaPinta.jpg"));
listaProductos.push(new Lista(11, "cerveza botella", 340, categorias[3], "./img/cervezaBotella.jpg"));
listaProductos.push(new Lista(12, "coca cola", 170, categorias[3], "./img/cocaCola.jpg"));
listaProductos.push(new Lista(13, "sprite", 170, categorias[3], "./img/sprite.jpg"));

function encontrarOrden() {

    comida = listaProductos.find(producto => producto.nombre == ordenComida.toLowerCase());

    bebida = listaProductos.find(producto => producto.nombre == ordenBebida.toLowerCase());

    postre = listaProductos.find(producto => producto.nombre == ordenPostre.toLowerCase());

    console.log(comida, bebida, postre);


}



    

   

    
    function mostrarTotal(total) {

        let mostrarTotal = document.getElementById("mostrarTotal")
        let contenedor3 = document.createElement("div")
        comida.sumarIva();

        bebida.sumarIva();
        
        postre.sumarIva();
    
        let totalAbonar = (comida.precio + bebida.precio + postre.precio);
        contenedor3.innerHTML = `
            <br>
            <p>TOTAL:  ${totalAbonar} (IVA INCLUIDO)</p>           
            <br>`
    
        ul.appendChild(contenedor3)
    
    }



let menuCatalogo = document.querySelector('.menuCatalogo');

let renderMenu = document.querySelector('.mostrarMenu');
renderMenu.addEventListener('click', mostrarMenu)



let mostrarOrden = document.querySelector('.mostrarOrden');
mostrarOrden.onclick = () =>{
    confirmar = confirm("Desea confirmar el pedido?");
    if (confirmar) {
        ordenComida = document.getElementById("ordenComida").value;
        ordenBebida = document.getElementById("ordenBebida").value;
        ordenPostre = document.getElementById("ordenPostre").value;
        
        const pedidos = new Pedido(ordenComida, ordenBebida, ordenPostre);
       
        listaOrdenes.push(pedidos);

        encontrarOrden();
        mostrarEnLista(pedidos);
        mostrarTotal();
    }

    console.log(listaOrdenes);
}

/*
function ordenNueva(){
ordenComida = document.getElementById("ordenComida").value;
ordenBebida = document.getElementById("ordenBebida").value;
ordenPostre = document.getElementById("ordenPostre").value;

ordenComida.addEventListener('change', () => {
    console.log(ordenComida.value);
})
ordenBebida.addEventListener('change', () => {
    console.log(ordenBebida.value);
})
ordenPostre.addEventListener('change', () => {
    console.log(ordenPostre.value);
})



}

ordenNueva();
*/

function mostrarMenu(){
    menuCatalogo.innerHTML = '';
    for (const producto of listaProductos) {
        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<div class="card">
                                <h3>${producto.id}) ${producto.nombre} $${producto.precio}</h3>
                                <img src=${producto.img} class="imagen"/>
                                <button>Ordenar</button></div>`;

        menuCatalogo.appendChild(contenedor);
    }
}






function realizarOtraOrden(){
/*
    let continuar = prompt("Quiere realizar otra orden?\nsi/no");

    switch (continuar) {
        case "si":
            listarProductos();

            orden();

        case "no":

            alert("Su orden estara lista en 15 minutos");

            saludar("Gracias por visitar");
    }
*/
}

function orden() {
    /*
    ordenComida = prompt("Que desea pedir para Comer?");

    ordenBebida = prompt("Que desea pedir para Beber?");

    ordenPostre = prompt("Que desea pedir de postre?");

    console.log("Orden a preparar " + ordenComida, ordenBebida, ordenPostre);
*/
    encontrarOrden();

    total();

    realizarOtraOrden();
    
}

function saludar(saludo) {
    alert(saludo + " nuestra pagina!");
}

function listarProductos() {
    alert(listaProductosMenu);
}

for (const producto of listaProductos) {
    contador++;
    
    listaProductosMenu += "\n" + contador + "- " + producto.nombre + " $" + producto.precio + " " + producto.category;
}

function menu() {
/*
    let opcion = prompt("Menu: \n1 - Ver productos\nESC - Para Salir");

    switch (opcion) {

        case "1":

            listarProductos();

            listaProductos.forEach((lis) => {
                console.log(lis.category + "\n" + lis.nombre + " $" + lis.precio)
            })
            orden();

            break;

        case "ESC":

            saludar("Gracias por visitar");

            break;

        default:

            alert("Opcion Incorrecta");

            menu();

            break;
    }
*/
}

menu();