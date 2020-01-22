import React from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { 
  BrowserRouter,
  Route,
  Redirect, 
  Switch
} from 'react-router-dom'

import {Main} from './pages/main/main'
import Home from './pages/main/home'
import Login from './pages/authentication/login'
import Signup from './pages/authentication/signup';
import Confirm from './pages/authentication/confirm';

Amplify.configure(awsconfig)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      imgURL: null,
      height: 500,
      width: 500,
      show: 'true'
    }
  }

  getShow() {
    return this.state.show
  }

  selectImage = (event) => {
    if (event != null) {
      this.setState({
        img: event.target.files[0],
        imgURL: URL.createObjectURL(event.target.files[0]),
        show: false
      })
    }
  }

  uploadSelected = () => {
    window.alert(this.state.imgURL)
  }

  render() {
    const {show} = this.state
    return (
      <BrowserRouter>
        <div>
          <Route path='/main' component={Main}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/confirm' component={Confirm}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;