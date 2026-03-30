const getTop10Movies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=187e81618321dc9135f1343484c9611a`);

        const data = await response.json();

        const top10 = data.results.slice(0, 10);

        console.log(top10);

        const container = document.getElementById("filmes");

        const generos = {
            28: "Ação",
            12: "Aventura",
            16: "Animação",
            35: "Comédia",
            80: "Crime",
            99: "Documentário",
            18: "Drama",
            10751: "Família",
            14: "Fantasia",
            36: "História",
            27: "Terror",
            10402: "Música",
            9648: "Mistério",
            10749: "Romance",
            878: "Ficção científica",
            10770: "Cinema TV",
            53: "Thriller",
            10752: "Guerra",
            37: "Faroeste"
        };

        const filmes = top10.map(filme => {

            const titulo = filme.title;
            const nota = filme.vote_average;
            const imagem = "https://image.tmdb.org/t/p/w500" + filme.poster_path;
            const classificacao = filme.adult ? "18+" : "Livre";
            const genero = filme.genre_ids.map(id => generos[id]).join(", ");
            

            return `
                <div class="boxFilme">
                    <a href="https://www.themoviedb.org/movie/${filme.id}" target="_blank"><img src="${imagem}" class="imagem"></a>
                    <h3 class="titulo">${titulo}</h3>
                    <p class="nota">⭐ ${nota}</p>
                    <p class="genero">${genero}</p>
                    <p class="classificacao">${classificacao}</p>
                </div>
            `;
    
        });

        


        container.innerHTML = filmes.join("");

    } catch (erro) {
        console.error("ERRO:", erro);
    }
};

export default getTop10Movies;
