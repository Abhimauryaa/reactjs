import { Provider } from "react-redux";
import UserTable from "./Component/UserTable";
import store from "./redux/App/Store";
import FormCom from "./Component/FormCom";
import { useState } from "react";

export default function ReduxCrudApp() {
  let [updateData, setUpdateData] = useState({});

  let [index, setIndex] = useState("");
  return (
    <div>
      <Provider store={store}>
        <FormCom updateData={updateData} index={index} />
        <UserTable setUpdateData={setUpdateData}  setIndex={setIndex}/>
      </Provider>
    </div>
  );
}
