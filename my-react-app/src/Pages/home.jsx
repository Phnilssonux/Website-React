function Home() {
    let count = 0;
    const handleEvent = (name) => {
        if (count < 3 ) {
          count++;
          console.log(`${name} clicked me ${count} time/s`);
        } else {
          console.log("stop clicking me!")
        } 
    }

    return (
    <div>
        <button className="home-btn" onClick={() => handleEvent("User")}>
            Click me!
        </button>
    </div>
  );  
}

export default Home;