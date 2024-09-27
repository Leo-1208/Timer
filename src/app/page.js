"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [time, setTime] = useState(5);
  const [isActive, setActive] = useState(false);

//Need useEffect hook to keep up with change
  useEffect(() => {
    let timer;
    
    if (isActive) {
      if(time>0){
        timer = setTimeout(() => setTime(time - 1), 1000);
      }
    } 
    else if (time === 0) {
      console.log("time ended !!");
      setActive(false);
    }

    return () => clearTimeout(timer);
  }, [isActive, time]);

// start timer
  const startTimer = () => {
    setActive(true);
    console.log("timer started");
  };

// Reset timer to 5
  const resetTimer = () => {
    setActive(false);
    setTime(5);
    console.log("timer Reset to 5!!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-yellow-100">
        <h1 className="text-4xl">Timer: {time}</h1>
        <div className="flex gap-4">
          <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg pointer" onClick={startTimer} disabled={isActive}>
            Start Timer
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg shadow-lg pointer" onClick={resetTimer}>
            Reset
          </button>
        </div>
    </div>
  );
}
