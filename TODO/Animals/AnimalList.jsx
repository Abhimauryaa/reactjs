 import React, { useEffect, useState } from "react";
import { Button, Input } from "reactstrap";
import "./animal.css"
import { CheckCircle2Icon, Trash } from "lucide-react";

function AnimalList() {
  const [isComplete, setIsComplete] = useState(false);
  const [allTodo, setAllTodo] = useState([]);
  const [newTitile, setNewTitle] = useState("");
  const [CompletedTodos, setCompletedTodos] = useState([]);
  const [newDiscription, setNewDiscription]=useState("");

  const handleAnimal = () => {
    let newTodoItem = {
      title: newTitile,
      discription:newDiscription,
    };

    let updateTodoArr = [...allTodo];
    updateTodoArr.push(newTodoItem);
    setAllTodo(updateTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updateTodoArr));
  };

  const handleDelete = (i) => {
    let reducedTodo = [...allTodo];
    reducedTodo.splice(i);

    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setAllTodo(reducedTodo);
  };
  const handleCompleted = (i) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let completedOn = dd + "-" + mm + "-" + yyyy;
    let filterItem = {
      ...allTodo[i],
      completedOn: completedOn,
    };
    
    let updateCompletedArr = [...CompletedTodos];
    updateCompletedArr.push(filterItem);
    setCompletedTodos(updateCompletedArr);
    handleDelete(i);
    localStorage.setItem("completed", JSON.stringify(updateCompletedArr));

  };

  const  handleDeleteCompleted = (i)=>{
    let reducedTodo = [...CompletedTodos];
    reducedTodo.splice(i);

    localStorage.setItem("completed", JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompleted =JSON.parse(localStorage.getItem("completed"));
    
    if (savedTodo) {
        setAllTodo(savedTodo);
    }

    if (savedCompleted){
      setCompletedTodos(savedCompleted)
    }

}, [])




    

  return (
    <div className="app">
      <h1>Animal-List</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <h3>Task</h3>
          <div className="todo-input-item d-flex">
           <div className="title">

            <label htmlFor="">Animal Name</label>
            <Input
            
              placeholder="text here....."
              value={newTitile}
              onChange={(e) => setNewTitle(e.target.value)}
            />
           </div>
           <div className="disc">
            <label htmlFor="">Home</label>
             <Input
            placeholder="Add Discription....."
              value={newDiscription}
              onChange={(e) => setNewDiscription(e.target.value)}
            />

           </div>
            <Button  className="btn-add" onClick={handleAnimal}>
              Add
            </Button>
          </div>
        </div>

        <div className="btn-area mt-3">
          <Button onClick={() => setIsComplete(false)}>
            Todo
          </Button>
          <Button  color="success" onClick={() => setIsComplete(true)}>
            Completed
          </Button>
        </div>
        <div className="todo-list">
          {isComplete === false &&
            allTodo.map((item, i) => {
              return (
                <div className="todo-list-item" key={i}>
                 <div className="data-list">
                     <h2>{item.title}</h2>
                     <p>{item.discription}</p>
                    </div>
                  <div className="check">
                    <CheckCircle2Icon
                      role="button"
                      color="rgb(0,230,122)"
                      onClick={() => handleCompleted(i)}
                    />
                    <Trash
                      role="button"
                      color="red"
                      onClick={() => handleDelete(i)}
                    />
                  </div>
                </div>
              );
            })}

          {isComplete === true &&
            CompletedTodos.map((item, i) => {
              return (
                <div className="todo-list-item" key={i}>
                  <h5>{item.title}</h5>
                  <p>Completed On: {item.completedOn}</p>
                  <div>
                  
                    <Trash
                      role="button"
                      color="red"
                      onClick={() => handleDeleteCompleted(i)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default AnimalList;
