import ItemCount from './ItemCount';
import logomauro from '../assets/images/logomauro.png';

function ItemDetail (props){

    const producto = props
    const onAdd = (addCount) =>{
        console.log(addCount)
    }

    return(
        <div>
        <div key={producto.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {producto.title}
                    </div>
                    <div className ="card-img-top">
                    <img src={logomauro} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {producto.description}
                    </div>
                    <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                    <div className="card-body">
                        {producto.price}
                    </div>
                </div>
                </div>
    )
}

export default ItemDetail