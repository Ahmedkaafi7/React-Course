import {useState} from "react"
const Counter = () => {
const [decrease, setDecrease] = useState(0)
const [increase, setIncrease] = useState(1)
const [count, setCount] = useState(0)


const handleDecrease = ()  => {
setDecrease((prev)=> prev - 1)
setCount((prev) => prev - 1)
}
const handleIncrease = () => {
    setIncrease( (prev) => prev + 1 )
    setCount((prev) => prev + 1)
}
    return(
 <div>
    <p>count: {count}</p>
    <button onClick={handleDecrease} value={decrease} disabled={count <= 0}
     >decrease</button>
    <button  onClick={handleIncrease}  value={increase}>increase</button>
 </div>
    )
}
export default Counter;