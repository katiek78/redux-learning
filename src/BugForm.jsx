import store from "./store";
import { ADD_BUG, RESOLVE_BUG } from "./actions";

const BugForm = () => {
  const handleAddBug = (description) => {
    store.dispatch(ADD_BUG(description));
  }

  return(
  <div>
    <input id="inpBugDescription"></input>
    <button onClick={() => handleAddBug(document.getElementById("inpBugDescription").value)}>Add bug</button>
  </div>
  )
}
export default BugForm;