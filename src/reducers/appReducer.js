export default function manageGame(state = {
    loading: false, 
    name: "",
    image: "",
    twitch_id: ""},
    action) {
    switch (action.type) {
        case 'CREATE':
            
            return{
                ...state,
                name: action.name,
                image: action.image,
                twitch_id: action.twitch_id,
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