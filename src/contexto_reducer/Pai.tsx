import Filho1 from './Filho1'
import Filho2 from './Filho2'

import { ContextProvider } from './contexts/Context'

const Pai = () => {
  return (
    <div style={{ backgroundColor: '#666' }}>
      <h2>Componente pai</h2>
      <ContextProvider>
        <Filho1 />
        <Filho2 />
      </ContextProvider>
    </div>
  )
}

export default Pai
