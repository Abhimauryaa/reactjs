import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addUser } from "../../10.Redux_CRUD/redux/feature/FormSlice";
import { updateUser } from "../REDUX/FEATURE/Form";

let intialData = {
  name: "",
  age: "",
  city: "",
};

export default function FormC(updateD,index) {
  let [user, setUser] = useState(updateD);

  useEffect(()=>{
    setUser(updateD);
  },[updateD]);


  const dispatch = useDispatch();

  const submitHandler = () => {
    let arr = Object.values(user);
    dispatch(addUser(user));
    setUser(intialData);
  };
  const updateHandler = ()=>{
    dispatch(updateUser({data:user, index}))
  }


  return (
    <div>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
                id="name"
                placeholder="enter name"
                type="text"
                value={user?.name}
                onChange={(e) => setUser({ ...user, name: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Age</Label>
              <Input
                id="age"
                placeholder="enter age"
                type="number"
                value={user?.age}
                onChange={(e) => setUser({ ...user, age: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>City</Label>
              <Input
                id="city"
                placeholder="enter city"
                type="text"
                value={user?.city}
                onChange={(e) => setUser({ ...user, city: e?.target?.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Button className="w-100" color="danger" onClick={submitHandler}>
            Sign
          </Button>
          <Button className="w-100" color="danger" onClick={updateHandler}>
            Update
          </Button>

        </Row>
      </Form>
    </div>
  );
}
