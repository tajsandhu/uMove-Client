import React from 'react'
import { Button, NativeSelect, InputLabel } from '@material-ui/core'
import { TextInput } from '../../reusable'

import '../../styles/personal.css'

export default class Personal extends React.Component {
    render() {
        return(
            <div className='Personal-info-container'>
                <TextInput
                    id='first-name-text-field'
                    label='First Name'
                    function={() => {}}
                    type='text'
                    style={styles.textInput}
                />
                <TextInput
                    id='last-name-text-field'
                    label='Last Name'
                    function={() => {}}
                    type='text'
                    style={styles.textInput}
                />
                <InputLabel htmlFor='gender-selector'>Gender</InputLabel>
                <NativeSelect id='gender-selector'>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                </NativeSelect>
                <TextInput
                    id='birthdate-selector'
                    label='Birth Date'
                    type='date'
                    style={styles.textInput}
                    defaultValue='1901-01-01'
                />
                <Button style={styles.button}>Complete Sign Up</Button>
                <Button style={styles.button}>Cancel</Button>
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