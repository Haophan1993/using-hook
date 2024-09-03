const LineItem=({item, handleChek, handleDelete})=>{
return(
    <div className="item" key={item.id}>
        <input type="checkbox" onChange={()=>handleChek(item.id)} checked={item.checked}></input>
        <label>{item.itemName} </label>
        <button onClick={()=>{handleDelete(item.id)}}>Delete</button>

    </div>
)

}
export default LineItem;