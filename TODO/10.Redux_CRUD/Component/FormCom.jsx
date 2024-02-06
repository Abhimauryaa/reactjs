import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { addUser, updateUser } from "../redux/feature/FormSlice";
import { toast } from "react-toastify";


let initialData = {
  email: "",
  password: "",
  address: "",
  city: "",
  state: "",
  gender: "",
};

export default function FormCom({ updateData, index }) {
  let [user, setUser] = useState(updateData);
  // let [email, setEmail]=useState("");

  useEffect(() => {
    setUser(updateData);
  }, [updateData]);

  const dispatch = useDispatch();
  const existUsers = useSelector((state) => state.formReducer);

  const submitHandler = () => {
    let arr = Object.values(user);
    
    if(user?.email==""){
      toast.error("enter email");
    }
     if(user?.password==""){
      toast.error("enter password");
    }
    if(user?.address==""){
      toast.error("enter address")
    }
    if(user?.city==""){
      toast.error("enter city")
    }
    if(user?.state==""){
      toast.error("enter state")
    }
    if(user?.gender==""){
      toast.error("select Gender")
    }
    if(arr.includes("")){
      toast.error("please fill the data")
    }
    else{
      dispatch(addUser(user));
      setUser(initialData);
      toast.success("registration successfully")
      // const  emailExists = existUsers.user.some(
      //   (existUser)=> existUser.email === user.email
      // );

      // if(emailExists){
      //   toast.error("email already exist")
      // }else{
  
      // toast.success("registration successfully");
    }
    
  };
  const updateHandler = () => {
    dispatch(updateUser({ data: user, index }));
  };


  

  return (
    <div className="d-flex justify-content-center ">
      <Form className="w-100 border border-dark p-4 mt-4 rounded-4">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>Email</Label>

              <Input
                id="exampleEmail"
                placeholder="Enter your Email"
                type="email"
                value={user?.email}
                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
              >
                {/* {error?<p style={{color:"red"} }>Enter Valid Email</p>:'' } */}
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>PassWord</Label>
              <Input
                id="examplePassword"
                placeholder="Enter your password"
                type="password"
                value={user?.password}
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Address</Label>
          <Input
            id="exampleAddress"
            placeholder="Enter your address"
            type="text"
            value={user?.address}
            onChange={(e) => setUser({ ...user, address: e?.target?.value })}
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label>City</Label>
              <Input
                id="exampleCity"
                placeholder="Enter your city"
                type="text"
                value={user?.city}
                onChange={(e) => setUser({ ...user, city: e?.target?.value })}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label>State</Label>
              <Input
                id="exampleState"
                placeholder="Enter your state"
                type="text"
                value={user?.state}
                onChange={(e) => setUser({ ...user, state: e?.target?.value })}
              />
            </FormGroup>
          </Col>
        </Row>

        <Label>Gender</Label>
        <Row className="w-50">
          <Col>
            <FormGroup check>
              <Input
                placeholder="Enter your radio1"
                type="radio"
                checked={user?.gender === "male"}
                onChange={(e) => setUser({ ...user, gender: "male" })}
              />
              <Label>Male</Label>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup check>
              <Input
                placeholder="Enter your radio1"
                type="radio"
                checked={user?.gender === "female"}
                onChange={(e) => setUser({ ...user, gender: "female" })}
              />
              <Label>Female</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row className="mt-3">
          <Button className="w-100" color="danger" onClick={submitHandler}>
            Sign Up
          </Button>
          <Button className="w-100" color="warning     " onClick={updateHandler}>
            Update
          </Button>
        </Row>
      </Form>
    </div>
  );
    }  
