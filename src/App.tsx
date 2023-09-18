import { useState } from 'react';
import './variables.css'
import Button from './components/button/button';

export const App = () => {
  const [total, setTotal] = useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button onClick={incrementar}>Incrementar</Button>
    </div>
  );
}
