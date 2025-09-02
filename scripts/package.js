import { packages } from './packages.js';

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const id = getQueryParam('id');
const pkg = packages.find(p => p.id === id);
const container = document.getElementById('product-detail');

if (!pkg) {
  container.innerHTML = '<p>Produit non trouvé.</p>';
} else {
  container.innerHTML = `
    <section class="detail-section">
      <img src="${pkg.image}" alt="${pkg.title}" class="detail-image">
      <div class="detail-info">
        <h1>${pkg.title}</h1>
        <p class="price">${pkg.price.toFixed(2)} €</p>
        <p>${pkg.description}</p>
        <button class="btn-primary">Ajouter au panier</button>
      </div>
    </section>
  `;
}
