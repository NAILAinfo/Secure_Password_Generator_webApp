import './App.css'
import InputBar from './components/InputBar'
import OutputBar from './components/OutputBar'

function App() {
  
  return (
    <section>
      <h1>Générateur de mot de passe sécurisé</h1>
      <p>Choisis la longueur et les types de caractères, puis génère un mot de passe fort et copie-le en un clic</p>
      <InputBar />
      <OutputBar />
    </section>
  )
}

export default App
