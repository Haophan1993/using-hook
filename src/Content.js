import { useState } from "react";
import ItemList from "./ItemList";

const Content = ({items, handleChek, handleDelete})=>{
    

    return(
        <main>
            {items.length?(
                <ItemList items={items} handleChek={handleChek} handleDelete={handleDelete} />
            ):(<div>
                <p>Empty List</p>
            </div>)}
            
        </main>
    )
}

export default Content;