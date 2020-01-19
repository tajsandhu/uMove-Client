import React from 'react'
import { TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import '../styles/signup.css'
import { Auth } from 'aws-amplify'

export default class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
        }
    }
    signUp = async () => {
        
        const thisemail = this.state.email
        let user = null
        try {
            user = await Auth.signUp({
                username: this.state.username,
                password: this.state.password,
                attributes: {
                    email: thisemail
                }
            })

        } catch(e) {
            window.alert(e.message)
        }
        if (user != null) {
            this.props.history.push('./confirm')
        }
    }

    confirm = () => {
        this.props.history.push('./confirm')
    }

    cancel = () => {
        this.props.history.push('./login')
    }
    render() {
        return(
            <div className='Signup-container'>
                <div className='Element-container'>
                    <TextField 
                        className='Input-box' 
                        style={styles.textInput}
                        type='text'
                        placeholder='Username'
                        onChange={e => this.setState({username: e.target.value})}
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
                        placeholder='Email'
                        onChange={e => this.setState({email: e.target.value})}
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
                        type='password'
                        placeholder='Password'
                        onChange={e => this.setState({password: e.target.value})}
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
                <div>
                    <Link to={'./confirm'} style={{color: 'white'}}>Confirm Code?</Link>
                </div>
                <div className='Element-container'>
                    <Button className='Button' style={styles.button} onClick={this.signUp}>Sign Up</Button>
                </div>
                <div className='Element-container'>
                    <Button className='Button' style={styles.button} onClick={this.cancel}>Cancel</Button>
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