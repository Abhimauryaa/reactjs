import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FunProps from "./props/FunProps";
import ClassPro from "./props/ClassPro";
import ProjectProps from "./props/project/ProjectProps";
import Parents from "./props/propsLifting/Parents";


function App() {

  return (
    <div>
      

      {/* <-------------------------Props---------------------------------> */}
      <FunProps name={"Abhishek"} age={20} />
      <FunProps name="ravi" />
      <ClassPro data={{ name: "abhishek", age: 23 }} />
      <ClassPro />
      <ProjectProps />
      <Parents />
     
    </div>
  );
}

export default App;
