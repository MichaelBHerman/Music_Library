import React, { Component } from 'react';


class CreateSong extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createSong(this.state)
    }

    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

   
    render() { 
        return ( 
            <div>
                <h3>Add Song</h3>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label> Title: </label>
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    <label> Artist: </label>
                    <input type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                    <label> Album: </label>
                    <input type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                    <label> Release Date: </label>
                    <input type="date" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                    <label> Genre: </label>
                    <input type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                    <button type="submit">Submit New Song</button>
             </form>
            </div>
        );
    }
}
 
export default CreateSong;