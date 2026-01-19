fetch("data/playlists.json")
  .then(response => response.json())
  .then(playlists => {
    const container = document.getElementById("playlists");

    playlists.forEach(p => {
      container.innerHTML += `
        <div class="card">
          <img src="${p.imagem}" alt="${p.nome}">
          <h3>${p.nome}</h3>
          <p>${p.descricao}</p>
          <div class="price">R$ ${p.preco}</div>
          <a class="btn" href="${p.checkout}" target="_blank">Comprar</a>
        </div>
      `;
    });
  });
