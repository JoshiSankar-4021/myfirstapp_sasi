import {useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0)
    function increment1(){
        setCount(count+1)
    }
    function decrement1(){
        setCount(count-1)
    }

    var increment2=()=>{
        setCount(count+1)
    }
    var decrement2=()=>{
        setCount(count-1)
    }




    return(
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1><br/>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>

            <button onClick={()=>{
                setCount(count-1)
            }}>
                Decrement
            </button> <br/>
            <button onClick={increment1}>Increment1</button>
            <button onClick={decrement1}>Decrement1</button><br/>
            <button onClick={increment2}>Increment2</button>
            <button onClick={decrement2}>Decrement2</button>
        </div>
    )
}

export default Counter;