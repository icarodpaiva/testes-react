import './App.css'
import ContadorRegressivo from './contadorRegressivo/ContadorRegressivo'
import Pai from './contexto_reducer/Pai'
import Pai2 from './contexto/Pai'

function App() {
  return (
    <div className="App">
      <h1>Contador Regressivo</h1>
      <ContadorRegressivo />
      <hr />
      <h1>Contexto SEM Reducer</h1>
      <Pai2 />
      <hr />
      <h1>Contexto COM Reducer</h1>
      <Pai />
      <hr />
    </div>
  )
}

export default App
