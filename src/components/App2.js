//Rating with box components
import './App.css';
import React, { useState} from 'react';

function App2() {
const [data, setData] = useState(null);
const [print, setPrint] = useState(false);

function getData(val) {
  setData(val.target.value)
  setPrint(false)
  console.log(val.target.value) 
}

const handleSubmit = event => {
  event.preventDefault();
  alert('You have submitted the form.')
}


  return (
    <div className='mov'>
      <h2> Leave your thoughts below!</h2> 
      <form onSubmit={handleSubmit}>
      <textarea required className='bottom' 
        placeholder="Thoughts on this movie?" onChange={getData}/> 
        <div className='bottom'>  
        <button type='submit' onClick={()=> setPrint(true)}>
        Submit  </button>
        <div className='left'>
        <table>
          <thead>
            <tr>
          <th>Reviews:</th> 
          </tr> 
          </thead>
          <tbody>
            <tr>
            <td>{ print ?
    <p className='mov'> {data}</p>
    :null 
    }</td>
          </tr>
            <tr>
            <td> Overall good movie!</td>
          </tr>
          </tbody>
          </table>
          </div>
      </div>
</form>
    </div>

  );
};




export default App2;
 