import { useState } from "react";

const ToggleEx4 = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isVisiable,setIsVisiable] = useState (false);

    const toggleChange = () => {
        setIsVisiable(!isVisiable);
    }

return (
    <>
    <p > The button is {isVisiable ? "OFF" : "ON"}  </p>
    <button onClick={toggleChange}>{isVisiable ? "ON" : "OFF"}</button>
    </>
)


}
export default ToggleEx4;