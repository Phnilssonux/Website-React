import React, { useState } from 'react';

const FooterWithCounter = () => {

  const [count, setCount] = useState(0);


  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <footer style={{ position: 'fixed', bottom: 0, width: '100%', background: '#f8f9fa', padding: '10px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={increment} style={buttonStyle}>Increment</button>
          <button onClick={decrement} style={buttonStyle}>Decrement</button>
          <button onClick={reset} style={buttonStyle}>Reset</button>
        </div>
      </footer>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#007bff',
  color: '#fff',
};

export default FooterWithCounter;