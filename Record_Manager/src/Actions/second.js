export function addRecord(newArray){
    return (dispatch) => {
        dispatch({
            type : 'ADD', 
            payload:newArray
        })
    };
}
export function updateRecord(newArray){
    return (dispatch) => {
        dispatch({
            type : 'UPDATE', 
            payload:newArray
        })
    };
}

