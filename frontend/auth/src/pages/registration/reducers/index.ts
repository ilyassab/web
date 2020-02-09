import { createReducer } from '@utils/reducer'
import * as actions from '../constants'

interface Errors {
  email?: string
  password?: string
}

interface State {
  email: string
  password: string
  confirmPassword: string
  errors: Errors
}

interface ActionChange {
  type: typeof actions.change
  field: string
  value: string
}

interface ActionError {
  type: typeof actions.setErrors
  errors: Errors
}

interface ActionClear {
  type: typeof actions.clear
}

type Actions = ActionChange | ActionError | ActionClear

type Types = typeof actions.change | typeof actions.setErrors | typeof actions.clear

const initialState: State = {
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
}

export default createReducer<State, Types, Actions>(initialState, {
  [actions.change]: (state, { field, value }: ActionChange) => ({
    ...state,
    field: value,
    errors: {
      ...state.errors,
      [field]: '',
    },
  }),
  [actions.setErrors]: (state, { errors }: ActionError) => ({ ...state, errors }),
  [actions.clear]: () => initialState,
})
