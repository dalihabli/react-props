
import './App.css';
import Profile from "./Profile"

function App() {
 const data ={fullName:"dalihabli",bio:"dev",profession:"react"}
  const handleClick=(x)=> {
    alert(`${x}`)
  }
  return (
    <div className="container">

      
      <Profile props={data} handleClick={handleClick} />

    </div>
    
  
  

 
    
      
    
  );
};

export default App;
