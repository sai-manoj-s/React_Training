import './style.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';



function SingUp(){

 
    return(
        <Popup trigger={<button className="btn_signIn">Sign In</button>} modal nested>
        {close =>(
            <div className='modal'>
                <button className='close' onClick={close}>&times;</button>
                <div id='signIn__form' className="signin_container">
            <p>Sign In</p>
            <div className="namefield">
                <input className="nameinput" type="text" placeholder="First Name"/>
                <input className="nameinput" type="text" placeholder="Last Name"/>
            </div>     
            <input className="form-input" type="text" placeholder="Email Address"/>
            <input className="form-input" type="password" placeholder="Password"/>
            <input className="form-input" type="password" placeholder="Confirm Password"/>
            <div className="profile">
                <input type="button" value="Admin"/>
                <input type="button" value="User"/>
                <input type="button" value="Owner"/>
            </div>
    
            <input className="signup-btn" type="button" value="Sign up"/>
            <a href="#" className='btn__a'> have an accoutn? Sign In</a>
        </div>
            </div>
        )}


    </Popup>
       
      
    )
}

export default SingUp