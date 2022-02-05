import { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Example from './Example';

// Templates
function App() {
  
  // let [name, setName] = useState('John');
  // let [age, setAge] = useState(23);

  // // this.setState({ name: 'Jane, age: 26})
 
  // const handleClick = () => {
  //   setName('Jane');
  //   setAge(26);
  // }
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <Example/> */}
      </div>
    </div>
  );
}

export default App;
