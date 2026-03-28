// run react using npm start
import './App.css';
import React,{useState,useEffect} from'react'
import Button from './components/button';
import Card from './components/cards';

function App() {
  console.log("Rendering ");
  const [next,setnext]=useState(0);
  const [qa,setqa]=useState([]);
  const [flag,setflag]=useState(false);
  const [isLoading,setIsLoading]=useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/qa")
      .then(res => res.json())
      .then(data => {
        setqa(data.qa || []);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Failed to fetch');
        setIsLoading(false);
      });
  }, []);

  const currentIndex = qa.length ? (next % qa.length) : 0;
  const ques = qa.length ? qa[currentIndex].question : "Loading...";
  const ans = qa.length ? qa[currentIndex].answer : "";


  const handleNext = () => {
    setnext(s => s + 1);
  }

  const reveal = () => {
    setflag(f => !f);
  }

  useEffect(() => {
    setflag(false);
  }, [next]);

  return (
    <div className="app-root">
      {isLoading ? (
        <div className="loading">Loading questions...</div>
      ) : error ? (
        <div className="error">Error: {error}</div>
      ) : (
        <section className="quiz-card">
          <h1 className="question-text">Question: {ques}</h1>

          <div className="button-group">
            <Button handleNext={handleNext} value="Next" />
            <Button handleNext={reveal} value={flag ? 'Hide' : 'Reveal'} />
          </div>

          <div className="answer-area">
            {flag ? <Card ans={ans} /> : <p className="hint">Reveal answer when ready.</p>}
          </div>

          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${(currentIndex + 1) / (qa.length || 1) * 100}%` }} />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;