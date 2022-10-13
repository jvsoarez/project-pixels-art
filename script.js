/* eslint-disable no-param-reassign */
const main = document.querySelector('main');
const elementosClasseColor = document.querySelectorAll('.color');
const colorBlack = document.querySelector('#colorBlack');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');
const color4 = document.querySelector('#color4');
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

// Função que gera hash de cor aleatória

function geraCor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Função que troca cor original da paleta para cor aleatória, gerada pela função geraCor;

function trocaCorDaPaletaParaAleatoria() {
  color2.style.backgroundColor = geraCor();
  color3.style.backgroundColor = geraCor();
  color4.style.backgroundColor = geraCor();
}

trocaCorDaPaletaParaAleatoria();

// funções que trocam cores dos pixels para cor da paleta selecionada

function trocarCoresPretoEcor2(e) {
  if (colorBlack.className.includes('selected')) {
    e.target.style.backgroundColor = 'black';
  }
  if (color2.className.includes('selected')) {
    e.target.style.backgroundColor = color2.style.backgroundColor;
  }
}

function trocarCores3e4(e) {
  if (color3.className.includes('selected')) {
    e.target.style.backgroundColor = color3.style.backgroundColor;
  }
  if (color4.className.includes('selected')) {
    e.target.style.backgroundColor = color4.style.backgroundColor;
  }
}

// limpa cor do pixel clicado

function limpaPixel() {
  const pixelsComClassePixel = document.getElementsByClassName('pixel');
  for (let posicao = 0; posicao < pixelsComClassePixel.length; posicao += 1) {
    pixelsComClassePixel[posicao].addEventListener('dblclick', () => {
      console.log(pixelsComClassePixel);
      if (pixelsComClassePixel[posicao].style.backgroundColor !== 'white') {
        pixelsComClassePixel[posicao].style.backgroundColor = 'white';
      }
    });
  }
}

// Cria board com valor inicial de 5x5 (ajustável pelo valor do input), com tamanho minimo e maximo definidos
// e colore os pixels.

const sectionQuadroPixels = document.querySelector('#pixel-board');

function insereDivsDoQuadroDePixelNaSection(num) {
  if (num < 5) num = 5;
  if (num > 50) num = 50;
  for (let primeiraPosição = 1; primeiraPosição <= num; primeiraPosição += 1) {
    const criaLinhaDivs = document.createElement('div');
    criaLinhaDivs.setAttribute('class', 'pixel-line');
    sectionQuadroPixels.appendChild(criaLinhaDivs);
    for (let posicao2 = 1; posicao2 <= num; posicao2 += 1) {
      const criaColunaDivs = document.createElement('div');
      criaColunaDivs.setAttribute('class', 'pixel');
      criaColunaDivs.addEventListener('click', (e) => {
        trocarCoresPretoEcor2(e);
        trocarCores3e4(e);
      });
      criaLinhaDivs.appendChild(criaColunaDivs);
    }
  }
  limpaPixel();
}

insereDivsDoQuadroDePixelNaSection(5);

// Substitui board 5x5 padrão pelo tamanho definido pelo usuário, no input.

// eslint-disable-next-line complexity, sonarjs/cognitive-complexity
botaoVqv.addEventListener('click', () => {
  const todasAsDivsDasLinhas = document.querySelectorAll('.pixel-line');
  if (!inputQueDefinePixels.value || inputQueDefinePixels.value <= 0) {
    alert('Board inválido!');
  }
  if (inputQueDefinePixels.value > 0) {
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
