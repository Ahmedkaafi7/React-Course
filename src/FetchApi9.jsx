import React, { useState, useEffect } from "react";

const FetchData = () => {
   const [input, setInput] = useState("");
   const [username, setUsername] = useState("");
   const [user, setUser] = useState(null);
   const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

useEffect(() => {
    if (username.trim() === "") {
        setUser(null);
        setRepos([]);
        return;
    }
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const userResponse = await fetch(`https://api.github.com/users/${username}`);
            if (!userResponse.ok) {
                throw new Error("Failed to fetch user data");
            }
            const userData = await userResponse.json();
            setUser(userData);

            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
            if (!reposResponse.ok) {
                throw new Error("Failed to fetch repository data");
            }
            const reposData = await reposResponse.json();
            setRepos(reposData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
}, [username]);
return (
    <div>
        <h2>GitHub User Search</h2>
        <input
            type="text"
            placeholder="Enter GitHub username"
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setUsername(input)}>Search</button>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && (
            <div>
                <h3>{user.name}</h3>
                <p>{user.bio}</p>
                <img src={user.avatar_url} alt={user.name} width={100}/>
                <p>Public Repositories: {user.public_repos}</p>
                <h4>Repositories:</h4>
                <ul>
                    {repos.slice(0, 5).map((repo) => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                            </a>
                        </li>
                    ))}
                </ul>

                
            </div>
        )}

    </div>

);
};
export default FetchData;