const ProgressBar = ({ percentage }) => (
  <div className="progress-bar">
    <div className="progress" style={{ width: `${percentage}% ` }} />
  </div>
);

export default ProgressBar;

// <!DOCTYPE html>
// <html>
// <title>W3.CSS</title>
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
// <body>
// <div class="w3-container">

// <h2>Dynamic Progress Bar with Labels</h2>
// <p>Centered label:</p>

// <div class="w3-light-grey">
//   <div id="myBar" class="w3-container w3-green w3-center" style="width:20%">20%</div>
// </div>
// <br>
// <button class="w3-button w3-green" onclick="move()">Click Me</button>

// </div>

// <script>
// function move() {
//   var elem = document.getElementById("myBar");
//   var width = 20;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//       elem.innerHTML = width * 1  + '%';
//     }
//   }
// }
// </script>

// </body>
// </html>
