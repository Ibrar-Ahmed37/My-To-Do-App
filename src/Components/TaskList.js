import './TaskList.css';
import TaskRender from './TaskRender';
const TaskList=(props)=>
{
    const removeTaskHandler=(taskid)=>{

        props.removeTask(taskid);

    }
    return(
        <div >
            {
                props.task.map((taskItem)=>
                (
                    <div>
                        <TaskRender  task={taskItem.taskName} id={taskItem.id}  removeTask={removeTaskHandler}/>
                    </div>
                ))
            }
        </div>
    )

}
export default TaskList;