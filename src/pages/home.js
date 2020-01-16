import React from 'react'
import { Button, Input } from '@material-ui/core'

export class Home extends React.Component {
    render() {
        return (
            <div className='Home-container'> 
                <input
                    accept="image/*"
                    id="contained-button-file"
                    style={{display: 'none'}}
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Upload
                    </Button>
                </label>
            </div>
        )
    }
}