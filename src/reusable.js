import React from 'react'
import { TextField, InputLabel } from '@material-ui/core'


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
        	        style: props.style
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