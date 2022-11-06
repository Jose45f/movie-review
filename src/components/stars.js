import { useState } from 'react'
import './App.css'

function Sar ({yellow}) {
    return (
        <svg  className={yellow ? 'yellowStar' : ''} width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>
    ) 
}

function Star () {
    const [hoverIndex, setHoverIndex] = useState(0);
    const [rating, setRating] = useState(0);
    return (
        <div>
            <h2>Rate Below</h2>
            <ul className='starList'>
            {[1,2,3,4,5].map((index) =>{
            return(
                <li key={index}
                onMouseEnter={() => setHoverIndex(index)} 
                onMouseLeave={() => setHoverIndex(0)}
                onClick={() => setRating(index)}
                className='starListItem'>
                <Sar yellow={(index <= hoverIndex) || (index <= rating)}/>
                </li>
            )
            })}
            </ul>
        </div>
    )
}

export default Star;