import React from "react";
import Wrapper from "./components/Wrapper";
import PicFrame from "./components/PicFrame/PicFrame";
import TopBar from "./components/TopBar/TopBar";
import Arrows from "./components/Arrows/Arrows";
import LeftArrow from "./components/Arrows/LeftArrow";
import RightArrow from "./components/Arrows/RightArrow";
import "./App.css";
import pics from "./pics.json";

// const App = () => (
//   <div>

//   <TopBar />
  
//      <PicFrame
//       id={pics[0].id}
//       image={pics[0].image}
//     />



//  < LeftArrow/>

//  < RightArrow/>

 

//   </div>
// );

// export default App;

// By extending the React.Component class, Counter inherits functionality from it
class App extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };



//I need to find a way to make the json object into an array, so I can get the length
//then use that as a variable instead of "2".  It would be json.length - 1.
  handleIncrement = () => {
    

    if (this.state.count < 2)
    {
    this.setState({ count: this.state.count + 1 });
	}
	else
	{
		this.setState({count: 0});
	}
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    
    if (this.state.count === 0)
    	{ 
    		this.setState({count: 2})
    	}
    	else
    	{
    this.setState({ count: this.state.count - 1 });
		}
  };

 

  // So I have to somehow put this.state.count into a variable
  render() {
    return (
    	 <div id = "background">

  <TopBar imgNum = {this.state.count} title = {pics[this.state.count].title}/>
  
     <PicFrame
      id={pics[this.state.count].id}
      image={pics[this.state.count].image}
    />



<div id = "left-container">
  	<span id ="left"> <a href = "#" onClick = {this.handleDecrement}> &lArr; </a> </span> 
  </div>

<div id = "right-container">
  	<span id ="right"> <a href = "#" onClick = {this.handleIncrement}> &rArr; </a> </span> 
  </div>

 

  </div>
      
    );
  }
}

export default App;
