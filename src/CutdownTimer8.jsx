import { useState, useEffect } from "react";
const CutdownTimer = () => {
    const [time, setTime] = useState(25)
    const [isActive, setIsActive]= useState(false)
    useEffect( () => {
        let interval =  null;
        if(isActive && time >0) {
          interval = setInterval(() => {
            setTime((prev)=> prev -1)
          },1000)
        }else if (!isActive && time !== 0 ){
            clearInterval(interval)
        }
        return () => clearInterval(interval)

    },[isActive,time]);
    const handleStart = () => {
        setIsActive(true)
    }

    const handleStop = () => {
        setIsActive(false)
    }
    const handleReset = () => {
         setIsActive(false)
         setTime(25)
    }

    return (
        <div>
             <p>Set Time (seconds):
                <input type="number" min="0" value={time} onChange={(e) => setTime(parseInt(e.target.value))} 
                 /></p>
            <p>Time Remaining: {time} seconds</p>
            <button onClick={handleStart} disabled={isActive}>Start</button>
            <button onClick={handleStop} disabled={!isActive}>Stop</button>
            <button onClick={handleReset} disabled={time === 0}>Reset</button>

        </div>
    )
}


export default CutdownTimer;