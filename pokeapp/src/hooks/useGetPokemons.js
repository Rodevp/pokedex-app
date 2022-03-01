import { useEffect, useState } from 'react'
import { getTypePokemon } from '../api/api'

const useGetPokemons = type => {

    const [pokemon, setPokemon] = useState([])
    const [copyPokemon, setCopyPokemon] = useState([])

    useEffect(async () => {


        const response = await getTypePokemon(type)
        if (await response.OK) {

            const data = response.results === undefined
                ? [...response.pokemon].map(element => element.pokemon)
                : response.results

            setCopyPokemon(data)
            setPokemon(data)

        }

        return async () => {
            setCopyPokemon([])
            setPokemon([])
        }

    }, [type])

    return [pokemon, copyPokemon]

}

export default useGetPokemons