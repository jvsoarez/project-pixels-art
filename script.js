const main = document.querySelector('main');
const elementosClasseColor = document.querySelectorAll('.color');
const colorBlack = document.querySelector('#colorBlack');
const colorRed = document.querySelector('#colorRed');
const colorBlue = document.querySelector('#colorBlue');
const colorYellow = document.querySelector('#colorYellow');
const botaoLimpar = document.querySelector('#clear-board');
const inputQueDefinePixels = document.querySelector('#board-size');
const botaoVqv = document.querySelector('#generate-board');

// cria uma section pai para o board e insere na main

function insereSectionNaMain() {
  const novaSection = document.createElement('section');
  novaSection.setAttribute('id', 'pixel-board');
  main.appendChild(novaSection);
}

insereSectionNaMain();

// funções que trocam cores dos pixels para cor da paleta selecionada

function trocarCoresPretoEazul(e) {
  if (colorBlack.className.includes('selected')) e.target.style.backgroundColor = 'black';
  if (colorRed.className.includes('selected')) e.target.style.backgroundColor = '#9a031e';
}

function trocarCoresVermelhoEamarelo(e) {
  if (colorBlue.className.includes('selected')) e.target.style.backgroundColor = '#118ab2';
  if (colorYellow.className.includes('selected')) e.target.style.backgroundColor = '#ffb703';
}

// Cria board com valor inicial de 5x5 (ajustável pelo valor do input) e colore os pixels.

const sectionQuadroPixels = document.querySelector('#pixel-board');

function insereDivsDoQuadroDePixelNaSection(num) {
  for (let primeiraPosição = 1; primeiraPosição <= num; primeiraPosição += 1) {
    const criaLinhaDivs = document.createElement('div');
    criaLinhaDivs.setAttribute('class', 'pixel-line');
    sectionQuadroPixels.appendChild(criaLinhaDivs);
    for (let posicao2 = 1; posicao2 <= num; posicao2 += 1) {
      const criaColunaDivs = document.createElement('div');
      criaColunaDivs.setAttribute('class', 'pixel');
      criaColunaDivs.addEventListener('click', (e) => {
        trocarCoresPretoEazul(e);
        trocarCoresVermelhoEamarelo(e);
      });
      criaLinhaDivs.appendChild(criaColunaDivs);
    }
  }
}

insereDivsDoQuadroDePixelNaSection(5);

// Substitui board 5x5 padrão pelo tamanho definido pelo usuário, no input.

botaoVqv.addEventListener('click', () => {
  const todasAsDivsDasLinhas = document.querySelectorAll('.pixel-line');
  if (!inputQueDefinePixels.value || inputQueDefinePixels.value <= 0) {
    alert('Board inválido!');
  } else {
    for (let posicao = 0; posicao < todasAsDivsDasLinhas.length; posicao += 1) {
      sectionQuadroPixels.removeChild(todasAsDivsDasLinhas[posicao]);
    }
    insereDivsDoQuadroDePixelNaSection(inputQueDefinePixels.value);
    inputQueDefinePixels.value = '';
  }
});

// Troca classe "selected" para a paleta clicada.

for (let posicao = 0; posicao < elementosClasseColor.length; posicao += 1) {
  elementosClasseColor[posicao].addEventListener('click', (event) => {
    for (let posicao2 = 0; posicao2 < elementosClasseColor.length; posicao2 += 1) {
      elementosClasseColor[posicao2].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

// Limpa a cor de todos os pixels.

botaoLimpar.addEventListener('click', () => {
  const pixelsComClassePixel = document.getElementsByClassName('pixel');
  for (let posicao = 0; posicao < pixelsComClassePixel.length; posicao += 1) {
    pixelsComClassePixel[posicao].style.backgroundColor = 'white';
  }
});

// Referências:
// Método setAttribute -> https://www.educative.io/answers/how-to-add-an-id-to-element-in-javascript
// Método classList -> https://www.w3schools.com/jsref/prop_element_classlist.asp
