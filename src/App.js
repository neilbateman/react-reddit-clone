import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from './components/Grid';
import NavBar from './components/NavBar';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    // eslint-disable-next-line no-console
    //console.log(this.state.currentDay);
    
  }
  render() {
  return (
    <div className="App">
      <NavBar onClick={this.handleClick}/>
      <Grid/>
    </div>
  );
}
}
export default App;
