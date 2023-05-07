import { useState } from 'react'
import {FaPlusCircle} from 'react-icons/fa'
import {FaMinusCircle} from 'react-icons/fa'
import "./style.css"

function Counter(){
    const [count, setCount] = useState(0)

    const handleIncrease=()=>{
        setCount(count=>count+1)
    }
    const handleDecrease=() =>{
        count<1? setCount(count=>0):setCount(count=>count-1)  
    }
       

    return(
        <>
        <div className="custom__container">
            <div  className='counter__control' onClick={handleDecrease}><FaMinusCircle color='black' size={30}/></div>
                <div><p>{count}</p></div>
            <div  className='counter__control' onClick={handleIncrease}><FaPlusCircle color='black'  size={30}/></div>
        </div>
        </>
    )
}

export default Counter