import './App.css'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { UserProvider } from './assets/contexts/UserContext';

function App() {
  return (
    <>
      <UserProvider>
        <Header/>
        <Form/>
      </UserProvider>
    </>
  )
}

export default App
