window.onload = login;

function login() {
    let button = document.getElementById('botonLogin');

    button.addEventListener('click', function () {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let logo = document.getElementById('logo');

        if (email == 'admin@gmail.com' && password == 'admin') {
            alert('Hola de vuelta prueba');
            //window.location.href = '../inicio.html';
            logo.href = '../inicio.html';
        } else {
            button.type = "reset";
        }
    }
    );
}

//declaration of book class
class Book {
    constructor(titulo, autor, editorial, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.isbn = isbn;
    }
}

//LISTADO DE LIBROS
var listadoLibros = [];
var libro1 = new Book('El señor de los anillos', 'J.R.R. Tolkien', 'Allen & Unwin', '123456789');
var libro2 = new Book('Harry Potter y el cáliz de fuego', 'J.K. Rowling', 'Salamandra', '123456789');
var libro3 = new Book('Clean Code', 'Robert C. Martin', 'Prentice Hall', '123456789');

listadoLibros.push(libro1);
listadoLibros.push(libro2);
listadoLibros.push(libro3);



function showBooks() {
    let formulario = document.getElementById('formularioLibros');
    let tabla = document.getElementById('listaDeLibros');

    formulario.style.display = 'none';
    tabla.style.display = 'inline-table';

    //erase content of tabla
    tabla.innerHTML = '';

    let tablaContent = ``;

    for (const item of listadoLibros) {
        //Utilizamos += para acumular los datos. 
        //Template strings syntax
        tablaContent += `
          <tr>
            <td>${item.isbn}</td>
            <td>${item.titulo}</td>
            <td>${item.autor}</td>
            <td>${item.editorial}</td>
          </td>
        `
    }
    //Añadimos el contenido a la tabla
    tabla.innerHTML += tablaContent
}

function loadBooks() {
    let formulario = document.getElementById('formularioLibros');
    let tabla = document.getElementById('listaDeLibros');

    formulario.style.display = 'inline-table';
    tabla.style.display = 'none';

}

function register() {
    let title = document.getElementById('titulo').value;
    let author = document.getElementById('autor').value;
    let editorial = document.getElementById('editorial').value;
    let isbn = document.getElementById('isbn').value;

        let libro = new Book(title, author, editorial, isbn);
        listadoLibros.push(libro);
        alert(title);
        showBooks();
}