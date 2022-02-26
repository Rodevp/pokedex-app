import {
    Grid,
    GridItem,
    Box,
    useMediaQuery,
    Link
} from '@chakra-ui/react';


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
                        bgColor='blue.600'
                    >
                        search
                    </GridItem>
                    <GridItem
                        gridArea={'main'}
                        bgColor='blue.700'
                    >
                        main
                    </GridItem>
                </Grid>
            }

        </>
    )
}

export default Desktop