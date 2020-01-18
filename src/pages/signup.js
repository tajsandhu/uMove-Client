import React from 'react'
import { TextField, Button } from '@material-ui/core'
import '../styles/signup.css'

export default class Signup extends React.Component {
    signUp = () => {
        this.props.history.push('./confirm')
    }
    render() {
        return(
            <div className='Signup-container'>
                <div className='Element-container'>
                    <TextField 
                        className='Input-box' 
                        style={styles.textInput}
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
                    />
                </div>
                <div className='Element-container'>
                    <TextField 
                        className='Input-box' 
                        style={styles.textInput}
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
                    />
                </div>
                <div className='Element-container'>
                    <Button className='Button' style={styles.button}>Sign Up</Button>
                </div>
                <div className='Element-container'>
                    <Button className='Button' style={styles.button}>Cancel</Button>
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
        background: 'white',
        height: 40,
        width: 325,
        borderRadius: 30
    }
}