
import ArrayUI from "./ArrayUI"
import Counter from "./Counter"
import Information from "./Information"
import SingUp from "./SignUp"
import "./style.css"

function Body(){
    return(
        <div className="body__container">
            <ArrayUI/>
            <Counter/>
            <Information/>

        </div>
    )
}

export default Body