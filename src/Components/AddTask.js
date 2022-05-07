import { useState } from 'react';
import './AddTask.css';
const AddTask=(props)=>{
    const [taskInput,setTaskInput]=useState();
    const[isValid,setIsValid]=useState(true);
    const taskInputChangeHandler=(event)=>{
        
        setTaskInput(event.target.value);
        setIsValid(true);   
    }
    
    const enterKeyHandler=(event)=>{

            if(event.key==='Enter' && taskInput)
            {
                props.callTaskFun(taskInput);
                setTaskInput("");
            }
            else if(event.key==='Enter' && !taskInput)
            {
                setIsValid(false);
            }

    }
    return(
        <div className="center-div">
            <input type="text" value={taskInput} onChange={taskInputChangeHandler} onKeyUp={enterKeyHandler}  placeholder='Enter your task here..' className='input-style' />
            { !isValid && <div className='span-style'><span > *You must type something </span></div>}
        </div>

)
}
export default AddTask;