import React from 'react'
import { Button, NativeSelect, option, InputLabel } from '@material-ui/core'
import { Link } from 'react-router-dom'
import '../../styles/signup.css'
import { Auth } from 'aws-amplify'
import { TextInput } from '../../reusable'

export default class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            confirm: '',
        }
    }
    toPersonal = async () => {
        
        if (this.state.password === this.state.confirm && this.state.username != '' && this.state.email != ''){ 
            this.props.history.push({pathname: './personal', 
                                        state:{
                                            email: this.state.email,
                                            username: this.state.username,
                                            password: this.state.password 
                                        }})
        }
        else {
            window.alert('Please fill every field')
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
                <TextInput 
                    id='username-text-field'
                    label='Username' 
                    function={e => this.setState({username: e.target.value})} 
                    type='text'
                    style={styles.textInput}
                />
                <TextInput
                    id='email-field'
                    label='Email'
                    function={e => this.setState({email: e.target.value})}
                    type='text'
                    style={styles.textInput}
                />
                <TextInput
                    id='password-field'
                    label='Password'
                    function={e => this.setState({password: e.target.value})}
                    type='text'
                    style={styles.textInput}
                />
                <TextInput
                    id='confirm-password-field'
                    label='Confirm Password'
                    function={e => this.setState({confirm: e.target.value})}
                    type='text'
                    style={styles.textInput}
                />
                <div>
                    <Link to={'./confirm'}>Confirm Code?</Link>
                </div>
                <Button className='Button' style={styles.button} onClick={this.toPersonal}>Sign Up</Button>
                <Button className='Button' style={styles.button} onClick={this.cancel}>Cancel</Button>
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
        marginBottom:5,
    },
    textInput: {
        height: 30,
        width: 325,
        marginBottom:5,
    }
}