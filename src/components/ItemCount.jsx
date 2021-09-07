import React, {useState} from "react";

export default function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState (0)
  const addCount = () => {
    setCount (count +1);
  }
  const removeCount = () => {
    setCount (count -1);
  }
  ;
  return (
    <>
    <p>{stock, initial, onAdd}</p>
    <div>
      <h1>{count}</h1>
      <button onClick ={addCount}>Añadir Producto</button>
      <button onClick ={removeCount}>Retirar Producto</button>
    </div>
    </>
  );
}