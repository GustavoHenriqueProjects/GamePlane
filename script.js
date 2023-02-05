const foguete = document.querySelector('.foguete')
const cometa = document.querySelector('.cometa')

//Constante salto acresenta a classe salto a classe  foquete

const salto = () => {
    foguete.classList.add('salto')
    setTimeout(() =>{
        foguete.classList.remove('salto')
    },2000);
}

//Verificando se perdeu em 20ms
const loop = setInterval(() => {
      const posicaoDoCometa = cometa.offsetLeft;
      const posicaoDoFoguete = window.getComputedStyle(foguete).bottom.replace('px','');

      if(posicaoDoCometa<=215 && posicaoDoFoguete < 300){

        cometa.style.animation = 'none'
        cometa.style.left = `${posicaoDoCometa}px`

        foguete.style.animation = 'none'
        foguete.style.botton = `${posicaoDoFoguete}px`

        foguete.src = './img/FogueteQuebrado.jpg'
        foguete.style.marginLeft = "63px"


        clearInterval(loop)

      }
}, 20)
//Escuta quando alguma tecla for precionada e chama a função salto
document.addEventListener('keydown', salto) 


