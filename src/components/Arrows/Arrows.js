// import React from "react";
// import "./Arrows.css";

// const Arrows = () => (
//   <div>
//   	<span id = "left"> <a href = "#"> &lArr; </a> </span>  <span id = "right"> <a href = "#"> &rArr; </a> </span>
//   </div>

// );

// export default Arrows;

import React from "react";
import "./Arrows.css";

// By extending the React.Component class, Counter inherits functionality from it
class Arrows extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
       <div>
  	<span id = "left"> <a href = "#"> &lArr; </a> </span>  <span id = "right"> <a href = "#"> &rArr; </a> </span>
  </div>
    );
  }
}

export default Arrows;

