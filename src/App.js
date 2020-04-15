import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state={
    selectedButton: '1',

  }



  CircleSelector(props){
    return(
      <>
        <div className="CircleSelector">
          <button 
          className={ props.selectedButton === '1' ? 'selected' : ''} 
          onClick={props.handleClick} 
          id="1" 
          dangerouslySetInnerHTML={{__html: props.selectedButton === '1' ? 'Circle 1 Selected' : 'Select Circle 1'}}></button>
          <button 
          className={ props.selectedButton === '2' ? 'selected' : ''} 
          onClick={props.handleClick} 
          id="2" 
          dangerouslySetInnerHTML={{__html: props.selectedButton === '2' ? 'Circle 2 Selected' : 'Select Circle 2'}}></button>
          <button 
          className={ props.selectedButton === '3' ? 'selected' : ''} 
          onClick={props.handleClick} 
          id="3" 
          dangerouslySetInnerHTML={{__html: props.selectedButton === '3' ? 'Circle 3 Selected' : 'Select Circle 3'}}></button>
          <button 
          className={ props.selectedButton === '4' ? 'selected' : ''} 
          onClick={props.handleClick} id="4" 
          dangerouslySetInnerHTML={{__html: props.selectedButton === '4' ? 'Circle 4 Selected' : 'Select Circle 4'}}></button>
        </div>
      </> 
    )
  }

  Circles(props){
    return(
      <>
      <div className="Circles">
        <div className={ props.selectedButton === '1' ? 'selected' : ''} id='1'>1</div>
        <div className={ props.selectedButton === '2' ? 'selected' : ''} id='2'>2</div>
        <div className={ props.selectedButton === '3' ? 'selected' : ''} id='3'>3</div>
        <div className={ props.selectedButton === '4' ? 'selected' : ''} id='4'>4</div>
      </div>
      </>
    )
  }

  handleClick = e =>{
    this.setState({
      ...this.state,
      selectedButton: e.target.id
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <this.CircleSelector 
            selectedButton={this.state.selectedButton}
            handleClick={this.handleClick}
          />
          <this.Circles 
            selectedButton={this.state.selectedButton}
          />
        </main>
      </div>
    );
  }
}

export default App;
