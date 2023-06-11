import {frasesRomanticas} from '../app.js/arrrayRomance.js'
let btn=document.querySelector('.generador__frase')
const windowBackground =document.getElementById('window-background')
const windowContainer = document.getElementById('window-container')
let openButton =document.getElementById('open-button')
const closeButton =document.getElementById('close-button')

openButton.addEventListener('click',abrir)

function abrir(){
  windowBackground.style.display='flex'
  prueba()
}


function prueba(){

  let mostrar=document.querySelector('.frase')
  
  let fraseAleatoria=frasesRomanticas[Math.floor(Math.random() *frasesRomanticas.length)]
  let elementoNombre = `${fraseAleatoria}
 
`
  mostrar.innerHTML = elementoNombre;
  
}

closeButton.addEventListener('click',cerrar)
function cerrar(){
  windowContainer.classList.add('close')
  setTimeout(() => {
    windowContainer.classList.remove('close')
    windowBackground.style.display='none'
  }, 1000);
}
//window.addEventListener()
/*
function prueba(){

  
}

window.addEventListener('click')


/*
btn.addEventListener('click',prueba)

function prueba(){

    let mostrar=document.querySelector('.contenedor__frase')
    
    let fraseAleatoria=frasesRomanticas[Math.floor(Math.random() *frasesRomanticas.length)]
    let elementoNombre = `
          <p class="frase">
          ${fraseAleatoria}
          </p>
  `
    mostrar.innerHTML = elementoNombre;
}
*/