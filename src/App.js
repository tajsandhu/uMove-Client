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
import Signup from './pages/authentication/signup'
import Confirm from './pages/authentication/confirm'
import Personal from './pages/authentication/personal'

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

  componentDidMount = () => {
    this.getAuthStatus()
  }

  printCurrentUser = () => {
    Auth.currentAuthenticatedUser().then((response => {
      console.log(response['username'])
    }))
  }

  getAuthStatus() {
    let answer = null
    Auth.currentAuthenticatedUser().then(response => {
      this.setState({signedIn: true})
    }).catch(e => {
      if (e === 'not authenticated')
        this.setState({signedIn: false})
    })
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
        {!this.state.signedIn &&
          <Redirect to='/login'/>
        }
        {this.state.signedIn &&
          <Redirect to='/main'/>
        }
        <Switch>
          <Route path='/main' component={Main}/>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/confirm' component={Confirm}/>
          <Route path='/personal' component={Personal}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;