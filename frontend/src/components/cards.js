import { useState,useEffect } from 'react';
import Answer from './answer';

function Card({ans}){

    const[time,settime]=useState(0);

    useEffect(()=>{
        let start=Date.now();

        let interval=setInterval(()=>{
            settime(Math.floor((Date.now()-start)/1000))
        },1000);

        return () => clearInterval(interval);
    },[]);
    
    let min=Math.floor(time/60);
    let sec=time%60;

    return (
        <div className="card-details">
          {(sec>5) ? <Answer ans={ans}/> :<> <p className="thinking">Think a little more!</p> <p className="timer">Timer: {min}:{sec.toString().padStart(2,'0')} / 2</p></>}
         
        </div>
    );
}

export default Card;