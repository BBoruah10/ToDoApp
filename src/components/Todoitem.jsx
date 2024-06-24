const Todoitem = ({todoName,todoDate,onDelete})=>{
  return (
    <div className="container text-center">
                <div className="row n-row">
                    <div className="col-6">{todoName}</div>
                    <div className="col-2">{todoDate}</div>
                <div className="col-2">
                  <button type="button" className="btn btn-danger n-btn" onClick={()=>onDelete(todoName)}>DELETE</button>
                </div>
           </div>
      </div>


  );
}
export default Todoitem;