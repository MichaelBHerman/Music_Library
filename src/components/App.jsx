import React, {Component} from 'react';
import axios from 'axios';
import DisplaySongs from './DisplaySongs/DisplaySongs';
import CreateSong from './CreateSong/CreateSong';
import TitleBar from './TitleBar/TitleBar';
import './app.css'
import FetchRandomQuote from './Quote';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      songs: [],
      
     }
  }

    componentDidMount = () => {
        this.getAllSongs();
  }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
         songs: response.data
      });
    }

    createSong = async (newSong) => {
    let tempSongs = this.state.songs;
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong)
    tempSongs.push(response)
    console.log(response)
    this.getAllSongs()
      }
    
    removeSong = (deletedSong) =>{
        let tempSongs = this.state.songs
        tempSongs.splice(deletedSong)
        this.setState({
          songs : tempSongs
        })
      }
    newSongs = (list) => {
        this.setState({ 
          songs : list
         })
      }

      // getNumberOfDays(start, end) {
      // let firstTime = true;
      // while true
      // let counter = 0;
      // let d = new Date();
      // let t = new Date();
      // let day = d.getDate()
      // let initialDate = t.getDate()
      //   if(day)
     

render() { 
    return(
            <div>
                <TitleBar />
                <FetchRandomQuote/>
                <CreateSong createSong={this.createSong} />
                <DisplaySongs songs={this.state.songs} removeSong={this.removeSong}/>
                
                
              
            </div>
           
            
    );
  }
}
 
export default App;