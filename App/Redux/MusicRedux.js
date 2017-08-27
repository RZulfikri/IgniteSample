import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getMusicRequest: ['data'],
  getMusicSuccess: ['payload'],
  getMusicFailure: null,
  likeMusic: null
})

export const MusicTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const getMusicRequest = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const getMusicSuccess = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const getMusicFailure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const likeMusic = state =>
  state.merge({fetching: true, payload: {...state.payload, is_liked: !state.payload.is_liked, likes: state.payload.is_liked ? state.payload.likes - 1 : state.payload.likes + 1}})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MUSIC_REQUEST]: getMusicRequest,
  [Types.GET_MUSIC_SUCCESS]: getMusicSuccess,
  [Types.GET_MUSIC_FAILURE]: getMusicFailure,
  [Types.LIKE_MUSIC]: likeMusic
})
