export const power = () =>{
    return{
        type : 'POWER'
    }
}
export const keyPress = (payload) =>{
    return{
        type : 'KEY_PRESS',
        payload: payload
    }
}