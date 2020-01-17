import React from 'react'
import { Button, Input } from '@material-ui/core'
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
        /*const data = Auth.currentAuthenticatedUser().then((response => {
          console.log(response['username'])
        }))*/
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
                <p>
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
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
                <Button variant="contained" color="primary" component="span">
                    Send
                </Button>
            </div>
        )
    }
}