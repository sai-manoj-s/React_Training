import "./style.css"
import { useState, useEffect } from 'react'
<style className="css"></style>


function ArrayUI(){
    let [arrayInput , setarrayInput] = useState([1,2,3,4,5]);
    console.log(arrayInput)
    const  handleAdd = ()=>{
        setarrayInput((arrayInput)=>[...arrayInput,document.getElementById("input_val").value])
        
     };


     const handleRemove = ()=>{
        setarrayInput((arrayInput)=>{
            const del_array=[...arrayInput];
            del_array.pop();
            return del_array;
        })
       
        console.log(arrayInput)
    };
   
   
   
   
    return(
        <>
        <div className="custom__container">
            <div className="array__list">
            <ul >
                {arrayInput.map((item) =>
                    <li className="list-item">{item}</li>
                )}
            </ul>
            </div>
            <div className="array__func">
                <input  id="input_val" className="array__input" ></input>
                <button className="array__btn" onClick={handleAdd}>Add</button>
                <button className="array__btn" onClick={handleRemove}>remove</button>
            
            </div>
        </div>

        </>

    )

}

 export default ArrayUI