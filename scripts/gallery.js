const gallery = document.getElementById("gallery");

objets3D.forEach(objet => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${objet.image}" alt="${objet.nom}" />
    <h2>${objet.nom}</h2>
    <a href="objet.html?id=${objet.id}" class="btn">Plus de détails</a>
  `;

  gallery.appendChild(card);
});
