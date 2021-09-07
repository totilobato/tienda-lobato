import ItemCount from './ItemCount'
function ItemListContainer({greeting}) {
    return (
        <div>
            <p>{greeting}</p>
            <ItemCount stock initial = {5,1,'ItemCount'}/>
            </div>
    )
}

export default ItemListContainer
