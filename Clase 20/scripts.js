/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/
/*
class Book {
    constructor(title, author, year, gender) {
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    getAuthor() {
        return this.author
    }

    getGender() {
        return this.gender
    }

    bookInfo() {
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }
}

let books = []

while (books.length < 3) {
    let title = prompt('Introduce el título del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el año del libro')
    let gender = prompt('Introduce el género del libro').toLowerCase()

    if (title != '' &&
        author != '' &&
        !isNaN(year) &&
        year.length == 4 &&
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasía')) {

        books.push(new Book(title, author, year, gender))

    }
}

const showAllBooks = () => {
    console.log(books);
}

const showAuthors = () => {
    let authors = []

    for (const book of books) {
        authors.push(book.getAuthor());
    }

    console.log(authors.sort());
}

const showGender = () => {
    const gender = prompt('Introduce el género a buscar')

    for (const book of books) {
        if (book.getGender() == gender) {
            console.log(book.bookInfo())
        }
    }

}

//showAllBooks()
//showAuthors()
showGender()
*/

/* 
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
*/
class libro{
    constructor(titulo, autor, year, genero){
        this.titulo = titulo
        this.autor = autor
        this.year = year
        this.genero = genero
    }

    getAutor(){
        return this.autor;
    }

    getGenero(){
        return this.genero;
    }

    getInfoLibro(){
        return `${this.titulo} es un libro de ${this.genero} escrito por ${this.autor} en el año ${this.year}`;
    }
}
/*
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
*/


const validarCadena = (cadena) => {
    let isOk = false;
    while(!isOk){
        let dato = prompt(cadena).toLowerCase();
        if (dato != ''){
            isOk = true;
            return dato;
        }
        else prompt('La información que ha ingresado no es correcta. Vuelva a intentarlo');
    }
}

const validarGenero = (cadena) => {
    let isOk = false;
    while(!isOk){
        let genero = prompt(cadena).toLowerCase();
        if(genero != '' && (genero != 'aventuras' || genero != 'terror' || genero != 'fantasia')) {
            isOk = true;
            return genero;
        }
        else prompt('La información que ha ingresado no es correcta. Vuelva a intentarlo');
    }
}

const validarYear = (cadena) => {
    let isOk = false;
    while(!isOk){
        let year = prompt(cadena);
        if(!isNaN(year) && (year/1000 >= 1)){
            isOk = true;
            return year;
        }
        else prompt('La información que ha ingresado no es correcta. Vuelva a intentarlo');
    }
}

const arrayObLibros = () => {
    let arrayLibros = [];
    while(arrayLibros.length < 3){
        let titulo = validarCadena('Escriba el Título del Libro');
        let autor = validarCadena('Escriba el nombre del Autor del Libro');
        let genero = validarGenero('Escriba el Genero al que pertenece el Libro');
        let year = validarYear('Escriba el Año de publicación del Libro');
        arrayLibros.push(new libro(titulo, autor, year, genero));
    }
    return arrayLibros;
}
/*
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/

let oLibros = arrayObLibros();

const getLibros = (objLibros) => console.log(objLibros);
getLibros(oLibros);

const getAutores = (objLibros) => {
    let autores = [];
    for(const libro of objLibros){
        console.log(libro.getInfoLibro());
        autores.push(libro.getAutor());
    }
    console.log(autores.sort());
}

const getGeneros = (objLibros) => {
    let genero = validarGenero('Escriba el género a buscar');
    for(const libro of objLibros){
        if(libro.getGenero() == genero){
            console.log(libro.getInfoLibro());
        }
    }
}

console.log('Información de los libros en la bibliotea y sus los autores')
getAutores(oLibros);

console.log('Información de los libros en la biblioteca de acuerdo al genero buscado')
getGeneros(oLibros);