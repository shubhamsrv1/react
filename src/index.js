var React = require("react");
var ReactDOM = require("react-dom");

let fname = "Shubham";
let lname = "Sri";
let number = 7;
function getYear() {
  return new Date().getFullYear();
}
// OR you can use below method to get the year
var year = new Date().getFullYear();
ReactDOM.render(
  <div>
    <h1 className="heading"> Hello {fname + " " + lname}</h1>
    <h1 className="heading"> Hello {`${fname} ${lname}`} </h1>
    <p className="heading">This is my {number} JSX code</p>
    <p> This is created by Shubham </p>
    <p> Copyright {getYear()} </p>
    <p> Copyright {year} </p>
    <ul>
      <li>RAM </li>
      <li> Shubham </li>
      <li> Meet </li>
    </ul>
  </div>,
  document.getElementById("root")
);
