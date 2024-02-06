import { Provider } from "react-redux";
import FormC from "./COMPONENTS/FormC";
import Store from "./REDUX/APP/Store";
import UserC from "./COMPONENTS/UserC";
import { useState } from "react";


export default function CrudReduxApp() {

  let [index, setIndex]=useState([]);
  let [updateD, setUpdateD]=useState({});
  return (
    <div>
      <Provider store={Store}>
        <FormC  updateD={updateD} index={index} />
        <UserC setUpdateD={setUpdateD} setIndex={setIndex} />
      </Provider>
    </div>
  );
}
