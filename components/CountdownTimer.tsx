import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  headline?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  headline = "Registration closes in" 
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [currentTarget, setCurrentTarget] = useState(targetDate);

  // Calculate next midnight
  const getNextMidnight = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Set to next midnight (rolls over to next day)
    return midnight;
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      let target = currentTarget.getTime();
      let difference = target - now;

      // If we've passed the target, reset to next midnight
      if (difference <= 0) {
        const nextMidnight = getNextMidnight();
        setCurrentTarget(nextMidnight);
        target = nextMidnight.getTime();
        difference = target - now;
      }

      if (difference > 0) {
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [currentTarget]);

  return (
    <div className="text-center mb-8">
      <div className="text-gray-400 text-sm md:text-base mb-4">{headline}</div>
      <div className="flex items-center justify-center gap-3 md:gap-6">
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-bold text-white tabular-nums font-mono">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-2">hrs</div>
        </div>
        <div className="text-3xl md:text-4xl text-gray-600 font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-bold text-white tabular-nums font-mono">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-2">mins</div>
        </div>
        <div className="text-3xl md:text-4xl text-gray-600 font-bold">:</div>
        <div className="flex flex-col items-center">
          <div className="text-4xl md:text-5xl font-bold text-white tabular-nums font-mono">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-gray-500 uppercase tracking-wider mt-2">secs</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;

