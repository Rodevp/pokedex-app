import { Container, useMediaQuery} from '@chakra-ui/react';
import Mobile from './screens/Mobile'


function App() {

  const [mediaWidthContent] = useMediaQuery('(min-width: 720px)')

  return (
    <>
      <Container
        width={`${mediaWidthContent ? '90%' : ''}`}
        marginLeft='auto'
        marginRight='auto'
        maxWidth='auto'
      >
      </Container>
    </>
  )
}

export default App
