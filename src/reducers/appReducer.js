export default function manageGame(state = {
    loading: false, 
    user: {
      current: {},
      authCompleted: false,
      errors: {},
      name: "",
    image: "",
    twitch_id: ""}},
    action) {
      switch(action.type){
        case "LOGIN_USER":
          return {
            current: action.user,
            valid: true,
            errors: []
          }
        case "INVALID_USER":
          return {
            current: {},
            valid: false,
            errors: {...action.errors}
          }
        case "START_AUTH":
          return {
            current: {...state.current},
            valid: state.valid,
            authCompleted: false,
            errors: {...state.errors}
          }
        case "COMPLETE_AUTH":
          return {
            current: {...state.current},
            valid: state.valid,
            authCompleted: true,
            errors: {...state.errors}
          }
        case 'LOADING_USER':
          console.log(action)
          return{
            current: {...state.current},
            user: action.payload
          }
        default:
          return state
      }
    }