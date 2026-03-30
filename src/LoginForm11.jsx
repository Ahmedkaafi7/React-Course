import { useState } from "react"
const LogginForm = () =>  {
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [username , setUsername] = useState ("")
const [password , setPassword] = useState ('')


const handleUsernameChange = (e) => setUsername(e.target.value);
const handlePasswordChange = (e) => setPassword(e.target.value);


    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setIsLoggedIn(true);
                }}
            >
                <input
                    type="text"
                    onChange={handleUsernameChange}
                    placeholder="Enter your user name"
                    required
                    value={username}
                />
                <input
                    type="password"
                    onChange={handlePasswordChange}
                    placeholder="your password"
                    required
                    value={password || ""}
                />
                {!isLoggedIn && (
                    <button type="submit">Login</button>
                )}
                {isLoggedIn && (
                    <>
                        <p>Welcome, {username}!</p>
                        <button
                            type="button"
                            onClick={() => {
                                setIsLoggedIn(false);
                                setUsername("");
                                setPassword("");
                            }}
                        >
                            Logout
                        </button>
                    </>
                )}
            </form>
        </div>
    )
}
export default LogginForm