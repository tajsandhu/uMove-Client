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
    //Used to determine if the user is logged in when the page loads up
    this.getAuthStatus()
  }

  //prints the current authenticated users username to the console
  //only used for testing purposes
  printCurrentUser = () => {
    //gets the current users login credentials
    Auth.currentAuthenticatedUser().then((response => {
      //prints the username once a response is recieved
      console.log(response['username'])
    }))
  }

  //determines if the user is logged in
  getAuthStatus() {
    //gets the current authenticated user
    Auth.currentAuthenticatedUser().then(response => {
      //signedIn is set to true if the reponse is recieved
      this.setState({signedIn: true})
    }).catch(e => {
      //if a user is not signed in, an error is thrown
      //and signedIn is set to false
      if (e === 'not authenticated')
        this.setState({signedIn: false})
    })
  }

  render() {
    return (
      <BrowserRouter>
        {/*Determines whether to route to the login
           screen or the main screen depending on the 
           state variable signedIn*/}
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