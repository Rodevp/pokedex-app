import { useState, useEffect } from 'react'
import useGetPokemons from '../hooks/useGetPokemons'
import {
    Stack,
    Box,
    StackDivider,
    Input,
    Select,
    Heading,
    Avatar,
    Text,
    Button,
    useMediaQuery
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'
import logoBall from '../images/ball.png'

const Mobile = () => {

    const [type, setType] = useState(0)
    const [pokemon, copyPokemon] = useGetPokemons(type)
    const [pokeData, setPokeData] = useState([])
    const [mediaWidthContent] = useMediaQuery('(min-width: 720px)')
    const [mediaWidthCard] = useMediaQuery('(min-width: 720px)')
    const navigate = useNavigate()

    useEffect(() => {
        setPokeData(pokemon)
    }, [pokemon])

    const options = [
        {
            text: 'Todos',
            id: 0
        },
        {
            text: 'Veneno',
            id: 4
        },
        {
            text: 'Roca',
            id: 6
        },
        {
            text: 'Fantasma',
            id: 8
        },
        {
            text: 'Fuego',
            id: 10
        },
        {
            text: 'Agua',
            id: 11
        },
        {
            text: 'Electrico',
            id: 13
        },
        {
            text: 'Psiquico',
            id: 14
        },
        {
            text: 'Planta',
            id: 12
        }
    ]

    const handleChangeInput = e => {
        const namePokemon = e.target.value
        
        if (namePokemon !== '') {
            const filterPokemonByName = [...pokemon].filter(pokemon => 
                                                                pokemon.name.includes(namePokemon.toLowerCase() ) )
            setPokeData(filterPokemonByName)
        } else {
            setPokeData(copyPokemon)
        }

    }

    const handleChangeType = e => {

        const option = e.target.value

        if (option === 0) {
            setType(0)
        } else {
            setType(option)
        }

    }

    const goToDetailOfPokemon = name => {
        navigate(`/pokemon/${name}`)
    }

    return (
        <>
            <Box
                width={`${mediaWidthContent ? '100%' : ''}`}
            >
                <Heading
                    as='h2'
                    size='sm'
                    bgColor='#ff0000'
                    paddingBottom='0.75em'
                    paddingTop='0.75em'
                    textAlign='center'
                    fontSize='1.5rem'
                    color='white'
                    marginBottom='1rem'
                    width='100%'
                >
                    PokeApp
                </Heading>
                <Box
                    display='flex'
                    justifyContent='space-evenly'
                    marginBottom='1rem'
                >
                    <Input
                        placeholder='Buscar pokemon'
                        width='55%'
                        onChange={handleChangeInput}
                    />
                    <Select width='35%' onChange={handleChangeType}>
                        {
                            options.map(optionType => (
                                <option key={optionType.text} value={optionType.id}>
                                    {optionType.text}
                                </option>
                            ))
                        }
                    </Select>
                </Box>
                <Stack
                    divider={<StackDivider borderColor={'gray.200'} />}
                    spacing={2}
                    overflowY='auto'
                    height='400px'
                    css={
                        {
                            '::-webkit-scrollbar': {
                                width: '0'
                            }
                        }
                    }
                    alignItems='center'
                >
                    {
                        pokeData === undefined ? <p>Cargando..</p> : pokeData.map(ele => (
                            <Box
                                key={ele.name}
                                marginBottom='0.2rem'
                                paddingBottom='1em'
                                paddingTop='1em'
                                border='2px'
                                borderColor='red.100'
                                display='flex'
                                justifyContent='space-evenly'
                                alignItems='center'
                                width={`${mediaWidthCard ? '90%' : '100%'}`}
                            >
                                <Avatar
                                    src={logoBall}
                                />
                                <Text width='25%' fontSize='1.2rem' textAlign='center'>
                                    {ele.name}
                                </Text>
                                <Button
                                    width='25%'
                                    bgColor='blue.700'
                                    color='white' _hover={{ backgroundColor: 'blue.400' }}
                                    onClick={ (e) => { goToDetailOfPokemon(ele.name) } }
                                >
                                    Ver
                                </Button>
                            </Box>
                        ))
                    }
                </Stack>
            </Box>
        </>
    )
}

export default Mobile