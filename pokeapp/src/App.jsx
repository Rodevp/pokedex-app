import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Desktop from './screens/Desktop'
import Mobile from './screens/Mobile'
import { Detail } from './screens/Detail';

function App() {

  const [widthMedia, setWidthMedia] = useState(false)

  useEffect(() => {

    document.body.clientWidth >= 920 ? setWidthMedia(true) : setWidthMedia(false)
    
    window.addEventListener('resize', () => {

      if (document.body.clientWidth >= 920) {
        setWidthMedia(true)
      } else {
        setWidthMedia(false)
      }

    })

    return () => {
      window.removeEventListener('resize', () => {})
    }

  }, [])



  return (
    <>
      <Container
        width={`100%`}
        marginLeft='auto'
        marginRight='auto'
        maxWidth='auto'
        display='flex'
        justifyContent='center'
      >
        {
          widthMedia ? <Desktop /> : <Mobile /> 
        }
        
        {
          // <Detail />
        }
        </Container>
    </>
  )
}

export default App
