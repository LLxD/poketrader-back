import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

async function loadPokemons(){
    const response = await P.getGenerationByName("generation-i")
    return(response.pokemon_species)
};

async function loadImages(pokemonArray){
    let imageArray = []
    let experienceArray = []
    let pokeObject = []
    for (const pokemon of pokemonArray){
    const response = await P.getPokemonByName(pokemon.name)
    imageArray.push(response.sprites.front_default)
    experienceArray.push(response.base_experience)

    };
    pokeObject = pokemonArray.map((pokemon, index)=>{return({"name": pokemon.name , "url":pokemon.url, "imgUrl":imageArray[index], "baseExperience":experienceArray[index]})})
    return(pokeObject)
};

class Load{
    static async Initial(req, res){
        const pokemons = await loadPokemons();
        const obj = await loadImages(pokemons);
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).send(obj)
    }
}


export default Load