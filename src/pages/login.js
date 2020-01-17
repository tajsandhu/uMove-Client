import React from 'react'
import { Auth } from 'aws-amplify'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'
import { Button, TextField, Link } from '@material-ui/core'
import '../styles/login.css'
import { red } from '@material-ui/core/colors'
import { Home } from '../pages/home'

export default class Login extends React.Component {
    signIn = () => {
        this.props.history.push('/home')
    }
    render() {

        return (
            <div className='Login-container'>      
                <div className='Element-container'>
                    <TextField 
                        className='Input-box' 
                        type='text' 
                        placeholder='Email'
                        style={styles.textInput}
                        InputProps={{
                            disableUnderline: true
                        }}
                        inputProps={{
                            style: {
                                textAlign: 'center'
                            }
                        }}
                        required={true}
                    />
                </div>
                <div className='Element-container'>
                    <TextField
                        className='Input-box' 
                        type='text' 
                        placeholder='Password'
                        style={styles.textInput}
                        InputProps={{
                            disableUnderline: true
                        }}
                        inputProps={{
                            style: {
                                textAlign: 'center'
                            }
                        }}
                        required={true}
                    />
                </div>
                <div className='Element-container'>
                    <Button style={styles.button} onClick={this.signIn}>Login</Button>
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
        height: 40,
        width: 325,
        background: 'white',
        borderRadius: 30
    }
}