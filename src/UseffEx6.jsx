import { useEffect,useState } from "react";
const UseffEx6 = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
    useEffect(() => {  
        if (name.trim() !== ""   && greeting.trim() !== "") {
      document.title = `${greeting} , ${name}`;
    }else {
      document.title = "Welcome";
    }
    console.log({greeting, name});
  }, [greeting, name]);

  return (
    <div>
      <h2>Enter your name</h2>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>choose your favorite greeting</h2>
        <input 
          type="text" 
          placeholder="Enter your favorite greeting" 
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
        />
    </div>
  );
};

export default UseffEx6;