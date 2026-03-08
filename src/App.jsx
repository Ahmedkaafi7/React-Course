import UserCard from "./UserCard";
import { FullName } from "./UserCard";
import Blog2 from "./Blog2";
import PropsEx3 from "./PropsEx3";
import Toggle from "./ToggleEx4";


function App() {
  
  
  return (
    <> 
    {/* Exercise 2 */}

    <UserCard />
    <  FullName />

    <Blog2 />
    
{/* exercise 3 */}
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
    
     </>
  )
    
  
}

export default App
