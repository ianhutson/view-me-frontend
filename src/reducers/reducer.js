import userPoster from './helpers/userPoster'

export default function manageGame(state = {
    loading: false, 
    user: "",
    image: "",
    twitch_id: "",
    action}) {
    switch (action.type) {
        case 'CREATE':
            
            return{
                ...state,
                user: 
            }
        case 'LOADING':
            return {
          ...state,
          loading: true
        }
        case 'POSTING':
            return {
          ...state,
          user: action.user,
          image: action.image,
          twitch_id: action.twitch_id,
          loading: false
        }
      default:
        return state;
    }
  }