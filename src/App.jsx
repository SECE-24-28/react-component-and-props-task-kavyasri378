import Student from "./assets/component/Student"
import Welcome from "./assets/component/Welcome";

function App() {
  return (
    <div>
        {/* <Student title="Javascript"/> */}
        <Student name="Kavya" course="React" duration={2}/>
        <Welcome name="Kavyasri"/>
    </div>    
  );
}

export default App
