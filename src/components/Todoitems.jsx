import Todoitem from "./Todoitem";

const Todoitems = ({todoItems,onDelete})=>{
  return (
    <div className="item">
        {todoItems.map((items)=>(
          <Todoitem 
          key={items.todoName}
          todoName={items.name}
          todoDate={items.date}
          onDelete={onDelete}></Todoitem>
        ))}
    </div>
  )
}
export default Todoitems;