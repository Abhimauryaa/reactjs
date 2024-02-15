import React, { useEffect, useState } from "react";
import { Button, Input, Table } from "reactstrap";
import "./TableSearch.css"
import { Edit, Trash } from "lucide-react";


export default function TableSearch() {
    const [formInput, setFormInput] = useState(false)
    const [data, setData] = useState([])
    const [newTitle, setNewTitle] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [newPrice, setNewPrice]=useState('')

    const handleSubmit = () => {
        let newArrayItem = {
            title: newTitle,
            price: newPrice,
        };
        let updateFormArr = [...data];
        console.log("update", updateFormArr);
        updateFormArr.push(newArrayItem);
        setData(updateFormArr);
        localStorage.setItem("Formlist", JSON.stringify(updateFormArr));
        setNewTitle('')
        setNewPrice('')
    }
    useEffect(() => {
        let saveData = JSON.parse(localStorage.getItem("Formlist"))
        if (saveData)
            setData(saveData)

    }, []);

    const handleEdit = (i) =>{
        let updateData = [...data];
        console.log("updateData", updateData);
        setFormInput(...data, i)
        setData(updateData);

    }
    const  handleDelete = (i)=>{
        let reduceData = [...data];
        reduceData.splice(i);

        localStorage.setItem("Formlist",JSON.stringify(reduceData))
        setData(reduceData);
    }
  

    return (
        <div className="form">
            <h1>Shopping</h1>
            <div className="search ">
            
              <label htmlFor="">Search:</label>
                <Input placeholder="Search...."  onChange={(e) => setSearchTerm(e.target.value)} />

            </div>
            <div className="form-input">
             <div className="add-item">
               <label htmlFor="">Product Name:</label>
                <Input placeholder="Text here......" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
               </div> 
               <div  className="price">
                <label htmlFor="">Price</label>
                <Input type="number" placeholder="Enter price......" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}/>
                </div>
                <Button className="btn-add" onClick={handleSubmit}>Add</Button>
            </div>
            <div className="form-list">
                <Table>
                    <thead className="table-head">
                        <tr >
                            <th>No</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Action</th>
                            {/* item.name.toLowerCase().in(searchTerm.toLowerCase()) */}
                        </tr>
                    </thead>
                    <tbody className="footer"> 
                        {formInput === false &&
                            data.filter((item) => {
                                return item.title.toLowerCase().includes(searchTerm.toLowerCase())
                        }).map((item, i) => (
                                    <tr key={item.id}>
                                        <th scope="row">{i + 1}</th>
                                        <th>{item.title}</th>
                                        <th>{item.price}</th>
                                        <th>
                              
                                    <Edit role="button" color="lightgreen"  onClick={()=> handleEdit(i)}/>
                                    <Trash color="red" role="button" onClick={()=> handleDelete(i)} />
                                    </th>
                                    </tr>
                                    
                                ))}
                    </tbody>
                </Table>
            </div>

        </div>



    )
}