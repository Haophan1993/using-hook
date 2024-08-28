import { memo } from "react";


const Learn = ({onIncrease})=>{
    return(
        <div>
            Leanrning Component.
            
            <button onClick={onIncrease}>+</button>
            {console.log('reRender...')}
        </div>
    )

}

export default memo(Learn);