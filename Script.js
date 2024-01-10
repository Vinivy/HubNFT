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

function toggleDarkMode() {
  let body = document.querySelector('body')
  let Home = document.querySelector('#Home')
  let End = document.querySelector('#TheEnd')
  /*Imgs dos patrocinio */
  let Mask = document.querySelector('.Mask')
  let BitGo = document.querySelector('.BitGo')
  let CoinBase = document.querySelector('.CoinBase')
  let TrustWallet = document.querySelector('.TrustWallet')
  let Exodus = document.querySelector('.Exodus')
  /*redes */
  let Twi = document.querySelector('ion-icon')
  let Ds = document.querySelector('#Discord')
  let Ins = document.querySelector('#Instagram')
  let Wall = document.querySelector('#Wallet')
  let Sn = document.querySelector('#Sun')


  if (!body.classList.contains('Dark')) {
    body.classList.add('Dark')
    Home.style.background = 'rgba(31, 21, 43, 1)' 
    End.style.background = 'rgba(31, 21, 43, 1)'

    Mask.setAttribute('src', './Assets/Componentes/Marcas/MetaMaskDark.svg')
    BitGo.setAttribute('src','./Assets/Componentes/Marcas/BitGoDark.svg')
    CoinBase.setAttribute('src', './Assets/Componentes/Marcas/CoinBase.svg')
    TrustWallet.setAttribute('src', './Assets/Componentes/Marcas/TrustWalletDark.svg')
    Exodus.setAttribute('src', './Assets/Componentes/Marcas/EXODUSDark.svg')

    Twi.style.color = '#ffffff'
    Ds.style.color = '#ffffff'
    Ins.style.color = '#ffffff' 
    Wall.style.color = '#ffffff'
    Sn.style.color = 'black'

  } else {
    body.classList.remove('Dark')
    Home.style.background = 'url(./Assets/Background/BackgroundHome.jpg)'
    End.style.background = 'url(./Assets/Background/End.jpg)'

    Mask.setAttribute('src', './Assets/Componentes/Marcas/MetaMask.svg')
    BitGo.setAttribute('src','./Assets/Componentes/Marcas/BitGo.svg')
    CoinBase.setAttribute('src', './Assets/Componentes/Marcas/CoinBase.svg')
    TrustWallet.setAttribute('src', './Assets/Componentes/Marcas/TrustWallet.svg')
    Exodus.setAttribute('src', './Assets/Componentes/Marcas/EXODUS.svg')

   Twi.style.color = 'black'
   Ds.style.color = 'black'
   Ins.style.color = 'black'
   Wall.style.color = 'black'
   Sn.style.color = '#ffffff'
  }
}

