import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonsDisplay';
import loader from './loader';



class App extends React.Component {
  /*constructor(props){
    super(props);

//This is the only time we do direct assignment TO THIS STATE

      //--constructor initializes
  this.state = { lat: null, errorMessage: '' };
  }*/


//same as constructor use:-THE BELOW LINE-:
  state = { lat: null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
  
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err =>
      {
       this.setState({ errorMessage: err.message });
    }
    );
  }
 
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      //lat is a prop assigned state--we are taking a property from a state
      //we can take state from component and pass it as prop of a child
      return <SeasonDisplay lat={this.state.lat}/>;
    }

    return <loader message='please accept location request'/>;
  }
}


  ReactDOM.render
  (<App/>,document.querySelector('#root'));