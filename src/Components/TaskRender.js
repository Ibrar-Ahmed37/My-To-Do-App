import './TaskRender.css';
const TaskRender=(props)=>{
    const changeBackground=(event)=>{
        event.target.style.background='black';
    }
    const changeBackgroundAgain=(event)=>{
        event.target.style.background='#303030';
    }
    const removeTaskHandler=(id)=>{
        props.removeTask(id);
    }
    return (
        <div className='div-center'>
            <ul>
                <li className='list-style' onMouseOver={changeBackground} onMouseLeave={changeBackgroundAgain} onClick={()=>removeTaskHandler(props.id)} > 
                    {props.task} 
                </li>
            </ul>
        </div>
        
    );

}
export default TaskRender;