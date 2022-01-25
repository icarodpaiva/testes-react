import { throws } from 'assert'
import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface ContextProps {
  name: string
  setName: Dispatch<SetStateAction<string>>
  age: number
  setAge: Dispatch<SetStateAction<number>>
}

const Context = createContext<ContextProps | null>(null)

const ContextProvider: FC = ({ children }) => {
  const [name, setName] = useState<string>('Icaro')
  const [age, setAge] = useState<number>(25)

  return (
    <Context.Provider value={{ name, setName, age, setAge }}>
      {children}
    </Context.Provider>
  )
}

export const useMyContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error('provider é necessário')
  }

  return context
}
export default ContextProvider
