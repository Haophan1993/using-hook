import LineItem from "./LineItem";
const ItemList = ({items, handleChek, handleDelete})=>{
    return(
        <div>
                
                {items.map((item, index)=>{
                    return(
                        <LineItem item={item} handleChek={handleChek} handleDelete={handleDelete} />
                    )
                })}
        </div>
    )
}

export default ItemList;