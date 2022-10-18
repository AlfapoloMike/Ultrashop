export const SELECT_LEVEL = "SELECT_LEVEL";
export const DELETE_LEVEL = "DELETE_LEVEL"

export const selectedLevel = level =>({
    type:SELECT_LEVEL, 
    payload: level  
})
