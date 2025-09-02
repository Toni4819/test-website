const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const objet = objets3D.find(o => o.id === id);

const container = document.getElementById("detail-container");

if (objet) {
  const autres = objets3D.filter(o => o.id !== id);
  const suggestions = autres.sort(() => 0.5 - Math.random()).slice(0, 3);

  container.innerHTML = `
    <div class="detail">
      <div class="left">
        <img src="${objet.image}" alt="${objet.nom}" />
        <p class="prix">${objet.prix}</p>
        <a href="${objet.lien}" class="btn">Acheter</a>
      </div>
      <div class="separator"></div>
      <div class="right">
        <h2>${objet.nom}</h2>
        <p>${objet.description}</p>
      </div>
    </div>

    <div class="suggestions-container">
      <h3>Voir aussi</h3>
      <div class="suggestion-cards">
        ${suggestions.map(s => `
          <div class="card">
            <img src="${s.image}" alt="${s.nom}" />
            <h4>${s.nom}</h4>
            <p class="prix">${s.prix}</p>
            <a href="objet.html?id=${s.id}" class="btn">Voir</a>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}
