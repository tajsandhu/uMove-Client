import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Home } from './home'
import { Tabs, Tab, AppBar, Button, Toolbar } from '@material-ui/core'
import '../../styles/main.css'
import Upload from './upload'
import About from './about'
import { Auth } from 'aws-amplify'

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'Home'
        }
    }

    //changes the currentTab state variable and routes to the home screen
    toHome = () =>{
        this.setState({currentTab: 'Home'})
        this.props.history.push('/main/home')
    }

    //changes the currentTab state variable and routes to the Upload screen
    toUpload = () =>{
        this.setState({currentTab: 'Upload'})
        this.props.history.push('/main/upload')
    }

    //changes the currentTab state variable and routes to the About screen
    toAbout = () =>{
        this.setState({currentTab: 'About'})
        this.props.history.push('/main/about')
    }

    //signs out the current authenticated user and routes to the login screen
    logout = () =>{
        Auth.signOut()
        this.props.history.push('/login')
    }

    render() {
        return(
                <div className='Main-container'>
                    <Redirect to='/main/home'/>
                    <div>
                        <AppBar position='sticky'>
                            <Toolbar>
                                <Tabs value={this.state.currentTab}>
                                    <Tab label='Home' value={'Home'} onClick={this.toHome}/>
                                    <Tab label='Upload' value={'Upload'} onClick={this.toUpload}/>
                                    <Tab label='About' value={'About'} onClick={this.toAbout}/>
                                </Tabs>
                                <Button style={{right: 10, position: 'absolute', color: 'white'}} onClick={this.logout}>
                                    Logout
                                </Button>
                            </Toolbar>
                        </AppBar>
                    </div>
                    {/* Container for the home, upload, and about screen */}
                    <div className='Main-content-container'>
                        <Route path='/main/home' component={Home} />
                        <Route path='/main/upload' component={Upload} />
                        <Route path='/main/about' component={About}/>
                    </div>
                </div>
            )
        }
}