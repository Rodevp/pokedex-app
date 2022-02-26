import { Container, useMediaQuery} from '@chakra-ui/react';
import Desktop from './screens/Desktop';
import Mobile from './screens/Mobile'


function App() {

  const [mediaWidthContent] = useMediaQuery('(min-width: 720px)')

  return (
    <>
      <Container
        width={`${mediaWidthContent ? '100%' : ''}`}
        marginLeft='auto'
        marginRight='auto'
        maxWidth='auto'
      >
        <Desktop />
        <Mobile />
      </Container>
    </>
  )
}

export default App
