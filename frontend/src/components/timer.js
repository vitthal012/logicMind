import { useState,useEffect } from "react";

export default function Timer({min,sec}){

    

    return (<>
    {min}:{sec}/2
    {min===2?"Yep its time to reveal the answer":"Think a little more!"}
    </>);

}