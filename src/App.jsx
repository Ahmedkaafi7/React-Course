import UserCard from "./UserCard";
import { FullName } from "./UserCard";
import Blog2 from "./Blog2";
import PropsEx3 from "./PropsEx3";
import Toggle from "./ToggleEx4";
import ShoppingCart from "./ShoppingCart";
import UseffEx6 from "./UseffEx6";
import MouseTrack from "./MouseTrack7";
import CutdownTimer from "./CutdownTimer8";   
import FetchData from "./FetchApi9";    
import UserList from "./UserList10";
import LogginForm from "./LoginForm11";


function App() {
  
  
  return (
    <> 
    {/* Exercise 2 */}

    <UserCard />
    <  FullName />

    <Blog2 />
    
{/* exercise 3
<PropsEx3 name = "eng caseyr"
          email =  "caseyr@gmail.com"
                 
 />
<PropsEx3 name = "eng kaafi" 
          email =  "kaafi7@gmail.com" />
<PropsEx3  name = "eng mizki"
         email =  "mizki@gmail.com" />
<PropsEx3  name = "eng halimo"
         email =  "gaabey@gmail.com"/>
<PropsEx3  name = "eng warsame"
         email =  "warsame@gmail.com"/>
    
    {/* Exrcise 5 */}
    < Toggle /> 

    {/* Exercise 6 */}
    < ShoppingCart />

    < UseffEx6 />
    < MouseTrack/>
    < CutdownTimer />
    < FetchData />
    < UserList />
    < LogginForm />

     </>
    
  )
    
  
}

export default App
