import './App.css'
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import "bootstrap/dist/css/bootstrap.min.css";
import Todoitems from './components/Todoitems';
import { useState } from 'react';

function App() {

  let todoItemsin =[
    {name:"buy milk",
      date:"10-11-22",
    },
    {
      name:"go to college",
      date:"11-22-12",
    }
  ];

  const [todoItems,setTodoItems] = useState([]);

  const handleNewItem = (itemName,itemDate)=>{
    //console.log(`${itemName} ${itemDate}`);
    let newTodo=[...todoItems,{name:itemName,date:itemDate}];
    setTodoItems(newTodo);
  }

  
  const handleDelete=(todoItemName)=>{
    const newTodoItems = todoItems.filter((item)=>item.name != todoItemName);//== tu hua item kita delete hoi jabo
    setTodoItems(newTodoItems);
  }

  return (
    <center className='todo-container'>
      <AppName></AppName>
      <AddTodo onNew={handleNewItem}></AddTodo>
      <Todoitems todoItems={todoItems} onDelete={handleDelete}></Todoitems>
    </center>
     
     );
}

export default App
