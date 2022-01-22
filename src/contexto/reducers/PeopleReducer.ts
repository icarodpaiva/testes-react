import { reducerActionType } from '../types/reducerActionType'

export type PeopleType = {
  name: string
  age: number
}

export const peopleInitialState: PeopleType = {
  name: 'icaro',
  age: 25
}

export const peopleReducer = (state: PeopleType, action: reducerActionType) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload.name }
    case 'CHANGE_AGE':
      return { ...state, age: action.payload.age }
  }

  return state
}
