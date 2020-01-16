import React from 'react'
import { Auth } from 'aws-amplify'
import { Button, TextField } from '@material-ui/core'
import '../styles/login.css'
import { red } from '@material-ui/core/colors'

export class Login extends React.Component {

    render() {
        return (
            <div className='Login-container'>
                <div className='Input-box'>
                    <TextField 
                        type='text' 
                        placeholder='Email'
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
                <div className='Input-box'>
                    <TextField
                        className='Input-box' 
                        type='text' 
                        placeholder='Password'
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
                <div>
                    <Button >Login</Button>
                </div>
            </div>
        )
    }
}