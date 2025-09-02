import { packages } from './packages.js';

const listContainer = document.getElementById('product-list');

packages.forEach(pkg => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${pkg.image}" alt="${pkg.title}">
    <h3>${pkg.title}</h3>
    <p class="price">${pkg.price.toFixed(2)} €</p>
    <p class="desc">${pkg.description}</p>
    <a href="/package.html?id=${pkg.id}" class="btn-secondary">Voir le produit</a>
  `;
  listContainer.appendChild(card);
});
