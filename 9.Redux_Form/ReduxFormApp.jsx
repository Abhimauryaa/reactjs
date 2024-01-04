import React from "react";
import { Provider } from "react-redux";
import FormCom from "./ReduxCom/FormCom";
import { store } from "./Redux/App/store";


export default function ReduxFormApp(){
    return(
        <div>
            <Provider store={store}>
                <FormCom/>
            </Provider>
        </div>
    )
}