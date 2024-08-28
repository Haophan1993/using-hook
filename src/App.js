import Content from './Content';
import Header from './Header';
import Footer  from './Footer';
import Learn from './Learn';
import MemoEx from './MemoEx';
import './App.css';
import { useCallback, useMemo, useState } from 'react';

function App() {


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
  
  // const total=products.reduce((result, prod)=>{
  //   console.log('reCalcu');
  //   return result+ parseInt(prod.price)}, 0);


  const total1 = useMemo(()=>{
    const total=products.reduce((result, prod)=>{
      console.log('reCalcu');
      return result+ parseInt(prod.price)}, 0);
      return total;
  },[products])

  
  
  
    
  



  return (
    <div className="App">
      <Header/>
      <Content />
      <Footer />
      <Learn onIncrease={increase} />
      <h1>{count}</h1>
      <MemoEx />

      <div>
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
      
    </div>
  );
}

export default App;
