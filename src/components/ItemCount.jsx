import React, {useState} from "react";

export default function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState (initial)
  const addCount = () => {
    if (count < stock) {
      setCount (count +1); 
    }
    
  }
  const removeCount = () => {
    if (count > 0)
    setCount (count -1);
  }
  ;
  return (
    <>
    <p>{stock, initial, onAdd}</p>
    <div>
      <h1>{count}</h1>
      <button onClick = {() => addCount}>Añadir Producto</button>
      <button onClick = {() =>removeCount}>Retirar Producto</button>
    </div>
    </>
  );
  }