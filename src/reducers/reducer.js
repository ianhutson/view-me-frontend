import userPoster from './helpers/userPoster'

export default function manageGame(state = {
    loading: false, 
    
    action) {
    switch (action.type) {

        case 'LOADING':
            return {
          ...state,
          scores: [...state.scores],
          loading: true
        }
        case 'POSTING':
            return {
          ...state,
          scores: action.scores,
          loading: false
        }
      default:
        return state;
    }
  }