import { useEffect, useState } from 'react'
import { getAllPokemon,getTypePokemon } from '../api/api'
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
import logoBall from '../images/ball.png'


const Mobile = () => {
    
    const [pokemon, setPokemon] = useState([])
    const [type, setType] = useState(0)

    const [mediaWidthContent] = useMediaQuery('(min-width: 720px)')
    const [mediaWidthCard] = useMediaQuery('(min-width: 720px)')

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

    useEffect( async () => {
        
        console.log('type', type)
        
        const response = await getTypePokemon(type) 
        
        
        if (await response.OK) {
            
            const data = response.results === undefined 
                ? [...response.pokemon].map(element => element.pokemon) 
                : response.results

            setPokemon(data)

        }

    }, [type])

    const onChangeType = e => {
        
        const option = e.target.value

        if (option === 0) {
            setType(0)
        } else {
            console.log(option)
            setType(option)
        }

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
                    />
                    <Select width='35%' onChange={onChangeType}>
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
                        pokemon === undefined ? <p>Cargando..</p> : pokemon.map(ele => (
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
                                    color='white' _hover={ { backgroundColor: 'blue.400' } }
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