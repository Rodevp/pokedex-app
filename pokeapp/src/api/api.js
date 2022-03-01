const uriTypePokemon = id => `https://pokeapi.co/api/v2/type/${id}`
const uriNamePokemon = name => `https://pokeapi.co/api/v2/pokemon/${name}`
const getAllPokemonUri = () => `https://pokeapi.co/api/v2/pokemon/?limit=150`


const getAllPokemon = async () => {
    try {
        const res =  await fetch( getAllPokemonUri() )
        
        if ( res.status  !== 200 ) {
            return {
                OK: false,
                message: 'No se han encontrado los pokemones',
            }
        }

        return {
            ...await res.json(),
            OK: true
        }

    } catch (error) {
        console.error('ha fallado la request', error.message)
    }


} 



export {
    getAllPokemon
}
