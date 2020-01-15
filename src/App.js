import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null
    }
  }

  selectImage = (event) => {
    this.setState({img: URL.createObjectURL(event.target.files[0])})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Please select an image
          </p>
          <img src={this.state.img}/>
          <form>
            <input type="file" onChange={this.selectImage}/>
          </form>
        </header>
      </div>
    );
  }
}

