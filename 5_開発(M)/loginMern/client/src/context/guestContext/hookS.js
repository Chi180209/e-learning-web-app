import React,{useState, useEffect} from 'react'

export default function IntervalHookCounter() {
    const[count, setCount]=useState(0)
    const tick =()=>{
        setCount(prevCount => prevCount+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick, 1000)
        return () =>{
            clearInterval(interval)
        }
    },[])
    return (
        <div>
            {count}
        </div>
    )
}

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App(){
    return(
        <div className = 'App'>
            <UserContext.Provider value={'Duy'}>
                <ChannelContext.Provider value={'MixiGaming'}>
                <ComponentC/>
                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

import {UserContext, ChannelContext} from '../App'

function ComponentE(){
    const user= useContext(UserContext)
    const channel=useContext(ChannelContext)
    return(
        <div>
            {user} - {channel}
        </div>
    )
}
export default ComponentE

import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state

    }
}

export default function counterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=>dispatch('increment')}>Increase</button>
            <button onClick={()=>dispatch('decrement')}>Decrease</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}
