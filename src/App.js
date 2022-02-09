import FunctionalComp from "./modules/functionalComp/FunctionalComp";
import ClassCompCounter from "./modules/classComp/ClassComp";
import { ParentClass } from "./modules/classComp/Parent";
function App() {
  return (
    <div className="App">
      {/* <FunctionalComp/> */}
      <hr/>
      <ClassCompCounter/>
      {/* <ParentClass/> */}
    </div>
  );
}

export default App;
