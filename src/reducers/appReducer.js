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
      default:
        return state;
    }
  }