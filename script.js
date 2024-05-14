function tirarGlobos() {
    document.getElementById('feliz-cumple').style.fontSize = '10em';
}
function cambiarEstilo(elemento) {
    elemento.classList.toggle('rojo');
    elemento.style.fontSize = '4em';
    elemento.style.backgroundColor = 'blue';
    elemento.style.borderRadius = '15px';
    elemento.style.boxShadow = '0px 0px 30px rgba(0, 0, 0, 1)';
}
function mostrarMensaje() {
    var contenedor = document.querySelector('.container');
    var nuevoH1 = document.createElement('h1');
    nuevoH1.textContent = '¡Cada vez mas trolo te pones!';
    nuevoH1.classList.add('mensaje');
    contenedor.appendChild(nuevoH1);
}