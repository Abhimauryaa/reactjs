import React, { useState } from "react";
import "./Crud.css";

const CrudCom = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [tableData, setTableData] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs",inputs);

    if (editClick) {
      const tempTableData = tableData;
      Object.assign(tempTableData[editIndex],inputs);
      setTableData([...tempTableData]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
      });
    } else {
      setTableData([...tableData, inputs]);
      setInputs({
        name: "",
        email: "",
      });
    }
  };
  const handleDelete = (index) => {
    const filterData = tableData.filter((item, i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit = (index) => {
    const tempData = tableData[index];
    setInputs({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="form">
      <h1 className="text-center">Crud App</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="info">
            <label>Name: </label>
            <input name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div className="info">
            <label>Email: </label>
            <input name="email" value={inputs.email} onChange={handleChange} />
          </div>
          <button type="submit" className="btn">
            {editClick ? "Update" : "Add"}
          </button>
        </form>
      </div>
      <div className="bpart">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => handleEdit(i)} className="edit">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(i)} className="del">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CrudCom;
