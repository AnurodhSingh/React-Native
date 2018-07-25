let initial = {
    entry:[{first:'Anurodh',last:'Singh',address:'Systango'}]
};

export const second = (state = initial, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                entry:action.payload
            }
        case 'DELETE':
            return {
                ...state,
                entry:action.payload
            }
        case 'UPDATE':
            return {
                ...state,
                entry:action.payload
            }
        default:
            return state;
    }
};