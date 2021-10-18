import Nav from 'react-bootstrap/Nav'

const Item = ({item}) => {
        console.log(item)
    return (
        <div key={item.id} className='card w-50 mt-2'>
                    <div className="card-header">
                        {item.title}
                    </div>
                    <div className ="card-img-top">
                    <img src={item.pictureUrl} alt="logo"/>
                    </div>
                    <div className ="list-group-item">
                        {item.description}
                    </div>                   
                    <div className="card-footer">
                        {`precio ${item.price}`}
                    </div>
                    <Nav.Link href={`/item/${item.id}`}>
                    <button className="btn btn-outline-warning btn-block">Detalles</button>
                    </Nav.Link>
                </div>
    )
}

export default Item
