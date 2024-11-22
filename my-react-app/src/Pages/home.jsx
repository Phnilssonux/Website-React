import {useState} from 'react'
import 


function Home() {

      const [name, setName] = useState("Guest");

      const updateName = () => {
        setName("Philip");
      }

  

    return (
      <div>
        <button className="home-btn" onClick={updateName}> Set name </button>
        <h2>Name: {name}</h2>
      </div>
  );  
}

export default Home;
