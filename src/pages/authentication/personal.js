import React from 'react'
import { Button, NativeSelect, InputLabel } from '@material-ui/core'
import { TextInput } from '../../reusable'
import { Auth } from 'aws-amplify'

import '../../styles/personal.css'

export default class Personal extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            given_name: '',
            family_name: '',
            birthdate: '',
            gender: ''
        }
    }

    //signs the user up with provided credentials
    signUp = async () => {
        const email = this.props.location.state.email
        const givenName = this.state.given_name
        const familyName = this.state.family_name
        const birthDate = this.state.birthdate
        const gender = this.state.gender
        let user = null
        //attempts to sign in user with provided credentials
        //an error is alerted if it fails
        try {
            user = await Auth.signUp({
                username: this.props.location.state.username,
                password: this.props.location.state.password,
                attributes: {
                    email: email,
                    given_name: givenName,
                    family_name: familyName,
                    birthdate: birthDate,
                    gender: gender
                }
            })

        } catch(e) {
            window.alert(e.message)
        }
        //routes the user to the confirmation code screen
        if (user != null) {
            this.props.history.push('./confirm')
        }
    }

    //changes the gender state variable
    selectGender = name => e => {
        this.setState({[name]: e.target.value})
    }

    render() {
        return(
            <div className='Personal-info-container'>
                <TextInput
                    id='first-name-text-field'
                    label='First Name'
                    function={e => this.setState({given_name: e.target.value})}
                    type='text'
                    style={styles.textInput}
                />
                <TextInput
                    id='last-name-text-field'
                    label='Last Name'
                    function={e => this.setState({family_name: e.target.value})}
                    type='text'
                    style={styles.textInput}
                />
                <InputLabel htmlFor='gender-selector'>Gender</InputLabel>
                <NativeSelect id='gender-selector' value={this.state.gender} onChange={this.selectGender('gender')}>
                    <option value=''/>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                </NativeSelect>
                <TextInput
                    id='birthdate-selector'
                    label='Birth Date'
                    function={e => this.setState({birthdate: e.target.value})}
                    type='date'
                    style={styles.textInput}
                    defaultValue='1901-01-01'
                />
                <Button style={styles.button} onClick={this.signUp}>Complete Sign Up</Button>
                <Button style={styles.button}>Cancel</Button>
            </div>
        )
    }
}

//inline style
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