import React from 'react'
import { Auth } from 'aws-amplify'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'
import { Button, TextField, Link } from '@material-ui/core'
import '../styles/login.css'
import { red } from '@material-ui/core/colors'
import { Home } from '../pages/home'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    signIn = () => {
        Auth.signIn(this.state.username, this.state.password)
        .then(() => this.props.history.push('/home'))
    }
    signUp = () => {
        this.props.history.push('/signup')
    }
    render() {

        return (
            <div className='Login-container'>      
                <div className='Element-container'>
                    <TextField 
                        className='Input-box' 
                        type='text' 
                        placeholder='Username'
                        value={this.state.email}
                        onChange={e => this.setState({username: e.target.value})}
                        style={styles.textInput}
                        InputProps={{
                            disableUnderline: true
                        }}
                        inputProps={{
                            style: styles.textInput
                        }}
                        required={true}
                    />
                </div>
                <div className='Element-container'>
                    <TextField
                        className='Input-box' 
                        type='password' 
                        placeholder='Password'
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})}
                        InputProps={{
                            disableUnderline: true
                        }}
                        inputProps={{
                            style: styles.textInput
                        }}
                        required={true}
                    />
                </div>
                <div className='Element-container'>
                    <Button style={styles.button} onClick={this.signIn}>Login</Button>
                </div>
                <div className='Element-container'>
                    <Button style={styles.button} onClick={this.signUp}>Sign Up</Button>
                </div>
            </div>
        )
    }
}

const styles = {
    button: {
        background: 'linear-gradient(120deg, #076fa3 30%, #4fa870 83%)',
        color: 'white',
        height: 40,
        width: 325,
        borderRadius: 30
    },
    textInput: {
        display: 'flex',
        height: 30,
        width: 325,
        background: 'white',
        borderRadius: 30,
        textAlign: 'center',
    }
}