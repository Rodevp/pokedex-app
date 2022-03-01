const uriNamePokemon = name => `https://pokeapi.co/api/v2/pokemon/${name}`
const getAllPokemonUri = () => `https://pokeapi.co/api/v2/pokemon/?limit=150`
const uriTypePokemon = id => {
    return id.toString() === '0' ? getAllPokemonUri() : `https://pokeapi.co/api/v2/type/${id}/?limit=150`
}

const getTypePokemon = async (idType) => {

    try {
        const res =  await fetch( uriTypePokemon(idType) )
        
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
    getTypePokemon
}
