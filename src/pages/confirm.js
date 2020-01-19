import React from 'react'
import { TextField, Button } from '@material-ui/core'
import '../styles/confirm.css'
import { Auth } from 'aws-amplify'

export default class Confirm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            code: '',
        }
    }
    confirm = async () => {
        let user = null
        try {
            user = await Auth.confirmSignUp(this.state.email, this.state.code)

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
                <div className='Element-container'>
                    <TextField 
                        className='Input-box'
                        type='text'
                        style={styles.textInput}
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
                        type='text'
                        style={styles.textInput}
                        placeholder='Code'
                        onChange={e => this.setState({code: e.target.value})}
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
                    <Button style={styles.button} onClick={this.confirm}>Confirm</Button>
                </div>
                <div className='Element-container'>
                    <Button style={styles.button} onClick={this.cancel}>Cancel</Button>
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
        width: 325,
        height: 40,
        borderRadius: 30
    }
}