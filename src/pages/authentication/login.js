import React from 'react'
import { Auth } from 'aws-amplify'
import { Button, TextField } from '@material-ui/core'
import '../../styles/authentication/login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    componentDidMount() {
        let user = Auth.currentAuthenticatedUser()
        console.log(user)
    }

    signIn = async() => {
        let user = null
        try {
            user = await Auth.signIn(this.state.username, this.state.password)
        } catch(e) {
            window.alert(e.message)
        }
        if (user != null)
            this.props.history.push('./main')
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