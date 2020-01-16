import React from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,  
} from 'react-router-dom'

import { Home } from './pages/home'
import { Login } from './pages/login'

Amplify.configure(awsconfig)

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

  printCurrentUser = () => {
    const data = Auth.currentAuthenticatedUser().then((response => {
      console.log(response['username'])
    }))
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
      <div>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;