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
    confirm = async () => {
        let user = null
        try {
            user = await Auth.confirmSignUp(this.state.username, this.state.code)

        } catch(e) {
            window.alert(e.message)
        }
        if (user != null) {
            this.props.history.push('./login')
        }
    }

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