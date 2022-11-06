import { Component } from "react";
import './App.css';
import { List } from './Moviedata';


class Movielist extends Component {
        render() {
            return (
                <div className="mov">
                    <h1>
                        Horror Movies <i></i> 
                    </h1>
                    <ul> {List.map((item, index)=>{
                        return(
                             <ul key={index}>
                        <a href={item.img} className={item.cName}>
                    <i className={item.icon}></i>{item.title}
                    </a>
                  </ul>
                    )
                    })}
                
                </ul>   
                         </div>
                
            )
        }
    }
    
    export default Movielist
    