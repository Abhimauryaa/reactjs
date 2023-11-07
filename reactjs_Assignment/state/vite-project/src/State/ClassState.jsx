import React, { Component } from "react";
import { Button } from "reactstrap";
import "./index.css";

export default class ClassState extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        };
      }
    
      incrementMethod() {
   
        this.setState({
          count: this.state.count + 1,
        });
      }
      render() {
        return (
          <>
            <h1>Count the Number</h1>
            <h2>count is {this?.state?.count}</h2>
            <Button color="danger" onClick={() => this.incrementMethod()}>
              Increment
            </Button>
          </>
        );
      }
}
