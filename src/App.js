import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import TaskList from './Components/TaskList';
import AddTask from './Components/AddTask';
import { useEffect, useState } from 'react';

function App() {
  const dummy_tasks=[
    { 
      id:1,
      taskName:'Grocery and Room cleaning'
    },
    { 
      id:2,
      taskName:'Car service And Detailing'
    },
    {
      id:3,
      taskName:'Coding my beautiful Todo App'
    }
  ]
  const [tasks,setTask]=useState(dummy_tasks);
  const addTaskHandler=(newTask)=>{
    console.log("from app "+ newTask); 
    const newTaskAdd=[...tasks];
    newTaskAdd.push({
      taskName:newTask,
      id:Math.floor(Math.random()*1000)
    }) 
    setTask(newTaskAdd);
  }
  const removeTaskHandler=(taskid)=>{
    const newTask=tasks.filter((task)=> task.id!=taskid);
    setTask(newTask);
  }
  useEffect(()=>{
    setTask(tasks);
  },[]);
  return (
      <div className='main-style'>
            <Header/>
            <AddTask callTaskFun={addTaskHandler}/>
            <TaskList task={tasks} removeTask={removeTaskHandler}/>          
      </div>
  );
}

export default App;
