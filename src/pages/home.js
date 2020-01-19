import React from 'react'
import { Button, Input } from '@material-ui/core'
import { Auth } from 'aws-amplify'
import '../styles/home.css'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            imgURL: null,
            height: 500,
            width: 500,
        }
    }
    
    printCurrentUser = () => {
        const data = Auth.currentAuthenticatedUser().then((response => {
          console.log(response['username'])
        }))
    }
    
    selectImage = (event) => {
        if (event != null) {
            this.setState({
                img: event.target.files[0],
                imgURL: URL.createObjectURL(event.target.files[0])
            })
        }
    }
    
    uploadSelected = () => {
        window.alert(this.state.imgURL)
    }

    render() {
        return (
            <div className='Home-container'>
                <p style={{color: 'white'}}>
                    Please select an image
                </p>
                <img src={this.state.imgURL} style={{maxWidth: 750, maxHeight: 500}}/>
                <input
                    accept="image/*"
                    id="contained-button-file"
                    style={{display: 'none'}}
                    multiple
                    type="file"
                    onChange={this.selectImage}
                />
                <div className='Button'>
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" style={styles.button} component="span">
                            Upload
                        </Button>
                    </label>
                </div>
                <div className='Button'>
                    <Button variant="contained" style={styles.button} onClick={this.printCurrentUser} component="span">
                        Send
                    </Button>
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
        width: 200,
    },
}