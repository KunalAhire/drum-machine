const powerReducer = (state = true, action) => {
  switch(action.type){
    case "POWER":
        return !state;
    default:
        return state;
  }
}

export default powerReducer