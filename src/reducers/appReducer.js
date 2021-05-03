export default function manageGame(state = {
    loading: false, 
    user: {
      current: {},
      valid: true,
      authCompleted: false,
      errors: {},
      name: "",
    image: "",
    twitch_id: ""}},
    action) {
    switch (action.type) {
    
        case 'LOGIN':
          console.log(action.id)
            return{
                ...state,
                twitch_id: action.id,
                loading: true
            }
        case 'LOADING':
            return {
          ...state,
          loading: true
        }
        case 'POSTING':
            return {
          ...state,
          name: action.name,
          image: action.image,
          twitch_id: action.twitch_id,
          loading: false
        }
      default:
        return state;
    }
  }