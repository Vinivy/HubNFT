let interactionsImg = document.querySelectorAll('.carteira, .quadro, .Sell')
let boxes = document.querySelectorAll('.huge, .quality, .resource, .community' )
let exemperfil = document.querySelectorAll('.Step, .Andry, .Zaid, .Laila')
let infosDireict = document.querySelectorAll('.antiondireitaOne , .antiondireitaTwo')
// modelo de observar o conteudo
const Myobserv = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('carteira', 'quadro', 'Sell')
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
    })
})

interactionsImg.forEach((ImgsI)=> {
  Myobserv.observe(ImgsI)
})

//Scroll baixo pra cima
const observ = new IntersectionObserver((Puxando) => {
  Puxando.forEach((atribuindo ) => {
    if (atribuindo.isIntersecting) {
      //primeiro vamos remover e dps adicionar para n da erro de codigo
      atribuindo.target.classList.remove('huge', 'quality', 'resource', 'community')
      atribuindo.target.classList.add('Transitiontop')
    }else {
      atribuindo.target.classList.remove('Transitiontop')
      
    }
  })
})

boxes.forEach((element) => {
    observ.observe(element)
})

const Artes = new IntersectionObserver((Avatares) => {
  Avatares.forEach((AVAs) => {
    if(AVAs.isIntersecting){
      AVAs.target.classList.remove('Step', 'Andry', 'Zaid', 'Laila')
      AVAs.target.classList.add('Transitiontop')
    }else{
      AVAs.target.classList.remove('Transitiontop')
    }
  })
})

exemperfil.forEach((Ok)=> {
  Artes.observe(Ok)
})

const description = new IntersectionObserver((Desc) => {
  Desc.forEach((glass) => {
    if(glass.isIntersecting) {
      glass.target.classList.remove('antiondireitaOne', 'antiondireitaTwo');
      glass.target.classList.add('show')
    }else {
      glass.target.classList.remove('show')
    }
  })
})

 infosDireict.forEach((Yes) => {
  description.observe(Yes)
})