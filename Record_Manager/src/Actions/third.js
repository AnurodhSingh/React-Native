export function deleteRecord(newArray){
    console.log('deleteRecord');
    return (dispatch) => {
        dispatch({
            type : 'DELETE', 
            payload:newArray
        })
    };
}
