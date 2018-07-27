let initialState = {
    registered:[{email:'asingh@isystango.com',password:'batman',first:'Anurodh',last:'Singh',gender:'male',image:null}]
};
export const registerReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case 'SIGNUP':
         return {
            ...state,
            registered:action.payload,
         }
        
        default:
         return {
            ...state
         }
    }
}