import React from 'react';
import axios from 'axios';

 
const DeleteSong = (props) =>{

    const handleClick = (event) => {  
        deleteSong(props.song)
        newSongList()
        
    }

    function newSongList(){
      let deletedSong = props.song
      let songList = props.songs
      for(let i=0; i<songList.length; i++){
        if(songList[i].id === deletedSong){
          songList.splice(i, 1)
        }
      }
      let list = songList
      props.newSongs(list);
    }

    const deleteSong = (song) => {
        axios.delete(`http://127.0.0.1:8000/music/${song}/`)
       }

      return(
        <div>
          <button  className="button-21"onClick={handleClick}>Delete Application</button>
        </div>
      )

}

export default DeleteSong;