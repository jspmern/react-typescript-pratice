import React, { createContext, useContext, useReducer, type ReactNode } from 'react'
import reducer from '../Reducer/FetchReducer'
type FetchContextProviderType = {
    children: ReactNode
}
type TodoType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
export type ContextDataType = {
    loading: boolean,
    error: string,
    data: TodoType[]
}
type FetchContextType = ContextDataType & {
    fetchData: () => void
}
let fetchContext = createContext<FetchContextType | null>(null)

//custom hook
function useFetch() {
    let data = useContext(fetchContext)
    if (data == null) {
        console.log('somthing wrong')
    }
    else {
        return data
    }
}
function FetchContext({ children }: FetchContextProviderType) {
    //this is for the initalize the state by using reducer
    let initalState: ContextDataType = {
        loading: false,
        error: '',
        data: []
    }
    let [state, dispatch] = useReducer(reducer, initalState)
    let contextInitalData: FetchContextType = {
        loading: state.loading,
        error: state.error,
        data: state.data,
        fetchData() {
            //...
        },
    }
    return <fetchContext.Provider value={contextInitalData}>{children}</fetchContext.Provider>
}

export default FetchContext