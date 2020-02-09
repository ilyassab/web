import { createReducer } from '@utils/reducer'
import * as actions from '../constants/list'

interface State {
  rows: []
  count: number
}

interface ActionLoad {
  type: typeof actions.load
  list: []
}

interface ActionClear {
  type: typeof actions.clear
}

type Action = ActionLoad | ActionClear

type Types = typeof actions.load | typeof actions.clear

const initialState: State = {
  rows: [],
  count: 0,
}

export default createReducer<State, Types, Action>(initialState, {
  [actions.load]: (state, { list }: ActionLoad) => ({ ...state, ...list }),
  [actions.clear]: () => initialState,
})
