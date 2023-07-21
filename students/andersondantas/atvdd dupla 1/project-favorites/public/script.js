const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

/*

// Não se preocupem com esse pedaço de código comentado! Vamos descomentá-lo quando tivermos acabado de construir a API.

// Função que carrega o conteúdo da API.
async function load() {
    // fetch está como await para evitar que entre num esquema de promisse e só devolva o conteúdo após a iteração qua acontece em seguida.
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
    res.urls.map(({name, url}) => addElement({name, url}))
}

load()
*/

function addElement() {
    const input = document.querySelector('input').value
    const inputSplit = input.split(',')
    ul.innerHTML += `<li id="${ul.children.length}"><div><span>${inputSplit[0]}</span><a href="" target="_blank">${inputSplit[1]}</a></div><button onclick="removeElement()"><i class="fa-solid fa-trash"></i></button></li>` 
}

function removeElement(element) {
    const listLi = document.querySelectorAll('ul li')
    for (let i = 0; li=listLi[0]; i++) {
        li.parentNode.removeChild(li)
    }
}

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    let { value } = input

    if (!value)
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')

    // addElement({ name, url })

    // input.value = ''

})