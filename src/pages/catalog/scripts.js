'use strict';

import {
  configurarNavbar,
  configurarHeader,
  atualizarAno,
  itemInativo
} from '../../components/js/atualizacoes.js';

configurarNavbar();
configurarHeader();
itemInativo();

atualizarAno();
// Configura um intervalo para atualizar o ano a cada segundo (opcional)
setInterval(atualizarAno, 1000);


/*const data = require("../../data/vehicles/data-vehicles.json")
// Função para criar um card de veículo
function createCarCard(vehicle) {
  const card = document.createElement('div');
  card.className = 'featured-car-card';

  const cardBanner = document.createElement('figure');
  cardBanner.className = 'card-banner';

  const img = document.createElement('img');
  img.src = vehicle.image;
  img.alt = 'imagem do veiculo';
  img.loading = 'lazy';
  img.width = 440;
  img.height = 300;
  img.className = 'w-100';
  cardBanner.appendChild(img);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const cardTitleWrapper = document.createElement('div');
  cardTitleWrapper.className = 'card-title-wrapper';

  const cardTitle = document.createElement('h3');
  cardTitle.className = 'h3 card-title';

  const carLink = document.createElement('a');
  carLink.href = '#';
  carLink.className = 'car';
  carLink.textContent = vehicle.name;

  cardTitle.appendChild(carLink);
  cardTitleWrapper.appendChild(cardTitle);

  const yearData = document.createElement('data');
  yearData.className = 'year year-vehicle';
  yearData.value = vehicle['year-model'];
  yearData.textContent = vehicle['year-model'];
  cardTitleWrapper.appendChild(yearData);

  const cardList = document.createElement('ul');
  cardList.className = 'card-list';

  // Adicionar informações de lista, como "pessoas", "combustível", "desempenho", "engenharia" aqui.

  const cardPriceWrapper = document.createElement('div');
  cardPriceWrapper.className = 'card-price-wrapper';

  const cardPrice = document.createElement('p');
  cardPrice.className = 'card-price';

  const carValue = document.createElement('strong');
  carValue.className = 'car-value';
  carValue.textContent = '$' + vehicle['car-value'];

  cardPrice.appendChild(carValue);
  cardPriceWrapper.appendChild(cardPrice);

  const favButton = document.createElement('button');
  favButton.className = 'btn fav-btn';
  favButton.setAttribute('aria-label', 'Add to favourite list');

  const heartIcon = document.createElement('ion-icon');
  heartIcon.name = 'heart-outline';
  favButton.appendChild(heartIcon);

  const rentButton = document.createElement('button');
  rentButton.className = 'btn btn-rent';
  rentButton.textContent = 'Alugar';

  cardPriceWrapper.appendChild(favButton);
  cardPriceWrapper.appendChild(rentButton);

  cardContent.appendChild(cardTitleWrapper);
  cardContent.appendChild(cardList);
  cardContent.appendChild(cardPriceWrapper);

  card.appendChild(cardBanner);
  card.appendChild(cardContent);

  return card;
}

// Função para criar a estrutura de categoria de carros e adicionar os cards de veículos
function createCategorySection(fabricante) {
  const categorySection = document.createElement('section');
  categorySection.className = 'section featured-car';
  categorySection.id = 'featured-car';

  const container = document.createElement('div');
  container.className = 'container';

  const titleWrapper = document.createElement('div');
  titleWrapper.className = 'title-wrapper';

  const sectionTitle = document.createElement('h2');
  sectionTitle.className = 'h2 section-title';
  sectionTitle.textContent = fabricante.name;

  titleWrapper.appendChild(sectionTitle);

  const featuredCarLink = document.createElement('a');
  featuredCarLink.href = '#';
  featuredCarLink.className = 'featured-car-link';

  const viewMoreSpan = document.createElement('span');
  viewMoreSpan.textContent = 'Ver mais';

  const ionIcon = document.createElement('ion-icon');
  ionIcon.name = 'arrow-forward-outline';

  featuredCarLink.appendChild(viewMoreSpan);
  featuredCarLink.appendChild(ionIcon);

  titleWrapper.appendChild(featuredCarLink);

  container.appendChild(titleWrapper);

  const carListContainer = document.createElement('ul');
  carListContainer.className = 'featured-car-list';

  // Adicione os carros à lista de carros da categoria
  fabricante.vehicles.forEach(vehicle => {
      const carCard = createCarCard(vehicle);
      const listItem = document.createElement('li');
      listItem.appendChild(carCard);
      carListContainer.appendChild(listItem);
  });

  container.appendChild(carListContainer);
  categorySection.appendChild(container);

  return categorySection;
}

// Função para popular a página com as categorias de carros
function populateCategories() {
  const fabricantes = data.fabricantes;
  const main = document.querySelector('main');

  fabricantes.forEach(fabricante => {
      const categorySection = createCategorySection(fabricante);
      main.appendChild(categorySection);
  });
}

// Chame a função para popular a página
populateCategories();

// JavaScript
*/

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os botões com a classe "btn-rent"
  const rentButtons = document.querySelectorAll(".btn-rent");

  // Adiciona um evento de clique a cada botão
  rentButtons.forEach(function (button) {
    button.addEventListener("click", function () {

      // Redireciona para a página de cadastro de cartão
      window.location.href = "./checkout-payment/index.html";
    });
  });
});