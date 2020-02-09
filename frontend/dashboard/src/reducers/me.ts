import { createReducer } from '@utils/reducer'
import * as actions from '../constants/me'

interface State {
  id: string
  email: string
  profile: {
    firstName: string,
    lastName: string,
  }
}

interface ActionLoad {
  type: typeof actions.load
  user: State
}

interface ActionClear {
  type: typeof actions.clear
}

type Action = ActionLoad | ActionClear

type Types = typeof actions.load | typeof actions.clear

const initialState: State = {
  id: '',
  email: '',
  profile: {
    firstName: '',
    lastName: '',
  },
}

export default createReducer<State, Types, Action>(initialState, {
  [actions.load]: (state, { user }: ActionLoad) => ({ ...state, ...user }),
  [actions.clear]: () => initialState,
})
