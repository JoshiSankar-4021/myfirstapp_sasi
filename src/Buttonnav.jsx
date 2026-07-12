import { useNavigate } from "react-router-dom";
function Buttonnav(){
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>{
                navigate("/media")
            }}>Media </button>
        </div>
    );
}

export default Buttonnav;