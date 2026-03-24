// run react using npm start
import './App.css';
import React,{useState} from'react'
import Cards from './components/cards';

function App() {
  const [i,seti]=useState(0);

  // get questions and answers from the server
  const handleNext=()=>{
    seti(i+1);
  }
  
  const arr=["hello1","hello2"];
  return (
    <>
    <Cards ques={arr[i%arr.length]} handleNext={handleNext}/>
    </>
  );
}

export default App;
