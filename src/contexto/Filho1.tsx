import { useMyContext } from './contexts/ContextProvider'

const Filho1 = () => {
  const { name, setName, age, setAge } = useMyContext()

  return (
    <div style={{ margin: '10px', border: '1px solid white' }}>
      <h2>Filho2</h2>

      <p>
        name: {name} - Escolha um novo nome:
        <input type="text" onChange={e => setName(e.target.value)} />
      </p>
      <p>
        idade: {age} - Escolha uma nova idade:
        <input type="number" onChange={e => setAge(Number(e.target.value))} />
      </p>
    </div>
  )
}

export default Filho1
