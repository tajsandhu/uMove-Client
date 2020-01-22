import React from 'react'
import { Button, Input, AppBar, Tabs, Tab } from '@material-ui/core'
import { Auth } from 'aws-amplify'
import '../../styles/main/home.css'

export default class Home extends React.Component {

    render() {
        return (
            <div className='Home-container'>
                <h1>Home</h1>
            </div>
        )
    }
}