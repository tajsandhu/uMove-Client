import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from './home'
import { Tabs, Tab, AppBar } from '@material-ui/core'
import '../../styles/main/main.css'
import Upload from './upload'
import About from './about'

export class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTab: 'Home'
        }
    }
    toHome = () =>{
        this.setState({currentTab: 'Home'})
        this.props.history.push('/main/home')
    }

    toUpload = () =>{
        this.setState({currentTab: 'Upload'})
        this.props.history.push('/main/upload')
    }

    toAbout = () =>{
        this.setState({currentTab: 'About'})
        this.props.history.push('/main/about')
    }

    render() {
    return(
            <div className='Main-container'>
                <Redirect to='/main/home'/>
                <div>
                    <AppBar position='sticky'>
                        <Tabs className='Main-tab' value={this.state.currentTab}>
                            <Tab label='Home' value={'Home'} onClick={this.toHome}/>
                            <Tab label='Upload' value={'Upload'} onClick={this.toUpload}/>
                            <Tab label='About' value={'About'} onClick={this.toAbout}/>
                        </Tabs>
                    </AppBar>
                </div>
                <div className='Main-content-container'>
                    <Route path='/main/home' component={Home} />
                    <Route path='/main/upload' component={Upload} />
                    <Route path='/main/about' component={About}/>
                </div>
            </div>
        )
    }
}