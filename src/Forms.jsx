import {useState} from "react";
function Forms(){

    const [formdata,setFormdata]=useState({
        email:"",
        full_name:""
    })

    function handleChange(e){
        const {name,value}=e.target;
        setFormdata(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(formdata)
    }

    return(
        <div>
            <h1>FORMS</h1>
            <form>
                <lable>email</lable>
                <input type="email" name="email" value={formdata.email} 
                onChange={handleChange}/><br/>
                <lable>full name</lable>
                <input type="text" name="full_name" value={formdata.full_name}
                onChange={handleChange}/><br/>
                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Forms