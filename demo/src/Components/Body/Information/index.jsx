import { useState } from "react"
import {FaEdit} from 'react-icons/fa'
import "./style.css"


function Information(){
    const [person,setPerson] = useState({name:"rahul",team:"LSG",age:"35"})


    const enableEdit = ()=>{
        console.log('clicked once');
       [...document.getElementsByClassName('info__textfield')].forEach(element => {
            element.removeAttribute('hidden')});
            [...document.getElementsByClassName('info_text')].forEach(element => {
                element.setAttribute('hidden',true);});
        [...document.getElementsByClassName('btn')].forEach(element => {
                element.removeAttribute('hidden');
        });
    }

    const handleCancel=()=>{
        console.log("canceled");
        setPerson((person)=>({...person}));
        [...document.getElementsByClassName('info__textfield')].forEach(element => {
            element.setAttribute('hidden',true);
        });
        [...document.getElementsByClassName('btn')].forEach(element => {
            element.setAttribute('hidden',true);
        });
        [...document.getElementsByClassName('info_text')].forEach(element => {
            element.removeAttribute('hidden');});

    }

    
    const handleSave=()=>{
        console.log('saveclicked');
        let newName=document.getElementById('p_name').value;
        let newTeam=document.getElementById('p_team').value;
        let newAge=document.getElementById('p_age').value;
        console.log('newname: '+newName);
        setPerson((person)=>({...person,name:newName,team:newTeam,age:newAge}));
        [...document.getElementsByClassName('info__textfield')].forEach(element => {
            element.setAttribute('hidden',true);
        });
        [...document.getElementsByClassName('btn')].forEach(element => {
            element.setAttribute('hidden',true);
        });
        [...document.getElementsByClassName('info_text')].forEach(element => {
            element.removeAttribute('hidden');});


    }


    return(
        <>
        <div className="custom__container">
            <div onClick={enableEdit}><FaEdit color="black"/></div>
            <div className="info__field">
               
               <label> Name : </label><p className="info_text" hidden={false}>{person.name}</p><input id="p_name" className="info__textfield" type="text"  defaultValue = {person.name} hidden={true}/>
            </div>
            <div className="info__field">
               
               <label> Team : </label><p className="info_text" hidden={false}>{person.team}</p><input id="p_team"  className="info__textfield" type="text" defaultValue={person.team } hidden={true}/>
            </div>
            <div className="info__field">
               
               <label> Age : </label><p className="info_text" hidden={false}>{person.age}</p><input  id="p_age" className="info__textfield" type="text" defaultValue={person.age } hidden={true}/>
            </div>
            <div className="btn__field">
            <button id="btn_cancel" className="btn__cancel btn" onClick={handleCancel} hidden={true}>cancel</button>
            <button id="btn_save" className="btn__save btn" onClick={handleSave} hidden={true}>Save</button>
            </div>


        </div>
        </>
    )
}
export default Information