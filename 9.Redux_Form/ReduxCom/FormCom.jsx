import React from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import {
  setName,
  setAge,
  setCity,
  setGender,

} from "../Redux/Feature/formSlice";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";

export default function FormCom() {
  const user = useSelector((state)=>state);
  const dispatch = useDispatch();
    
   const handleButtonCLick = ()=>{
    dispatch(setName());
    dispatch(setAge());
    dispatch(setCity());
    dispatch(setGender());

   } 
    
  return (
    <div className="data">
      <Form className="form">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>Name</Label>
              <Input
                placeholder="Enter Name"
                type="text"
                value={user.name}
                className="inform"
                onChange={(e)=>dispatch(setName(e.target.value))} />   
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label>Age</Label>
              <Input
                placeholder="Enter Age"
                type="number"
                className="inform"
                value={user.age}
                onChange={(e)=>dispatch(setAge(e.target.value)) }/>
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>City</Label>

              <Input
                className="inform"
                placeholder="Enter City"
                value={user.city}
                onChange={(e)=> dispatch(setCity(e.target.value))}/>
            
            </FormGroup>
          </Col>
        </Row>
        
        <FormGroup>
          <br /> 
          <Label>
          Gender
            <select value={user.gender} onChange={(e)=> dispatch(setGender(e.target.value) )}>
            <option value="">select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
            </Label>          
            <Button onClick={handleButtonCLick}>Sign in</Button>
          <div>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>City:{user.city}</p>
            <p>Name:{user.gender}</p>

          </div>
        </FormGroup>
      </Form>
    </div>

);
}

