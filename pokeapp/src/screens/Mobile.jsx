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


const Mobile = () => {

    const [media] = useMediaQuery('(min-width: 920px)')
    const [mediaWidthContent] = useMediaQuery('(min-width: 720px)')
    const [mediaWidthCard] = useMediaQuery('(min-width: 720px)')

    const arrFixed = [
        {
            name: 'vulvasur',
            id: 0
        },
        {
            name: 'vulvasur',
            id: 1
        },
        {
            name: 'vulvasur',
            id: 2
        },
        {
            name: 'vulvasur',
            id: 3
        },
        {
            name: 'vulvasur',
            id: 4
        },
        {
            name: 'vulvasur',
            id: 5
        },
        {
            name: 'vulvasur',
            id: 6
        },
        {
            name: 'vulvasur',
            id: 7
        },
        {
            name: 'vulvasur',
            id: 8
        },
        {
            name: 'vulvasur',
            id: 9
        },
        {
            name: 'vulvasur',
            id: 10
        },
        {
            name: 'vulvasur',
            id: 11
        },
        {
            name: 'vulvasur',
            id: 12
        }, {
            name: 'vulvasur',
            id: 13
        }, {
            name: 'vulvasur',
            id: 14
        }, {
            name: 'vulvasur',
            id: 15
        }, {
            name: 'vulvasur',
            id: 16
        }, {
            name: 'vulvasur',
            id: 17
        }, {
            name: 'vulvasur',
            id: 18
        }, {
            name: 'vulvasur',
            id: 19
        }, {
            name: 'vulvasur',
            id: 20
        },
    ]

    const options = [
        {
            text: 'Veneno',
            id: 4
        },
        {
            text: 'Roca',
            id: 6
        },
    ]

    return (
        <>
            <Box
                display={`${media ? 'none' : 'block'}`}
                width={`${mediaWidthContent ? '100%' : ''}`}
            >
                <Heading
                    as='h2'
                    size='sm'
                    bgColor='red.600'
                    paddingBottom='0.75em'
                    paddingTop='0.75em'
                    textAlign='center'
                    fontSize='1.5rem'
                    color='white'
                    marginBottom='1rem'
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
                    <Select width='35%'>
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
                        arrFixed.map(ele => (
                            <Box
                                key={ele.id}
                                marginBottom='0.2rem'
                                paddingBottom='1em'
                                paddingTop='1em'
                                border='2px'
                                borderColor='red.100'
                                display='flex'
                                justifyContent='space-evenly'
                                alignItems='center'
                                width={`${mediaWidthCard ? '95%' : '100%'}`}
                            >
                                <Avatar />
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