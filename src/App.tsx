import { useState } from 'react';
import './variables.css'
import Button from './components/button/button';
import { Input } from './components/input/input';

export const App = () => {
  const [total, setTotal] = useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Input label="Nome" id="name" />
      <Button onClick={incrementar}>Incrementar</Button>
    </div>
  );
}
