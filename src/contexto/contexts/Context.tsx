import React, { createContext, useReducer, Dispatch, FC } from 'react'
import { reducerActionType } from '../types/reducerActionType'

import {
  PeopleType,
  peopleInitialState,
  peopleReducer
} from '../reducers/PeopleReducer'

type initialStateType = {
  people: PeopleType
}

const initialState: initialStateType = {
  people: peopleInitialState
}

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
  people: peopleReducer(state.people, action)
})

type ContextType = {
  state: initialStateType
  dispatch: Dispatch<any>
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
})

export const ContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
