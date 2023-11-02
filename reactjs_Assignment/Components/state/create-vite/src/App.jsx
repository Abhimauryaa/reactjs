import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UseStateFun from "./State/UseStateFun";
import ClassComState from "./State/classComState";
import StatePro1 from "./State/statePro1";
import ClassPro1 from "./State/classPro1";

function App() {

  return (
    <div>
     
      {/* <-------------------------State---------------------------------> */}
      <UseStateFun />
      <ClassComState />
      <StatePro1 />
      <ClassPro1 />

     
    </div>
  );
}

export default App;
