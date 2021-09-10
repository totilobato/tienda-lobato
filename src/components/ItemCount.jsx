import React, {useState} from "react";
import './itemCount.css'

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
    <div ClassName="botonesCarrito">
    <button onClick = {() => addCount()}>+</button>      
      <h1>{count}</h1>
      <button onClick = {() =>removeCount()}>-</button>
      <button onClick = {() =>onAdd (count)}>Agregar producto/s al carrito.</button>
    </div>
    </>
  );
  }