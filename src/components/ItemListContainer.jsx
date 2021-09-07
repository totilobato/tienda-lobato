import ItemCount from './ItemCount'
function ItemListContainer({greeting}) {
    return (
        <div>
            <p>{greeting}</p>
            <ItemCount/>
            </div>
    )
}

export default ItemListContainer
