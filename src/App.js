import {Component,} from "react"
import List from "./components/Movielist";
import Navbar from './components/Navbar';

class App extends Component {

 
 render() {
   return (
     <div className="App">
      <Navbar/>
      <List/>
      

     </div>
    )
   }
   }
export default App;
