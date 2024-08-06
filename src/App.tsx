import Router from '~/router'
import { Header } from './components/ui/Header'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <Toaster />
      <Header>
        <h1>Caju Front Teste</h1>
      </Header>
      <Router />
    </>
  )
}

export default App
