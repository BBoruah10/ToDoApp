import { useState } from "react"

const AddTodo = ({onNew})=>{
  const [todoName,setName]=useState('')
  const [todoDate,setDate]=useState('')

  const HandleNameChange = ()=>{
    setName(event.target.value);


  }
  const HandleDateChange = ()=>{
    setDate(event.target.value);
    
  }
  const HandleButtonClicked = ()=>{
    onNew(todoName,todoDate);
    setDate("");
    setName("");
  }
  return (




    <div className="container text-center">
                <div className="row n-row">
                <div className="col-6">
                    <input type="text" placeholder="Enter to do" onChange={HandleNameChange}></input>
                </div>
                <div className="col-2">
                    <input type="date" onChange={HandleDateChange}></input>
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-success n-btn" onClick={HandleButtonClicked}>
                    ADD
                  </button>
                </div>
           </div>
      </div>

  );
}
export default AddTodo