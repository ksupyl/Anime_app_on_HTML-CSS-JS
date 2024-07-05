window.onload = searchAnime;

async function searchAnime() {
    const query = document.getElementById('searchInput').value;
    const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${query}`
    );
    const data = await response.json();
    displayAnime(data.data);
}

function displayAnime(animeList) {
    const animeListContainer = document.getElementById("animeList");
    animeListContainer.innerHTML = "";

    animeList.forEach((anime) => {
        const animeItem = document.createElement("div");
        animeItem.classList.add("anime-item");

        const title = anime.attributes.canonicalTitle;
        const synopsis = anime.attributes.synopsis;
        const rating = anime.attributes.ageRating;
        const episodeCount = anime.attributes.episodeCount;
        const posterImage = anime.attributes.posterImage.original;

        animeItem.innerHTML = `
        <img src="${posterImage}" alt="${title}" width="290px">
        <h3>${title}</h3>
        <p>${synopsis}</p>
        <span>Rating: ${rating}</span>
        <span>Episodes: ${episodeCount}</span>
    `;

        animeListContainer.appendChild(animeItem);
    });
}

$(document).ready( function() {
    $('.search__textarea').on("keyup input cut paste drop", function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});