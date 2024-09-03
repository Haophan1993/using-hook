import { useReducer } from "react"
import reducer,  {initState} from "./reducer"
import { setJob, addJob, deleteJob } from "./actions"















const Todo =()=>{

  const [state, dispatch]=useReducer(reducer, initState)

  const {job, jobs}= state


  const handleSubmit=()=>{
    dispatch(addJob(job))
    dispatch(setJob(''))
  }
    return(
        
        <div>
        <div>Todo App</div>
        <h1>Use Reducer Todo </h1>
        <input placeholder='Enter Todo...' 
        value={job}
        onChange={e=>{dispatch(setJob(e.target.value))}}
        ></input>
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((item, index)=>{
            return(
              <li key={index}>{item}  <span onClick={()=>dispatch(deleteJob(index))}>x</span></li>
            )
          })}

        </ul>
      </div>
    )
}

export default Todo;