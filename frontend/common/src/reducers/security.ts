import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createReducer } from '@utils/reducer'
import * as actions from '../constants/security'

interface State {
  token: string
  expiresIn: string
}

interface ActionAuth {
    type: typeof actions.auth
    token: string
    expiresIn: string
}

interface ActionLogout {
    type: typeof actions.logout
}

type Action = ActionAuth | ActionLogout

type Types = typeof actions.auth | typeof actions.logout

const initialState: State = {
  token: '',
  expiresIn: '',
}

const reducer = createReducer<State, Types, Action>(initialState, {
  [actions.auth]: (state, { token, expiresIn }: ActionAuth) => ({
    token,
    expiresIn,
  }),
  [actions.logout]: () => initialState,
})

export default persistReducer(
  {
    storage,
    key: 'token',
    keyPrefix: 'aunited',
    version: 1,
  },
  reducer,
)
