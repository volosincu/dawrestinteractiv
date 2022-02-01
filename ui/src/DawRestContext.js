import React from 'react'


export const initState = {
    term: null,
    results: {},
    rdfdomain: {},
}


export function reducer(state, action){
    switch (action.type) {
        case 'search':
            return { ...state, ...action.payload }
        case 'results':
            return { ...state, ...action.payload }
        default:
            throw new Error("eroare reducer action type");
    }
}

const DawRestContext = React.createContext(initState);


export default DawRestContext;