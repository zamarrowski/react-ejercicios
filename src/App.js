import { ThemeProvider } from 'styled-components'
import './App.css'
import LinkStyled from './clase2/LinkStyled'
import ListContainer from './clase2/ListContainer'

function App() {
  return (
    <>
      <ThemeProvider theme={{ main: 'yellow' }}>
        <ListContainer />
        <LinkStyled>hola link</LinkStyled>
      </ThemeProvider>
    </>
  )
}

export default App
