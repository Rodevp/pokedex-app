import { 
    Box,
    Button,
    Heading,
    Image,
    Text,
    useMediaQuery
 } from '@chakra-ui/react';

 import { ArrowBackIcon } from '@chakra-ui/icons';

 import testImg from '../images/ball.png'

export const Detail = () => {

    const [media] = useMediaQuery("(max-width: 620px)") 


  return (
    <Box as='section'
        display='flex'
        flexDirection='column'
        alignItems='center'
        paddingTop='1rem'
        width={ media ? '100%': '85%' }
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
            >   
                <ArrowBackIcon />
                Volver
            </Button>
            <Text
                textAlign={ media ? 'left' : 'center' }
                paddingLeft={ media ? '1rem' : '' }
                width='60%'
                color='white'
                paddingBottom='1rem'
                paddingTop='0.5rem'
                fontSize={ media ? '1.4rem' : '2rem' }
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
                src={testImg}
            />
            <Text
                fontSize={ media ? '1.2rem' : '1.8rem' }
            >
                Nombre del pokemon
            </Text>
        </Box>
        <Box 
            width='100%'
            display='flex'
            flexDirection={ media ? 'column' : 'row'}
            flexWrap={ media ? 'nowrap' : 'wrap'}
            alignItems='center'
            justifyContent='space-evenly'
        >
            <Text
                fontSize='1rem'
                paddingTop='0.5rem'
                paddingBottom='0.5rem'
                textAlign='center'
                width={ media ? '60%' : '28%' }
                bgColor='gray.400'
                borderRadius='md'
                color='white'
                marginBottom={media ? '0.25rem' : '1rem' }
            >
                S 1
            </Text>
            <Text
                fontSize='1rem'
                paddingTop='0.5rem'
                paddingBottom='0.5rem'
                textAlign='center'
                width={ media ? '60%' : '28%' }
                bgColor='gray.400'
                borderRadius='md'
                color='white'
                marginBottom={media ? '0.25rem' : '1rem' }
            >
                S 1
            </Text>
            <Text
                fontSize='1rem'
                paddingTop='0.5rem'
                paddingBottom='0.5rem'
                textAlign='center'
                width={ media ? '60%' : '28%' }
                bgColor='gray.400'
                borderRadius='md'
                color='white'
                marginBottom={media ? '0.25rem' : '1rem' }
            >
                S 1
            </Text>
            <Text
                fontSize='1rem'
                paddingTop='0.5rem'
                paddingBottom='0.5rem'
                textAlign='center'
                width={ media ? '60%' : '28%' }
                bgColor='gray.400'
                borderRadius='md'
                color='white'
                marginBottom={media ? '0.25rem' : '1rem' }
            >
                S 1
            </Text>
            <Text
                fontSize='1rem'
                paddingTop='0.5rem'
                paddingBottom='0.5rem'
                textAlign='center'
                width={ media ? '60%' : '28%' }
                bgColor='gray.400'
                borderRadius='md'
                color='white'
                marginBottom={media ? '0.25rem' : '1rem' }
            >
                S 1
            </Text>
            <Text
                fontSize='1rem'
                paddingTop='0.5rem'
                paddingBottom='0.5rem'
                textAlign='center'
                width={ media ? '60%' : '28%' }
                bgColor='gray.400'
                borderRadius='md'
                color='white'
                marginBottom={media ? '0.25rem' : '1rem' }
            >
                S 1
            </Text>
        </Box>
    </Box>
  )
}
