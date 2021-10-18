import { Link } from 'react-router-dom'
import {useState} from "react";
import './ItemCount.css'

const ItemCount = ({stock, initial, onAdd}) => {
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
            <button className="btn btn-warning" onClick={addCount}>+</button>
            <label>{count}</label>
            <button className="btn btn-warning" onClick={removeCount}>-</button><br />
            { cambiarBoton && 
                <div>
                    <Link to='/cart'>
                        <button className="btn btn-outline-primary btn-block">Finalizar compra</button>
                    </Link>
                    <Link to='/'>
                        <button className="btn btn-outline-warning btn-block">Seguir comprando</button>
                    </Link>
                </div>
            }
            { !cambiarBoton && <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button>}
    </div>
    </>
  );
  }

  export default ItemCount