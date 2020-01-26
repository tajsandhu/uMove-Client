import React from 'react'
import { TextField } from '@material-ui/core'


export function TextInput(props) {
    return(
        <TextField
            label={props.label}
            placeholder={props.label}
            onChange={props.function}
            type={props.type}
            inputProps={{
                style: props.style
            }}
            InputProps={{
                style: props.style
            }}
        />
    )
}