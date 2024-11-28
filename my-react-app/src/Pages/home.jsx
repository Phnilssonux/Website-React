import React, { useState } from 'react';

  const Counter = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount((prev) => Math.max(prev - 1, 0));
    const reset = () => setCount(0);
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter: {count}</h1>
        <div>
          <button onClick={increment} style={{ margin: '10px', padding: '10px 20px' }}>
            Increment
          </button>
          <button onClick={decrement} style={{ margin: '10px', padding: '10px 20px' }}>
            Decrement
          </button>
          <button onClick={reset} style={{ margin: '10px', padding: '10px 20px' }}>
            Reset
          </button>
        </div>
      </div>
    );
  };
  
  export default Counter;
  
