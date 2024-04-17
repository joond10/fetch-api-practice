async function fetchRandomPokemon() {
  const pokemonIds = generateRandomPokemonIds(3);
  const pokemonDataPromises = pokemonIds.map((id) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) =>
      response.json()
    )
  );

  try {
    const pokemonData = await Promise.all(pokemonDataPromises);

    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous content

    pokemonData.forEach((pokemon) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="title">
          <div class="name"><h1>${upperCase(pokemon.name)}</h1></div>
          <div class="hp"><h1>${pokemon.base_experience} HP</h1></div>
        </div>
        <img src="${
          pokemon.sprites.other["official-artwork"].front_default
        }" alt="${pokemon.name}" />
      `;

      let hp = card.querySelector(".hp");

      if (pokemon.types[0].type.name === "water") {
        card.style.backgroundColor = "#539AE2";
        hp.style.color = "rgb(0, 124, 201)";
      } else if (pokemon.types[0].type.name === "fire") {
        card.style.backgroundColor = "#EA7A3C";
      } else if (pokemon.types[0].type.name === "grass") {
        card.style.backgroundColor = "#71C558";
      } else if (pokemon.types[0].type.name === "poison") {
        card.style.backgroundColor = "#B468B7";
      } else if (pokemon.types[0].type.name === "bug") {
        card.style.backgroundColor = "#94BC4A";
      } else if (pokemon.types[0].type.name === "dark") {
        card.style.backgroundColor = "#736C75";
      } else if (pokemon.types[0].type.name === "electric") {
        card.style.backgroundColor = "#E5C531";
      } else if (pokemon.types[0].type.name === "fairy") {
        card.style.backgroundColor = "#E397D1";
      } else if (pokemon.types[0].type.name === "fighting") {
        card.style.backgroundColor = "#CB5F48";
      } else if (pokemon.types[0].type.name === "flying") {
        card.style.backgroundColor = "#7DA6DE";
      } else if (pokemon.types[0].type.name === "ghost") {
        card.style.backgroundColor = "#846AB6";
      } else if (pokemon.types[0].type.name === "ground") {
        card.style.backgroundColor = "#CC9F4F";
      } else if (pokemon.types[0].type.name === "ice") {
        card.style.backgroundColor = "#70CBD4";
      } else if (pokemon.types[0].type.name === "ground") {
        card.style.backgroundColor = "#CC9F4F";
      } else if (pokemon.types[0].type.name === "normal") {
        card.style.backgroundColor = "#AAB09F";
      } else if (pokemon.types[0].type.name === "psychic") {
        card.style.backgroundColor = "#E5709B";
      } else if (pokemon.types[0].type.name === "rock") {
        card.style.backgroundColor = "#B2A061";
      } else if (pokemon.types[0].type.name === "steel") {
        card.style.backgroundColor = "#89A1B0";
      } else if (pokemon.types[0].type.name === "dragon") {
        card.style.backgroundColor = "#6A7BAF";
      }

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
  }
}

function generateRandomPokemonIds(count) {
  const pokemonIds = [];
  for (let i = 0; i < count; i++) {
    const randomId = Math.floor(Math.random() * 151) + 1;
    pokemonIds.push(randomId);
  }
  return pokemonIds;
}

function upperCase(name) {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
