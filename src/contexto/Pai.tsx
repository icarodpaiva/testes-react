import Filho1 from './Filho1'
import Filho2 from './Filho2'

import { ContextProvider } from './contexts/Context'

const Pai = () => {
  return (
    <div>
      <h1>Componente pai</h1>
      <ContextProvider>
        <Filho1 />
        <Filho2 />
      </ContextProvider>
    </div>
  )
}

export default Pai
