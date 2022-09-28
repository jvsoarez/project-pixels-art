const main = document.querySelector('main');
const elementosClasseColor = document.querySelectorAll('.color');

function insereSectionNaMain() {
  const novaSection = document.createElement('section');
  novaSection.setAttribute('id', 'pixel-board');
  main.appendChild(novaSection);
}

insereSectionNaMain();

const sectionQuadroPixels = document.querySelector('#pixel-board');

function insereDivsDoQuadroDePixelNaSection() {
  for (let primeiraPosição = 1; primeiraPosição <= 25; primeiraPosição += 1) {
    const criaTodasAsDivs = document.createElement('div');
    criaTodasAsDivs.setAttribute('class', 'pixel');
    sectionQuadroPixels.appendChild(criaTodasAsDivs);
  }
}

insereDivsDoQuadroDePixelNaSection();

// Troca classe "selected" para a paleta clicada

for (let posicao = 0; posicao < elementosClasseColor.length; posicao += 1) {
  elementosClasseColor[posicao].addEventListener('click', (event) => {
    for (let posicao2 = 0; posicao2 < elementosClasseColor.length; posicao2 += 1) {
      elementosClasseColor[posicao2].classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

// Referências:
// Método setAttribute -> https://www.educative.io/answers/how-to-add-an-id-to-element-in-javascript
// Método classList -> https://www.w3schools.com/jsref/prop_element_classlist.asp
