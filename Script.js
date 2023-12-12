let secoes = document.querySelectorAll('header')

// modelo de observar o conteudo
const Myobserv = new  IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show') 
        }else {
          entry.target.classList.remove('show')
        }
    })
})

secoes.forEach((element) => 
    Myobserv.observe(element)
)