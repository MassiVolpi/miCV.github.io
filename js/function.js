
//Animacion de mis Herramientas

var elemento = document.querySelectorAll('.cont-tool');
elemento.forEach((elementon, indice) => {
    window.addEventListener('scroll',function(){
    var altura= window.innerHeight/1.5;
    var distancia = elementon.getBoundingClientRect().top;

    if(distancia <= altura){
        setTimeout(() => {
        elementon.classList.add('aparece');
        }, 250 * indice);
    }
    else{
        setTimeout(()=> {
        elementon.classList.remove('aparece');
        }, 250 * indice)
        
    }
    });
});

//Aparece Paleta de Colores

let flecha = document.querySelector('.flecha');
let paleta = document.querySelector('.colorPaleta');

flecha.onclick = function() {
    paleta.classList.toggle('coloresAparicion');
    flecha.classList.toggle('flechaAParicion');
};

//Colores de la Paleta

const colorRojo = document.querySelector('#rojo');
const colorNaranja = document.querySelector('#naranja');
const colorAmarillo = document.querySelector('#amarillo');
const colorVerde = document.querySelector('#verde');
const colorCeleste = document.querySelector('#celeste');
const colorAzul = document.querySelector('#azul');
const colorVioleta = document.querySelector('#violeta');

colorRojo.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#FF0000')
});

colorNaranja.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#FF9900')
});

colorAmarillo.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#FFD600')
});

colorVerde.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#14FF00')
});

colorCeleste.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#00D1FF')
});

colorAzul.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#0500FF')
});

colorVioleta.addEventListener('click', () => {
    document.documentElement.style.setProperty('--first-color', '#BD00FF')
});
