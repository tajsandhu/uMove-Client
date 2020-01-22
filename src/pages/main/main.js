import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './home'
import { Tabs, Tab, AppBar } from '@material-ui/core'
import '../../styles/main/main.css'
import Upload from './upload'
import About from './about'

export class Main extends React.Component {
    render() {
    return(
            <div className='Main-container'>
                <div>
                    <AppBar position='sticky'>
                        <Tabs className='Main-tab'>
                            <Tab label='Home' onClick={()=>this.props.history.push('/main/home')}/>
                            <Tab label='Upload' onClick={()=>this.props.history.push('/main/upload')}/>
                            <Tab label='About' onClick={()=>this.props.history.push('/main/about')}/>
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