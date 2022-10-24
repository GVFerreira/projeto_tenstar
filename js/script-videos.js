function initFetchFundamentos() {
    async function fetchLista(url) {
      try {
        const aulasResponse = await fetch(url)
        const aulasJSON = await aulasResponse.json()
        const listItem = document.querySelector(".fundamentos ul")

        aulasJSON.forEach(aula => {
          const liAula = createAula(aula)
          listItem.appendChild(liAula)
        })

      }
      catch(erro) {
        console.log(`Ocorreu um erro: ${erro}`)
      }
    }
    
    
    function createAula(aula) {
      const li = document.createElement('li')
      li.classList.add("list-item")
      li.innerHTML = `<a class="link-aula" href="fundamento${aula.id}.html"><img class="img-aula" src="${aula.thumbnail}" alt=""><p class="titulo-aula">${aula.titulo}</p></a>`

      return li
    }

    fetchLista('../js/fundamentos.json')
}

function initFetchExercicios() {
  async function fetchLista(url) {
    try {
      const aulasResponse = await fetch(url)
      const aulasJSON = await aulasResponse.json()
      const listItem = document.querySelector(".exercicios ul")

      aulasJSON.forEach(aula => {
        const liAula = createAula(aula)
        listItem.appendChild(liAula)
      })

    }
    catch(erro) {
      console.log(`Ocorreu um erro: ${erro}`)
    }
  }
  
  
  function createAula(aula) {
    const li = document.createElement('li')
    li.classList.add("list-item")
    li.innerHTML = `<a class="link-aula" href="exercicio${aula.id}.html"><img class="img-aula" src="${aula.thumbnail}" alt=""><p class="titulo-aula">${aula.titulo}</p></a>`

    return li
  }

  fetchLista('../js/exercicios.json')
}

initFetchFundamentos()
initFetchExercicios()


