const main = document.querySelector('main');
const elementosClasseColor = document.querySelectorAll('.color');
const colorBlack = document.querySelector('#colorBlack');
const colorRed = document.querySelector('#colorRed');
const colorBlue = document.querySelector('#colorBlue');
const colorYellow = document.querySelector('#colorYellow');
const botaoLimpar = document.querySelector('#clear-board');

function insereSectionNaMain() {
  const novaSection = document.createElement('section');
  novaSection.setAttribute('id', 'pixel-board');
  main.appendChild(novaSection);
}

insereSectionNaMain();

const sectionQuadroPixels = document.querySelector('#pixel-board');

function insereDivsDoQuadroDePixelNaSection(num) {
  for (let primeiraPosição = 1; primeiraPosição <= num; primeiraPosição += 1) {
    const criaLinhaDivs = document.createElement('div');
    criaLinhaDivs.setAttribute('class', 'pixel-line');
    sectionQuadroPixels.appendChild(criaLinhaDivs);
    for (let posicao2 = 1; posicao2 <= num; posicao2 += 1) {
      const criaColunaDivs = document.createElement('div');
      criaColunaDivs.setAttribute('class', 'pixel');
      criaLinhaDivs.appendChild(criaColunaDivs);
    }
  }
}

insereDivsDoQuadroDePixelNaSection(7);

// Troca classe "selected" para a paleta clicada

for (let posicao = 0; posicao < elementosClasseColor.length; posicao += 1) {
  elementosClasseColor[posicao].addEventListener('click', (event) => {
    for (let posicao2 = 0; posicao2 < elementosClasseColor.length; posicao2 += 1) {
      elementosClasseColor[posicao2].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

// Colore os pixel com a cor da paleta selecionada

const pixelsComClassePixel = document.getElementsByClassName('pixel');

function trocarCoresPretoEazul(e) {
  if (colorBlack.className.includes('selected')) e.target.style.backgroundColor = 'black';
  if (colorRed.className.includes('selected')) e.target.style.backgroundColor = '#9a031e';
}

function trocarCoresVermelhoEamarelo(e) {
  if (colorBlue.className.includes('selected')) e.target.style.backgroundColor = '#118ab2';
  if (colorYellow.className.includes('selected')) e.target.style.backgroundColor = '#ffb703';
}

for (let posicao = 0; posicao < pixelsComClassePixel.length; posicao += 1) {
  pixelsComClassePixel[posicao].addEventListener('click', (e) => {
    trocarCoresPretoEazul(e);
    trocarCoresVermelhoEamarelo(e);
  });
}

// Limpa a cor de todos os pixels

botaoLimpar.addEventListener('click', () => {
  for (let posicao = 0; posicao < pixelsComClassePixel.length; posicao += 1) {
    pixelsComClassePixel[posicao].style.backgroundColor = 'white';
  }
});

// Referências:
// Método setAttribute -> https://www.educative.io/answers/how-to-add-an-id-to-element-in-javascript
// Método classList -> https://www.w3schools.com/jsref/prop_element_classlist.asp
