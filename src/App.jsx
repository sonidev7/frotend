import { useEffect, useState } from 'react';
import './App.css';

// What we learn
// useEffect, useState, svg, fetch(), console.log, vw

function App() {
  const [quote, setQuote] = useState("")
  useEffect(() => {
    fetch('https://api.kanye.rest/')
    .then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data); // return {quote: ""}
      setQuote(data.quote);
    })
  }, []);

  return (
    <div>
      <img src='kanye.svg' alt="kanye picture" className='logo'/>
      <h3>Kanye once said:</h3>
      <div className='quote-block'>{quote}</div>
    </div>
  )
}

export default App
