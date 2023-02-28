const myState = {
  power: true,
  key_Press: "POWER ON"
}
const powerReducer = (state = myState, action) => {
  switch (action.type) {
    case "POWER":
      return {
        ...state,
        power: !state.power,
        key_Press: state.power ? 'Power OFF' : 'Power ON'
      }
    case 'KEY_PRESS':
      switch (action.payload) {
        case "Q":
          return {
            ...state,
            key_Press: "Heater-1"
          }
        case "W":
          return {
            ...state,
            key_Press: "Heater-2"
          }
        case "E":
          return {
            ...state,
            key_Press: "Heater-3"
          }
        case "A":
          return {
            ...state,
            key_Press: "Heater-4"
          }
        case "S":
          return {
            ...state,
            key_Press: "Clap"
          }
        case "D":
          return {
            ...state,
            key_Press: "Open-HH"
          }
        case "Z":
          return {
            ...state,
            key_Press: "Kick-n'-Hat"
          }
        case "X":
          return {
            ...state,
            key_Press: "Kick"
          }
        case "C":
          return {
            ...state,
            key_Press: "Closed-HH"
          }

      }


    default:
      return state;
  }
}

export default powerReducer