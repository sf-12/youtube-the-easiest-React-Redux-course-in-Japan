import * as Actions from './actions'
import initialState from '../store/initialState'

// Actionの種類に応じてどんな処理をするか判断。Storeを更新する
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
