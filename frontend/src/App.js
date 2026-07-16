import React, { useEffect, useState } from 'react';

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch('/api/v1/health')
      .then(res => res.json())
      .then(data => setHealth(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>StartTech MuchToDo App</h1>
      <p>API Status: {health ? JSON.stringify(health) : 'Loading...'}</p>
    </div>
  );
}

export default App;
