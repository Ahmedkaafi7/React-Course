import {useState , UseEffect, useEffect} from 'react'
const MouseTrack = () => {
    const [position, setposition] = useState({X : 0 , Y : 0})
   
   useEffect( () => {
    const handleMove = (e) => {
 setposition({X: e.clientX, Y: e.clientY})
    }
    window.addEventListener("mousemove" ,handleMove);
    return () => {
        window.removeEventListener("mousemove" , handleMove)
    }
   },[])

    return (
        <div>
        <h2>Move tracker</h2>
        <p>X:{position.X}</p>
        <p>Y:{position.Y}</p>


        </div>
    )

}
 export default MouseTrack;



