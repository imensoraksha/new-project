import react from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User.js'
import HomeCon from './Containers/HomeCon';

function App() {
  return (
    <div className="App">
     {/* <h1>hugg</h1>
     <User data ={{name:"anil sindhu", age:"08"}}/> */}
     <HomeCon />
    </div>
  );  
}

export default App;
