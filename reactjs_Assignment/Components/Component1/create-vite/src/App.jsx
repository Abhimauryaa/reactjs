import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FunCom2 from "./2.component/FunCom2";
import ClassCom from "./2.component/ClassCom";
import FunCom1 from "./2.component/FunCom1";

function App() {

  return (
    <div>
      {/* <-------------------------Components---------------------------------> */}
      <FunCom1 />
      <ClassCom />
      <FunCom2 />

     
    </div>
  );
}

export default App;
