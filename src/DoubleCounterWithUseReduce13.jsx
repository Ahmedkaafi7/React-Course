import { useReducer } from "react"
const initialState = {
    CounterA: 0,
    CounterB: 0,
}

const Reducer = (state, action) => {
    switch (action.type) {
        case "IncrementA":
            return { ...state, CounterA: state.CounterA + 1 }
        case "DecrementA":
            return { ...state, CounterA: state.CounterA - 1 }
        case "IncrementB":
            return { ...state, CounterB: state.CounterB + 1 }
        case "DecrementB":
            return { ...state, CounterB: state.CounterB - 1 }
        case "Reset":
            return initialState
        default:
            return state
    }
}

const DoubleCounterWithUseReduce = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <div>
            <h2>CounterA {state.CounterA}</h2>
            <button onClick={() => dispatch({ type: "IncrementA" })}>A+</button>
            <button onClick={() => dispatch({ type: "DecrementA" })}  disabled={state.CounterA === 0}>
                A-
            </button>

            <h2>CounterB {state.CounterB}</h2>
            <button onClick={() => dispatch({ type: "IncrementB" })}>B+</button>
            <button onClick={() => dispatch({ type: "DecrementB" })}  disabled={state.CounterB === 0}>
                B-
            </button> 
         <h3>reset both counters</h3>
         <button onClick={() => dispatch({ type: "Reset" })}>ResetBoth</button>
      
            
        </div>
       
    )
}

export default DoubleCounterWithUseReduce;