import { useContext } from 'react'
import { Context } from './contexts/Context'

const Filho2 = () => {
  const { state, dispatch } = useContext(Context)

  return (
    <div style={{ margin: '10px', border: '1px solid white' }}>
      <h2>Filho2</h2>

      <p>
        name: {state.people.name} - Escolha um novo nome:{' '}
        <input
          type="text"
          onChange={e =>
            dispatch({
              type: 'CHANGE_NAME',
              payload: {
                name: e.target.value
              }
            })
          }
        />
      </p>
      <p>
        idade: {state.people.age} - Escolha uma nova idade:
        <input
          type="number"
          onChange={e =>
            dispatch({
              type: 'CHANGE_AGE',
              payload: {
                age: e.target.value
              }
            })
          }
        />
      </p>
    </div>
  )
}

export default Filho2
