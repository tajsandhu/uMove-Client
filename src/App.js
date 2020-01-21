import React from 'react';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { 
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Redirect,  
} from 'react-router-dom'
import { Button, Input, AppBar, Tabs, Tab } from '@material-ui/core'

import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup';
import Confirm from './pages/confirm';

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
        { show &&
        (<div>
            <AppBar>
                <Tabs>
                    <Tab label='Home'/>
                    <Tab label='About'/>
                    <Tab label='Upload'/>
                </Tabs>
            </AppBar>
        </div>)}
        <div>
          <Redirect to='/login' />
        </div>
        <Route path='/home'>
          <Home option={this.getShow.bind(this)}/>
        </Route>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/confirm' component={Confirm}/>
      </BrowserRouter>
    );
  }
}

export default App;