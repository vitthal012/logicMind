import React from 'react';

function Card(props){
    return (
        <>
        {props.ques}
        <button onClick={props.handleNext}>Next</button>
        </>
    );
}

export default Card;