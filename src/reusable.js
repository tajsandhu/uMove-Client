import React from 'react'
import { Auth } from 'aws-amplify'
import { TextField, InputLabel } from '@material-ui/core'

//prints the name of the current authenticated user
export function printCurrentUser(){
	//a call is made to cognito to get the current users credentials
	Auth.currentAuthenticatedUser().then((response => {
		//the name of the user is printed
		console.log(response['username'])
	}))
}

//returns a textfield with a label
export function TextInput(props) {
    return(
        <div style={styles.TextContainer}>
            <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
        	<TextField
                id={props.id}
        	    placeholder={props.label}
        	    onChange={props.function}
        	    type={props.type}
        	    inputProps={{
        	        style: props.style,
        	    }}
        	    InputProps={{
        	        style: props.style
        	    }}
        	    InputLabelProps={
        	        props.labelProps
        	    }
				defaultValue={props.default}
        	/>
        </div>
    )
}

const styles = {
    TextContainer: {
        display: 'flex',
        flexDirection: 'column'
    }
}