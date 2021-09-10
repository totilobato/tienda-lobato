import ItemCount from './ItemCount'

const onAdd = (addCount) =>{
    console.log(addCount)
}
function ItemListContainer({greeting}) {
    return (
        <div>
            <p>{greeting}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
    )
}

export default ItemListContainer
