import React from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { 
  BrowserRouter,
  Route,
  Redirect, 
  Switch
} from 'react-router-dom'

import {Main} from './pages/main/main'
import Error from './pages/main/error'
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
      signedIn: false,
    }
  }

  printCurrentUser = () => {
    Auth.currentAuthenticatedUser().then((response => {
      console.log(response['username'])
    }))
  }

  componentDidMount() {
    this.printCurrentUser()
  }

  getAuthStatus() {
    try {
      Auth.currentAuthenticatedUser()
    } catch (error) {
      return false
    }
    return true
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
    return (
      <BrowserRouter>
        {!this.getAuthStatus() &&
          <Redirect to='/login'/>
        }
        <Switch>
          <Route path='/main' component={Main}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/confirm' component={Confirm}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;