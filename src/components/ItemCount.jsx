import {useState} from "react";
import {Link} from 'react-router-dom'
import './ItemCount.css'

export default function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState (initial)
  const [cambiarBoton, setCambiarBoton] = useState(false)
  const addCount = () => {
    if (count < stock) {
      setCount (count +1); 
    }
    
  }
  const removeCount = () => {
    if (count > 0)
    setCount (count -1);
  }
  const handlerOnAdd =()=>{
    onAdd(count)
    setCount(initial)
    setCambiarBoton(true)
  }

  return (
    <>
    <div className="w-50">
    <button className="btn btn-warning" onClick = {addCount}>+</button>
    </div>      
      <h3>{count}</h3>
    <div className ="w-50">
      <button onClick = {() =>removeCount()}>-</button>
      {
        cambiarBoton ? 
        <div>
          <Link to ='/cart'>
            <button className="btn btn-warning btn-block">Finalizar Compra</button>
          </Link>
          <Link to ="/">
          <button className="btn btn-warning btn-block">Continuar Comprando</button>
          </Link>
        </div>
        :
        <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar al Carrito</button>
      }
    </div>
    </>
  );
  }