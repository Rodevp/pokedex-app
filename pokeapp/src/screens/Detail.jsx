import {
    Box,
    Button,
    Heading,
    Image,
    Text,
    useMediaQuery
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { ArrowBackIcon } from '@chakra-ui/icons'
import { getPokemonByName } from '../api/api'


export const Detail = () => {

    const [pokemon, setPokemon] = useState({})
    const [media] = useMediaQuery("(max-width: 620px)")
    const { name } = useParams()
    const navigate = useNavigate()

    useEffect(async () => {

        const res = await getPokemonByName(name)

        const stats = res.stats.map(stat => ({ stat: stat.stat.name, quantity: stat.base_stat }))
        const dataPokemon = {
            name: res.name,
            stats,
            imgPokemon: res.sprites.front_default
        }

        setPokemon(dataPokemon)

    }, [])

    const goToHome = () => {
        navigate('/')
    }

    return (
        <Box as='section'
            display='flex'
            flexDirection='column'
            alignItems='center'
            paddingTop='1rem'
            width={media ? '100%' : '85%'}
        >
            <Heading
                width='100%'
                bgColor='#ff0000'
                marginBottom='1rem'
                display='flex'
                alignItems='center'
            >
                <Button
                    marginLeft='0.25rem'
                    width={media ? '30%' : '20%'}
                    bgColor='blue.400'
                    color='white'
                    _hover={
                        {
                            backgroundColor: 'blue.600'
                        }
                    }
                    onClick={goToHome}
                >
                    <ArrowBackIcon />
                    Volver
                </Button>
                <Text
                    textAlign={media ? 'left' : 'center'}
                    paddingLeft={media ? '1rem' : ''}
                    width='60%'
                    color='white'
                    paddingBottom='1rem'
                    paddingTop='0.5rem'
                    fontSize={media ? '1.4rem' : '2rem'}
                >
                    PokeApp
                </Text>
            </Heading>
            <Box
                width='80%'
                display='flex'
                flexDirection='column'
                alignItems='center'
                marginBottom='1rem'
            >
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    marginBottom='1rem'
                    src={pokemon.imgPokemon}
                />
                <Text
                    fontSize={media ? '1.2rem' : '1.8rem'}
                >
                    {pokemon.name}
                </Text>
            </Box>
            <Box
                width='100%'
                display='flex'
                flexDirection={media ? 'column' : 'row'}
                flexWrap={media ? 'nowrap' : 'wrap'}
                alignItems='center'
                justifyContent='space-evenly'
            >
                {
                    pokemon.stats === undefined ? <p>Cargando...</p> : pokemon.stats.map(stat => (
                        <Text
                            key={stat.stat}
                            fontSize='1rem'
                            paddingTop='0.5rem'
                            paddingBottom='0.5rem'
                            textAlign='center'
                            width={media ? '60%' : '28%'}
                            bgColor='gray.400'
                            borderRadius='md'
                            color='white'
                            marginBottom={media ? '0.25rem' : '1rem'}
                        >
                            {stat.stat} - {stat.quantity}
                        </Text>
                    ))
                }
            </Box>
        </Box>
    )
}
