import React, { useState, useEffect } from 'react';

function WelcomeLog() {
  const [showLog, setShowLog] = useState(true);

  useEffect(() => {
    // You can use local storage to determine if the user has seen the log before.
    const hasSeenLog = localStorage.getItem('hasSeenLog');
    if (hasSeenLog) {
      setShowLog(false);
    }
  }, []);

  const closeLog = () => {
    setShowLog(false);
    // Store a flag in local storage to indicate that the user has seen the log.
    localStorage.setItem('hasSeenLog', 'true');
  };

  return (
    showLog && (
      <div className="welcome-log">
        <p>Welcome to our website! This is your first visit.</p>
        <button onClick={closeLog}>Close</button>
      </div>
    )
  );
}

export default WelcomeLog;
