import {Component,} from "react"
import List from "./components/Movielist";
import Navbar from './components/Navbar';
import Star from "./components/stars";

class App extends Component {

 
 render() {
   return (
     <div className="App">
      <Navbar/>
      <List/>
      <Star/>      

     </div>
    )
   }
   }
export default App;
