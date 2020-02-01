import React from 'react'
import { Auth } from 'aws-amplify'
import { Button } from '@material-ui/core'
import '../../styles/login.css'
import { TextInput } from '../../reusable'

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
                <div className='Element-container' style={{backgroundColor: 'white'}}>
                    <TextInput
                        label='Username'
                        function={e => this.setState({username: e.target.value})}
                        style={styles.textInput}
                        type='text'
                    />
                    <TextInput
                        label='Password'
                        function={e => this.setState({password: e.target.value})}
                        style={styles.textInput}
                        type='password'
                    />
                    <Button style={styles.button} color={'primary'} onClick={this.signIn}>Login</Button>
                    <Button style={styles.button} color={'primary'} onClick={this.signUp}>Sign Up</Button>
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
        marginBottom: 5
    },
    textInput: {
        height: 30,
        width: 325,
        marginBottom:5,
    }
}