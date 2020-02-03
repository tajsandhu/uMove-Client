import React from 'react'
import { Button } from '@material-ui/core'
import '../../styles/confirm.css'
import { Auth } from 'aws-amplify'
import { TextInput } from '../../reusable'

export default class Confirm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            code: '',
        }
    }

    //confirms the users newly created account
    confirm = async () => {
        let user = null
        //attempts to confirm the users code matches their username
        //alerts the user if their is an error
        try {
            user = await Auth.confirmSignUp(this.state.username, this.state.code)

        } catch(e) {
            window.alert(e.message)
        }
        //routes the user to the login screen upon success
        if (user != null) {
            this.props.history.push('./login')
        }
    }

    //routes the user to the signup screen
    cancel = () => {
        this.props.history.push('./signup')
    }

    render() {
        return(
            <div className='Confirm-container'>
                <TextInput
                    label='Username'
                    function={e => this.setState({username: e.target.value})}
                    type='text'
                    style={styles.textInput}
                />
                <TextInput
                    label='Code'
                    function={e => this.setState({code: e.target.value})}
                    type='text'
                    style={styles.textInput}
                />
                <Button style={styles.button} onClick={this.confirm}>Confirm</Button>
                <Button style={styles.button} onClick={this.cancel}>Cancel</Button>
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
        width: 325,
        height: 40,
        marginBottom: 5
    }
}