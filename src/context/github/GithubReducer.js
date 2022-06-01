const githubReducer = (state, action) => {

  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        loading: false,
        users: []
      }
    case 'GET_USER':
      return {
        ...state,
        loading: false,
        user: action.payload
      }  
    case 'GET_REPOS':
      return {
        ...state,
        loading: false,
        repos: action.payload
      }  
    
    default: 
     return state
  }
}

export default githubReducer