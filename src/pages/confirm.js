import React from 'react'
import { TextField, Button } from '@material-ui/core'
import '../styles/confirm.css'

export default class Confirm extends React.Component {
    confirm = () => {
        this.props.history.push('./login')
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