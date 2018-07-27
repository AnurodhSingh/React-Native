export function sign_up(local_data)
{
    return (dispatch) => {
        dispatch({
            type : 'SIGNUP', 
            payload:local_data,
        })
    };
}