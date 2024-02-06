import React, { useState } from "react";
import "./Car.css";
import { Button, Input } from "reactstrap";
import { CheckCheckIcon, Trash } from "lucide-react";

export default function CarList() {
  const [isDone, setIsDone] = useState(false);
  const [TodoList, setTodoList] = useState([]);
  const [newTitile, setNewTitle] = useState("");
  const [CompletedData, setCompletedData] = useState([]);
  const [newDiscription, setNewDiscription]=useState("");


const handleCars=()=>{
  let carData={
    title: newTitile,
    discription: newDiscription
  }
  let updateCarArr =[...TodoList];
  console.log("update",updateCarArr);
     updateCarArr.push(carData)
    setTodoList(updateCarArr)
    localStorage.setItem("carlist",JSON.stringify(updateCarArr))

  }



  return (
    <div className="car-data">
      <h1>Cars-List</h1>
      <div className="car-list">
        <div>
          <h2>Task</h2>
        </div>
        <div className="car-item">
          <div className="car-item-lists">
            <label htmlFor="">Cars Name</label>
            <Input placeholder="Text here...." value={newTitile} onChange={(e)=>setNewTitle(e.target.value)}/>
          </div>
          <div className="car-item-list">
            <label htmlFor="">Price</label>
            <Input placeholder="write a discription" value={newDiscription} onChange={(e)=>setNewDiscription(e.target.value)}/>
          </div>
          <Button className="btn-add" onClick={handleCars}>ADD</Button>
        </div>
      </div>
        <div className="car-details">
            <Button className="btn-detail">Cars Details</Button>
            <Button className="btn-details">Done Task</Button>
        </div>
      
      <div>
          {TodoList.map((item, i)=>{
            return(
              <div className="car-info">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.discription}</p>
                </div>
                <div>
                  <CheckCheckIcon role="button" color="rgb(0,230,122)"/>
                  <Trash role="button" color="red" />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
}
