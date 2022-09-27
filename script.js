const conteudoPrincipal = document.querySelector('main');
// const sectionQuadroPixels = document.querySelector('#pixel-board');
// console.log(conteudoPrincipal);

function insereSectionNaMain() {
  const novaSection = document.createElement('section');
  novaSection.setAttribute('id', 'pixel-board');
  conteudoPrincipal.appendChild(novaSection);
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

// Referências:
// Método setAttribute -> https://www.educative.io/answers/how-to-add-an-id-to-element-in-javascript