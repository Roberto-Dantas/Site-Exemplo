//COMEÇO DO BLOCO DE ESTRELAS

//Variáveis de entrada: "qntEstrelas(__ , __)", nome do conjunto funcionado no forEach (sendo elas com seus nomes: "Bad","Poor","OK","Good","Excellent"), e o número de quantas estrelas pintar.

function qntEstrelas(variavel,num) {
    if(num === 1) {
        colorirEstrelas(variavel,"Poor","OK","Good","Excellent")
    }
    else if(num === 2){
        colorirEstrelas(variavel,"OK","Good","Excellent")
    }
    else if(num === 3){
        colorirEstrelas(variavel,"Good","Excellent")
    }
    else if(num === 4){
        colorirEstrelas(variavel,"Excellent")
    }
    else if(num === 5){
        colorirEstrelas(variavel)
    }
}
function colorirEstrelas(variavel,star0,star1,star2,star3) {
    variavel.forEach(i => {
                i.style.color="#ffc700"
                if(i.title === star0 || i.title === star1 || i.title === star2 || i.title === star3) {
                    i.style.color="#ffc70071"
                }
            })
}

//FINAL DO BLOCO DE ESTRELAS

//Variaveis do produto

const productImg = document.querySelector('.produto img')
const productP = document.querySelector('.produto p')
const productTitulo = document.querySelector('#item h2')
const productPorcenta = document.querySelector('#precos .porcentagem')
const productValorReal = document.querySelector('#precos .valor_real')
const productValorAntigo = document.querySelector('#precos .valor_antigo')
const stars = document.querySelectorAll('#estrelas i')

//Fim variaveis produto


const productLeft = document.querySelector('.trocaProdutos .arrow-left')
const productRight = document.querySelector('.trocaProdutos .arrow-right')
var numberProduct = 0

productLeft.addEventListener('click', () => { 
    numberProduct = numberProduct -1
    if(numberProduct === -1) {
        numberProduct = total-1
    }
    productImg.src = produto[numberProduct].Img
    productP.innerText = produto[numberProduct].Sobre
    productTitulo.innerText = produto[numberProduct].Titulo
    productPorcenta.innerText = produto[numberProduct].Porcentagem
    productValorReal.innerText = produto[numberProduct].Valor_real
    productValorAntigo.innerText = produto[numberProduct].Valor_antigo
    qntEstrelas(stars,produto[numberProduct].Estrelas)
    console.log(numberProduct);
});
productRight.addEventListener('click', () => { 
    numberProduct = numberProduct +1
    if(numberProduct === total) {
        numberProduct = 0
    }
    productImg.src = produto[numberProduct].Img
    productP.innerText = produto[numberProduct].Sobre
    productTitulo.innerText = produto[numberProduct].Titulo
    productPorcenta.innerText = produto[numberProduct].Porcentagem
    productValorReal.innerText = produto[numberProduct].Valor_real
    productValorAntigo.innerText = produto[numberProduct].Valor_antigo
    qntEstrelas(stars,produto[numberProduct].Estrelas)
    console.log(numberProduct);
});


//Produtos:

const produto = []

produto[0] = {
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWMUeeS5Re1KaQ1AKD_BVJsa-8SbvMFqulw&usqp=CAU",
    Sobre: "Faca ultratecnologia, melhor não tem, pode confiar",
    Titulo: "Faca",
    Porcentagem: "25%",
    Valor_real: "R$75,99",
    Valor_antigo: "R$99,99",
    Estrelas: 3
}
produto[1] = {
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyS0R5V_1_kKAr26UlJ9G1Km86K3pktsbRyw&usqp=CAU",
    Sobre: "A melhor tesoura que encontrará hoje em dia",
    Titulo: "Tesoura",
    Porcentagem: "20%",
    Valor_real: "R$16,99",
    Valor_antigo: "R$19,99",
    Estrelas: 5
}
produto[2] = {
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd31Ec6waX6V3UlrcJpUPjzP4wJ4JykNRU1g&usqp=CAU",
    Sobre: "Melhor que o martelo do Thor",
    Titulo: "Martelo",
    Porcentagem: "15%",
    Valor_real: "R$25,50",
    Valor_antigo: "R$29,99",
    Estrelas: 1
}
produto[3] = {
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wEO_1fQ7RBwrcctEUl7NC_SfJE5qNr2lhg&usqp=CAU",
    Sobre: "Inoxidável, abre tudo",
    Titulo: "Chave de Fenda",
    Porcentagem: "10%",
    Valor_real: "R$26,99",
    Valor_antigo: "R$29,99",
    Estrelas: 2
}
produto[4] = {
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy9L5tejxIXKk3NgR_HXJzbeEfCTaP0JFt9w&usqp=CAU",
    Sobre: "Alta potência com menor gasto elétrico",
    Titulo: "Parafusadeira",
    Porcentagem: "25%",
    Valor_real: "R$164,99",
    Valor_antigo: "R$219,99",
    Estrelas: 4
}
produto[5] = {
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21PxWyw_HCDZOGjFy4DWiyepBbpSfe-Z1rw&usqp=CAU",
    Sobre: "Quebra até as melhores cercas",
    Titulo: "Alicate",
    Porcentagem: "5%",
    Valor_real: "R$32.30",
    Valor_antigo: "R$33,99",
    Estrelas: 5
}
var total = produto.length