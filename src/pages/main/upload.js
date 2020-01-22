import React from 'react'
import { Button } from '@material-ui/core'
import '../../styles/main/upload.css'

export default class Upload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img: null,
            imgURL: null,
            height: 500,
            width: 500,
        }
    }
    /*
    printCurrentUser = () => {
        const data = Auth.currentAuthenticatedUser().then((response => {
          console.log(response['username'])
        }))
    }*/
    
    selectImage = (event) => {
        if (event != null) {
            this.setState({
                img: event.target.files[0],
                imgURL: URL.createObjectURL(event.target.files[0])
            })
        }
    }
    
    uploadSelected = () => {
        console.log(this.props.getShow)
    }

    render() {
        return (
            <div className='Upload-container'>
                <p style={{color: 'white'}}>
                    Please select an image
                </p>
                <img src={this.state.imgURL} style={{maxWidth: 750, maxHeight: 500}} alt='meaningful text'/>
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
                <a href={this.state.imgURL} download>
                    <Button variant="contained" style={styles.button} component="span">
                        download
                    </Button>
                </a>
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
    tab: {
        display: 'flex',
        flexDirection: 'row'
    }
}