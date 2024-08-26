import { useState } from "react";

const Content = ()=>{
    const [items, setItems]= useState([{id:1,itemName:'Book0', checked:false},
        {id:2,itemName:'Book1', checked:true}, 
        {id:3,itemName:'Book2', checked:false},
        {id:4,itemName:'Book3', checked:false}]);

    const handleChek= (id)=>{
        const listItem= items.map(
            (item)=>
            item.id===id?{...item, checked: !item.checked}:item);

            setItems(listItem)


        
    }

    return(
        <main>
            
                {/* {items.map((item)=>(
                    <li className="item" key={item.id}>
                        <input type="checkbox" checked={item.checked}></input>
                        <label>{item.itemName} </label>
                        <button>Delete</button>

                    </li>
                ))} */}

                {items.map((item, index)=>{
                    return(
                    <div className="item" key={item.id}>
                        <input type="checkbox" onChange={()=>handleChek(item.id)} checked={item.checked}></input>
                        <label>{item.itemName} </label>
                        <button>Delete</button>

                    </div>
                    )
                })}
            
            
        </main>
    )
}

export default Content;