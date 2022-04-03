import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const end = new Date(2022, 4, 16)
  const [counter, setCounter] = useState(end - new Date()) 

  useEffect(() => {

    setInterval(() => {
      setCounter(end - new Date())
    }, 1000)
  })

  return (
    <>
      <div class="title">Final Countdown</div>
      <div> Finals start in... </div>
      <div class="countdown">
      <>{Math.floor(counter / (1000 * 60 * 60 * 24))} days, </>
      <>{Math.floor(counter % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))} hours, </>
      <>{Math.floor(counter % (1000 * 60 * 60) / (1000 * 60))} minutes, and </>
      <>{Math.floor(counter % (1000 * 60) / 1000)} seconds </>
      </div>
    </>
  );
}

export default App;
