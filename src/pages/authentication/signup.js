import React from 'react'
import { Button } from '@material-ui/core'
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
                <TextInput 
                    label='Username' 
                    function={e => this.setState({username: e.target.value})} 
                    type='text'
                    style={styles.textInput}
                />
                <TextInput
                    label='Email'
                    function={e => this.setState({email: e.target.value})}
                    type='text'
                    style={styles.textInput}
                />
                <TextInput
                    label='Password'
                    function={e => this.setState({password: e.target.value})}
                    type='password'
                    style={styles.textInput}
                />
                <div>
                    <Link to={'./confirm'}>Confirm Code?</Link>
                </div>
                <Button className='Button' style={styles.button} onClick={this.signUp}>Sign Up</Button>
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