import { useEffect, useState } from 'react'
import useGetPokemons from '../hooks/useGetPokemons'
import {
    Grid,
    GridItem,
    Box,
    Image,
    Input,
    Button,
    Heading
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

import Logo from '../images/ball.png'

const Desktop = () => {

    const [type, setType] = useState(0)
    const [pokemon, copyPokemon] = useGetPokemons(type)
    const [pokeData, setPokeData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setPokeData(pokemon)
    }, [pokemon])

    const options = [
        {
            text: 'Todos',
            bg: 'linear(to-l, #f9fafc, #f9fafc)',
            color: 'black',
            type: 0
        },
        {
            text: 'Veneno',
            bg: 'linear(to-l, #1c003b, #4b0374)',
            type: 4
        },
        {
            text: 'Roca',
            bg: 'linear(to-l, #582417, #8d4925)',
            type: 6
        },
        {
            text: 'Fantasma',
            bg: 'linear(to-l, #a7a7a7, #c9c9c9)',
            type: 8
        },
        {
            text: 'Fuego',
            bg: 'linear(to-l, #ff9800, #ffff89)',
            type: 10
        },
        {
            text: 'Agua',
            bg: 'linear(to-l, #2196f3, #81c9fa)',
            type: 11
        },
        {
            text: 'Electrico',
            bg: 'linear(to-l, #ffff00, #ffff6a)',
            color: 'orange.700',
            type: 13
        },
        {
            text: 'Psiquico',
            bg: 'linear(to-l, #8000b3, #9a2bcc)',
            type: 14
        },
        {
            text: 'Planta',
            bg: 'linear(to-l, green.200, pink.500)',
            type: 12
        },
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

    const typeOfPokemons = type => {
        setType(type)
    }

    const goToDetailOfPokemon = name => {
        navigate(`/pokemon/${name}`)
    }

    return (
        <>
            <Grid
                templateColumns='repeat(4, 1fr)'
                templateRows='repeat(5, 1fr)'
                gridTemplateAreas={`
                'sidebar search search search'
                'sidebar main main main'
                'sidebar main main main'
                'sidebar main main main'
                'sidebar main main main'
            `}
                gap={0}
                height='100vh'
                width='100%'
            >
                <GridItem
                    gridArea={'sidebar'}
                    bgColor='#ebeef3'
                >
                    {
                        options.map(option => (
                            <Box
                                key={option.text}
                                height='9%'
                                width='90%'
                                marginTop='2'
                                marginLeft='auto'
                                marginRight='auto'
                                display='flex'
                                justifyContent='center'
                                alignItems='center'
                            >
                                <Button
                                    height='80%'
                                    width='90%'
                                    textAlign='center'
                                    padding='1.5'
                                    bgColor='blackAlpha.700'
                                    fontSize='1.2rem'
                                    rounded='md'
                                    bgGradient={option.bg}
                                    _hover={{
                                        backgroundColor: option.bg
                                    }}
                                    color={option.color !== undefined ? option.color : 'white'}
                                    onClick={(e) => { typeOfPokemons(option.type) }}
                                >
                                    {option.text}
                                </Button>
                            </Box>

                        ))
                    }
                </GridItem>
                <GridItem
                    gridArea={'search'}
                    bgColor='#ff0000'
                    display='flex'
                    justifyContent='space-evenly'
                    width='100%'
                >
                    <Box
                        width='35%'
                        display='flex'
                        justifyContent='space-evenly'
                        alignItems='center'
                    >
                        <Heading as='h5'
                            fontSize='2rem'
                            color='white'
                        >
                            POKEAPP
                        </Heading>
                        <Box>
                            <Image
                                src={Logo}
                                alt='logo pokemon'
                                borderRadius='full'
                                border='2px'
                                boxSize='40px'
                            />
                        </Box>
                    </Box>
                    <Box
                        width='55%'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                    >
                        <Input
                            placeholder='Burcar Pokemon'
                            bgColor='white'
                            color='blue.400'
                            onChange={handleChangeInput}
                        />
                    </Box>
                </GridItem>
                <GridItem
                    gridArea={'main'}
                    paddingLeft='1rem'
                    paddingRight='1rem'
                    paddingTop='1rem'
                    overflowY='scroll'
                    display='flex'
                    flexWrap='wrap'
                    alignItems='start'
                    justifyContent='center'
                    maxHeight='100%'
                    maxWidth='100%'
                >
                    {
                        pokeData.map(poke => (
                            <Box
                                key={poke.name}
                                width='20%'
                                bgColor='#ebeef3'
                                display='flex'
                                flexDirection='column'
                                alignItems='center'
                                justifyContent='space-evenly'
                                position='relative'
                                marginLeft='1rem'
                                marginBottom='1rem'
                            >
                                <Box
                                    width='100%'
                                    height='50%'
                                    paddingTop='2rem'
                                    paddingBottom='2rem'
                                    bgColor='blue.700'
                                >

                                </Box>
                                <Image
                                    borderRadius='full'
                                    boxSize='55px'
                                    border='2px'
                                    position='absolute'
                                    top='20%'
                                    src={Logo}
                                />
                                <Heading
                                    as='h5'
                                    fontSize='1.2rem'
                                    position='absolute'
                                    top='50%'
                                    zIndex='6'
                                >

                                    {poke.name}
                                </Heading>
                                <Box
                                    paddingTop='2rem'
                                    paddingBottom='2rem'
                                    height='50%'
                                    width='100%'
                                    display='flex'
                                    marginTop='25px'
                                    justifyContent='center'
                                >
                                    <Button
                                        width='80%'
                                        borderRadius='md'
                                        bgColor='blue.500'
                                        color='white'
                                        _hover={
                                            {
                                                backgroundColor: 'blue.600'
                                            }
                                        }
                                        onClick={(e) => { goToDetailOfPokemon(poke.name) } }
                                    >
                                        Ver
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    }
                </GridItem>
            </Grid>
        </>
    )
}

export default Desktop