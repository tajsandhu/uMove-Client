import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure(awsconfig)

const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My custom email label',
      key: 'email',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      imgURL: null,
      height: 500,
      width: 500,
    }
  }

  

  selectImage = (event) => {
    if (event != null) {
      this.setState({
        img: event.target.files[0],
        imgURL: URL.createObjectURL(event.target.files[0])
      })
    }
  }

  uploadSelected = () => {
    window.alert(this.state.imgURL)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Please select an image
          </p>
          <img src={this.state.imgURL} style={{maxWidth: 750, maxHeight: 500}}/>
          <form>
            <input type="file" onChange={this.selectImage}/>
          </form>
          <button onClick={this.uploadSelected}>
            Upload
          </button>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);