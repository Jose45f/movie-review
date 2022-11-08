//Rating with box components
import './App.css';
import React, {useState} from 'react';

function App2() {
const [data, setData] = useState(null);
const [print, setPrint] = useState(false);

function getData(val) {
  setData(val.target.value)
  setPrint(false)
  console.log(val.target.value) 
}



  return (
    <div className='mov'>
      <h2> Place holder text. </h2> 
      <textarea className='bottom' 
        placeholder="Thoughts on this movie?" onChange={getData}/>
        <div className='bottom'>  
     { print ?
    <p> {data}</p>
    :null 
    }
      <button onClick={()=> setPrint(true)}>
        Submit  </button> 
      
      </div>
    </div>
  );
};





export default App2;
 