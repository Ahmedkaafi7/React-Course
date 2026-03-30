import { useState } from "react";
const UserList = () => {
const[users,setUsers] = useState ([
    {id:1, name:"eng caseyr" , email:"engcasey@gmail.com" },
    {id:2, name:"eng cali" , email:"engcali@gmail.com"},

])

return (
<div> <ul>
    {users.length > 0 ? (
        
users.map((user) => <li key={user.id}>{user.name} - {user.email}</li>)


) : <p>No users found</p>}
</ul>

</div>
)}
export default UserList;