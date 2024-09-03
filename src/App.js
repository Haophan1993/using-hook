import Content from './Content';
import Header from './Header';
import Footer  from './Footer';
import Learn from './Learn';
import MemoEx from './MemoEx';
import Todo from './Todo/index';


import './App.css';
import { useCallback, useMemo, useReducer, useState } from 'react';


const initState=0;
const UP_ACTION='up';
const DOWN_ACTION='down';

  const reducer=(state, action)=>{
    switch(action){
      case UP_ACTION:
        return state+1
      case DOWN_ACTION:
        return state-1
      default:
        throw new Error('invalid action')
    }

  }





function App() {
  const [reducerCount, dispatch]=useReducer(reducer, initState)

  

  

  const [count, setCount]=useState(0);

  const increase = useCallback( ()=>{
    setCount(preCount=>preCount +1)
  }, [])

  const [name, setName] = useState('');
  const [price, setPrice]= useState('');
  const [products, setProducts]= useState([]);

  

  const handleSubmit =()=>{
    setProducts([...products, {name, price}])

    
    
  }

  
  
  

  const total1 = useMemo(()=>{
    const total=products.reduce((result, prod)=>{
      console.log('reCalcu');
      return result+ parseInt(prod.price)}, 0);
      return total;
  },[products])


  const [items, setItems]= useState([{id:1,itemName:'Book0', checked:false},
    {id:2,itemName:'Book1', checked:true}, 
    {id:3,itemName:'Book2', checked:false},
    {id:4,itemName:'Book3', checked:false}]);

const handleChek= (id)=>{
    const listItem= items.map(
        (item)=>
        item.id===id?{...item, checked: !item.checked}:item);

        setItems(listItem);
        localStorage.setItem('shoppinglist', JSON.stringify(listItem));


    
}
const handleDelete = (id)=>{
    console.log(id)
    const newItems = items.filter((x, index)=>{return x.id!==id})

    console.log(newItems);

    setItems(newItems);

  }

  
  
  
    
  



  return (
    <div className="App">
      <Header />
      <Content items={items} handleChek={handleChek} handleDelete={handleDelete} />
      <Footer length={items.length}/>
      {/* <Learn onIncrease={increase} />
      <h1>{count}</h1>
      <MemoEx /> */}

      {/* <div>
        <input value={name} placeholder='Enter name...' onChange={e=>setName(e.target.value)}></input>
        <input value={price} placeholder='Enter price...' onChange={e=>setPrice(e.target.value)}></input>
        <button onClick={handleSubmit}>Add</button>
        <br/>
        Total:{total1}
        
        <div>
          {products.map((item, index)=>{
            return(
              <div key={index}>{item.name}-{item.price}</div>
            )
          })}
        </div>
      </div>
      <div>
        <h1>Use Reducer Hook</h1>
        <div>{reducerCount}</div>
        <button onClick={()=>dispatch(DOWN_ACTION)}>-</button>
        <button onClick={()=>dispatch(UP_ACTION)}>+</button>

      </div>

      <Todo/> */}

      
      
      
      
    </div>
  );
}

export default App;
