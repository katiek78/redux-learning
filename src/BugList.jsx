import store from "./store";
import { useSelector } from "react-redux";
import { RESOLVE_BUG } from "./actions";
import { REMOVE_BUG } from "./actions";

const BugList = () => {
    const bugs = useSelector((state) => state)
    
    const handleResolve = (id) => store.dispatch(RESOLVE_BUG(id));
    const handleDelete = (id) => store.dispatch(REMOVE_BUG(id));

    console.log(store.getState());
  return(
    <table>{bugs.map(bug => 
        <tr className={bug.resolved ? 'resolved' : 'unresolved'}><td>{bug.id}</td><td> {bug.description}</td><td><button onClick={() => handleResolve(bug.id)}>Resolve</button><button onClick={() => handleDelete(bug.id)}>Delete</button></td></tr>
        )}
    </table>
  )
}
export default BugList;