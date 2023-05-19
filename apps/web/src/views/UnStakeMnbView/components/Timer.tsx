
import React, {useState, useEffect} from "react";


interface TimerProps {
    targetTimestamp: number;
}

const Timer: React.FC<TimerProps> = ({
    targetTimestamp
}) => {

const [timeLeft, setTimeLeft] = useState({hours: 0, minutes: 0, seconds: 0 })

useEffect(() => {
const interval = setInterval(() => {
const currentTime = Math.floor(Date.now()/1000)

const timeDifference = targetTimestamp - currentTime;
if (timeDifference <= 0) {
    clearInterval(interval);
    setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
  }  else {
    const remainingTime = calculateTimeLeft(timeDifference);
    setTimeLeft(remainingTime);
  }
}, 1000)

return () => {
    clearInterval(interval);
  };

}, [targetTimestamp])

function calculateTimeLeft(timeDifference) {
    const hours = Math.floor(timeDifference / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = timeDifference % 60;

    return { hours, minutes, seconds };
  }

  function formatTime(value) {
    return value.toString().padStart(2, '0');
  }

    return (
        <div>
<span>{`${formatTime(timeLeft.hours)}:${formatTime(timeLeft.minutes)}:${formatTime(timeLeft.seconds)}`}</span>
    
        </div>
    )

         
    
}

export default Timer