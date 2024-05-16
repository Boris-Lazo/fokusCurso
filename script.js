const hmtl = document.querySelector('html')
const botonCorto = document.querySelector('.app__card-button--corto')
const botonEnfoque = document.querySelector('.app__card-button--enfoque')
const botonLargo = document.querySelector('app__card-button--largo')

botonCorto.addEventListener('click', () => {
    hmtl.setAttribute('data-contexto','descanso-corto')
})

botonEnfoque.addEventListener('click', () => {
    hmtl.setAttribute('data-contexto','enfoque')
})

botonEnfoque.addEventListener('click', () => {
    hmtl.setAttribute('data-contexto','descanso-largo')
})