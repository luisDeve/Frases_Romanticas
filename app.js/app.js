import {frasesRomanticas} from '../app.js/arrrayRomance.js'
let btn=document.querySelector('.generador__frase')
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