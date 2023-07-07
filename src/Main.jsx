import BugForm from "./BugForm";
import BugList from "./BugList";
import './css/styles.css';

const Main = () => <>
    <p>My bug tracker app!</p>
    
    <BugForm />

    <BugList />
</>;

export default Main;