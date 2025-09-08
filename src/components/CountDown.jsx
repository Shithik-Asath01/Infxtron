import { useState, useEffect } from 'react';

function CountDown() {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2025-10-10T09:30:00'); // Removed space before "T"

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
        setCountDown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate remaining days, hours, minutes, seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountDown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval
  }, [targetDate]);

  return (
    <div className="count">
      <div className="d-flex">
        <div className="block">
          <h6>Days</h6>
          <h5>{countDown.days}</h5>
        </div>
        <div className="block">
          <h6>Hours</h6>
          <h5>{countDown.hours.toString().padStart(2, '0')}</h5>
        </div>
        <div className="block">
          <h6>Mins</h6>
          <h5>{countDown.minutes.toString().padStart(2, '0')}</h5>
        </div>
        <div className="block">
          <h6>Sec's</h6>
          <h5>{countDown.seconds.toString().padStart(2, '0')}</h5>
        </div>
      </div>
    </div>
  );
}

export default CountDown;
