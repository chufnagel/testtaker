import React, { memo } from "react";

const Timer = memo(({ minutes, seconds }) => (
  <div className="timer" style={{ marginLeft: 1 }}>
    <span>
      {minutes}:{seconds}
    </span>
  </div>
));

export default Timer;
