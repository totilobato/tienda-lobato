import React, {useState} from "react";

export default function ItemCount() {
  const [count, setCount] = useState (0)
  const addCount = () => {
    setCount (count +1);
  }
  const removeCount = () => {
    setCount (count +1);
  }
  ;
  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick ={addCount}>Añadir Producto</button>
      <button onClick ={removeCount}>Retirar Producto</button>
    </div>
    </>
  );
}