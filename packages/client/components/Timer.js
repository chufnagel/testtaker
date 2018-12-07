import PropTypes from "prop-types";

// const Timer = ({ minutes, seconds }) => {
//   console.log(minutes);
//   console.log(seconds);
//   return (
//     <div className="timer" style={{ marginLeft: 1 }}>
//       <span>
//         {minutes}:{seconds}
//       </span>
//     </div>
//   );
// }

const Timer = ({ minutes, seconds }) => (
  <div className="timer" style={{ marginLeft: 1 }}>
    <span>
      {minutes}:{seconds}
    </span>
  </div>
);
// Timer.propTypes = {
//   minutes: PropTypes.string,
//   seconds: PropTypes.string,
// };

// Timer.defaultProps = {
//   minutes: "20",
//   seconds: "00",
// };

export default Timer;
