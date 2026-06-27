import { useState,useEffect } from 'react';
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/ProgressTrackers'
import './style.css'

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });

  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index ))
  }

  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div id="main">
      <header>
        <h1 id='TaskMan'>TaskMan</h1>
        <p><b>Your friendly Task Manager  </b><i>Don’t watch the clock; do what it does. Keep going.</i></p>
      </header>

      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks}
       updateTask = {updateTask} 
       deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks}>clear All Tasks</button>)}
      
    </div>
  )
}