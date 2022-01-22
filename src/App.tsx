import './App.css'
import ContadorRegressivo from './contadorRegressivo/ContadorRegressivo'
import Pai from './contexto/Pai'

function App() {
  return (
    <div className="App">
      Contador Regressivo
      <ContadorRegressivo />
      <hr />
      Contexto
      <Pai />
      <hr />
    </div>
  )
}

export default App
