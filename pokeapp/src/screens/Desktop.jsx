import {
    Grid,
    GridItem,
    Box,
    useMediaQuery,
    Link,
    Text,
    Image,
    Input,
    Button
} from '@chakra-ui/react';

import Logo from '../images/ball.png'

const Desktop = () => {

    const [media] = useMediaQuery('(min-width: 920px)')

    const routes = [
        {
            text: 'Todos',
            bg: 'linear(to-l, #f9fafc, #f9fafc)',
            color: 'black'
        },
        {
            text: 'Veneno',
            bg: 'linear(to-l, #1c003b, #4b0374)'
        },
        {
            text: 'Roca',
            bg: 'linear(to-l, #582417, #8d4925)'
        },
        {
            text: 'Fantasma',
            bg: 'linear(to-l, #a7a7a7, #c9c9c9)'
        },
        {
            text: 'Fuego',
            bg: 'linear(to-l, #ff9800, #ffff89)'
        },
        {
            text: 'Agua',
            bg: 'linear(to-l, #2196f3, #81c9fa)'
        },
        {
            text: 'Electrico',
            bg: 'linear(to-l, #ffff00, #ffff6a)',
            color: 'orange.700'
        },
        {
            text: 'Psiquico',
            bg: 'linear(to-l, #8000b3, #9a2bcc)'
        },
        {
            text: 'Planta',
            bg: 'linear(to-l, green.200, pink.500)'
        },
    ]


    const fixedData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (
        <>
            {
                media && <Grid
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
                >
                    <GridItem
                        gridArea={'sidebar'}
                        bgColor='#ebeef3'
                    >
                        {
                            routes.map(route => (
                                <Box
                                    key={route.text}
                                    height='9%'
                                    width='90%'
                                    marginTop='2'
                                    marginLeft='auto'
                                    marginRight='auto'
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                >
                                    <Link
                                        height='80%'
                                        width='90%'
                                        textAlign='center'
                                        padding='1.5'
                                        bgColor='blackAlpha.700'
                                        fontSize='1.2rem'
                                        rounded='md'
                                        bgGradient={route.bg}
                                        color={route.color !== undefined ? route.color : 'white'}
                                    >
                                        {route.text}
                                    </Link>
                                </Box>

                            ))
                        }
                    </GridItem>
                    <GridItem
                        gridArea={'search'}
                        bgColor='#ff0000'
                        display='flex'
                        justifyContent='space-evenly'
                    >
                        <Box
                            width='35%'
                            display='flex'
                            justifyContent='space-evenly'
                            alignItems='center'
                        >
                            <Text
                                fontSize='2.5rem'
                                color='white'
                            >
                                POKEAPP
                            </Text>
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
                        height='100%'
                        width='100%'
                    >
                        {
                            fixedData.map(value => (
                                <Box
                                    key={value}
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
                                    />
                                    <Box
                                        paddingTop='2rem'
                                        paddingBottom='2rem'
                                        height='50%'
                                        width='100%'
                                        display='flex'
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
                                        >
                                            Ver
                                        </Button>
                                    </Box>
                                </Box>
                            ))
                        }
                    </GridItem>
                </Grid>
            }

        </>
    )
}

export default Desktop