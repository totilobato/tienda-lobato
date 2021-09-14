import React, {useState} from "react";
import './ItemCount.css'

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
  return (
    <>
    <p>{stock, initial, onAdd}</p>
    <div>
      <div className ="botonesCarrito">
    <button onClick = {() => addCount()}>+</button>
    </div>      
      <h1>{count}</h1>
    <div className ="botonesCarrito">
      <button onClick = {() =>removeCount()}>-</button>
    </div>
    <div className ="botonesCarrito">
      <button onClick = {() =>onAdd (count)}>Agregar producto/s al carrito.</button>
      </div>
    </div>
    </>
  );
  }