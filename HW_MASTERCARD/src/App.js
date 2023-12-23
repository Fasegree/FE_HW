
import { useEffect, useState } from 'react';
import './App.css';
import Attempts from './components/AttemptsList';
import PayCard from './components/PayCard';

function App() {
  const [attempts, setAttempts] = useState([]);
  
  function getLS(){
    return JSON.parse(localStorage.getItem('attempts'))
  }
  function setLS(){
    localStorage.setItem('attempts', JSON.stringify(attempts))
  }
  useEffect(()=>{
    setAttempts( getLS() ?? [] )
  },[])
  useEffect(()=>{
    setLS()
  },[attempts])
  return (
    <div >
        <PayCard  attempts={attempts} setAttempts={setAttempts}/>
        <Attempts attempts={attempts} />
    </div>
  );
}

export default App;
